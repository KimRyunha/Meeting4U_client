//
//  LoginScreen.swift
//  Meeting4u
//
//  Created by 유정주 on 2021/01/11.
//  Copyright © 2021 Jeong. All rights reserved.
//

import SwiftUI

struct CreateMtScreen: View {
    @Environment(\.presentationMode) var presentationMode: Binding<PresentationMode>
    @GestureState private var dragOffset = CGSize.zero
    
    @State var name: String = ""
    @State var place: String = ""
    @State var date: String = ""
    @State var time: String = ""
    
    var body: some View {
        NavigationView {
            VStack(alignment: .leading) {
                Text("미팅 생성")
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
                        Text("미팅 이름")
                            .foregroundColor(Color.black)
                            .fontWeight(.bold)
                        
                        Spacer()
                        
                        TextField("", text: $name)
                            .textFieldStyle(RoundedBorderTextFieldStyle())
                            .frame(width: 180)
                    } // HStack
                        .padding(.horizontal, 20)
                        .padding(.top, 30)
                        .background(Color.white)
                    
                    HStack {
                        Text("도착 장소")
                            .foregroundColor(Color.black)
                            .fontWeight(.bold)
                        
                        Spacer()
                        
                        TextField("", text: $place)
                            .textFieldStyle(RoundedBorderTextFieldStyle())
                            .frame(width: 180)
                    } // HStack
                        .padding(.horizontal,20)
                        .background(Color.white)
                    
                    HStack {
                        Text("날짜")
                            .foregroundColor(Color.black)
                            .fontWeight(.bold)
                        
                        Spacer()
                        
                        TextField("", text: $date)
                            .textFieldStyle(RoundedBorderTextFieldStyle())
                            .frame(width: 180)
                    } // HStack
                        .padding(.horizontal, 20)
                        .background(Color.white)
                    
                    HStack {
                        Text("시간")
                            .foregroundColor(Color.black)
                            .fontWeight(.bold)
                        
                        Spacer()
                        
                        TextField("", text: $time)
                            .textFieldStyle(RoundedBorderTextFieldStyle())
                            .frame(width: 180)
                        
                    } // HStack
                        .padding(.horizontal, 20)
                        .padding(.bottom, 30)
                        .background(Color.white)
                            
                } //VStack
                    .background(Color.white)
                    .cornerRadius(20)
                    .padding(20)
                
                
                HStack(alignment: .center) {
                    Spacer()
                    NavigationLink(destination: DetailMtScreen()) {
                        Text("완료")
                            .frame(width: 180, height: 10, alignment: .center)
                            .font(.system(size: 20))
                            .padding(15)
                            .background(Color("dark_color"))
                            .foregroundColor(Color.white)
                            .cornerRadius(10)
                    }
                    
                    Spacer()
                }
                
                Spacer()
                Spacer()
                Spacer()
            } //Out VStack
            .background(Color("main_color"))
            .edgesIgnoringSafeArea(.all)
            .navigationBarBackButtonHidden(true)
        } //NavigationView
        .navigationBarBackButtonHidden(true)
        .onTapGesture {
            endTextEditing()
        }
        .gesture(DragGesture().updating($dragOffset, body: { (value, state, transaction) in
            if(value.startLocation.x < 20 && value.translation.width > 100) {
                self.presentationMode.wrappedValue.dismiss()
            }
        }))
            
    }
}

struct CreateMtScreen_Previews: PreviewProvider {
    static var previews: some View {
        CreateMtScreen()
    }
}
