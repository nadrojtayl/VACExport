
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
        this.state = {"key":"value","buttonColor":"#FFDFF7","question":14,"fontsize":20,"QuestionCounter":2,"TopicRange":{"Literature":0,"History":10,"Science":20,"Geography":30,"Math/Logic":40,"Sports + Pop Culture":50},"TopicRangemax":{"Literature":9,"History":19,"Science":29,"Geography":39,"Math/Logic":49,"Sports + Pop Culture":59},"TopicRangemin":{"Literature":0,"History":10,"Science":20,"Geography":30,"Math/Logic":40,"Sports + Pop Culture":50},"TopicRangemaximum":{"Literature":9,"History":19,"Science":29,"Geography":39,"Math/Logic":49,"Sports + Pop Culture":59},"test":5,"Score":2,"FontSizeofq":40,"questionleg":60,"QuestionCounterleg":1,"QuestionRangeleg":{"Literature":61,"History":71,"Science":81,"Geography":91,"Math/Logic":101,"Sports + Pop Culture":111},"prizes":[],"questioncom":121,"QuestionCountercom":1,"TopicRangecom":{"Literature":121,"History":131,"Science":141,"Geography":151,"Math/Logic":161,"Sports + Pop Culture":171},"Usernameinput0":"User","QuestionCountercom4":0,"QuestionCountercom7":0,"Timer":29,"timerid":89,"QuestionCounterleg1":26,"QuestionCountercom78":82,"Imglink":"https://mail.google.com/mail/u/0?ui=2&ik=7e77258b62&attid=0.8&permmsgid=msg-a:r-7293815653329665889&th=1736d32c6499dc0e&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_LFjAQ2tXrNxs07QoA-m3WrTs85i3pOWX4QpIlD3Q9qwZ_5wQ4cjnccszSL0lhMKB4oVTbvYZoGETfepcelfmLSNw8Kk0jVvvoKiLQ59rpbM_oP7aj2wBfDKk&disp=emb&realattid=1736d3257043c9f5d266"}
    }


      
  


   

    render(){ 
      var that = this; 
      
      if(!that.props.loaded){
        return(<View style = {{height:'100%',width:'100%', alignItems:'center',justifyContent:'center'}}>
        <ActivityIndicator size="large" />
        <Text style = {{textAlign:'center'}}>Are you a student? Build an app with VineyardAppCamp.com</Text>
        </View>)
      }
      return (
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"white"}}>
       <TouchableOpacity
          
          onPress = { function(){that.props.goTo("PlayGameChoice"); that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"innerText":"'Play Game'","color":"white","backgroundColor":"#FBBBB8","top":"48.29%","left":"18.56%","height":75,"fontSize":40,"width":"60%","fontFamily":"SYNCOPATE","borderStyle":"solid","borderRadius":4}]}
        >
        <Text style = {{color:"white"}}>

        {'Play Game'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){that.props.goTo("MyHome"); that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"height":75,"width":"60%","innerText":"'My Home'","fontSize":40,"fontFamily":"syncopate","color":"white","backgroundColor":"#FBBBB8","top":"68.78%","left":"18.77%","borderRadius":4}]}
        >
        <Text style = {{color:"white"}}>

        {'My Home'}

       </Text>
        </TouchableOpacity>
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"fontSize":60,"innerText":"'Trivia Zoo!'","fontFamily":"Arial","top":"17.4%","left":"14.03%","borderRadius":5}]}
        > {'Trivia Zoo!'} </Text>
        
<View
        style= {[{position:'absolute',zIndex:-1000, height:'10%',width:'10%'},{"height":1000,"backgroundColor":"#FD8A83","borderColor":"#FD8A83","top":"1.65%","left":"-2.56%","width":112}]}
        ></View>
<View
        style= {[{position:'absolute',zIndex:-1000, height:'10%',width:'10%'},{"width":1000,"height":75,"backgroundColor":"#FD8A83","borderColor":"#FD8A83","top":"-0.63%","left":"-5.74%"}]}
        ></View>
<View
        style= {[{position:'absolute',zIndex:-1000, height:'10%',width:'10%'},{"height":1000,"top":"5.63%","left":"85.9%","backgroundColor":"#FD8A83","borderColor":"#FD8A83","width":112}]}
        ></View>
<View
        style= {[{position:'absolute',zIndex:-1000, height:'10%',width:'10%'},{"width":1000,"top":"86.39%","left":"4.25%","height":200,"backgroundColor":"#FD8A83","borderColor":"#FD8A83"}]}
        ></View>
        </View>
        )
    }
  }
    export default FirstPage; 



  