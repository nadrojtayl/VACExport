
import React, { Component } from "react";
import { ActivityIndicator, Button, Picker, Switch, Image, ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import Calendar from "./Calendar.js";
import appData from "./global.js";
import { Audio } from 'expo-av';
import Multiplier from "./Multiplier.js";

var d = new Date();
var month = d.getMonth();
var day = d.getDate();
global.month = d.getMonth();
global.day = d.getDate();

function hasNumber(myString) {
  return /d/.test(myString);
}



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function resizeFont(num){
  return num / (640/height)
}


global.inputs = {
  0:"This"
}

class Box extends React.Component{
  render(){
    return (<View style={this.props.view}></View>)
  }
}




//READ ONLY API: format
//https://spreadsheets.google.com/feeds/cells/1P0tGuikrAg5ZGpC2fHxLY49Osp6nhwseK2DSr34HM-o/1/public/full?alt=json

function runWithInterval(script_string,interval){
  var script_string = script_string + ";"
  var that = appData.this;
    try{
        eval("function y(){"+script_string+"}")
        return setInterval(function(){ eval(script_string)},interval);
      } catch(e){
        alert("There was an error trying to run this!" + e);
      }
}

window.runWithInterval = runWithInterval;
runWithInterval = runWithInterval;

function realEval(str){
  return eval(str);
}

window.realEval = realEval.bind(this);

function try_eval(input){
  try {
    var output =  eval(input);
    return output
  } catch(e){
    return input;

  }
 }

 function filter_obj_by_phrase(arr,key_name,phrase){
  return arr.filter(function(elem){
    return elem[key_name].indexOf(phrase) !== -1;
  })
}


function filter(arr,phrase){
  return arr.filter(function(elem){
    return elem.indexOf(phrase) !== -1;
  })
}

window.filter = filter;

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

window.onlyUnique = onlyUnique;

function unique(arr){
  return arr.filter(onlyUnique);
}

window.unique = unique;

function unique_return_one_key(arr,key){
  return arr.map(function(obj){
    return obj[key]
  }).filter(onlyUnique);
}

function findInArrayOfObjects(array,search_obj) {
          
            for(var i = 0; i < array.length;i++){
              var match = true;

              Object.keys(search_obj).forEach(function(key){
                if(search_obj[key] !== array[i][key]){
                  match = false;
                }
              })

              if(match){
                return array[i];
              }

            }
            return false;
        }

  window.findInArrayOfObjects = findInArrayOfObjects;

window.unique_return_one_key = unique_return_one_key;

function filter_list_of_objs(arr,key,filter_value){
  return arr.filter(function(obj){
    return obj[key] === filter_value
  })
}

window.filter_list_of_objs = filter_list_of_objs;

function filter_list_of_objs_multiple_keys(arr,filter_object){
  return arr.filter(function(obj){
    var match = true;
    Object.keys(filter_object).forEach(function(key){
      if(filter_object[key] !== obj[key]){
        match = false;
      }
    })
    return match
  })
}

global.filter_list_of_objs_multiple_keys = filter_list_of_objs_multiple_keys;


function map_list_of_objs(arr,key){
  return arr.map(function(obj){
    return obj[key];
  })
}

global.map_list_of_objs = map_list_of_objs;

function clone(arr){
  return arr.slice();
}

global.audio = [];
async function play(url){
  appData.soundObject = new Audio.Sound();
 try {
    await appData.soundObject.loadAsync({uri:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"});
    await appData.soundObject.playAsync();
    // Your sound is playing!
  } catch (error) {
    alert(error);
  }


}

async function pause(){
   await appData.soundObject.pauseAsync();
}

global.play = play;
global.pause = pause;

global.clone = clone;

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
  var value = (try_eval(value) === undefined) ? (default_value):  try_eval(value);
  if(typeof value === "object"){return "Error: This is an object"}
  return value;
}




 class FifthPage extends React.Component {
     

    constructor(props)
    {
        super(props);
        this.state = {"SecondPageinput12":"feel","SecondPageinput11":"suppress","SecondPageinput10":"trigger","ThirdPageinput11":"Select","ThirdPageinput12":"Select","ThirdPageinput13":"Selectd","ThirdPageinput14":"Select","FourthPageinput7":"Select","FourthPageinput8":"Select","FourthPageinput9":"Select","FourthPageinput10":"Select","FifthPageinput7":"Select","FifthPageinput8":"Select","FifthPageinput9":"Select","FifthPageinput10":"Select","TipsPagepicker1":"Depression","selectedCondition":"Depression","filteredList":[{"Condition":"Depression","Tip":"suppress","Trigger":"trigger","Experience":"feel","Index":4}]}
    }


      
  


   

    render(){ 
      var that = this; 
      appData.this = this;
      
      if(!that.props.loaded){
        return(<View style = {{height:'100%',width:'100%', alignItems:'center',justifyContent:'center'}}>
        <ActivityIndicator size="large" />
        <Text style = {{textAlign:'center'}}>Are you a student? Build an app with VineyardAppCamp.com</Text>
        </View>)
      }
      return (
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"white"}}>
       <TouchableOpacity
          
          onPress = { function(){; that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            backgroundColor: '#fff',
            elevation: 2, // Android
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            height:"7%",
            width:"30%",
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"top":"4.94%","left":"33.38%","innerText":"'PTSD '","width":200,"backgroundColor":"#1f99f0"}]}
        >
        <Text style = {{color:"black"}}>

        {'PTSD '}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){that.props.goTo('FirstPage'); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            backgroundColor: '#fff',
            elevation: 2, // Android
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            height:"7%",
            width:"30%",
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"top":"0.35%","left":"84.72%","innerText":"'Go back to home page '"}]}
        >
        <Text style = {{color:"black"}}>

        {'Go back to home page '}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){; that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            backgroundColor: '#fff',
            elevation: 2, // Android
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            height:"7%",
            width:"30%",
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"top":"81.54%","left":"5.84%","innerText":"'Tips'"}]}
        >
        <Text style = {{color:"black"}}>

        {'Tips'}

       </Text>
        </TouchableOpacity>
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"15.21%","left":"3.97%"}]}
        > {} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"27.98%","left":"4.77%"}]}
        > {} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"42.64%","left":"5.31%"}]}
        > {} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"57.1%","left":"5.44%"}]}
        > {} </Text>
        
