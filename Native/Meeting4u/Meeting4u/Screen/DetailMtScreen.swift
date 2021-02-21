//
//  HomeScreen.swift
//  Meeting4u
//
//  Created by 유정주 on 2021/01/13.
//  Copyright © 2021 Jeong. All rights reserved.
//

import SwiftUI

struct DetailMtScreen: View {
    var latitude: Double = 0
    var longitude: Double = 0
    var placemark: String = "place"
    
    var title:String = "Title"
    var inviteCode:String = "Code"
    var date:String = "date"
    var time:String = "time"
    
    @State var live:Bool = false
    @Environment(\.presentationMode) var presentationMode: Binding<PresentationMode>
    
    var body: some View {
        if #available(iOS 14.0, *) {
            VStack(alignment: .leading) {
                VStack(alignment: .leading) {
                    //지도자리
                    MapView(lat: latitude, lon: longitude, place: placemark).frame(height:250)
                    
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
                                .foregroundColor(self.live ? Color.white : Color.black)
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
            }
            .navigationBarBackButtonHidden(true)
            .navigationBarItems(leading:
                Button(action: {
                    self.presentationMode.wrappedValue.dismiss()
                }) {
                    Image(systemName: "chevron.backward")
                    .foregroundColor(Color.black)
                },
                trailing: Text("모임 탈퇴")
                    .font(.system(size: 15)))
            .toolbar { // <2>
                ToolbarItem(placement: .principal) { // <3>
                    VStack {
                        Text(self.title).font(.headline)
                        HStack {
                            Text(self.date)
                                .foregroundColor(Color.black)
                            Text(self.time)
                                .foregroundColor(Color.black)
                        }
                    }
                }
            }
            .offset(y:-50)
            .edgesIgnoringSafeArea(.bottom)
            .background(Color("main_color"))

        } else {
            // Fallback on earlier versions
        }
    }
}

struct DetailMtScreen_Previews: PreviewProvider {
    static var previews: some View {
        DetailMtScreen()
    }
    
}

