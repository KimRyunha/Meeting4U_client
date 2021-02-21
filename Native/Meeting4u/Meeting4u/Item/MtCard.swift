//
//  MtCard.swift
//  Meeting4u
//
//  Created by 유정주 on 2021/01/19.
//  Copyright © 2021 Jeong. All rights reserved.
//

import SwiftUI

struct MtCard: View {
    @State var title:String = "타이틀"
    @State var date:String = "2021-01-01"
    @State var time:String = "19:30"
    @State var inviteCode:String = "JJ0216"
    @State var lat:Double = 0
    @State var lon:Double = 0
    @State var place:String = "xxx"
    
    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            Rectangle().frame(height:0)
            
            HStack {
                NavigationLink(destination: DetailMtScreen(latitude: self.lat, longitude: self.lon, placemark: self.place, title:self.title, inviteCode: self.inviteCode, date: self.date, time: self.time)) {
                    VStack(alignment: .leading) {
                        Text(title)
                            .font(.system(size:28))
                            .foregroundColor(Color.black)
                            .fontWeight(.bold)
                            .padding(.bottom, 3)
                            .lineLimit(1)
                            .truncationMode(.tail)
                        
                        Text(date)
                            .foregroundColor(.secondary)
                        Text(time)
                            .foregroundColor(.secondary)
                    }
                    
                    Spacer()
                }
                
                Text(self.inviteCode)
                    .fontWeight(.bold)
                    .frame(width: 70)
                    .foregroundColor(.white)
                    .padding()
                    .background(Color("dark_color"))
                    .cornerRadius(20)
            }
        }
        .padding(.leading, 25)
        .padding(.vertical, 15)
        .padding(.trailing, 10)
        .background(Color.white)
        .cornerRadius(25)
        .shadow(radius: 2.5)
    }
}

struct MtCard_Previews: PreviewProvider {
    static var previews: some View {
        MtCard()
    }
}
