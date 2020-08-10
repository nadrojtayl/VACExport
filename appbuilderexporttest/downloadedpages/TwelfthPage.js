
import React, { Component } from "react";
import { ActivityIndicator, Button, Picker, Switch, Image, ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import Calendar from "./Calendar.js";
import appData from "./global.js";
import Multiplier from "./Multiplier.js";
import { Audio } from 'expo-av'; 
import * as SMS from 'expo-sms';


var d = new Date();
var month = d.getMonth();
var day = d.getDate();
global.month = d.getMonth();
global.day = d.getDate();
global.created = [];

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
  var script_string = script_string + "; global.thisapp.forceUpdate();"
  script_string = script_string.split("createElement").join("global.thisapp.createElement");
  var that = appData.this;
    try{
        eval("function y(){"+script_string+"}")
        global.thisapp.forceUpdate();
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




 class TwelfthPage extends React.Component {
     

    constructor(props)
    {
        super(props);
        this.state = {"FirstPageinput1":"Balance","FirstPageinput2":"Control","FirstPageinput0":"Strength","FirstPageinput3":"","FirstPageinput4":"Selectd","FirstPageinput12":"Hello! Select the skill that you want to work on today!","index1":18,"index2":19,"timer":0,"workout":[{"skill":"","exercises/ workouts":"","":"","Description":"Start by lying down,  move your legs upward to transfer the ball from your ankles to your hands, then lower legs, and reverse. Challenge yourself and see how many reps you can do in 3.5 minutes. This is a good workout for your abdominals, as well as core and alignment. ","images ":"https://tone-and-tighten.com/wp-content/uploads/2015/06/exercise-swiss-ball-transfer-crunch-tone-tighten.jpg","exercise":"Exercise Ball Transfers ","category":"turns ","Index":5},{"skill":"","exercises/ workouts":"","":"","Description":"Lay down on your back, raise leg and hold on your ankle to bring leg closer. Keep supporting leg as well as working leg straightened. Hold for a minute (turned in and turned out slightly) and switch to next leg. ","images ":"https://www.indoindians.com/wp-content/uploads/2016/12/hamstring-e1481880080669.jpg ","exercise":"Devant (pulling of the leg towards yourself): Stretch","category":"extensions","Index":6},{"skill":"","exercises/ workouts":"","":"","Description":"Lay down on your stomach, push yoursef up from your hands, and arch your back. Then slowly come down. Complete by doing each rep 3 times, as well as holding each for 30 seconds to strengthen lower back muscles. ","images ":"https://images.squarespace-cdn.com/content/v1/5238dfcae4b0468ec26edfdb/1586347399244-ZVDG62XPHSBVIRA83AIF/ke17ZwdGBToddI8pDm48kDrVPZoV-BfLZ82S7aRQHOIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcVJEZiH25S69c1xcTtd5uZJM9FDPi2aIfWB4DjA2FrXOuNS-11NoXlRvAQGc_D3Jb/523A1269_BLOG.jpg ","exercise":"Back Raises ","category":"extensions","Index":7},{"skill":"","exercises/ workouts":"","":"","Description":"Increase the stretch with a resistance TheraBand, the knee on the floor should be in a 90 degree. ","images ":"https://www.performancehealth.com/media/wysiwyg/blog/articles/tensor-fasciae-latae-tfl-turn-in-stretch-2.gif","exercise":"Tensor Fascie Latae (TFL) Turn-In Stretch","category":"turnout ","Index":2},{"skill":"","exercises/ workouts":"","":"","Description":"Increase the stretch with a resistance TheraBand, the knee on the floor should be in a 90 degree. ","images ":"https://www.performancehealth.com/media/wysiwyg/blog/articles/tensor-fasciae-latae-tfl-turn-in-stretch-2.gif","exercise":"Tensor Fascie Latae (TFL) Turn-In Stretch","category":"turnout ","Index":2},{"skill":"","exercises/ workouts":"","":"","Description":"12 reps (clapping over and under leg) and then switch to the next leg. ","images ":"https://media.self.com/photos/59414a68c529bf431f608cb8/master/w_400%2Cc_limit/Untitled-33.gif","exercise":"Standing Crunch With Under-the-Leg Clap","category":"balance ","Index":1},{"skill":"","exercises/ workouts":"","":"","Description":"12 reps (clapping over and under leg) and then switch to the next leg. ","images ":"https://media.self.com/photos/59414a68c529bf431f608cb8/master/w_400%2Cc_limit/Untitled-33.gif","exercise":"Standing Crunch With Under-the-Leg Clap","category":"balance ","Index":1},{"skill":"","exercises/ workouts":"","":"","Description":"12 reps (clapping over and under leg) and then switch to the next leg. ","images ":"https://media.self.com/photos/59414a68c529bf431f608cb8/master/w_400%2Cc_limit/Untitled-33.gif","exercise":"Standing Crunch With Under-the-Leg Clap","category":"balance ","Index":1}],"createdelems":[]}
    }

    componentDidMount(){
      global.thisapp = this;
    }


      
  
    createElement(name, style_obj){
      if(name === 'image'){
        this.state.createdelems.push(
        (<Image style = {[{position:'absolute', width:"20%",height:"20%"}, style_obj]}></Image>)
        )
      }

       if(name === 'text'){
        this.state.createdelems.push(
        (<Text style = {style_obj}></Text>)
        )
      }

      global.created.push(style_obj);
     



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
      {this.state.createdelems}

      
        </View>
        )
    }
  }
    export default TwelfthPage; 



  