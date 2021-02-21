//
//  LoginScreen.swift
//  Meeting4u
//
//  Created by 유정주 on 2021/01/11.
//  Copyright © 2021 Jeong. All rights reserved.
//

import SwiftUI

struct LoginScreen: View {
    @State private var apiString: String = "http://101.101.216.107:12030/api/sign-in"
    @State var selection: Int? = nil
    
    //Input
    @State var password: String = ""
    @State var userId: String = ""
    //자동로그인 on/off
    @State private var isOn: Bool = true
    
    //Response
    @State var parsedResponse: String = ""
    @State var jwtToken: String = ""
    //로그인 성공 여부
    @State private var loginFailed: Bool = false
    @State private var textFieldEmpty: Bool = false
    
    func loginTry() {
        if userId == "" || password == "" {
            self.textFieldEmpty.toggle()
        } else {
            self.selection = 1
            return
                
            postSingIn()
        }
    }
    
    func postSingIn() {
        let userId = self.userId
        let password = self.password
        
        let param = "{\"userId\":\"\(userId)\",\"password\":\"\(password)\"}"
        let paramData = param.data(using: .utf8)
        
        let url = URL(string: apiString)
        var request = URLRequest(url: url!)
        request.httpMethod = "POST"
        request.httpBody = paramData
        
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        
        print("Request: \(request)")
        
        let task = URLSession.shared.dataTask(with: request) { (data, response, error) in
                    // 서버가 응답 없거나 통신이 실패했을때
                    if let e = error {
                        self.loginFailed.toggle()
                        NSLog("An error has occerred: \(e.localizedDescription)")
                        return
                    }
                    // 응답이 있을때 응답 처리 로직
                    // (1) 메인 스레드에서 비동기로 처리되도록 한다
                    DispatchQueue.main.async() {
                        do {
                            let object = try JSONSerialization.jsonObject(with: data!, options: []) as? NSDictionary
                            guard let jsonObject = object else { return }
                            
                            // (2) JSON 결과값을 추출한다.
//                            let result = jsonObject["loginResult"] as? String
                            let result = "false"
                            let jwtToken = jsonObject["jwtToken"] as? String
                           
                            // (3) 결과가 성공일 때에만 텍스트 뷰에 출력한다.
                            if result == "true" {
                                self.parsedResponse = "요청결과: \(result)" + "\n"
                                    + "Token : \(jwtToken!)" + "\n"
                                    
                                self.selection = 0
                            } else {
                                self.loginFailed.toggle()
                                self.parsedResponse = "로그인 실패"
                            }
                        } catch let e as NSError {
                            self.loginFailed.toggle()
                            print("An error has occured while parsing JSON Obejt : \(e.localizedDescription)")
                        }
                    }
                }
        //Post 실행
        task.resume()
    }
    
    var body: some View {
        NavigationView {
            VStack(alignment: .leading) {
                Text("미팅4U,\n지금 어디야?")
                    .foregroundColor(Color.black)
                    .font(.system(size: 40))
                    .fontWeight(.bold)
                    .padding(.top, 100)
                    .padding(.leading, 10)
                
                Spacer()
                
                VStack(alignment: .trailing) {
                    HStack(alignment: /*@START_MENU_TOKEN@*/.center/*@END_MENU_TOKEN@*/) {
                        Text("이메일")
                            .foregroundColor(Color.black)
                            .fontWeight(.bold)
                            .frame(width:80, alignment: .leading)
                                                
                        TextField("", text: $userId)
                            .textFieldStyle(RoundedBorderTextFieldStyle())
                            .keyboardType(.emailAddress)
                            .frame(width: 250)
                    } // HStack
                        .padding(.horizontal, 20)
                        .padding(.top, 30)
                        .background(Color.white)
                    
                    HStack(alignment: /*@START_MENU_TOKEN@*/.center/*@END_MENU_TOKEN@*/) {
                        Text("비밀번호")
                            .foregroundColor(Color.black)
                            .fontWeight(.bold)
                            .frame(width:80, alignment: .leading)
                                                
                        SecureField("", text: $password)
                            .textFieldStyle(RoundedBorderTextFieldStyle())
                            .frame(width: 250)
                    } // HStack
                        .padding(.horizontal,20)
                        .padding(.bottom, 30)
                        .background(Color.white)
                } //VStack
                .background(Color.white)
                .cornerRadius(20)
                
                HStack(alignment: .center) {
                    Spacer()
                    
                    Toggle(isOn: $isOn) {
                        Text("자동 로그인")
                    } .frame(width:140)
                        .padding(.trailing, 30)
                    
                    Text("계정 찾기")
                        .padding(.horizontal, 10)
                        .foregroundColor(Color.blue)
                    
                    NavigationLink(destination: SignupScreen()) {
                        Text("회원가입")
                            .padding(.horizontal, 10)
                            .foregroundColor(Color.blue)
                    }
                    
                    Spacer()
                }

                Spacer()
                Spacer()
                Spacer()
                
                HStack {
                    Spacer()
                    NavigationLink(destination: HomeScreen(), tag: 1, selection: $selection) {
                        Button(action: loginTry, label: {
                            Text("로그인")
                                .frame(width: 280, height: 20, alignment: .center)
                                .font(.system(size: 20))
                                .padding(15)
                                .background(Color("dark_color"))
                                .foregroundColor(Color.white)
                                .cornerRadius(10)
                        })
                        .alert(isPresented: $loginFailed) {
                            Alert(title: Text("로그인 실패"), message: Text(self.parsedResponse),
                                  dismissButton: .default(Text("확인")))
                        }
                        .alert(isPresented: $textFieldEmpty) {
                            Alert(title: Text("로그인 실패"), message: Text("이메일/비밀번호를 모두 채워주세요."),
                                  dismissButton: .default(Text("확인")))
                        }
                        
                    }
                    
                    Spacer()
                }.padding(.bottom, 50)
            } //Out VStack
            .padding(.horizontal, 30)
            .background(Color("main_color"))
            .edgesIgnoringSafeArea(.all)
            .onTapGesture {
                endTextEditing()
            }
        } //NavigationView
    }
}

struct LoginScreen_Previews: PreviewProvider {
    static var previews: some View {
        LoginScreen()
    }
}
