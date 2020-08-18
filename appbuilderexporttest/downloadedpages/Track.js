
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




 class Track extends React.Component {
     

    constructor(props)
    {
        super(props);
        this.state = {"key":"value","CarX":250,"CarY":270,"CarImageUrl":"https://i.imgur.com/0HRKgxE.png","spawned":6,"ended":true,"yeet":1592,"thet":1593}
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
       <TouchableOpacity
          
          onPress = { function(){if (appData.CarX === 50){
    appData.CarX = 150;
}

; that.forceUpdate(); }}  
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
            {"top":"84.29%","left":"69.54%","innerText":"'--->'","backgroundColor":"blue"}]}
        >
        <Text style = {{color:"black"}}>

        {'--->'}

       </Text>
        </TouchableOpacity>

      

      <TouchableOpacity
      style= {[{width:"10%",height:"20%", position:'absolute',top:"55.26%",left:appData.CarX}]}
       onPress = { function(){; that.forceUpdate(); }}  
      >
      <Image
        style= {[{width:"100%",height:"100%"}, {"source":" appData.CarImageUrl;","left":appData.CarX,"top":"55.26%","width":"10%","resizeMode":"contain","backgroundColor":"transparent","height":"20%","color":null}]}
        source = {{uri: appData.CarImageUrl}}
       
      >
      </Image>
      </TouchableOpacity>


      
 <TouchableOpacity
          
          onPress = { function(){
            if(appData.CarX === 150 ){
              appData.CarX= 50;
            }; 
            that.forceUpdate(); 
          }}  
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
            {"top":"84.29%","left":"-0.17%","innerText":"'<---'","backgroundColor":"blue"}]}
        >
        <Text style = {{color:"black"}}>

        {'<---'}

       </Text>
        </TouchableOpacity>


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":"1.65%","left":"60.11%","opacity":-2}]}
        source = {{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Tobu_Skytree_Line_%28TS%29_symbol.svg/600px-Tobu_Skytree_Line_%28TS%29_symbol.svg.png"}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"source":"https://i.imgur.com/V6DIt87.png","height":"100%","width":"100%","zIndex":-10000000000000000,"left":"0.4%","top":"-2.13%"}]}
        source = {{uri:'https://i.imgur.com/V6DIt87.png'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      
 <TouchableOpacity
          
          onPress = { function(){
            appData.spawned = 0;
            appData.ended = false;
            appData.yeet = runWithInterval( 
              function functionX() {
              for(var i = 0;i<created.length;i++){
              created[i].top += 20;
              var samelane = (created[i].left == 50) == (appData.CarX < 200);
              if(samelane && created[i].top >= 360 && created[i].top <= 380){
                  appData.ended = true;
                  
                 if(appData.ended === true){
                     clearInterval(appData.yeet)
                     clearInterval(appData.thet)
                     delete window.created;
                     window.created = [];
                     that.props.goTo("Game_Over")
                 }
              }
           }}, 100);
            appData.thet = runWithInterval(
              function functY(){
                if(0.5>Math.random()){
                    appData.spawned ++;
                  var lid = createElement("image", { "top": 100, "left": 250 ,"resizeMode":"contain","backgroundColor":"tranparent", "source":"https://i.imgur.com/Zw4w4qk.png", "zIndex":-10000000})
                  enemies.push(lid)
                } else {
                    appData.spawned ++;
                    var lid = createElement("image", { "top": 100, "left": 50 ,"resizeMode":"contain","backgroundColor":"tranparent", "source":"https://i.imgur.com/Zw4w4qk.png", "zIndex":-10000000})
                    enemies.push(lid)
                }
                removeOffScreen();
              }, 1000);
            ; that.forceUpdate(); 
          }}  

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
            {"top":"7.03%","left":"35%","innerText":"'PLAY'","backgroundColor":"red"}]}
        >
        <Text style = {{color:"black"}}>

        {'PLAY'}

       </Text>
        </TouchableOpacity>


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":1320,"left":"20%","resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/SGCjjSN.gif","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/SGCjjSN.gif'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":840,"left":"20%","resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/SGCjjSN.gif","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/SGCjjSN.gif'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":1300,"left":"20%","resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/SGCjjSN.gif","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/SGCjjSN.gif'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":820,"left":"20%","resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/SGCjjSN.gif","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/SGCjjSN.gif'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":1820,"left":"20%","resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/SGCjjSN.gif","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/SGCjjSN.gif'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":1340,"left":"20%","resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/SGCjjSN.gif","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/SGCjjSN.gif'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":860,"left":"20%","resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/SGCjjSN.gif","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/SGCjjSN.gif'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":600,"left":"20%","resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/SGCjjSN.gif","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/SGCjjSN.gif'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":3160,"left":250,"resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/SGCjjSN.gif","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/SGCjjSN.gif'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":2960,"left":250,"resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/SGCjjSN.gif","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/SGCjjSN.gif'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":2760,"left":50,"resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/SGCjjSN.gif","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/SGCjjSN.gif'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":2560,"left":250,"resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/SGCjjSN.gif","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/SGCjjSN.gif'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":2360,"left":50,"resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/SGCjjSN.gif","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/SGCjjSN.gif'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":2160,"left":50,"resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/SGCjjSN.gif","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/SGCjjSN.gif'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":1960,"left":250,"resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/SGCjjSN.gif","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/SGCjjSN.gif'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":1760,"left":50,"resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/SGCjjSN.gif","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/SGCjjSN.gif'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":1560,"left":50,"resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/SGCjjSN.gif","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/SGCjjSN.gif'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":1360,"left":250,"resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/SGCjjSN.gif","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/SGCjjSN.gif'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":1160,"left":250,"resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/SGCjjSN.gif","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/SGCjjSN.gif'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":960,"left":250,"resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/SGCjjSN.gif","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/SGCjjSN.gif'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":760,"left":50,"resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/SGCjjSN.gif","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/SGCjjSN.gif'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":560,"left":250,"resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/SGCjjSN.gif","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/SGCjjSN.gif'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":1160,"left":50,"resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/Zw4w4qk.png","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/Zw4w4qk.png'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":960,"left":250,"resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/Zw4w4qk.png","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/Zw4w4qk.png'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":760,"left":50,"resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/Zw4w4qk.png","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/Zw4w4qk.png'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":560,"left":250,"resizeMode":"contain","backgroundColor":"tranparent","source":"https://i.imgur.com/Zw4w4qk.png","zIndex":-10000000}]}
        source = {{uri:'https://i.imgur.com/Zw4w4qk.png'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      
        </View>
        )
    }
  }
    export default Track; 



  