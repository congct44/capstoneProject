import React from 'react'
import{
    Image,
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { WebView } from 'react-native-webview';

const Homes  = () => { 
  return (
    <>
      <WebView source={{ uri: 'https://lacvietauction.vn/' }} />
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

export default Homes;
