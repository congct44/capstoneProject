import React from 'react'
import{
    Image,
    View,
    Text,
    StyleSheet,
    Button,
    Linking,
    TextInput,
    Alert,
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';





const ForgotPassword  = () => { 

  return (

    <>
      <View style={styles.container}>
            <Text style={{fontSize : 20 , fontWeight : 'bold'}}>
                Quên mật khẩu?
            </Text>
            <Text style={{paddingTop : 15, fontSize : 15}}>
                Vui lòng cung cấp lại email đăng nhập để lấy lại mật khẩu.
            </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 , marginTop : 15,}}
            />
            <View style={{flexDirection : 'row' , marginTop :15 , justifyContent : "space-between"}}>
                <Button title="Xác nhận"  color='#ff0000' onPress={() => Alert.alert('Simple Button pressed')}/>
                <Button title="Đăng Nhập" color='#ff0000' onPress={() => Alert.alert('Simple Button pressed')}/>
            </View>
            
      </View> 
      

    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    paddingTop : 25,
    paddingLeft : 50,
    paddingRight : 50,
  },
  
  
});

export default ForgotPassword;