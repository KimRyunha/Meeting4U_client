import React, { Component } from 'react';
import {
	TouchableOpacity,
	Text,
	StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class CustomButton extends Component {
	static defaultProps = {
		title: 'no name',
		buttonColor: '#000',
		titleColor: '#fff',
		titleSize: 18,
		flex: 1,
		icon_name: 'none',
		icon_size: 20,
		icon_color: 'black',
		onPress: () => null,
	}

	constructor(props) {
		super(props);
	}

	render() {
		let btn_icon;
		if (this.props.icon_name != 'none') {
			btn_icon = 
				<Icon 
                    name={this.props.icon_name}
                    color={this.props.icon_color}
                    size={this.props.icon_size}/>
		}

		return(
			<TouchableOpacity style={[
				styles.button,
				{flex: this.props.flex},
				{backgroundColor: this.props.buttonColor}
			]}
			onPress={this.props.onPress}>
				{btn_icon}
				
				<Text style={[
					styles.title,
					{fontSize: this.props.titleSize, color: this.props.titleColor}
				]}>{this.props.title}</Text>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	button: {
		flexDirection:'row',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 7,
		padding: 5,
		borderRadius: 10,
	},
	title: {
		fontWeight: 'bold'
	},
});
