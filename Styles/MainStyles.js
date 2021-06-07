import { StyleSheet, Dimensions } from "react-native";

export const MianStyles = StyleSheet.create({
    header : {
        width:Dimensions.get('window').width,
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontFamily:'yekan'
    }
})