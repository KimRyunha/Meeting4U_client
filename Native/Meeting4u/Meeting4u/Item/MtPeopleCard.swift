//
//  MtCard.swift
//  Meeting4u
//
//  Created by 유정주 on 2021/01/19.
//  Copyright © 2021 Jeong. All rights reserved.
//

import SwiftUI

struct MtPeopleCard: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            Rectangle().frame(height:0)
            
            HStack {
                VStack(alignment: .leading) {
                    Text("유정주")
                        .font(.system(size:28))
                        .fontWeight(.black)
                        .padding(.bottom, 3)
                        .lineLimit(1)
                        .truncationMode(.tail)
                    
                    HStack {
                        Text("소요시간: 10분")
                            .foregroundColor(.secondary)

                        Spacer()
                        
                        Text("위치공유 [ 동의 ]")
                            .foregroundColor(.secondary)
                    }
                }
                
                Spacer()
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

struct MtPeopleCard_Previews: PreviewProvider {
    static var previews: some View {
        MtPeopleCard()
    }
}
