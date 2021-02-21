import React, {Component} from 'react'
import {
	StyleSheet, 
	Text, View, SafeAreaView,
	TouchableOpacity, FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import MtUserItem from '../components/MtUserItem';
import CustomButton from '../components/CustomButton';

//type Props : props의 type을 정의해주는 것. 자료형을 제한해줄 때 사용함.
type Props = {};
export default class HomeScreen extends Component<Props> {
    constructor() {
		super();
		//화면 자동갱신되는 멤버변수
		this.state={
		data:[
				{key:"0", name:'jeong1', master:true, access_loc:true},
				{key:"1", name:'jeong2', master:false, access_loc:false},
				{key:"2", name:'jeong3', master:false, access_loc:true},
				{key:"3", name:'jeong4', master:false, access_loc:false},
				{key:"4", name:'jeong5', master:false, access_loc:true},
			],
		};
	}

	render() {
		return (
				<SafeAreaView style={styles.container}>
					<View style={styles.header}>
					</View> 

					<View style={styles.title}> 
						<View style={{flexDirection:'row', alignItems:'flex-end'}}>
                            <Text
                                style={{fontSize:30, fontWeight: 'bold', color:"#000", 
                                        marginLeft: 30, marginBottom: 5}}>
                                장륜주 모임
                            </Text>

                            <Text
                                style={{fontSize:18, fontWeight: 'bold', color:"#555", 
                                        marginLeft: 10, marginBottom: 5}}>
                                InviteCode
                            </Text>
                        </View>

                        <View style={{flexDirection:'row', alignItems: 'center'}}>
                            <View style={{flex:1, flexDirection:'row'}}>
                                <Icon 
                                    name='alarm-outline'
                                    color='black'
                                    size={20}
                                    style={{marginLeft: 30}}/>
                                <Text
                                    style={{fontSize:18, color:"#000", 
                                            marginLeft: 5}}>
                                    2021-02-29 오후 09시 30분 
                                </Text>
                            </View>
                            <CustomButton
                                flex={0.3}
                                title={"모임 탈퇴"}
                                buttonColor='#333'
                                titleColor='white'/>
                        </View>
					</View>
                    
                    <View style={{width:"100%",borderTopWidth:1,borderColor:'#000'}} />

					<View style={{
                        height:'30%',backgroundColor: 'green', 
                        alignItems: "center", justifyContent: "center",}}>
						<Text
							style={{fontSize:32, fontWeight: 'bold', color:"#000"}}>
							도착지 지도 자리 
						</Text>
					</View>

                    <View style={{flexDirection:'row', backgroundColor:'white'}}>
                            <CustomButton
                                flex={1}
                                title='모두의 위치 보기'
                                buttonColor='#F0C131'
                                titleColor='black'
                                titleSize={20}
                                icon_name='navigate-circle'
                                icon_size={30}
                                onPress={()=>{this.props.navigation.push('MapScreen')}}/>

                            <CustomButton
                                    flex={0.25}
                                    title={'위치' + '\n' + '공유'}
                                    buttonColor='#BBB'
                                    titleColor='white'/>
                    </View>

                    <View style={{flex:1, backgroundColor:'white'}}>
                        <View style={{width:"100%",borderTopWidth:1,borderColor:'#000'}} />

                        <FlatList
                            style={{flex:1, backgroundColor: 'white'}}
                            data={this.state.data}
                            renderItem={this.renderItem}
                            numColumns={1}>
					    </FlatList>
					</View>


					<View style={styles.footer}>	
						
					</View>
					
				</SafeAreaView>
		);
	}

	renderItem=({item})=>{
		return(
			<MtUserItem
                nickname={item.name}
                master={item.master}
                access_loc={item.access_loc}> </MtUserItem>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#EABFB6',
	},
	header: {
		width:'100%',
		height:'3%',
		backgroundColor: '#EABFB6',
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		width:'100%',
		height:'15%',
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

