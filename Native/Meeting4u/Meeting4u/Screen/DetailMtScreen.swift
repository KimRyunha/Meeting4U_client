//
//  HomeScreen.swift
//  Meeting4u
//
//  Created by 유정주 on 2021/01/13.
//  Copyright © 2021 Jeong. All rights reserved.
//

import SwiftUI

struct DetailMtScreen: View {
    @State var live:Bool = false
    @Environment(\.presentationMode) var mode: Binding<PresentationMode>
    @GestureState private var dragOffset = CGSize.zero
    
    var body: some View {
        VStack(alignment: .leading) {
            VStack(alignment: .leading) {
                HStack {
                    Text("완식의 매직쇼")
                        .foregroundColor(Color.black)
                        .font(.system(size: 28))
                        .fontWeight(.bold)
                        .padding(.leading, 25)
                        .lineLimit(1)
                        .truncationMode(.tail)
                    
                    Text("Invite Code")
                        .foregroundColor(.secondary)
                        .font(.system(size: 18))
                        .baselineOffset(-10)
                }
                .padding(.top, 60)
                
                HStack {
                    Text("2021년 01월 31일")
                        .foregroundColor(Color.black)
                        .font(.system(size: 18))
                        .padding(.leading, 25)
                    Text("19시 30분")
                        .foregroundColor(Color.black)
                        .font(.system(size: 18))
                    
                    Spacer()
                    
                    Text("모임 탈퇴")
                        .font(.system(size: 15))
                        .frame(width: 80)
                        .foregroundColor(.white)
                        .padding(5)
                        .background(Color("dark_color"))
                        .cornerRadius(10)
                        .padding(.trailing, 10)
                }
                .padding(.top, 3)
                
                
                //지도자리
                Rectangle().frame(height:250)
                    .foregroundColor(Color.yellow)
                
                HStack {
                    Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/, label: {
                        Image(systemName: "paperplane.circle.fill")
                            .resizable()
                            .frame(width:25, height: 25)
                            .foregroundColor(Color.black)
                        
                        Text("모두의 위치 보기")
                            .font(.system(size: 22))
                            .bold()
                            .foregroundColor(.black)
                    })
                    .frame(width: 220, height: 20)
                    .padding(10)
                    .background(Color.yellow)
                    .cornerRadius(10)
                    
                    Spacer()
                    
                    Button(action: {
                        self.live.toggle()
                    }, label: {
                        Text("위치 공유")
                            .font(.system(size: 22))
                            .bold()
                            .foregroundColor(.black)
                    })
                    .frame(width: 100, height: 20)
                    .padding(10)
                    .background(self.live ? Color.blue : Color.gray)
                    .cornerRadius(10)
                }
                .padding(.horizontal, 10)
                .background(Color.white)
            }
            .padding(.bottom, 10)
            .background(Color.white)
            
            ScrollView {
                VStack {
                    MtPeopleCard()
                    MtPeopleCard()
                    MtPeopleCard()
                    MtPeopleCard()
                }.padding()
            }
            
            Spacer()
        }
        .background(Color("main_color"))
        .navigationBarBackButtonHidden(true)
        .edgesIgnoringSafeArea(.all)
        .gesture(DragGesture().updating($dragOffset, body: { (value, state, transaction) in
            if(value.startLocation.x < 20 && value.translation.width > 100) {
                self.mode.wrappedValue.dismiss()
            }
        }))
    }
    
    
}



struct DetailMtScreen_Previews: PreviewProvider {
    static var previews: some View {
        DetailMtScreen()
    }
    
}

