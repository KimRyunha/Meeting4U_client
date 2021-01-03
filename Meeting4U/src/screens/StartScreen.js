import React, {Component} from 'react'
import {
	Platform, StyleSheet, SafeAreaView,
	Text, View, TouchableOpacity, 
	Image, TextInput, Alert
} from 'react-native';
import CustomButton from '../components/CustomButton';

//type Props : props의 type을 정의해주는 것. 자료형을 제한해줄 때 사용함.
type Props = {};
//export default : 특정 변수(함수, 클래스 등)를 외부에서 사용할 수 있도록 해줌.
//App 이름의 클래스가 Component를 상속받음으로서 React Native 앱에서 사용할 수 있는
//컴포넌트가 됨. => render() 호출 가능해짐.
export default class StartScreen extends Component<Props> {
	constructor() {
		super();
		//화면 자동갱신되는 멤버변수
		this.state={
			id_input: 'ID',
			pw_input: 'PW',
		};
	}

	render() {
		return (
				<SafeAreaView style={styles.container}>
					<View style={styles.title}> 
						<Text
							style={{fontSize:32, fontWeight: 'bold', color:"#000"}}>
							미팅 4 U,{'\n'}지금 어디야?
						</Text>

						{/* <View style={styles.content}> 
							<Image 
								style={{height:'70%', resizeMode:'contain'}}
								source={require('Meeting4U/images/login/home_mark.png')}/>
						</View> */}
					</View>

					<View style={{flex: 0.25}}/>

					<View style={{
							padding: 30, margin: 30, backgroundColor:'white', borderRadius: 30, 
							alignItems: "center", justifyContent: "center"}}>
						<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
							<Text style={{fontSize:15, width: '22%'}}>아이디</Text>
							<TextInput
								placeholder="id"
								onChangeText={(text)=>{this.setState({id_input: text})}}
								style={{
									backgroundColor: 'white',
									borderColor: '#aaa', borderWidth: 1, borderRadius: 5, 
									width:'70%', height:35, padding:5}}/>
						</View>
					
						<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
							<Text style={{fontSize:15, width: '22%'}}>비밀번호</Text>
							<TextInput 
								secureTextEntry={true} //비밀번호 효과
								placeholder='password'
								onChangeText={(text)=>{this.setState({pw_input: text})}}
								style={{
									backgroundColor: 'white',
									borderColor: '#aaa', borderWidth: 1, borderRadius: 5,   
									width:'70%', height:35, padding:5}}/>
						</View>
					</View>
					
					<View style={styles.footer}> 
						<CustomButton 
							buttonColor={'#2E2524'}
							flex={1.2}
							title={'로그인'}
							titleColor={'#FFF'}
							onPress={() => {this.props.navigation.navigate('Home')}}
							// onPress={() => Alert.alert(
							// 		'Login',
							// 		this.state.id_input + "\n" +
							// 		this.state.pw_input,
							// 		[{text: 'OK', }},
							// 		 {text: 'Cancel'}]
							// 	)}
								/>
						<CustomButton 
							buttonColor={'#AAA'}
							flex={1.2}
							title={'회원가입'}
							onPress={() => this.props.navigation.navigate('SignUp')}/>
					</View>
				</SafeAreaView>
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
	title: {
		flexDirection:'row',
		width:'100%',
		height:'20%',
		marginLeft: 30,
		// justifyContent: "center",
		alignItems: 'center'
	},
	content: {
		flex: 1, //100 - (10+20+30) 이외의 공간을 1 비율로 채움.
		alignItems: "center",
	},
	footer: {
		flexDirection: 'row',
		height:'8%',
		paddingLeft: 10,
		paddingRight: 10,
		marginLeft: 30,
		marginRight: 30,
		justifyContent: "center",
	},
});

