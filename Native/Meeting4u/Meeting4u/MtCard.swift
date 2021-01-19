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
                VStack(alignment: .leading) {
                    Text("완식의 매직쇼")
                        .font(.system(size:28))
                        .fontWeight(.black)
                        .padding(.bottom, 10)
                    
                    HStack {
                        Text("2021년 1월 31일")
                            .foregroundColor(.secondary)
                        Text("19시 30분")
                            .foregroundColor(.secondary)
                    }
                }
                
                Spacer()
                
                Text("초대코드")
                    .fontWeight(.bold)
                    .frame(width: 80)
                    .foregroundColor(.white)
                    .padding()
                    .background(Color("dark_color"))
                    .cornerRadius(20)
            }
        }
        .padding(25)
        .background(Color("sub_main_color"))
        .cornerRadius(25)
    .shadow(radius: 1)
        
    }
}

struct MtCard_Previews: PreviewProvider {
    static var previews: some View {
        MtCard()
    }
}
