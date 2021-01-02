import React, { Component } from 'react';
import { 
    Text, StyleSheet, View, Alert, TouchableOpacity
} from 'react-native';
import CustomButton from '../components/CustomButton';

type Props = {};
export default class MeetingItem extends Component<Props> {
    static defaultProps = {
        title: 'Meeting Name',
        date: '2020-12-31',
        time: '14:30',
        destination: 'destination',
        users: 'none',
        invite_code: 'none',

        buttonColor: '#fff',
        onPress: () => null,
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View 
                    style={{flex:3, flexDirection: 'column'}}>
                    <TouchableOpacity 
                        style={{flex:3}}
                        onPress={this.props.onPress}>
                        <View style={styles.item}>
                            <Text 
                                ellipsizeMode = 'tail'
                                numberOfLines = { 1 }
                                style={styles.title}
                            >미팅이름</Text>
                            <View style={{height:"100%",borderLeftWidth:0.3,borderColor:'#444'}} />
                            <Text 
                                style={styles.contents}
                            >2020-12-31 14:30</Text>
                        </View>
                        <View style={styles.item}>
                            <Text
                                ellipsizeMode = 'tail'
                                numberOfLines = { 1 }
                                style={styles.title}
                            >미팅장소</Text>
                            <View style={{height:"100%",borderLeftWidth:0.3,borderColor:'#444'}} />
                            
                            <Text
                                ellipsizeMode = 'tail'
                                numberOfLines = { 1 } 
                                style={styles.contents}
                            >장리더, 유대원, 김대원</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <CustomButton
                    style={{width:'15%'}}
                    buttonColor={'#2B3C5C'}
                    title={'초대코드'}
                    onPress={() => Alert.alert(
								'초대코드',
								makeid(),
								[{text: 'OK'}, 
								{text: 'Cancel'}],
							)}
                />
            </View>
            
        )
    }
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

const styles = StyleSheet.create({
    container: {
        height: 80,
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
    contents: {
        flex: 1,
        fontSize: 13,
        padding: 10,
        alignItems: 'center',
		justifyContent: 'center',
    }

});