<TextInput
       style= {[{width:"60%", height:"5%", width:'60%', backgroundColor:'white',borderColor:'grey',borderWidth:1},{"top":"61.39%","left":"5.31%"}]}
        value={appData["FifthPageinput7"]}
         onChangeText={function(val){ appData["FifthPageinput7"] = val; that.forceUpdate();   } }
        />
<TextInput
       style= {[{width:"60%", height:"5%", width:'60%', backgroundColor:'white',borderColor:'grey',borderWidth:1},{"top":"47.43%","left":"3.97%"}]}
        value={appData["FifthPageinput8"]}
         onChangeText={function(val){ appData["FifthPageinput8"] = val; that.forceUpdate();   } }
        />
<TextInput
       style= {[{width:"60%", height:"5%", width:'60%', backgroundColor:'white',borderColor:'grey',borderWidth:1},{"top":"32.47%","left":"4.24%"}]}
        value={appData["FifthPageinput9"]}
         onChangeText={function(val){ appData["FifthPageinput9"] = val; that.forceUpdate();   } }
        />
<TextInput
       style= {[{width:"60%", height:"5%", width:'60%', backgroundColor:'white',borderColor:'grey',borderWidth:1},{"top":"19.3%","left":"3.84%"}]}
        value={appData["FifthPageinput10"]}
         onChangeText={function(val){ appData["FifthPageinput10"] = val; that.forceUpdate();   } }
        />
        </View>
        )
    }
  }
    export default FifthPage; 



  