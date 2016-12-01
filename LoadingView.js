'use strict'

import React from 'react';
import { View, ActivityIndicator, Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({container:{flex:1,alignItems:'center',justifyContent:'center'}})

export default class LoadingView extends React.Component {
 render(){
   let { buttonText, buttonProps, renderButton, buttonTextProps, spinnerProps, textProps, text } = this.props;
   if (renderButton) {
     var SCREEN = (
       <View style={styles.container}>
         <TouchableOpacity {...this.props.buttonProps}>
           <Text {...this.props.buttonTextProps}>{this.props.buttonText}</Text>
         </TouchableOpacity>
       </View>
     )
   } else {
     var SCREEN = (
       <View style={styles.container}>
         <ActivityIndicator {...this.props.spinnerProps}/>
         <Text {...this.props.textProps} >{this.props.text}</Text>
       </View>
     )
   }
   return SCREEN
 };
}
