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
                    .frame(height:100)
                
                VStack {
                    HStack {
                        Text("아이디")
                            .foregroundColor(Color.black)
                            .fontWeight(.bold)
                        
                        Spacer().frame(width: 30)
                        
                        TextField("", text: $id)
                            .textFieldStyle(RoundedBorderTextFieldStyle())
                    } // HStack
                        .padding(.horizontal, 50)
                        .padding(.top, 30)
                        .background(Color.white)
                    
                    HStack {
                        Text("비밀번호")
                            .foregroundColor(Color.black)
                            .fontWeight(.bold)
                        
                        Spacer().frame(width: 17)
                        
                        SecureField("", text: $pw)
                            .textFieldStyle(RoundedBorderTextFieldStyle())

                    } // HStack
                        .padding(.horizontal,50)
                        .padding(.bottom, 30)
                        .background(Color.white)
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
                    
                    NavigationLink(destination: Text("회원가입")) {
                        Text("회원가입")
                            .frame(width: 80, height: 10, alignment: .center)
                            .font(.system(size: 20))
                            .padding(15)
                            .background(Color.gray)
                            .foregroundColor(Color.white)
                            .cornerRadius(10)
                    }
                    
                    Spacer()
                }

                Spacer()
            } //Out VStack
            .background(Color("main_color"))
            .edgesIgnoringSafeArea(.all)
            
            
        } //NavigationView
            
    }
}
