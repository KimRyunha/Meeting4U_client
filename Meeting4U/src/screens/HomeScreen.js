import React, {Component} from 'react'
import {
	StyleSheet, 
	Text, View,
	Image, FlatList
} from 'react-native';
import CustomButton from '../components/CustomButton';
import MeetingItem from '../components/MeetingItem';

//type Props : props의 type을 정의해주는 것. 자료형을 제한해줄 때 사용함.
type Props = {};
export default class HomeScreen extends Component<Props> {
	constructor() {
		super();
		//화면 자동갱신되는 멤버변수
		this.state={
		data:[
				{key:"0", data:"0"},
				{key:"1", data:"1"},
				{key:"2", data:"2"},
				{key:"3", data:"3"},
				{key:"4", data:"4"},
				{key:"5", data:"0"},
				{key:"6", data:"1"},
				{key:"7", data:"2"},
				{key:"8", data:"3"},
				{key:"9", data:"4"},
			],
		};
	}

	render() {
		return (
				<View style={styles.container}>
					<View style={styles.header}>
					</View> 

					<View style={styles.title}> 
						<Text
							style={{fontSize:32, fontWeight: 'bold', color:"#000", 
									marginLeft: 30, marginBottom: 3}}>
							사용자이름 님
						</Text>
						<View style={{width:"100%",borderTopWidth:1,borderColor:'#000'}} />
					</View>

					<FlatList
						data={this.state.data}
						renderItem={this.renderItem}>
					</FlatList>

					<View style={styles.footer}>
						<Image 
							style={{height:'50%', width:'50%', resizeMode:'contain'}}
							source={require('Meeting4U/images/home/meeting_add.png')}/>
						<Text
							style={{fontSize:15, fontWeight:'bold', paddingTop: 5, color:"#fff"}}>
							미팅 추가
						</Text>
					</View>
					
				</View>
		);
	}

	renderItem=({item})=>{
		return(
			<MeetingItem></MeetingItem>
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
		height:'5%',
		backgroundColor: '#5B7FC2',
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		width:'100%',
		height:'8%',
		justifyContent: "flex-end",
	},
	content: {
		flex: 1, //100 - (10+20+30) 이외의 공간을 1 비율로 채움.
		alignItems: "center",
		//justifyContent: "center",
	},
	footer: {
		width:'100%',
		height:'11%',
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#5B7FC2",
		marginTop: 5,
	},
});

