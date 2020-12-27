import React, {Component} from 'react'
import {
	Platform, StyleSheet, 
	Text, View, TouchableOpacity,
	Image
} from 'react-native';
import CustomButton from '../components/CustomButton';
import MeetingItem from '../components/MeetingItem';


//type Props : props의 type을 정의해주는 것. 자료형을 제한해줄 때 사용함.
type Props = {};
export default class HomeScreen extends Component<Props> {
	render() {
		return (
				<View style={styles.container}>
					<View style={styles.header}> 
					</View>

					<View style={styles.title}> 
						<Text
							style={{fontSize:32, fontWeight: 'bold', color:"#000"}}>
							Home Screen
						</Text>
					</View>

					<MeetingItem> </MeetingItem>
					<MeetingItem> </MeetingItem>
					<MeetingItem> </MeetingItem>
				</View>
            );
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	headerText: {
		color: "#fff",
		fontWeight: 'bold',
		fontSize: 28,
	},
	contentText: {
		color: "#000",
	},
	header: {
		width:'100%',
		height:'8%',
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		width:'100%',
		height:'20%',
		marginLeft: 30,
		//alignItems: "center",
		justifyContent: "center",
	},
	content: {
		flex: 1, //100 - (10+20+30) 이외의 공간을 1 비율로 채움.
		alignItems: "center",
		//justifyContent: "center",
	},
	footer: {
		width:'100%',
		height:'20%',
		padding: 10,
		justifyContent: "center",
	},
});

