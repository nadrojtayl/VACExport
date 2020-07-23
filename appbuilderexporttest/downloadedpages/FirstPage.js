
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




 class FirstPage extends React.Component {
     

    constructor(props)
    {
        super(props);
        this.state = {"key":"value","FirstPageinput1":"hhhhhhi","Settingsswitch0":true,"Settingsswitch2":true,"X":330,"Move":105,"Move2":1310,"Mainswitch78":true,"inter":4014,"inter2":0,"loaded":false,"dbLinks":{},"tomove2":365,"yeet":2666,"thet":2667,"enemies":[54,55,56,55,56,57,58],"spawned":4,"ended":true,"done":false}
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
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"grey"}}>
      

      <TouchableOpacity
      style= {[{width:"30%",height:"30%", position:'absolute',top:"31.75%",left:"35.36%"}]}
       onPress = { function(){that.props.goTo("Main"); that.forceUpdate(); }}  
      >
      <Image
        style= {[{width:"100%",height:"100%"}, {"source":"https://i.imgur.com/aGSr19H.gif","backgroundColor":"transparent","top":"31.75%","left":"35.36%","resizeMode":"contain","alignItems":null,"height":"30%","width":"30%"}]}
        source = {{uri:'https://i.imgur.com/aGSr19H.gif'}}
       
      >
      </Image>
      </TouchableOpacity>


      
<TextInput
       style= {[{width:"60%", height:"5%", width:'60%', backgroundColor:'white',borderColor:'grey',borderWidth:1},{"top":"30.64%","left":"36.87%","borderColor":"black"}]}
        value={appData["FirstPageinput1"]}
         onChangeText={function(val){ appData["FirstPageinput1"] = val; that.forceUpdate();   } }
        />
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"26.99%","left":"47.57%","innerText":"'Name'"}]}
        > {'Name'} </Text>
        


      <Image
        style= {[{width:"20%",height:"20%"}, {"source":"https://i.imgur.com/cQs1QEn.png","top":"16.06%","left":"10.19%","backgroundColor":"transparent","resizeMode":"contain"}]}
        source = {{uri:'https://i.imgur.com/cQs1QEn.png'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"source":"https://i.imgur.com/KbSqCge.jpg","resizeMode":"contain","top":"-55.45%","left":"0.2%","fontSize":"resizeFont(null)","width":"100%","backgroundColor":"transparent","zIndex":-10000}]}
        source = {{uri:'https://i.imgur.com/KbSqCge.jpg'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"source":"https://cdn1.vectorstock.com/i/1000x1000/52/10/game-scene-pixelated-background-vector-12125210.jpg","height":"100%","width":"100%","top":"15.42%","left":"0.3%","backgroundColor":"transparent","zIndex":-10000000}]}
        source = {{uri:'https://cdn1.vectorstock.com/i/1000x1000/52/10/game-scene-pixelated-background-vector-12125210.jpg'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      
 <TouchableOpacity
          
          onPress = { function(){that.props.goTo("Settings"); that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"top":"57.3%","left":"40.3%","innerText":"'Settings'"}]}
        >
        <Text style = {{color:"black"}}>

        {'Settings'}

       </Text>
        </TouchableOpacity>


      <Image
        style= {[{width:"20%",height:"20%"}, {"source":"https://i.imgur.com/KbSqCge.jpg","top":"-3.51%","left":"0.08%","width":"100%"}]}
        source = {{uri:'https://i.imgur.com/KbSqCge.jpg'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      
        </View>
        )
    }
  }
    export default FirstPage; 



  