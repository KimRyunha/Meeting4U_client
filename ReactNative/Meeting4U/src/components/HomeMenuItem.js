import React, { Component } from 'react';
import {
	TouchableOpacity,
	Text,
	StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class HomeMenuItem extends Component {
	static defaultProps = {
		title: 'no name',
        iconName: 'add-circle',
		buttonColor: '#000',
		onPress: () => null,
	}

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<TouchableOpacity style={[
				styles.button,
			]}
			onPress={this.props.onPress}>

                <Icon 
                    name={this.props.iconName}
                    color={this.props.buttonColor}
                    size={Platform.select({
                        ios: 50,
                        android: 40,
                    })}/>
                <Text
                    style={styles.name}>
                    {this.props.title}
                </Text>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	button: {
        flex:1, 
        alignItems: "center", 
        justifyContent: "center", 
        padding: 10
    },
    name: {
        flex: 1,
        paddingTop: 5,
        fontWeight:'bold',
        color:"#000"
    }    
});
