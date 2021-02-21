//
//  LoginScreen.swift
//  Meeting4u
//
//  Created by 유정주 on 2021/01/11.
//  Copyright © 2021 Jeong. All rights reserved.
//

import SwiftUI

struct SignupScreen: View {
    @Environment(\.presentationMode) var mode: Binding<PresentationMode>
    @GestureState private var dragOffset = CGSize.zero

    @State var id: String = ""
    @State var pw: String = ""
    @State var pw_ck: String = ""
    @State var name: String = ""
    @State var homeAddress: String = ""
    @State var email: String = ""
    @State var phoneNumber: String = ""
    
    var body: some View {
        NavigationView {
            VStack(alignment: .leading) {
                Text("회원가입")
                    .foregroundColor(Color.black)
                    .font(.system(size: 40))
                    .fontWeight(.bold)
                    .padding(.top, 80)
                    .padding(.leading, 20)
                
                Spacer().frame(height:10)
                    .background(Color.black)
                    .foregroundColor(Color.black)
                
                Spacer()
                
                VStack {
                    HStack {
                        Text("이메일")
                            .foregroundColor(Color.black)
                            .fontWeight(.bold)
                        
                        Spacer()
                        
                        TextField("", text: $email)
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
                        .background(Color.white)
                    
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
                            
                } //VStack
                    .background(Color.white)
                    .cornerRadius(20)
                    .padding(20)
                
                
                HStack(alignment: .center) {
                    Spacer()
                    
                    Button(action: {
                        self.mode.wrappedValue.dismiss()
                    }, label: {
                            Text("완료")
                                .frame(width: 80, height: 10, alignment: .center)
                                .font(.system(size: 20))
                                .padding(15)
                                .background(Color("dark_color"))
                                .foregroundColor(Color.white)
                                .cornerRadius(10)
                        
                    })
                    
                    Spacer()
                }
                
                Spacer()
                Spacer()
                Spacer()
            } //Out VStack
            .background(Color("main_color"))
            .edgesIgnoringSafeArea(.all)
            
        } //NavigationView
        .navigationBarBackButtonHidden(true)
        .onTapGesture {
            endTextEditing()
        }
        .gesture(DragGesture().updating($dragOffset, body: { (value, state, transaction) in
            if(value.startLocation.x < 20 && value.translation.width > 100) {
                self.mode.wrappedValue.dismiss()
            }
        }))
        
    }
}

struct SignupScreen_Previews: PreviewProvider {
    static var previews: some View {
        SignupScreen()
    }
}
