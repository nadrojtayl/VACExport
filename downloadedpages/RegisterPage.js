import React from 'react';
import { TextInput, StyleSheet, ScrollView, TouchableOpacity, Button, Picker, Switch, Image, Text, View } from 'react-native';

function try_eval(input){
  try {
    var output =  eval(input);
    return output
  } catch(e){
    return input;

  }
 }


function filter(arr,phrase){
  return arr.filter(function(elem){
    return elem.indexOf(phrase) !== -1;
  })
}

function filter_list_of_objs(arr,key,filter_value){
  return arr.filter(function(obj){
    return obj[key] === filter_value
  })
}

function map_list_of_objs(arr,key){
  return arr.map(function(obj){
    return obj[key];
  })
}

function clone(arr){
  return arr.slice();
}


function convert_spreadsheet_data_to_obj(data){
  return {
    row: data.gs$cell.row,
    col: data.gs$cell.col,
    data: data.content.$t,
    type:data.content.type
  }
}



function unwrap_dynamically(value,default_value){
  if(default_value === undefined){
    default_value = "undefined"
  }
  return try_eval(value) === undefined ? (default_value):  try_eval(value) 
}


class RegisterPage extends React.Component {
      constructor(props){
        super(props);
        this.state = {"key":"value","RegisterPageinput0":"Dog","RegisterPageinput5":"Russian Blue","RegisterPageinput8":"Light blue skin","Info Pageinput1":"d","RegisterPageinput10":"973 768 9820","RegisterPageinput11":"","FindorAdd":true,"AddorFind":true,"loaded":false,"dbLinks":{}}
      }
     
      render(){ 
      var appData = this.state; var that = this; 
      

    


      return (
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"white"}}><TextInput
       style= {{"top":243.712,"left":3.8204999999999814,"width":"90%"}}
        value={that.state["RegisterPageinput0"]}
        onChangeText={function(val){that.setState({RegisterPageinput0: val});  
       }
       }
        />
<Text
          style= {{"top":-28.28800000000001,"left":47.82049999999998,"innerText":null}}
        > {null} </Text>
        
<Text
          style= {{"top":213.712,"left":-0.17950000000001864,"innerText":"What Type of Animal","color":"black","backgroundColor":"#9a82cf","textAlign":null}}
        > {"What Type of Animal"} </Text>
        
<Text
          style= {{"top":34.71199999999999,"left":37.82049999999998,"innerText":null}}
        > {null} </Text>
        
<Text
          style= {{"top":290.712,"left":-0.17950000000001864,"innerText":"What Breed of Animal","backgroundColor":"#9a82cf"}}
        > {"What Breed of Animal"} </Text>
        
<TextInput
       style= {{"top":327.712,"left":2.8204999999999814,"width":"90%"}}
        value={that.state["RegisterPageinput5"]}
        onChangeText={function(val){that.setState({RegisterPageinput5: val});  
       }
       }
        />
 <TouchableOpacity
          
          onPress = { function(){that.props.goTo("FirstPage"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            backgroundColor: '#fff',
            elevation: 2, // Android
            height: 50,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"innerText":"< Back","backgroundColor":"#e6a3aa","color":"black"}]}
        ><Text>{"< Back"}</Text>
        </TouchableOpacity>
<Text
          style= {{"top":380.712,"left":0.8204999999999814,"innerText":"Animal Description","backgroundColor":"#9a82cf"}}
        > {"Animal Description"} </Text>
        
<TextInput
       style= {{"top":410.712,"left":3.8204999999999814,"alignItems":null,"width":"90%"}}
        value={that.state["RegisterPageinput8"]}
        onChangeText={function(val){that.setState({RegisterPageinput8: val});  
       }
       }
        />
 <TouchableOpacity
          
    onPress = { function(){
      try{

       var matchinganimals =filter_list_of_objs(animals,"Type",appData.RegisterPageinput0);
       alert(JSON.stringify(matchinganimals));
       that.props.goTo("LastPage");
       that.forceUpdate(); 
      } catch(e){
        alert(e);
      }
     }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            backgroundColor: '#fff',
            elevation: 2, // Android
            height: 50,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"top":475.712,"left":96.82049999999998,"innerText":"Done","width":"50%","textAlign":"center","backgroundColor":"#a3e3a9","color":"black"}]}
        ><Text>{"Done"}</Text>
        </TouchableOpacity>
<TextInput
       style= {{"top":166.712,"left":3.8204999999999814,"width":"90%"}}
        value={that.state["RegisterPageinput10"]}
        onChangeText={function(val){that.setState({RegisterPageinput10: val});  
       }
       }
        />
<Text
          style= {{"top":137.712,"left":-0.17950000000001864,"innerText":"Enter Email/Phone","backgroundColor":"#9a82cf"}}
        > {"Enter Email/Phone"} </Text>
        </View>
        )
      }
    }

export default RegisterPage;