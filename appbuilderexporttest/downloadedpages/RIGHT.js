
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




 class RIGHT extends React.Component {
     

    constructor(props)
    {
        super(props);
        this.state = {"key":"value","RIGHTswitch0":"false","WRONGinput0":"Select","Index":0,"option":2,"answerlist":["Right answer2","Wrong4","Wrong5","Wrong6"],"clicked":0,"option3":0,"option4":2,"topscore":137,"lastscore":17,"randIndex":0,"option2":1,"opt1":2,"opt2":3,"opt3":1,"opt4":0,"randindex":6,"FirstPageswitch4":true,"kitkat":0,"styleanswerlist":["Right answer2","Wrong4","Wrong5","Wrong6"],"countryanswerlist":["Right answer","Wrong 1","Wrong 2","Wrong 3"],"imagelink":"https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1200px-Flag_of_Sweden.svg.png"}
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
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"black"}}>
      

      <Image
        style= {[{width:"20%",height:"20%"}, {"top":"-5.19%","left":"-0.75%","source":"https://assets.wallpapersin4k.org/uploads/2017/04/Bright-Lime-Green-Wallpaper-13.jpg","height":1000,"width":1000}]}
        source = {{uri:'https://assets.wallpapersin4k.org/uploads/2017/04/Bright-Lime-Green-Wallpaper-13.jpg'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      
<View
        style= {[{position:'absolute',zIndex:-1000, height:'10%',width:'10%'},{}]}
        ></View>
<View
        style= {[{position:'absolute',zIndex:-1000, height:'10%',width:'10%'},{}]}
        ></View>
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"fontSize":"resizeFont(80)","innerText":"'CORRECT'","color":"white","top":"27.38%","left":"9.91%"}]}
        > {'CORRECT'} </Text>
        
 <TouchableOpacity
          
          onPress = { function(){

var lst = [0, 1, 2, 3];
for(let i =lst.length - 1; i > 0; i--){
  const j = Math.floor(Math.random() * i)
  const temp = lst[i]
    lst[i] = lst[j]
    lst[j] = temp
}
appData.opt1 = lst[0];
appData.opt2 = lst[1];
appData.opt3 = lst[2];
appData.opt4 = lst[3];

var randomnumber = Math.random();
console.log(randomnumber);
if(randomnumber < 0.5) {
    appData.randindex= Math.floor(Math.random()*Flags[0]["Flag question count"]);
    appData.imagelink = Flags[appData.randindex]["Flag link"];
        appData.answerlist = appData.countryanswerlist;    
    }

else{
    appData.randindex= Math.floor(Math.random()*Flags[0]["Style question count"]);
    appData.imagelink = Flags[appData.randindex]["Style link"];
    appData.answerlist = appData.styleanswerlist;
}



appData.lastscore += 1

that.props.goTo("QUESTIONUNO"); that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"innerText":"'Continue'","top":"72.84%","left":"38.83%"}]}
        >
        <Text style = {{color:"black"}}>

        {'Continue'}

       </Text>
        </TouchableOpacity>
        </View>
        )
    }
  }
    export default RIGHT; 



  