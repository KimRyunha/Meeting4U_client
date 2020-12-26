import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Keyboard,
	Alert, TouchableWithoutFeedback} from 'react-native';
import CustomButton from '../components/CustomButton';

type Props = {};
export default class LoginScreen extends Component<Props> {
	constructor() {
		super();
		//화면 자동갱신되는 멤버변수
		this.state={
			id_input: 'ID',
			pw_input: 'PW',
			pw_check_input: 'PW Check',
			nickname_input: 'Nickname',
			email_input: 'Email',
		};
	}

	render() {
		return (
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					<View style={styles.header} />
						<View style={styles.title}>
						<Text style={{fontSize:35,paddingBottom:20}}>회원가입</Text>
						<View style={{width:"100%",borderBottomWidth:0.5,borderColor:'#444'}} />
					</View>
					<View style={styles.content}>
						<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
						<Text style={{fontSize:15}}>아이디</Text>
						<TextInput
							placeholder='Input ID'
							onChangeText={(text)=>{this.setState({id_input: text})}}
							style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
					</View>
				
					<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
						<Text style={{fontSize:15}}>비밀번호</Text>
						<TextInput 
							secureTextEntry={true}
							placeholder='Input PW'
							onChangeText={(text)=>{this.setState({pw_input: text})}}
							style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
					</View>
					<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
						<Text 
							style={{fontSize:15}}>비밀번호 확인</Text>
						<TextInput 
							secureTextEntry={true}
							placeholder='Check Input PW'
							onChangeText={(text)=>{this.setState({pw_check_input: text})}}
							style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
					</View>
					<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
						<Text style={{fontSize:15}}>닉네임</Text>
						<TextInput 
							placeholder='Input Nickname'
							onChangeText={(text)=>{this.setState({nickname_input: text})}}
							style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
					</View>
					<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
						<Text style={{fontSize:15}}>이메일(선택)</Text>
						<TextInput 
							keyboardType='email-address'
							placeholder='Input Email'
							onChangeText={(text)=>{this.setState({email_input: text})}}
							style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
					</View>
				</View>

				<View style={styles.footer}>
					<CustomButton
						buttonColor={'#374D76'}
						title={'확인'}
						onPress={() => Alert.alert(
								'SignUp',
								this.state.id_input + "\n" +
								this.state.pw_input + "\n" +
								this.state.pw_check_input + "\n" +
								this.state.nickname_input + "\n" +
								this.state.email_input,
								[{text: 'OK'}, 
								{text: 'Cancel'}],
							)}/>
					<CustomButton
						buttonColor={'#5E666E'}
						title={'취소'}
						onPress={() => this.props.navigation.navigate('Start')}/>
					</View>
				</View>
				</TouchableWithoutFeedback>
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
