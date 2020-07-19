import React from 'react'
import{
    Image,
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';



const Detail  = ({navigation}) => { 
  return (
    <>
      <View style={styles.container}>
            <Button title="Go to home" onPress={() => navigation.navigate('Home')}/>
      </View>

    </>
  );
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Detail;
