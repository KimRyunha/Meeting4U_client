//
//  LoginScreen.swift
//  Meeting4u
//
//  Created by 유정주 on 2021/01/11.
//  Copyright © 2021 Jeong. All rights reserved.
//

import SwiftUI

struct LoginScreen: View {
    @State var id: String = ""
    @State var pw: String = ""
    @State var pw_ck: String = ""
    @State var name: String = ""
    @State var homeAddress: String = ""
    @State var email: String = ""
    @State var phoneNumber: String = ""

    @State private var isSignup: Bool = false
    @State private var isSignuping: Bool = false
    
    var body: some View {
        NavigationView {
            VStack(alignment: .leading) {
                Text("미팅4U,\n지금 어디야?")
                    .foregroundColor(Color.black)
                    .font(.system(size: 40))
                    .fontWeight(.bold)
                    .padding(.top, 100)
                    .padding(.leading, 20)
                
                Spacer()
                
                VStack {
                    HStack {
                        Text("아이디")
                            .foregroundColor(Color.black)
                            .fontWeight(.bold)
                        
                        Spacer()
                        
                        TextField("", text: $id)
                            .textFieldStyle(RoundedBorderTextFieldStyle())
                            .frame(width: 180)
                    } // HStack
                        .padding(.horizontal, 20)
                        .padding(.top, 30)
                        .background(Color.white)
                    
                    HStack {
                        Text("비밀번호")
                            .foregroundColor(Color.black)
                            .fontWeight(.bold)
                        
                        Spacer()
                        
                        SecureField("", text: $pw)
                            .textFieldStyle(RoundedBorderTextFieldStyle())
                            .frame(width: 180)
                    } // HStack
                        .padding(.horizontal,20)
                        .padding(.bottom, self.isSignup ? 0 : 30)
                        .background(Color.white)
                    
                    if self.isSignup {
                        HStack {
                            Text("비밀번호 확인")
                                .foregroundColor(Color.black)
                                .fontWeight(.bold)
                            
                            Spacer()
                            
                            SecureField("", text: $pw_ck)
                                .textFieldStyle(RoundedBorderTextFieldStyle())
                                .frame(width: 180)

                        } // HStack
                            .padding(.horizontal,20)
                            .background(Color.white)
                        
                        HStack {
                            Text("이름")
                                .foregroundColor(Color.black)
                                .fontWeight(.bold)
                            
                            Spacer()
                            
                            TextField("", text: $name)
                                .textFieldStyle(RoundedBorderTextFieldStyle())
                                .frame(width: 180)

                        } // HStack
                            .padding(.horizontal,20)
                            .background(Color.white)
                        
                        HStack {
                            Text("이메일")
                                .foregroundColor(Color.black)
                                .fontWeight(.bold)
                            
                            Spacer()
                            
                            TextField("", text: $email)
                                .textFieldStyle(RoundedBorderTextFieldStyle())
                                .keyboardType(.emailAddress)
                                .frame(width: 180)

                        } // HStack
                            .padding(.horizontal,20)
                            .background(Color.white)
                        
                        HStack {
                            Text("전화번호")
                                .foregroundColor(Color.black)
                                .fontWeight(.bold)
                            
                            Spacer()
                            
                            TextField("", text: $phoneNumber)
                                .textFieldStyle(RoundedBorderTextFieldStyle())
                                .keyboardType(.numberPad)
                                .frame(width: 180)

                        } // HStack
                            .padding(.horizontal,20)
                            .background(Color.white)
                        
                        HStack {
                            Text("주소")
                                .foregroundColor(Color.black)
                                .fontWeight(.bold)
                            
                            Spacer()
                            
                            SecureField("", text: $homeAddress)
                                .textFieldStyle(RoundedBorderTextFieldStyle())
                                .frame(width: 180)
                        } // HStack
                            .padding(.horizontal,20)
                            .padding(.bottom, 30)
                            .background(Color.white)
                    }
                } //VStack
                    .background(Color.white)
                    .cornerRadius(20)
                    .padding(20)
                
                HStack(alignment: .center) {
                    Spacer()
                    NavigationLink(destination: Text("로그인")) {
                        Text("로그인")
                            .frame(width: 80, height: 10, alignment: .center)
                            .font(.system(size: 20))
                            .padding(15)
                            .background(Color("dark_color"))
                            .foregroundColor(Color.white)
                            .cornerRadius(10)
                    }
                    
                    Button(action: {
                        withAnimation {
                            self.isSignup.toggle()
                        }
                    }) {
                        Text(self.isSignup ? "완료" : "회원가입")
                        .frame(width: 80, height: 10, alignment: .center)
                        .font(.system(size: 20))
                        .padding(15)
                        .background(self.isSignup ? Color.blue : Color.gray)
                        .foregroundColor(Color.white)
                        .cornerRadius(10)
                    }
                    
                    Spacer()
                }

                Spacer()
                Spacer()
            } //Out VStack
            .background(Color("main_color"))
            .edgesIgnoringSafeArea(.all)
            
            
        } //NavigationView
            
    }
}

struct LoginScreen_Previews: PreviewProvider {
    static var previews: some View {
        LoginScreen()
    }
}
