import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import CustomButton from '../components/CustomButton';

type Props = {};
export default class LoginScreen extends Component<Props> {
	render() {
		return (
				<View style={styles.container}>
					<View style={styles.header} />
						<View style={styles.title}>
						<Text style={{fontSize:35,paddingBottom:20}}>로그인</Text>
						<View style={{width:"100%",borderBottomWidth:0.5,borderColor:'#444'}} />
					</View>
					<View style={styles.content}>
						<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
						<Text style={{fontSize:15}}>아이디</Text>
						<TextInput style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
					</View>
				
					<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
						<Text style={{fontSize:15}}>비밀번호</Text>
						<TextInput style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
					</View>
				</View>

				<View style={styles.footer}>
					<CustomButton
						buttonColor={'#374D76'}
						title={'확인'}
						onPress={() => alert('확인 버튼')}/>
					<CustomButton
						buttonColor={'#5E666E'}
						title={'취소'}
						onPress={() => this.props.navigation.goBack()}/>
					</View>
				</View>
				);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	header: {
		width:'100%',
		height:'8%',
	},
	title: {
		width:'100%',
		height:'20%',
		justifyContent: 'center',
		paddingLeft:20,
		paddingRight:20,
	},
	content: {
		flex: 1,
		paddingLeft:20,
		paddingRight:20,
		paddingBottom:30,
	},
	footer: {
		width:'100%',
	  	height:'20%',
		padding: 10,
		justifyContent: "center",
	},
});

