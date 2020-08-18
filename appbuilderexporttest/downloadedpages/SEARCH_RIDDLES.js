
import React, { Component } from "react";
import { ActivityIndicator, Button, Picker, Switch, Image, ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import Calendar from "./Calendar.js";
import appData from "./global.js";
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




 class SEARCH_RIDDLES extends React.Component {
     

    constructor(props)
    {
        super(props);
        this.state = {"key":"value","FirstPageinput2":"Select","FirstPagepicker0":"","loaded":false,"dbLinks":{},"LOGIN_SIGNUPinput2":"","LOGIN_SIGNUPinput3":"","FirstPageinput4":"","FirstPageinput5":"","FirstPageinput3":"","CREATEinput3":"","CREATEinput4":"","index":1,"opacity":0,"FirstPageinput6":"","index2":1,"search":[{"Riddle":"Why did the lizard cross the playground?","Answer":"To get to the other slide.","Owner":"Mamacita"},{"Riddle":"Why?","Answer":"Of course","Owner":"Mamacita"}],"opacity2":0,"SEARCH_VIEWinput3":"","data":[{"Riddle":"What comes once in a minute, twice in a moment, but never in a thousand years?","Answer":"The letter \"M\".","Owner":"Riddlemethis","Index":0},{"Riddle":"What is more useful when it is broken?","Answer":"An egg.","Owner":"Riddlemethis","Index":1},{"Riddle":"I'm not clothes but I cover your body. The more I'm used, the thinner I grow. What am I?","Answer":"A bar of soap.","Owner":"Riddlemethis","Index":2},{"Riddle":"What eight letter word can you take one letter away from to create a new word, until it's just one letter?","Answer":"Starting.","Owner":"Riddlemethis","Index":3},{"Riddle":"What can go up and come down without moving?","Answer":"The temperature / Mood / The sun.","Owner":"Riddlemethis","Index":4},{"Riddle":"Why did the lizard cross the playground?","Answer":"To get to the other slide.","Owner":"Mamacita"},{"Riddle":"Why?","Answer":"Of course","Owner":"Mamacita"}],"SEARCH_VIEWinput8":"","searching":"","searching2":"","profiles":[{"Usernames":"Mamacita","Passwords":"1019"}]}
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
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"pink"}}>
       <TouchableOpacity
          
          onPress = { function(){that.props.goTo('SEARCH_VIEW');; that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"fontSize":"resizeFont(12)","innerText":"'BACK '","height":25,"width":50,"top":"88.73%","left":"84.32%"}]}
        >
        <Text style = {{color:"black"}}>

        {'BACK '}

       </Text>
        </TouchableOpacity>
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"innerText":"'_____________________________________________________________'","top":"7.7%","left":"4.26%","color":"#204016"}]}
        > {'_____________________________________________________________'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},
          {"innerText":"'SEARCH RIDDLES'","fontSize":30,"color":"#204016","top":"4.37%","left":"5.04%"}]}
        > {'SEARCH RIDDLES'} </Text>
        
 <TouchableOpacity
          
          onPress = { function(){appData.index2 ++;
appData.opacity2 = 0;
if (appData.index2 > appData.search.length - 1){
appData.index2 = 0;
}; that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},
            {"innerText":"'NEXT'","color":"pink","backgroundColor":"#204106","borderWidth":1,"borderStyle":"dashed","top":"52.09%","left":"67.86%","fontWeight":"bold"}]}
        >
        <Text style = {{color:"pink"}}>

        {'NEXT'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){appData.index -=1;
appData.opacity2 = 0;
if (appData.index < 0){
appData.index = Data_Riddles.length -1;    
}; that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"innerText":"'PREVIOUS'","color":"pink","backgroundColor":"#204106","borderWidth":1,"borderStyle":"dashed","top":"52.27%","left":"1.73%","fontWeight":"bold"}]}
        >
        <Text style = {{color:"pink"}}>

        {'PREVIOUS'}

       </Text>
        </TouchableOpacity>
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"13.47%","left":"0%","innerText":" appData.search[appData.index2][\"Riddle\"];","color":"#204016","fontSize":20,"textAlign":"center","width":"100%"}]}
        > {          appData.search[appData.index2]["Riddle"]} </Text>
        
 <TouchableOpacity
          
          onPress = { function(){if(appData.opacity2 > 0){
appData.opacity2 = 0;
}else {
appData.opacity2 = 1;
}; that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"innerText":"'ANSWER'","color":"pink","backgroundColor":"#204106","borderWidth":1,"borderStyle":"dashed","top":"52.09%","left":"35.43%","fontWeight":"bold"}]}
        >
        <Text style = {{color:"pink"}}>

        {'ANSWER'}

       </Text>
        </TouchableOpacity>
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"45.38%","left":"4.62%","color":"#204016","fontSize":17,"innerText":"   'By ' + appData.search[appData.index2]['Owner'];","textAlign":"Center"}]}
        > {   'By ' + appData.search[appData.index2]['Owner']} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"32.06%","left":"0.42%","innerText":"  appData.search[appData.index2]['Answer'];","fontSize":20,"color":"#204016","opacity":appData.opacity2,"textAlign":"center"}]}
        > {  appData.search[appData.index2]['Answer']} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"24.47%","left":"21.45%","innerText":"'________________________________________'","color":"#204016"}]}
        > {'________________________________________'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"37.79%","left":"21.71%","innerText":"'________________________________________'","color":"#204016"}]}
        > {'________________________________________'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"63.52%","left":"9.04%","innerText":"'Use the previous and next buttons to switch between questions. Use the answer button to show and hide the answer.'","textAlign":"center","width":"85%","fontSize":"resizeFont(17)","color":"#204016"}]}
        > {'Use the previous and next buttons to switch between questions. Use the answer button to show and hide the answer.'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"83.14%","left":"0.68%","innerText":"      \"Searching \"  + appData.searching2 + \" for: \" + appData.searching;","color":"#204016"}]}
        > {      "Searching "  + appData.searching2 + " for: " + appData.searching} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"76.11%","left":"22.72%","innerText":"'________________________________________'","color":"#204016"}]}
        > {'________________________________________'} </Text>
        
        </View>
        )
    }
  }
    export default SEARCH_RIDDLES; 



  