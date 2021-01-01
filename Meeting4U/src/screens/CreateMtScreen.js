import React, {Component} from 'react';
import {
    StyleSheet, Text, View, Image, TextInput, Keyboard,
	Alert, TouchableWithoutFeedback, TouchableOpacity
} from 'react-native';

import CustomButton from '../components/CustomButton';

type Props = {};
export default class CreateMtScreen extends Component<Props> {
    

	render() {
		return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.header} />
                        <View style={styles.title}>
                        <Text style={{fontSize:35,paddingBottom:20}}>미팅 만들기</Text>
                        <View style={{width:"100%",borderBottomWidth:0.5,borderColor:'#444'}} />
                    </View>
                    <View style={styles.content}>
                        <View style={styles.boxStyle}>
                            <Text style={{fontSize:15, width: '20%'}}>미팅 이름</Text>
                            <TouchableOpacity 
                                style={{flex:1, alignItems: 'space-around'}}
                                onPress={() => {this.props.navigation.navigate('MapScreen')}}>
                                <TextInput
                                    placeholder='미팅 이름을 입력하세요.'
                                    style={{color:"black", width: '85%', padding:5,
                                            borderColor: '#aaa', borderWidth: 1, borderRadius: 5}}/>
                            </TouchableOpacity>
                        </View>
            
                        <View style={styles.boxStyle}>
                            <Text style={{fontSize:15, width: '20%'}}>도착 장소</Text>
                            <TouchableOpacity 
                                style={{flex:1, alignItems: 'space-around'}}
                                onPress={() => {this.props.navigation.navigate('MapScreen')}}>
                                <Text style={styles.boxText}>
                                    장소 선택하기</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.boxStyle}>
                            <Text 
                                style={{fontSize:15, width: '20%'}}>날짜</Text>
                            <TouchableOpacity 
                                style={{flex:1, alignItems: 'space-around'}}>
                                <TextInput
                                    placeholder='날짜를 입력하세요.'
                                    style={{color:"black", width: '85%', padding:5,
                                            borderColor: '#aaa', borderWidth: 1, borderRadius: 5}}/>
                                {/* <Text style={styles.boxText}>
                                    날짜 선택하기</Text> */}
                            </TouchableOpacity>
                        </View>

                        <View style={styles.boxStyle}>
                            <Text style={{fontSize:15, width: '20%'}}>시간</Text>
                            <TouchableOpacity 
                                style={{flex:1, alignItems: 'space-around'}}>
                                <TextInput
                                    placeholder='시간을 입력하세요.'
                                    style={{color:"black", width: '85%', padding:5,
                                            borderColor: '#aaa', borderWidth: 1, borderRadius: 5}}/>
                                {/* <Text style={styles.boxText}>
                                    시간 선택하기</Text> */}
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.footer}>
                        <CustomButton
                            buttonColor={'#374D76'}
                            title={'확인'}
                            onPress={() => Alert.alert(
                                    '미팅 생성',
                                    "todo: go to detail of Meeting page",
                                    [{text: 'OK'}, 
                                    {text: 'Cancel'}],
                                )}/>
                        <CustomButton
                            buttonColor={'#5E666E'}
                            title={'취소'}
                            onPress={() => this.props.navigation.navigate('Home')}/>
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
    boxStyle: {
        flexDirection:'row',
        height: 60,
        justifyContent:'space-between',
        alignItems:'center',
    },
    boxText: {
        color: '#888',
        width: '85%',
        borderColor: '#aaa',
        borderWidth: 1, 
        borderRadius: 5, 
        padding:5
    }
});
