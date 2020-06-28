import React from 'react';


class InfoPage extends React.Component {
      constructor(props){
        super(props);
        this.state = {"key":"value","RegisterPageinput0":"Dog","RegisterPageinput5":"Russian Blue","RegisterPageinput8":"Light blue skin","Info Pageinput1":"d","RegisterPageinput10":"973 768 9820","RegisterPageinput11":"","FindorAdd":true,"AddorFind":true,"loaded":false,"dbLinks":{}}
      }
      componentDidMount(){
        var appData = this.state;
        var that = this;
        var dbLinks = {"animals":"https://sheetsu.com/apis/v1.0su/3e46d7afe9c1"}
        Object.keys(dbLinks).forEach(function(key){
          that.connectToDatabase(dbLinks[key], key);
        })


      }
      render(){ 
      var appData = this.state; var that = this; 
      

      if(!that.state.loaded){
        return(<View><Text>LOADING</Text></View>)
      }


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