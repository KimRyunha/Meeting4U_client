import React, { Component } from 'react';
import { 
    Text, StyleSheet, View, Alert, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import CustomButton from '../components/CustomButton';

export default class MeetingItem extends Component {
    static defaultProps = {
        nickname: 'none',
        time: '0',
        access_loc: false,
        master: true,
        buttonColor: '#fff',
        onPress: () => null,
    }

    constructor(props) {
        super(props);
    }

    render() {
        let masterIcon;
        if (this.props.master) {
            masterIcon = 
                <Icon 
                    style={{marginLeft:10}}
                    name='star'
                    color='#F0C131'
                    size={20}/>
        }
        return (
            <View style={styles.container}>
                <View 
                    style={{flex:1, flexDirection: 'column'}}>
                    <TouchableOpacity 
                        style={{flex:1}}
                        onPress={this.props.onPress}>
                        <View style={{flex:1, marginTop: 3, marginLeft: 3}}>
                            <View style={{flexDirection: 'row', alignItems:'center'}}>
                                {masterIcon}
                                <Text   
                                    ellipsizeMode = 'tail'
                                    numberOfLines = { 1 }
                                    style={styles.title}
                                >{this.props.nickname}</Text>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <Text
                                ellipsizeMode = 'tail'
                                numberOfLines = { 1 }
                                style={styles.title}
                            >소요시간: 10분</Text>

                            <Text
                                ellipsizeMode = 'tail'
                                numberOfLines = { 1 } 
                                style={{flex:0.3}}
                            >위치공유 [ {this.props.access_loc ? '동의' : '비동의'} ]</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        margin: 7,
		borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
	item: {
		flex: 1,
        flexDirection: 'row',
		alignItems: 'center',
        justifyContent: 'space-around',
		margin: 3,
		borderRadius: 10,
	},
	title: {
        flex: 0.7,
		fontSize: 18,
		fontWeight: 'bold',
        alignItems: 'center',
		justifyContent: 'center',
        padding: 10
	},
});