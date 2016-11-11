# RN-Loading-View

Just combines loading indicator with optional text into one component so you can quickly construct loading views

* `npm install rn-loading-view --save`



### Props

| Prop | Type | Description |
| ---  | ---  | ---         |
| size | either `small` or `large` | the loading indicator size |
| animating | boolean | should it animate?, default is yes |
| color | string | color of loading indicator |
| text | string | optional text to display |
| textStyle | object | styles applied to the text |

size: React.PropTypes.oneOf(['small','large']),
animating: React.PropTypes.bool,
color: React.PropTypes.string,
text: React.PropTypes.string,
textStyle: React.PropTypes.object



```js
import React, { Component } from 'react';
import { View } from 'react-native';
import LoadingView from 'rn-loading-view';

class LoadingViewExampleOne extends Component {
  render(){
    return(
      <LoadingView
        size={'large'}
        animating={true}
        color={'deeppink'}
        text={'Hold on here...I\'m loading' }
        textStyle={{
          color: 'red',
          fontSize: 20,
        }}
      />
    )
  };

class LoadingViewExampleTwo extends Component {
  render(){
    return(
      <View style={{flex:1,backgroundColor:'cyan'}}>
        <LoadingView
          size={'large'}
          animating={true}
          color={'black'}
          text={'Loading....' }
          textStyle={{
            color: 'black',
            fontSize: 20,
          }}
        />
      </View>
    )
  };

}
```
![Example One](./ExampleOne.png)

![Example Two](./ExampleTwo.png)
