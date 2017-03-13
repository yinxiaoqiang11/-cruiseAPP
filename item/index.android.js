/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    Image,
    ListView,
    Navigator
} from 'react-native';

let width=Dimensions.get("window").width;
let height=Dimensions.get("window").height;
let Mock= require('mockjs');
var Icon = require('react-native-vector-icons/FontAwesome');
let Swiper=require("react-native-swiper");
let Menu=require("./APP/shouye/index");


class Item extends Component{
  render(){
    return(
        <Navigator
            initialRoute={{
              component:Menu
            }}
            configureScene={(route)=>{
              return Navigator.SceneConfigs.FloatFromRight;

            }}
            renderScene={(route, navigator) => {
              let Component = route.component;
              return <Component {...route.params} navigator={navigator} />
            }}

        />

        // <Rihan/>
        // <Rihanhangxian/>
    )
  }
}


AppRegistry.registerComponent('item', () => Item);

