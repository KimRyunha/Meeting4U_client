//
//  LoginScreen.swift
//  Meeting4u
//
//  Created by 유정주 on 2021/01/11.
//  Copyright © 2021 Jeong. All rights reserved.
//

import SwiftUI

struct LoginScreen: View {
    @State var pw: String = ""
    @State var email: String = ""
    @State private var isOn: Bool = true
    
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
                
                VStack(alignment: .trailing) {
                    HStack {
                        Text("이메일")
                            .foregroundColor(Color.black)
                            .fontWeight(.bold)
                            .frame(width:80, alignment: .leading)
                        
                        Spacer()
                        
                        TextField("", text: $email)
                            .textFieldStyle(RoundedBorderTextFieldStyle())
                            .frame(width: 250)
                    } // HStack
                        .padding(.horizontal, 20)
                        .padding(.top, 30)
                        .background(Color.white)
                    
                    HStack {
                        Text("비밀번호")
                            .foregroundColor(Color.black)
                            .fontWeight(.bold)
                            .frame(width:80, alignment: .leading)
                        
                        Spacer()
                        
                        SecureField("", text: $pw)
                            .textFieldStyle(RoundedBorderTextFieldStyle())
                            .frame(width: 250)
                    } // HStack
                        .padding(.horizontal,20)
                        .padding(.bottom, 30)
                        .background(Color.white)
                    
                } //VStack
                    .background(Color.white)
                    .cornerRadius(20)
                    .padding(20)
                
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
                    NavigationLink(destination: HomeScreen()) {
                        Text("로그인")
                            .frame(width: 280, height: 20, alignment: .center)
                            .font(.system(size: 20))
                            .padding(15)
                            .background(Color("dark_color"))
                            .foregroundColor(Color.white)
                            .cornerRadius(10)
                    }
                    Spacer()
                }.padding(.bottom, 50)
                
            } //Out VStack
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
