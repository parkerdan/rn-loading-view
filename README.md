# RN-Loading-View

Just combines loading indicator with optional text and button into one component so you can quickly construct loading views

* `npm install rn-loading-view --save`



### Props

| Prop | Type | Description |
| ---  | ---  | ---         |
| spinnerProps | object | ActivityIndicator Props|
| text | string | text to display below the spinner |
| textProps | object |  Text Props |
| renderButton | boolean | render a button below the text |
| buttonText | string | text in the button |
| buttonTextProps | object | Text Props for button text |
| buttonProps | object | TouchableOpacity Props |


```js
import React from 'react';
import { View } from 'react-native';
import LoadingView from 'rn-loading-view';

class LoadingViewExampleOne extends React.Component {
  render(){
    return(

      <LoadingView
        text={ 'Hold on here...I\'m loading' }
        textProps={{ style: {color:'red',fontSize:20} }}
        spinnerProps={{size:'large',color:'deeppink'}}
      />

    )
  };

class LoadingViewExampleTwo extends React.Component {
  render(){
    return(
        <LoadingView
          text={ 'Getting information...' }
          renderButton={ (some condition) ? true:false }
          spinnerProps={{ size:'small' }}
          buttonText={ 'Try Again?' }
          buttonProps={{
            style: {backgroundColor:'red',padding:10},
            onPress: () => console.log('do stuff')
          }}
        />
    )
  };

}
```
