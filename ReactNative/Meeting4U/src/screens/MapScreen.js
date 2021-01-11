import React, {Component} from 'react';
import {
    Text, View
} from 'react-native';

export default class MapScreen extends Component {
    render() {
        return (
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 30}}>
                    Map Screen
                </Text>
            </View>
        );
    }
}