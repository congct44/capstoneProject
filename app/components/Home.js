import React from 'react'
import{
    Image,
    View,
    Text,
    StyleSheet,
    Button,
    Linking,
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';





const Home  = ({navigation}) => { 

  return (

    <>
      <View style={styles.container}>
            <Button title="Go to detail" onPress={() => navigation.navigate('Detail')}>
                
            </Button>
            
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

export default Home;