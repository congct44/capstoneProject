import React from 'react';
import {
    StyleSheet,
} from 'react-native';

export default StyleSheet.create({
    content: {
        width: '80%',
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        height:'100%',
        // width: null,
        // height: null,
    },
    title: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    titleText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
    logo: {
        resizeMode: 'contain',
        height: 70,
    },
    item: {
        backgroundColor: 'rgba(0,0,0,0)',
        marginBottom: 20,
        borderColor:'rgba(0,0,0,0)',
    },
    inputItem:{
        backgroundColor:'rgba(0,0,0,0)',
        borderColor:'rgba(255,255,255,0.9)',
        borderWidth:3,
        borderRadius:50,
        paddingLeft:30,
        color:'#ffffff',
    },
    buttonWhite:{
        backgroundColor:'rgba(255,255,255,1)',
        borderRadius:50,
        flex:1,
    },
    loginButton: {
        //backgroundColor: '#FDD013',
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        marginTop:25,
        width:'100%',

    },
    loginButtonText: {
        //backgroundColor: '#fd1349',
        color: '#ffffff',
        justifyContent: 'center',
        alignItems:'center',
        fontSize:20,
    },
    forgotPassword: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgotPasswordText: {
        color: 'white',
        textDecorationLine: 'underline',
        fontSize: 20,
    },
    footer: {
        flex: 0,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 15,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});