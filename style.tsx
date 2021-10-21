import {StyleSheet, TouchableWithoutFeedbackBase} from 'react-native';
import appTheme from './appTheme';

const appStyle = StyleSheet.create({
    page : {
        flex:1,
  
        
        },
      divider : {
          margin : 10,
          height : 2,
          borderRadius : 8,
          backgroundColor : '#666666ff',
          opacity : 0.2,
          width : '95%'

        },
      main : {
          alignItems : 'center',
          width : '100%',
          marginVertical : '50%'
        },
      input : {
          margin : 20,
          marginBottom : 10,
          width : '80%',
          height : 40,
          textAlign : 'center',
          alignSelf : 'center',
          backgroundColor : 'white',
          padding :10,
          borderRadius : 10,
          shadowColor : 'black',
          shadowOpacity : 0.05,        
        },
      background : {
          resizeMode : 'stretch',
          flex: 1,   
        },
      button : {
          padding :10,
          height : 38,
          
          textAlign : 'center',
          alignSelf : 'center',
          backgroundColor : appTheme.primaryColor,
          
          borderRadius : 10,
          marginTop : 10,
          margin : 5,
          alignItems : 'center',
        },
        button2 : {
          padding :10,
          height : 38,
          textAlign : 'center',
          alignSelf : 'center',
          backgroundColor : appTheme.secondaryColor,
          width : '20%',
          borderRadius : 10,
          marginTop : 10,
          margin : 5,
          alignItems : 'center',
        },
        secondary_button : {
            padding :10,
            backgroundColor : appTheme.secondaryColor,
            width : '20%',
            borderRadius : 10,
            marginTop : 10,
            margin : 5,
            alignItems : 'center',
          },
      title : {
          fontSize : 30,
          fontWeight : 'bold',
          marginBottom:10,
          color : 'white'
        }
})

export default appStyle;