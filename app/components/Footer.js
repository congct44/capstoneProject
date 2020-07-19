import React, { Component } from 'react';
import {
    FooterTab,
    Footer,
    Button,
    Icon,
    Text
} from 'native-base';

export default class FooterComponent extends Component {
    menus = [
        {key: 'Home', icon: "home", iconType:"Entypo", text: 'Home'},
        {key: 'Detail', icon: "bullhorn",   iconType:"FontAwesome", text: 'Emergency'},
        {key: 'Home', icon: "share-2",  iconType:"Feather",  text: 'Connect'},
        {key: 'Detail', icon: "settings",  iconType:"MaterialCommunityIcons", text: 'Settings'},

        
        // {key: 'SCHome', icon: "home", iconType:"Entypo", text: 'Trang chủ'},
        // {key: 'SCEmergencySupport', icon: "bullhorn",   iconType:"FontAwesome", text: 'Hỗ trợ khẩn'},
        // {key: 'SCConnect2', icon: "share-2",  iconType:"Feather",  text: 'Kết nối'},
        // {key: 'SettingScreen', icon: "settings",  iconType:"MaterialCommunityIcons", text: 'Cài đặt'},
    ];


    render() {
        return (
            <Footer  style={{backgroundColor: '#ffffff',borderTopColor:'rgba(233,230,232,0.6)',borderTopWidth:1, }}>
                <FooterTab  style={{backgroundColor: '#ffffff', marginHorizontal:0}} >
                    {this.menus.map((menu, i) => {
                        let active = false;
                        let activeColor = '#6e6d6e';
                        if (this.props.active === null && i === 0) active = true;
                        else if (this.props.active === menu.key){
                            active = true;
                            activeColor = '#9a509a';
                        } 
                        return (
                            <Button
                                title=''
                                key={menu.key}
                                vertical
                                active={active} style={{backgroundColor :'#ffffff',marginHorizontal:-10}}
                                onPress={() => this.navigateOnce(menu.key)}>
                                    <Icon name={menu.icon} style={{color:activeColor}} type={menu.iconType}  />
                                    <Text numberOfLines={1} style={{fontSize:9, color:activeColor,textAlign:'center'}}>
                                        {menu.text}
                                    </Text>
                            </Button>
                        );
                    })}
                </FooterTab>
            </Footer>
        );
    }
}