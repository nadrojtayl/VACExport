import { StyleSheet, ScrollView, TouchableOpacity, Button, Picker, Switch, Image, Text, View } from 'react-native';
import React from 'react';


class InfoPage extends React.Component {
      constructor(props){
        super(props);
        this.state = {"key":"value","RegisterPageinput0":"Dog","RegisterPageinput5":"Russian Blue","RegisterPageinput8":"Light blue skin","Info Pageinput1":"d","RegisterPageinput10":"973 768 9820","RegisterPageinput11":"","FindorAdd":true,"AddorFind":true,"loaded":false,"dbLinks":{}}
      }
      
      render(){ 
      var appData = this.state; var that = this; 
      

      


      return (
      <View style = {{width:"380px", height:"657px", borderWidth:5, borderColor:"black", backgroundColor:"white"}}><Text
          style= {{"innerText":null}}
        > {null} </Text>
        
<TextInput
       style= {{"innerText":"Enter Email/Phone ","top":150.712,"left":158.82049999999998}}
        value={that.state["InfoPageinput1"]}
        onChangeText={function(val){that.setState({InfoPageinput1: val});  
       }
       }
        /></View>
        )
      }
    }

export default InfoPage;