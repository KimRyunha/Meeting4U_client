import React, {Component} from 'react'
import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';

//type Props : props의 type을 정의해주는 것. 자료형을 제한해줄 때 사용함.
type Props = {};
//export default : 특정 변수(함수, 클래스 등)를 외부에서 사용할 수 있도록 해줌.
//App 이름의 클래스가 Component를 상속받음으로서 React Native 앱에서 사용할 수 있는
//컴포넌트가 됨. => render() 호출 가능해짐.
export default class App extends Component<Props> {
	//render 안에 작성하는게 화면에 보여짐.
	//render()와 return()은 최상위는 하나의 컴포넌트로 덮여있어야 함.
	render() {
		return (
	    	<View style={styles.container}>
		    	<Text style={styles.welcome}>어서오세요 리액트의 숲에</Text>
		    	<Text style={styles.instructions}>Meeting4U | {instructions}</Text>
		    </View>
		);

	}
}

// ios는 hello ios, android는 hello android 출력함.
const instructions = Platform.select({
	ios: 'Hello 앱등이',
	android: 'Hello 삼엽충'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#33475E",
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff'
  },
  instructions: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
  },
});
