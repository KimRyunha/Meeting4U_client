import React, {Component} from 'react'
import {
	StyleSheet, 
	Text, View, SafeAreaView,
	Image, FlatList, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import CustomButton from '../components/CustomButton';
import MeetingItem from '../components/MeetingItem';
import HomeMenuItem from '../components/HomeMenuItem';

//type Props : props의 type을 정의해주는 것. 자료형을 제한해줄 때 사용함.
type Props = {};
export default class HomeScreen extends Component<Props> {
	constructor() {
		super();
		//화면 자동갱신되는 멤버변수
		this.state={
		//미팅 개수만큼...
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
				<SafeAreaView style={styles.container}>
					<View style={styles.header}>
					</View> 

					<View style={styles.title}> 
						<Text
							style={{fontSize:32, fontWeight: 'bold', color:"#000", 
									marginLeft: 30}}>
							유정주 님
						</Text>
					</View>
					<View style={{width:"100%",borderTopWidth:1,borderColor:'#000'}} />

					<View style={styles.content}>
						<HomeMenuItem
							title="미팅 생성"
							iconName="ios-people"
							buttonColor="black"
							onPress={() => {this.props.navigation.navigate('CreateMT')}}/>
						
						<HomeMenuItem
							title="미팅 검색"
							iconName="ios-search"
							buttonColor="black"
							/>

						<HomeMenuItem
							title="미팅 전체 목록"
							iconName="list-circle"
							buttonColor="black"
							/>
						
					</View>

					<View style={{width:"100%",borderTopWidth:1,borderColor:'#000'}} />

					<FlatList
						style={{flex:1, backgroundColor: 'white'}}
						data={this.state.data}
						renderItem={this.renderItem}>
					</FlatList>

					<View style={styles.footer}>	
						
					</View>
					
				</SafeAreaView>
		);
	}

	renderItem=({item})=>{
		return(
			<MeetingItem
				onPress={() => {this.props.navigation.navigate('MtDetails')}}></MeetingItem>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#EABFB6',
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
		height:'3%',
		backgroundColor: '#EABFB6',
		alignItems: "center",
		justifyContent: "center",
	},
	header_content: {
		width:'100%',
		height:'20%',
		backgroundColor: '#fff',
		justifyContent: "center",
	},
	title: {
		width:'100%',
		height:'8%',
		justifyContent: "center",
		backgroundColor: 'white'
	},
	content: {
		flex: 0.2, //100 - (10+20+30) 이외의 공간을 1 비율로 채움.
		flexDirection: 'row',
		alignItems: "center",
		justifyContent: "space-around",
		backgroundColor: "#fff",
	},
	footer: {
		width:'100%',
		height:'3%',
		backgroundColor: "#EABFB6",
		marginTop: 5,
	},
});

