//
//  MtCard.swift
//  Meeting4u
//
//  Created by 유정주 on 2021/01/19.
//  Copyright © 2021 Jeong. All rights reserved.
//

import SwiftUI

struct MtCard: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            Rectangle().frame(height:0)
            
            HStack {
                NavigationLink(destination: DetailMtScreen()) {
                    VStack(alignment: .leading) {
                        Text("완식의 매직쇼")
                            .font(.system(size:28))
                            .foregroundColor(Color.black)
                            .fontWeight(.black)
                            .padding(.bottom, 3)
                            .lineLimit(1)
                            .truncationMode(.tail)
                        
                        
                        Text("2021년 1월 31일")
                            .foregroundColor(.secondary)
                        Text("19시 30분")
                            .foregroundColor(.secondary)
                        
                    }
                    
                    Spacer()
                }
                
                Text("초대코드")
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
