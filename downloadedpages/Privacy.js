import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Button, Picker, Switch, Image, Text, View } from 'react-native';
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


class Privacy extends React.Component {
      constructor(props){
        super(props);
        this.state = {"key":"value","RegisterPageinput0":"Dog","RegisterPageinput5":"Russian Blue","RegisterPageinput8":"Light blue skin","Info Pageinput1":"d","RegisterPageinput10":"973 768 9820","RegisterPageinput11":"","FindorAdd":true,"AddorFind":true,"loaded":false,"dbLinks":{}}
      }
      
      render(){ 
      	console.log("PRIVACY")
      var appData = this.state; var that = this; 
      

     


      return (
      <View style = {{width:"380px", height:"657px", borderWidth:5, borderColor:"black", backgroundColor:"white"}}><Text
          style= {{"innerText":"The information that you give us will only be used for one reason. It will not be used for anything or given to anyone else.","top":102.71199999999999,"left":95.82049999999998,"height":"40%","textAlign":"center","backgroundColor":"#e6a3aa","width":"50%"}}
        > {"The information that you give us will only be used for one reason. It will not be used for anything or given to anyone else."} </Text>
        
 <TouchableOpacity
          
          onPress = { function(){that.props.goTo ("FirstPage"); that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"innerText":">>Back","backgroundColor":"#e6a3aa","top":7.711999999999989,"left":10.820499999999981,"alignItems":null,"color":"black"}]}
        ><Text>{">>Back"}</Text>
        </TouchableOpacity></View>
        )
      }
    }


export default Privacy;