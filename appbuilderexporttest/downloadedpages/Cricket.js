
import React, { Component } from "react";
import { Button, Picker, Switch, Image, ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
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
  var script_string = script_string + "; window.FrontPage.forceUpdate(); window.updateAppData();"
    try{
        eval("function y(){"+script_string+"}")
        return setInterval(function(){ eval(script_string)},interval);
      } catch(e){
        alert("There was an error trying to run this!" + e);
      }
}

window.runWithInterval = runWithInterval;
runWithInterval = runWithInterval;

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




 class Cricket extends React.Component {
     

    constructor(props)
    {
        super(props);
        this.state = {"key":"value","Baseballinput6":"","Baseballinput7":"","Baseballinput8":"","Baseballinput9":"","Baseballinput10":"","Baseballinput12":"Giancarlo Stanton","Baseballinput13":"Gleyber Torres","Baseballinput14":"Nolan Arrenado","Baseballinput15":"Anthony Rendon","Baseballinput16":"Mookie Betts","Baseballinput2":"","Baseballinput3":"","Baseballinput4":"","Baseballinput5":"","Baseballinput11":"","Sport":"Baseball","PlayerResults":[1,2,3],"Resultspicker0":"Tennis","SportOptions":["Baseball","Hockey","Tennis","Basketball","Cricket","Football"],"filtered_list":[{"Sport":"Baseball","Player":"Nolan Arrenado","Rank":8},{"Sport":"Baseball","Player":"Aroldis Chapman","Rank":5},{"Sport":"Baseball","Player":"Gleyber Torres","Rank":7},{"Sport":"Baseball","Player":"Anthony Rendon","Rank":9},{"Sport":"Baseball","Player":"Mike Trout","Rank":2},{"Sport":"Baseball","Player":"Aaron Judge","Rank":1},{"Sport":"Baseball","Player":"Christian Yelich","Rank":4},{"Sport":"Baseball","Player":"Mookie Betts","Rank":10},{"Sport":"Baseball","Player":"Gerrit Cole","Rank":3},{"Sport":"Baseball","Player":"Giancarlo Stanton","Rank":6},{"Sport":"Baseball","Player":"Aaron Judge","Rank":1},{"Sport":"Baseball","Player":"Gleyber Torres","Rank":7},{"Sport":"Baseball","Player":"Gerrit Cole","Rank":3},{"Sport":"Baseball","Player":"Nolan Arrenado","Rank":8},{"Sport":"Baseball","Player":"Giancarlo Stanton","Rank":6},{"Sport":"Baseball","Player":"Mookie Betts","Rank":10},{"Sport":"Baseball","Player":"e","Rank":4},{"Sport":"Baseball","Player":"Anthony Rendon","Rank":9},{"Sport":"Baseball","Player":"f","Rank":5},{"Sport":"Baseball","Player":"Mike Trout","Rank":2},{"Sport":"Baseball","Player":"Gleyber Torres","Rank":7},{"Sport":"Baseball","Player":"Giancarlo Stanton","Rank":6},{"Sport":"Baseball","Player":"g","Rank":3},{"Sport":"Baseball","Player":"h","Rank":4},{"Sport":"Baseball","Player":"i","Rank":5},{"Sport":"Baseball","Player":"Nolan Arrenado","Rank":8},{"Sport":"Baseball","Player":"e","Rank":1},{"Sport":"Baseball","Player":"Anthony Rendon","Rank":9},{"Sport":"Baseball","Player":"Mookie Betts","Rank":10},{"Sport":"Baseball","Player":"f","Rank":2},{"Sport":"Baseball","Player":"j","Rank":10},{"Sport":"Baseball","Player":"b","Rank":2},{"Sport":"Baseball","Player":"d","Rank":4},{"Sport":"Baseball","Player":"a","Rank":1},{"Sport":"Baseball","Player":"h","Rank":8},{"Sport":"Baseball","Player":"g","Rank":7},{"Sport":"Baseball","Player":"f","Rank":6},{"Sport":"Baseball","Player":"","Rank":5},{"Sport":"Baseball","Player":"i","Rank":9},{"Sport":"Baseball","Player":"c","Rank":3},{"Sport":"Baseball","Player":"b","Rank":2},{"Sport":"Baseball","Player":"h","Rank":8},{"Sport":"Baseball","Player":"e","Rank":5},{"Sport":"Baseball","Player":"i","Rank":9},{"Sport":"Baseball","Player":"j","Rank":10},{"Sport":"Baseball","Player":"c","Rank":3},{"Sport":"Baseball","Player":"a","Rank":1},{"Sport":"Baseball","Player":"g","Rank":7},{"Sport":"Baseball","Player":"f","Rank":6},{"Sport":"Baseball","Player":"d","Rank":4}]}
    }


      
  


   

    render(){ 
      var that = this; 
      
      if(!that.props.loaded){
        return(<View><Text>LOADING</Text></View>)
      }
      return (
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"white"}}>
       <TouchableOpacity
          
          onPress = { function(){that.props.goTo("FirstPage"); that.forceUpdate(); }}  
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
            width:"30%",
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"top":"91.74%","left":"70.7%","innerText":"'Cricket'","color":"red","backgroundColor":"white"}]}
        >
        <Text style = {{color:"red"}}>

        {'Cricket'}

       </Text>
        </TouchableOpacity>
        </View>
        )
    }
  }
    export default Cricket; 



  