import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ToastAndroid } from 'react-native';
import { MianStyles } from '../Styles/MainStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Header({ title }){

    const showToast = () => {
        ToastAndroid.show("به زودی...", ToastAndroid.SHORT);
    };
    return(
        <View style={MianStyles.header}>
            <TouchableOpacity style={styles.iconLeft} onPress={()=>showToast()}>
                <FontAwesome5 name='search' size={18} color={'#BCBCBC'}/>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Synapps</Text>
            <TouchableOpacity style={styles.iconRight}>
                <FontAwesome5 name='sliders-h' size={18} color={'#BCBCBC'}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1
    },
    iconLeft:{
        position: 'absolute',
        left:16,
    },
    iconRight:{
        position: 'absolute',
        right:16,
        
    },
    headerTitle:{
        flexDirection:'row',
        fontFamily:'damion',
        fontSize:25,
        color:'#63CCFF'
    }
})