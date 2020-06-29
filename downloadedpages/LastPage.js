import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Button, Picker, Switch, Image, Text, View } from 'react-native';
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


class LastPage extends React.Component {
      constructor(props){
        super(props);
        this.state = {"key":"value","RegisterPageinput0":"Dog","RegisterPageinput5":"Russian Blue","RegisterPageinput8":"Light blue skin","Info Pageinput1":"d","RegisterPageinput10":"973 768 9820","RegisterPageinput11":"","FindorAdd":true,"AddorFind":true,"loaded":false,"dbLinks":{}}
      }
      
      render(){ 
      var that = this; 
      

    


      return (
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"white"}}>
      <Text
          style= {{"textAlign":"center","backgroundColor":"#ccb2db","height":"3%","width":"100%","borderColor":"black", marginTop:"20%"}}
        > 
        <Text style = {{color:'black'}}>{"Thank You For Helping Locate A Lost Animal. "} </Text>

        </Text>
        <Text
          style= {{"textAlign":"center","backgroundColor":"#ccb2db","height":"5%","width":"100%","borderColor":"black"}}
        > 
        <Text style = {{color:'black'}}>{"Here are our matching animals."} </Text>

        </Text>
        <View style = {{height:"30%"}}>
        <ScrollView >
        {appData.matchingList.map(function(match){
          return (
          
          <View style = {{borderColor:'black',borderWidth:1, marginBottom:"4%"}}>
            <Text style = {{fontWeight:'bold'}}>{match["Email/Phone"]}</Text>
            <Text>{match["Description"]}</Text>
          </View>
          
          )
        }


        )}
        </ScrollView>
        </View>
        
 <TouchableOpacity
          
          onPress = { function(){
            that.props.goTo("FirstPage"); 
            that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"innerText":"Back<<","borderColor":"black","color":"black"}]}
        ><Text>{"Back<<"}</Text>
        </TouchableOpacity></View>
        )
      }
    }

    export default LastPage;