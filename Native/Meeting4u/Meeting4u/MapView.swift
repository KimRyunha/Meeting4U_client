//
//  MapView.swift
//  Meeting4u
//
//  Created by 유정주 on 2021/02/03.
//  Copyright © 2021 Jeong. All rights reserved.
//

import SwiftUI
import MapKit

struct MapView: UIViewRepresentable {
    var lat:Double
    var lon:Double
    var place:String = ""
    
    typealias NSViewType = MKMapView
    
    // 1.
    func makeUIView(context: UIViewRepresentableContext<MapView>) -> MKMapView {
        MKMapView(frame: .zero)
    }
    
    // 2.
    func updateUIView(_ uiView: MKMapView, context: UIViewRepresentableContext<MapView>) {
        // 3.
        let location = CLLocationCoordinate2D(latitude: self.lat,
                                              longitude: self.lon)
        // 4.
        let span = MKCoordinateSpan(latitudeDelta: 0.05, longitudeDelta: 0.05)
        let region = MKCoordinateRegion(center: location, span: span)
        uiView.setRegion(region, animated: true)
        
        // 5.
        let annotation = MKPointAnnotation()
        annotation.coordinate = location
        annotation.title = self.place
//        annotation.subtitle = "MT4u"
        uiView.addAnnotation(annotation)
    }
    
}
