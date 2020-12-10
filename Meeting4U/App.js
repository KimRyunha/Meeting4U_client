import React, {Component} from 'react'
import {
	Platform, SafeAreaView, StyleSheet, 
	Text, View, Button, TouchableOpacity
} from 'react-native';
import CustomButton from './CustomButton';

//type Props : props의 type을 정의해주는 것. 자료형을 제한해줄 때 사용함.
type Props = {};
//export default : 특정 변수(함수, 클래스 등)를 외부에서 사용할 수 있도록 해줌.
//App 이름의 클래스가 Component를 상속받음으로서 React Native 앱에서 사용할 수 있는
//컴포넌트가 됨. => render() 호출 가능해짐.
export default class App extends Component<Props> {
	render() {
		return (
				<SafeAreaView style={styles.container}>
					<View style={styles.header}> 
						<Text style={styles.headerText}>header</Text>
					</View>

					<View style={styles.title}> 
						<Text style={styles.headerText}>title</Text>
					</View>
					
					<View style={styles.content}> 
						<View style={styles.contentRed}>
							<Text style={styles.contentText}>1</Text>
						</View>
						<View style={styles.contentGreen}>
							<Text style={styles.contentText}>2</Text>
						</View>
						<View style={styles.contentYellow}>
							<Text style={styles.contentText}>3</Text>
						</View>
					</View>
					
					<View style={styles.footer}> 
						<CustomButton 
							buttonColor={'#0C9EED'}
							title={'회원가입'}
							onPress={() => alert("회원가입 버튼")}/>
						<CustomButton 
							buttonColor={'#F7B300'}
							title={'로그인'}
							titleColor={'#000'}
							onPress={() => alert("로그인 버튼")}/>
						<CustomButton />
					</View>
				</SafeAreaView>
			   );
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: 'black',
	},
	headerText: {
		color: "#fff",
		fontWeight: 'bold',
	},
	contentText: {
		color: "#000",
	},
	header: {
		width:'100%',
		height:'10%',
		backgroundColor: 'black',
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		width:'100%',
		height:'20%',
		backgroundColor: 'skyblue',
		alignItems: "center",
		justifyContent: "center",
	},
	content: {
		flex: 1, //100 - (10+20+30) 이외의 공간을 1 비율로 채움.
		flexDirection: 'row',
		backgroundColor: 'white',
		alignItems: "stretch",
		justifyContent: "center",
	},
	contentRed: {
		flex: 1,
		backgroundColor: 'red',
		textAlign: 'center',
		justifyContent: "center",
		alignItems: "center",
	},
	contentGreen: {
		flex: 1,
		backgroundColor: 'green',
		textAlign: 'center',
		justifyContent: "center",
		alignItems: "center",
	},
	contentYellow: {
		flex: 1,
		backgroundColor: 'yellow',
		textAlign: 'center',
		justifyContent: "center",
		alignItems: "center",
	},

	footer: {
		width:'100%',
		height:'30%',
		backgroundColor: 'darkgray',
		justifyContent: "center",
	},
});
