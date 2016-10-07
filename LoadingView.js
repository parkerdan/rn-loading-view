'use strict'

import React, { Component, Prop } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

const propTypes = {
 size: React.PropTypes.oneOf(['small','large']),
 animating: React.PropTypes.bool,
 color: React.PropTypes.string,
 text: React.PropTypes.string,
 textStyle: React.PropTypes.object
};

export default class LoadingView extends Component {
 render(){
   return(
     <View style={{
       flex:1,
       alignItems:'center',
       justifyContent:'center'
     }}>
       <ActivityIndicator
         size={this.props.size}
         color={this.props.color}
         animating={this.props.animating}
       />
       <Text style={[{textAlign:'center'},this.props.textStyle]}>
         {this.props.text}
       </Text>
     </View>
   )
 };
};

LoadingView.propTypes = propTypes;
