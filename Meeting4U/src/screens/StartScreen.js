import React, {Component} from 'react'
import {
	Platform, StyleSheet, 
	Text, View, TouchableOpacity,
	Image
} from 'react-native';
import CustomButton from '../components/CustomButton';

//type Props : props의 type을 정의해주는 것. 자료형을 제한해줄 때 사용함.
type Props = {};
//export default : 특정 변수(함수, 클래스 등)를 외부에서 사용할 수 있도록 해줌.
//App 이름의 클래스가 Component를 상속받음으로서 React Native 앱에서 사용할 수 있는
//컴포넌트가 됨. => render() 호출 가능해짐.
export default class StartScreen extends Component<Props> {
	render() {
		return (
				<View style={styles.container}>
					<View style={styles.header}> 
					</View>

					<View style={styles.title}> 
						<Text
							style={{fontSize:32, fontWeight: 'bold', color:"#000"}}>
							미팅 4 U,{'\n'}지금 어디야?
						</Text>
					</View>

					<View style={styles.content}> 
						<Image 
							style={{height:'50%', width:'80%', resizeMode:'contain'}}
							source={require('Meeting4U/images/login/home_mark.png')}/>
					</View>
					
					<View style={styles.footer}> 
						<CustomButton 
							buttonColor={'#374D76'}
							title={'로그인'}
							titleColor={'#FFF'}
							onPress={() => this.props.navigation.push('Login')}/>
						<CustomButton 
							buttonColor={'#5E666E'}
							title={'회원가입'}
							onPress={() => this.props.navigation.navigate('SignUp')}/>
					</View>
				</View>
			   );
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#D7E8FA',
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

