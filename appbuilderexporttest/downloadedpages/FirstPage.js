
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




 class FirstPage extends React.Component {
     

    constructor(props)
    {
        super(props);
        this.state = {"key":"value","Leung288":["nikhi","ryan","samatha","wesley"]}
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
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"#32d9c8"}}>
       <TouchableOpacity
          
          onPress = { function(){play("https://www.mboxdrive.com/nani_Pmxf5n3.mp3"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            position:'absolute', alignItems:'center',justifyContent:'center',  title:'Test', borderColor: 'gray', 
            color:'black', borderRadius:15, borderWidth: 1,"top":"20%","left":"63%","backgroundColor":"#fffa00","height":"7%","width":"27%"}]}
        >
        <Text style = {{color:"black"}}>

        {'NANI TEST'}

       </Text>
        </TouchableOpacity>
      <TouchableOpacity
          
          onPress = { function(){play("https://www.mboxdrive.com/roblox-death-sound_1.mp3"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            position:'absolute',backgroundColor:'yellow', alignItems:'center',justifyContent:'center', title:'Test', borderColor: 'gray', 
            color:'black', borderRadius:15, borderWidth: 1,"top":"20%","left":"7%","height":"7%","width":"27%"}]}
        >
        <Text style = {{color:"black"}}>

        {'OOF'}

       </Text>
        </TouchableOpacity>
      <TouchableOpacity
          
          onPress = { function(){play("https://www.mboxdrive.com/musica_1 (1).mp3"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            position:'absolute', alignItems:'center',justifyContent:'center',  title:'Test', borderColor: 'gray', 
            color:'black', borderRadius:15, borderWidth: 1},{"top":"30%","left":"63%","backgroundColor":"#fffa00","height":"7%","color":"black","width":"27%"}]}
        >
        <Text style = {{color:"black"}}>

        {'Windows Error Song'}

       </Text>
        </TouchableOpacity>
      <TouchableOpacity
          
          onPress = { function(){play("https://www.mboxdrive.com/classic_hurt.mp3"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            flexDirection: 'row',
            height:"7%",
            width:"30%",
            position:'absolute', alignItems:'center',justifyContent:'center',  title:'Test', borderColor: 'gray', 
            color:'black', borderRadius:15, borderWidth: 1},{"top":"30%","left":"7%","backgroundColor":"#fffa00","height":"7%","width":"27%"}]}
        >
        <Text style = {{color:"black"}}>

        {'Minecraft Hurt'}

       </Text>
        </TouchableOpacity>
      <TouchableOpacity
          
          onPress = { function(){play("https://www.mboxdrive.com/perfect-fart.mp3"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            flexDirection: 'row',
            height:"7%",
            width:"30%",
            position:'absolute', alignItems:'center',justifyContent:'center', borderColor: 'gray', 
            color:'black', borderRadius:15, borderWidth: 1,"top":"40%","left":"7%","backgroundColor":"#fffa00","height":"7%","width":"27%"}]}
        >
        <Text style = {{color:"black"}}>

        {'Fart'}

       </Text>
        </TouchableOpacity>
      <TouchableOpacity
          
          onPress = { function(){play("https://www.mboxdrive.com/movie_1.mp3"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            flexDirection: 'row',
            height:"7%",
            width:"30%",
            position:'absolute', alignItems:'center',justifyContent:'center',  title:'Test', borderColor: 'gray', 
            color:'black', borderRadius:15, borderWidth: 1,"top":"40%","left":"63%","height":"7%","backgroundColor":"#fffa00","width":"27%"}]}
        >
        <Text style = {{color:"black"}}>

        {'Bruh'}

       </Text>
        </TouchableOpacity>


        <TouchableOpacity
          
          onPress = { function(){play("https://www.mboxdrive.com/ali-a-intro-bass-boosted.mp3"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            flexDirection: 'row',
            width:"30%",
            position:'absolute', alignItems:'center',justifyContent:'center',  title:'Test', borderColor: 'gray', 
            color:'black', borderRadius:15, borderWidth: 1,"top":"50%","left":"7%","height":"7%","width":"27%","backgroundColor":"yellow"}]}
        >
        <Text style = {{color:"black"}}>

        {'Ali A'}

       </Text>
        </TouchableOpacity>
      <TouchableOpacity
          
          onPress = { function(){play("https://www.mboxdrive.com/its-me-mario.mp3"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            flexDirection: 'row',
            width:"30%",
            position:'absolute', alignItems:'center',justifyContent:'center',  title:'Test', borderColor: 'gray', 
            color:'black', borderRadius:15, borderWidth: 1,"top":"50%","left":"63%","height":"7%","width":"27%","backgroundColor":"yellow"}]}
        >
        <Text style = {{color:"black"}}>

        {'Its a me Mario'}

       </Text>
        </TouchableOpacity>
      <TouchableOpacity
          
          onPress = { function(){play("https://www.mboxdrive.com/untitled3_13.mp3"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            flexDirection: 'row',
            width:"30%",
            position:'absolute', alignItems:'center',justifyContent:'center',  title:'Test', borderColor: 'gray', 
            color:'black', borderRadius:15, borderWidth: 1,"top":"60%","left":"7%","height":"7%","width":"27%","backgroundColor":"yellow"}]}
        >
        <Text style = {{color:"black"}}>

        {'Stop It, Get Some Help'}

       </Text>
        </TouchableOpacity>
      <TouchableOpacity
          
          onPress = { function(){play("https://www.mboxdrive.com/obi-wan-hello-there.mp3"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            position:'absolute', alignItems:'center',justifyContent:'center',  title:'Test', borderColor: 'gray', 
            color:'black', borderRadius:15, borderWidth: 1},{"top":"60%","left":"63%","width":"27%","height":"7%","backgroundColor":"yellow"}]}
        >
        <Text style = {{color:"black"}}>

        {'Hello There'}

       </Text>
        </TouchableOpacity>
      <TouchableOpacity
          
          onPress = { function(){play("https://www.mboxdrive.com/another-one_1.mp3"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            position:'absolute', alignItems:'center',justifyContent:'center',  title:'Test', borderColor: 'gray', 
            color:'black', borderRadius:15, borderWidth: 1,"top":"70%","left":"63%","height":"7%","width":"27%","backgroundColor":"yellow"}]}
        >
        <Text style = {{color:"black"}}>

        {'Another One'}

       </Text>
        </TouchableOpacity>
      <TouchableOpacity
          
          onPress = { function(){play("https://www.mboxdrive.com/engineer_no01_1.mp3"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            position:'absolute', alignItems:'center',justifyContent:'center',  title:'Test', borderColor: 'gray', 
            color:'black', borderRadius:15, borderWidth: 1},{"height":"7%","width":"27%","backgroundColor":"yellow","top":"70%","left":"7%"}]}
        >
        <Text style = {{color:"black"}}>

        {'Nope'}

       </Text>
        </TouchableOpacity>

               <TouchableOpacity
          
          onPress = { function(){play("https://www.mboxdrive.com/henchman_dbno_enter_010.mp3"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            position:'absolute', alignItems:'center',justifyContent:'center', title:'Test', borderColor: 'gray', 
            color:'black', borderRadius:15, borderWidth: 1,"top":"80%","left":"7%","height":"7%","width":"27%","backgroundColor":"yellow"}]}
        >
        <Text style = {{color:"black"}}>

        {'Fortnite Henchman'}

       </Text>
        </TouchableOpacity>
      <TouchableOpacity
          
          onPress = { function(){play("https://www.mboxdrive.com/johncenaprankcall_cutted.mp3"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            position:'absolute', alignItems:'center',justifyContent:'center', title:'Test', borderColor: 'gray', 
            color:'black', borderRadius:15, borderWidth: 1,"height":"7%","width":"27%","top":"80%","left":"63%",
            "backgroundColor":"yellow"}]}
        >
        <Text style = {{color:"black"}}>

        {'John Cena'}

       </Text>
        </TouchableOpacity>
      <TouchableOpacity
          
          onPress = { function(){play("https://www.mboxdrive.com/wii-sports-theme-roblox-death-sound-edition-audiotrimmer_pvK4V0Q.mp3"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            position:'absolute', alignItems:'center',justifyContent:'center', title:'Test', borderColor: 'gray', 
            color:'black', borderRadius:15, borderWidth: 1,"height":"7%","width":"27%","color":"black",
            "top":"90%","left":"63%","backgroundColor":"yellow"}]}
        >
        <Text style = {{color:"black"}}>

        {'Wii Sports Roblox Death'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){play("https://www.mboxdrive.com/anime-wow-sound-effect.mp3"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            position:'absolute', alignItems:'center',justifyContent:'center', title:'Test', borderColor: 'gray', 
            color:'black', borderRadius:15, borderWidth: 1,"height":"7%","width":"27%", "top":"90%","left":"35%","backgroundColor":"yellow"}]}
        >
        <Text style = {{color:"black"}}>

        {'Anime WOW'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){play("https://www.mboxdrive.com/r2d2_scream_converted.mp3"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            position:'absolute', alignItems:'center',justifyContent:'center', title:'Test', borderColor: 'gray', 
            color:'black', borderRadius:15, borderWidth: 1,"height":"7%","width":"27%",
            "top":"70%","left":"35%","backgroundColor":"yellow"}]}
        >
        <Text style = {{color:"black"}}>

        {'R2D2 Scream'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){play("https://www.mboxdrive.com/yeet-sound-effect.mp3"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            position:'absolute', alignItems:'center',justifyContent:'center', title:'Test', borderColor: 'gray',
             color:'black', borderRadius:15, borderWidth: 1,"height":"7%","width":"27%",
             "top":"20%","left":"35%","borderStyle":null,"backgroundColor":"yellow"}]}
        >
        <Text style = {{color:"black"}}>

        {'YEET'}

       </Text>
        </TouchableOpacity>

        <TouchableOpacity
          
          onPress = { function(){play("https://www.mboxdrive.com/i-have-the-high-ground.mp3"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            position:'absolute', alignItems:'center',justifyContent:'center', title:'Test', borderColor: 'gray', 
            color:'black', borderRadius:15, borderWidth: 1},{"innerText":"'I have the high ground'",
            "top":"90%","left":"7%","height":"7%","width":"27%","backgroundColor":"yellow"}]}
        >
        <Text style = {{color:"black"}}>

        {'I have the high ground'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){play("https://www.mboxdrive.com/why-you-bully-me_tAonLVq.mp3"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            position:'absolute', alignItems:'center',justifyContent:'center', title:'Test', borderColor: 'gray', 
            color:'black', borderRadius:15, borderWidth: 1,"top":"50%","left":"35%",
            "height":"7%","width":"27%","backgroundColor":"yellow"}]}
        >
        <Text style = {{color:"black"}}>

        {'Why you bully me?'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){play("https://www.mboxdrive.com/imogen-heap-hide-and-seek-mm-what-you-say.mp3"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            position:'absolute', alignItems:'center',justifyContent:'center', title:'Test', borderColor: 'gray', 
            color:'black', borderRadius:15, borderWidth: 1},{"top":"80%","left":"35%","height":"7%","width":"27%","backgroundColor":"yellow"}]}
        >
        <Text style = {{color:"black"}}>

        {'MMM-What you sayyy?'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){play("https://www.mboxdrive.com/victory_6.mp3"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            position:'absolute', alignItems:'center',justifyContent:'center', title:'Test', borderColor: 'gray',
            color:'black', borderRadius:15, borderWidth: 1,"top":"40%","left":"35%","height":"7%","width":"27%","backgroundColor":"yellow"}]}
        >
        <Text style = {{color:"black"}}>

        {'Victory'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){play("https://www.mboxdrive.com/liedjes-voor-twitch-4.mp3"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            position:'absolute', alignItems:'center',justifyContent:'center', title:'Test', borderColor: 'gray', 
            color:'black', borderRadius:15, borderWidth: 1,"top":"60%","left":"35%","height":"7%","width":"27%","backgroundColor":"yellow"}]}
        >
        <Text style = {{color:"black"}}>

        {'Fortnite Loser'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){play("https://www.mboxdrive.com/pk-fire.mp3"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            position:'absolute', alignItems:'center',justifyContent:'center', title:'Test', borderColor: 'gray',
            color:'black', borderRadius:15, borderWidth: 1,"top":"30%","left":"35%","height":"7%","width":"27%","backgroundColor":"yellow"}]}
        >
        <Text style = {{color:"black"}}>

        {'PK FIRE'}

       </Text>
        </TouchableOpacity>
        <Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"5.1%","left":"20.73%","fontSize":"36px"}]}
        > {'Meme Soundboard'} </Text>
        
         <TouchableOpacity
          
          onPress = { function(){pause(); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
            position:'absolute', alignItems:'center',justifyContent:'center',  title:'Test', borderColor: 'gray', 
            color:'black', borderRadius:15, borderWidth: 1,"top":"12.52%","left":"38.48%","backgroundColor":"red"}]}
        >
        <Text style = {{color:"black"}}>

        {'STOP ALL'}

       </Text>
        </TouchableOpacity>
        </View>
        )
    }
  }
    export default FirstPage; 



  