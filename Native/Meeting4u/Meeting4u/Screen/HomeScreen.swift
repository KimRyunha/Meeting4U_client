//
//  HomeScreen.swift
//  Meeting4u
//
//  Created by 유정주 on 2021/01/13.
//  Copyright © 2021 Jeong. All rights reserved.
//

import SwiftUI

struct HomeScreen: View {
    var body: some View {
        VStack(alignment: .leading) {
            HStack {
                Text("유정주 님")
                    .foregroundColor(Color.black)
                    .font(.system(size: 40))
                    .fontWeight(.bold)
                    .padding(.leading, 25)
                    .padding(.top, 60)
            }
            
            Rectangle().frame(height:2).foregroundColor(.white)
            
            HStack {
                Spacer()
                NavigationLink(destination: CreateMtScreen()) {
                    VStack {
                        Image(systemName: "heart.circle.fill")
                            .resizable()
                            .frame(width:35, height: 35)
                            .foregroundColor(Color.red)
                        
                        Text("미팅 생성").foregroundColor(Color.black)
                    }
                }
                
                Spacer()
                Spacer()

                VStack {
                    Image(systemName: "magnifyingglass.circle")
                        .resizable()
                        .frame(width:35, height: 35)
                        .foregroundColor(Color.black)
                    
                    Text("미팅 검색")
                }
                
                Spacer()
                Spacer()

                VStack {
                    Image(systemName: "hammer")
                        .resizable()
                        .frame(width:35, height: 35)
                        .foregroundColor(Color.black)
                    
                    Text("설정")
                }

                Spacer()
            }
            .padding(.vertical, 5)
            .background(Color.white)
            
            Rectangle().frame(height:2).foregroundColor(.white)
            
            ScrollView {
                VStack {
                    MtCard()
                    MtCard()
                    MtCard()
                    MtCard()
                    MtCard()
                    MtCard()
                    MtCard()
                    MtCard()
                }.padding()
            }
            
        }
        .background(Color("main_color"))
        .navigationBarBackButtonHidden(true)
        .edgesIgnoringSafeArea(.all)
    }
    
}

struct HomeScreen_Previews: PreviewProvider {
    static var previews: some View {
        HomeScreen()
    }
    
}
