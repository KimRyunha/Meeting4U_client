import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput, 
	TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import CustomButton from '../components/CustomButton';

type Props = {};
export default class LoginScreen extends Component<Props> {
	constructor() {
		super();
		//화면 자동갱신되는 멤버변수
		this.state={
			id_input: 'ID',
			pw_input: 'PW',
		};
	}

	getInputText= (value)=> {
		this.setState({id_input:value});
	}
	
	render() {
		return (
				//빈 공간 클릭했을 때 키보드 내리기
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.container}>
						<View style={styles.header} />
							<View style={styles.title}>
							<Text style={{fontSize:35,paddingBottom:20}}>로그인</Text>
							<View style={{width:"100%",borderBottomWidth:0.5,borderColor:'#444'}} />
						</View>
						<View style={styles.content}>
							<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
							<Text style={{fontSize:15}}>아이디</Text>
							<TextInput
								placeholder="id"
								onChangeText={this.getInputText}
								style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
						</View>
					
						<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
							<Text style={{fontSize:15}}>비밀번호</Text>
							<TextInput 
								secureTextEntry={true} //비밀번호 효과
								placeholder='password'
								onChangeText={(text)=>{this.setState({pw_input: text})}}
								style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
						</View>
					</View>

					<View style={styles.footer}>
						<CustomButton
							buttonColor={'#374D76'}
							flex={1.2}
							title={'확인'}
							onPress={() => Alert.alert(
									'Login',
									this.state.id_input + "\n" +
									this.state.pw_input,
									[{text: 'OK', onPress: () => {this.props.navigation.navigate('Home')}},
									 {text: 'Cancel'}]
								)
							}/>
						<CustomButton
							buttonColor={'#5E666E'}
							flex={1.2}
							title={'취소'}
							onPress={() => this.props.navigation.goBack()}/>
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

