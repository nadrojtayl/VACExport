
import React, { Component } from "react";
import { ActivityIndicator, Button, Picker, Switch, Image, ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import Calendar from "./Calendar.js";
import appData from "./global.js";
import Multiplier from "./Multiplier.js";
import { Audio } from 'expo-av'; 


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




 class NbaOne extends React.Component {
     

    constructor(props)
    {
        super(props);
        this.state = {"counter":0,"vgcounter":0,"selected":[{"question":"what game company contributed to creating call of duty","choice 1":"Activision","choice 2":"Epic Games","choice 3":"Krafton","choice 4":"Insomniac Games","answer":"Activision","Category ":"Video Games","Index":19},{"question":"What game holds the record for the most sales ","choice 1":"Fortnite ","choice 2":"Minecraft","choice 3":"Call of Duty ","choice 4":"Mortal Kombat X ","answer":"Minecraft","Category ":"Video Games","Index":20}],"nbastreakscore":0,"vbstreakscore":1,"catchosen":"Video Games","createdelems":[]}
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

      <Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"innerText":"               JSON.parse(JSON.stringify(appData.selected[appData.counter][\"question\"]));","height":"30%","fontSize":"resizeFont(30)","top":"0.74%","left":"1.27%"}]}
        > {               JSON.parse(JSON.stringify(appData.selected[appData.counter]["question"]))} </Text>
        
 <TouchableOpacity
          
          onPress = { function(){if(JSON.parse(JSON.stringify(appData.selected[appData.counter]["answer"])).localeCompare(JSON.parse(JSON.stringify(appData.selected[appData.counter]["choice 1"]))) == 0 ){
that.props.goTo("CorrectOne") 
appData.counter=Math.floor(Math.random() * appData.selected.length)
    if(appData.catchosen === "Basketball"){
        appData.nbastreakscore++;
    } else {
        appData.vbstreakscore++;     
    }
}
else {that.props.goTo("WrongOne")
appData.counter=Math.floor(Math.random() * appData.selected.length);
    if(appData.catchosen === "Basketball"){
        appData.nbastreakscore = 0;
    } else {
        appData.vbstreakscore = 0;     
    }
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
            position:'absolute',top:0,left:0, 
            backgroundColor:'#8fd158',
             alignItems:'center',
             justifyContent:'center', height: "7%",  
             title:'Test', borderColor: 'gray', color:'black',
              borderRadius:15, borderWidth: 1},
              {"top":"33.67%","left":"2.61%","innerText":"  JSON.parse(JSON.stringify(appData.selected[appData.counter][\"choice 1\"])) ;"}]}
        >
        <Text style = {{color:"black"}}>

        {  JSON.parse(JSON.stringify(appData.selected[appData.counter]["choice 1"])) }

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){if(JSON.parse(JSON.stringify(appData.selected[appData.counter]["choice 2"])) === JSON.parse(JSON.stringify(appData.selected[appData.counter]["answer"]))){
that.props.goTo("CorrectOne") 
appData.counter=Math.floor(Math.random() * appData.selected.length)
if(appData.catchosen === "Basketball"){
        appData.nbastreakscore++;
    } else {
        appData.vbstreakscore++;     
    }
    
}
else {that.props.goTo("WrongOne")
appData.counter=Math.floor(Math.random() * appData.selected.length);
if(appData.catchosen === "Basketball"){
        appData.nbastreakscore = 0;
    } else {
        appData.vbstreakscore = 0;     
    }
    
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
            position:'absolute',top:0,left:0, 
            backgroundColor:'#8fd158',
             alignItems:'center',
             justifyContent:'center', height: "7%",  
             title:'Test', borderColor: 'gray', color:'black',
              borderRadius:15, borderWidth: 1},
              {"top":"45.2%","left":"2.07%","innerText":"       JSON.parse(JSON.stringify(appData.selected[appData.counter][\"choice 2\"]));"}]}
        >
        <Text style = {{color:"black"}}>

        {       JSON.parse(JSON.stringify(appData.selected[appData.counter]["choice 2"]))}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){if(JSON.parse(JSON.stringify(appData.selected[appData.counter]["answer"])).localeCompare(JSON.parse(JSON.stringify(appData.selected[appData.counter]["choice 3"]))) == 0 ){
that.props.goTo("CorrectOne") 
appData.counter=Math.floor(Math.random() * appData.selected.length)
if(appData.catchosen === "Basketball"){
        appData.nbastreakscore++;
    } else {
        appData.vbstreakscore++;     
    }
    
}
else {that.props.goTo("WrongOne")
appData.counter=Math.floor(Math.random() * appData.selected.length);
if(appData.catchosen === "Basketball"){
        appData.nbastreakscore = 0;
    } else {
        appData.vbstreakscore = 0;     
    }
    
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
            position:'absolute',top:0,left:0, 
            backgroundColor:'#8fd158',
             alignItems:'center',
             justifyContent:'center', height: "7%",  
             title:'Test', borderColor: 'gray', color:'black',
              borderRadius:15, borderWidth: 1},
              {"top":"57.59%","left":"2.07%","innerText":"   JSON.parse(JSON.stringify(appData.selected[appData.counter][\"choice 3\"])) ;"}]}
        >
        <Text style = {{color:"black"}}>

        {   JSON.parse(JSON.stringify(appData.selected[appData.counter]["choice 3"])) }

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){if(JSON.parse(JSON.stringify(appData.selected[appData.counter]["answer"])).localeCompare(JSON.parse(JSON.stringify(appData.selected[appData.counter]["choice 4"]))) == 0 ){
that.props.goTo("CorrectOne") 
appData.counter=Math.floor(Math.random() * appData.selected.length);
    if(appData.catchosen === "Basketball"){
        appData.nbastreakscore++;
    } else {
        appData.vbstreakscore++;     
    }
}
else {
    that.props.goTo("WrongOne")
appData.counter=Math.floor(Math.random() * appData.selected.length);
if(appData.catchosen === "Basketball"){
        appData.nbastreakscore = 0;
    } else {
        appData.vbstreakscore = 0;     
    }
    
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
            position:'absolute',top:0,left:0, 
            backgroundColor:'#8fd158',
             alignItems:'center',
             justifyContent:'center', height: "7%",  
             title:'Test', borderColor: 'gray', color:'black',
              borderRadius:15, borderWidth: 1},
              {"top":"69.47%","left":"1.81%","innerText":"   JSON.parse(JSON.stringify(appData.selected[appData.counter][\"choice 4\"])) ;"}]}
        >
        <Text style = {{color:"black"}}>

        {   JSON.parse(JSON.stringify(appData.selected[appData.counter]["choice 4"])) }

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){that.props.goTo("FirstPage");; that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, 
            backgroundColor:'#8fd158',
             alignItems:'center',
             justifyContent:'center', height: "7%",  
             title:'Test', borderColor: 'gray', color:'black',
              borderRadius:15, borderWidth: 1},
              {"top":"90.42%","left":"65.98%","innerText":"'Back'"}]}
        >
        <Text style = {{color:"black"}}>

        {'Back'}

       </Text>
        </TouchableOpacity>
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"81.48%","left":"36.44%","innerText":"  'Streak score: ' + (appData.catchosen === \"Video Games\" ? appData.vbstreakscore:appData.nbastreakscore);"}]}
        > {  'Streak score: ' + (appData.catchosen === "Video Games" ? appData.vbstreakscore:appData.nbastreakscore)} </Text>
        
        </View>
        )
    }
  }
    export default NbaOne; 



  