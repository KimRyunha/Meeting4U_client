//
//  GestureController.swift
//  Meeting4u
//
//  Created by 유정주 on 2021/01/20.
//  Copyright © 2021 Jeong. All rights reserved.
//

import SwiftUI

extension View {
  func endTextEditing() {
    UIApplication.shared.sendAction(#selector(UIResponder.resignFirstResponder),
                                    to: nil, from: nil, for: nil)
  }
    
    
}
