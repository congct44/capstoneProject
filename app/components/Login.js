import React, { Component } from 'react';
import { ImageBackground, Dimensions, Image, StatusBar, TouchableOpacity, ScrollView, View } from 'react-native';
import {
  Container, Content, Form,
  Item, Input, Label, Button, Text, Footer
} from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';

import styles from "./styles/LoginStyles";



export default class Login extends Component {
  
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <StatusBar hidden={true} />
        <ImageBackground
          resizeMode='cover'
          source={require('../assets/images/background.png')}
          style={{ flex: 1, paddingVertical: 0, paddingHorizontal: 0, backgroundColor: 'transparent' }}>


          <Grid>

            <Row style={{ flex: 1, backgroundColor: 'transparent' }}>
              <Col style={{ flex: 1, backgroundColor: 'transparent' }}></Col>

              {/* MAIN BODY */}
              <Col style={{ flex: 5, backgroundColor: 'transparent' }}>


                {/* 1 LOGO - in background pic */}
                <Row style={{ flex: 2, backgroundColor: 'transparent' }}>
                  <Image
                    source={require('../assets/images/logoLacViet.png')}
                    resizeMode="contain"
                    style={{ width: 128, flex: 1, marginLeft: 35 }}
                  >
                  </Image>
                </Row>
                {/* LOGO ENDS*/}


                {/* 2 TEXT INPUT */}
                <Row style={{ flex: 2, backgroundColor: 'transparent', flexDirection: 'column', }}>
                  <Row style={{ justifyContent: 'center', flex: 0.5, }}>
                  </Row>
                  <Row style={{ justifyContent: 'center', flex: 1, }}>
                    <Input placeholderTextColor='#ffffff'
                      color='white'
                      placeholder={'Username'}
                      style={styles.inputItem}
                      image
                      onChangeText={(value) => this.setState({ username: value.trim() })} />
                  </Row>
                  <Row style={{ justifyContent: 'center', flex: 1, }}>
                    <Input placeholderTextColor='#ffffff' color='white' secureTextEntry={true}
                      placeholder={'Password'}
                      style={styles.inputItem}
                      onChangeText={(value) => this.setState({ password: value.trim() })} />
                  </Row>
                </Row>
                {/* 2 TEXT INPUT ENDS*/}


                {/* 3 BUTTON */}
                <Row style={{ flex: 1.7, backgroundColor: 'transparent', flexDirection: 'column', }}>
                  <View style={{ justifyContent: 'center', flex: 1, }}>
                    <Button full style={{ backgroundColor: '#fff', borderRadius: 50, textAlign: 'center', alignContent: 'center' }}
                      onPress={() => {
                         navigation.navigate('Homes')
                      }}
                      title=''>
                      <Text style={{ color: '#a84a97', fontSize: 13, }}>
                        Login
                      </Text>
                    </Button>
                  </View>
                  <View style={{ justifyContent: 'center', flex: 0.4, }}>
                    <TouchableOpacity style={{ flex: 1 }}
                      onPress={() => navigation.navigate('ForgotPassword')}  >
                      <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 'bold', fontStyle: 'italic', color: '#ffffff', textDecorationLine: 'underline' }}>
                        Forgot Password
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{ justifyContent: 'center', flex: 1, }}>
                    <Button full style={{ backgroundColor: '#fff', borderRadius: 50 }}
                      onPress={() => {
                        this.goToRegisterScreenOne();
                      }}
                      title=''>
                      <Text style={{ color: '#a84a97', fontSize: 13 }}>
                        Sign Up
                      </Text>
                    </Button>
                  </View>
                </Row>
                {/* 3 BUTTON ENDS */}




                {/* 4 SOCIAL LOGIN */}
                <Row style={{ flex: 1.3, backgroundColor: 'transparent', flexDirection: 'column', }}>
                  <View style={{ justifyContent: 'center', flex: 0.8, }}>
                    <Text style={{ flex: 1, textAlign: 'center', fontSize: 14, fontWeight: 'bold', color: '#ffffff', }}>
                      Login with
                    </Text>
                  </View>
                  <View style={{ justifyContent: 'center', flex: 0.8, }}>
                    <TouchableOpacity title=''
                      style={styles.loginButton} >
                      <ImageBackground
                        resizeMode='contain'
                        source={require('../assets/images/ggfb.png')}
                        style={{
                          width: '100%', flex: 1, justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                      </ImageBackground>
                    </TouchableOpacity>


                  </View>

                  <View style={{ justifyContent: 'center', flex: 0.4, }}>
                  </View>
                </Row>
                <Row style={{ flex: 1, backgroundColor: 'transparent' }}>

                </Row>
                {/* 4 SOCIAL LOGIN ENDS */}


              </Col>
              {/* MAIN BODY ENDS */}


              <Col style={{ flex: 1, backgroundColor: 'transparent' }}></Col>
            </Row>
          </Grid>

        </ImageBackground>
        {/* <Footer/> */}
      </Container>
    );
  }
}
