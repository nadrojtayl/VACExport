import React from 'react';
import { TextInput, StyleSheet, ScrollView, TouchableOpacity, Button, Picker, Switch, Image, Text, View } from 'react-native';
import appData from './global.js';

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
        this.state = {}
      }
     
      render(){ 
      var that = this; 
      

    


      return (
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"white"}}>
      

        
        <Text
          style= {{textAlign:'center', marginTop:"25%", 
          alignItems:'center', "left":"0%",
          width:"100%",
          height:"5%",
          "innerText":"What Type of Animal","color":"black",
          "backgroundColor":"#9a82cf",
          "textAlign":"center",
          justifyContent:'center'
          }}
        > {"What Type of Animal"} </Text>
        <TextInput
         style= {{"width":"90%",height:"5%"}}
          value={appData.RegisterPageinput0}
          onChangeText={
            function(val){
              appData.RegisterPageinput0 = val;
              that.forceUpdate();
            }
         }
          />
        
        
        <Text
          style= {{"innerText":"What Breed of Animal","backgroundColor":"#9a82cf",
        width:"100%",
          height:"5%",
          textAlign:'center',
          textJustify:'center'
        }}
        > {"What Breed of Animal"} 
        </Text>
        
<TextInput
       style= {{"width":"90%",height:"5%"}}
        value={appData.RegisterPageinput5}
        onChangeText={function(val){
          appData.RegisterPageinput5 = val;
          that.forceUpdate();
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
          style= {{"innerText":"Animal Description","backgroundColor":"#9a82cf",
        width:"100%",
          height:"5%",
          textAlign:'center'

        }}
        > {"Animal Description"} </Text>
        
<TextInput
       style= {{"alignItems":null,"width":"90%", height:"5%"}}
        value={appData.RegisterPageinput8}
        onChangeText={function(val){
          that.setState({RegisterPageinput8: val});  
          appData.RegisterPageinput8 = val;
       }
       }
        />
 <TouchableOpacity
          
    onPress = { function(){
      try{
        if(appData.AddorFind === true){
           var matchinganimals =filter_list_of_objs(animals,"Type",appData.RegisterPageinput0);
          
           appData.matchingList = matchinganimals;
           that.props.goTo("LastPage");
           that.forceUpdate(); 
        } else {
          that.props.sendToDatabase("animals",{"Email/Phone":appData.RegisterPageinput10,"Type":appData.RegisterPageinput0,"Breed":appData.RegisterPageinput5,"Description":appData.RegisterPageinput8});
        }
       
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
            position:'absolute',
            top:0,left:0,
             backgroundColor:'#8fd158', 
             alignItems:'center',justifyContent:'center', 
             height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"top":"65%","left":96.82049999999998,"innerText":"Done","width":"50%","textAlign":"center","backgroundColor":"#a3e3a9","color":"black"}]}
        ><Text>{"Done"}</Text>
        </TouchableOpacity>
        <Text
          style= {{"innerText":"Enter Email/Phone","backgroundColor":"#9a82cf",
        width:"100%",
          height:"5%",
          textAlign:'center'}}
        > {"Enter Email/Phone"} </Text>
      <TextInput
       style= {{"width":"90%", height:"5%"}}
        value={appData.RegisterPageinput10}
        onChangeText={function(val){
        appData.RegisterPageinput10 = val;
        that.forceUpdate();
       }
       }
        />

        </View>
        )
      }
    }

export default RegisterPage;