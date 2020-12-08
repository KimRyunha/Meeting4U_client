import React, {Component} from 'react'
import {
	Platform, SafeAreaView, StyleSheet, 
	Text, View, Button, TouchableOpacity
} from 'react-native';
import TestComponent from './TestComponent';

const datas = [
	{id:"Jeong", count:0, color:"red"},
	{id:"Zang", count:0, color:"green"},
	{id:"Ryun", count:0, color:"blue"},
];

//type Props : props의 type을 정의해주는 것. 자료형을 제한해줄 때 사용함.
type Props = {};
//export default : 특정 변수(함수, 클래스 등)를 외부에서 사용할 수 있도록 해줌.
//App 이름의 클래스가 Component를 상속받음으로서 React Native 앱에서 사용할 수 있는
//컴포넌트가 됨. => render() 호출 가능해짐.
export default class App extends Component<Props> {
	//생성자
	constructor(props) {
		//super가 뒤로 가면 안 된다. 제일 먼저 react의 component를 생성해야함.
		super(props);
		this.state = {datas:datas}; //초기화
	}

	_updateCount(idx) {
		//1208
		const newDatas = [...this.state.datas];
		newDatas[idx].count = newDatas[idx].count + 1;
		this.setState({datas:newDatas});
		
		// 2일차
		//함수형 => 권장
		this.setState((prevState, props) => {
			return {count:prevState.count+1}
		});
		{ /*
		//객체형
		// this.setState({
		// 	count:this.state.count+1
		// });
		*/ }
	}

	//render 안에 작성하는게 화면에 보여짐.
	//render()와 return()은 최상위는 하나의 컴포넌트로 덮여있어야 함.
	render() {
		return (
	    	<SafeAreaView style={styles.container}>
				<Text style={styles.welcome}>어서오세요 리액트의 숲에</Text>
		    	<Text style={styles.instructions}>Meeting4U | {instructions}</Text>
				{
					this.state.datas.map((data, index) => {
						return(
							<View>
								<TestComponent
									key = {data.id}
									id = {data.id}
									color = {data.color}
									title = {data.count.toString()}
									updateCount = {this._updateCount.bind(this, index)}/>
									
								{ /*Normaly Button is not apply background Color in IOS...*/ }
								<TouchableOpacity
									style={styles.loginScreenButton}
									onPress={this._updateCount.bind(this, index)}
									underlayColor='#fff'>
									<Text style={styles.loginText}>{data.count.toString()}</Text>
								</TouchableOpacity>
							</View>
						)
					})
				}
		    </SafeAreaView>
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
    padding: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  instructions: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
  },
  loginScreenButton: {
  	marginRight:40,
  	marginLeft:40,
  	marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginText:{
  	color:'#fff',
  	textAlign:'center',
  	paddingLeft : 10,
  	paddingRight : 10
  }
});
