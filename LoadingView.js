'use strict'

import React, { Component } from 'react';
import { View, ActivityIndicator, Text, TouchableOpacity } from 'react-native';

export default class LoadingView extends Component {
  constructor(){
    super();
    this.state = {
      buttonY: 0,
    }
  }
 render(){
   return(
     <View style={{
       flex:1,
       alignItems:'center',
       justifyContent:'center'
     }}>
       <ActivityIndicator {...this.props.spinnerProps}/>
       <Text
         onLayout={ (e) => this.setState({buttonY:(e.nativeEvent.layout.y + e.nativeEvent.layout.height)}) }
         {...this.props.textProps} >
         {this.props.text}
       </Text>
       {this.renderButton()}
     </View>
   )
 };

 renderButton(){
   if (this.props.renderButton) {
     return(
       <View style={{position:'absolute',top:this.buttonY,left:0,right:0,alignItems:'center'}}>
         <TouchableOpacity {...this.props.buttonProps}>
           <Text {...this.props.buttonTextProps}>{this.props.buttonText}</Text>
         </TouchableOpacity>
       </View>
     )
   }
 }

};
