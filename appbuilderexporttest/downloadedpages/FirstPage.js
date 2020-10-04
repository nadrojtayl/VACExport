
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
        this.state = {"character":260,"baton":22,"hurdle":8,"javelin":8,"variable1":109,"variable2":8,"variable3":48}
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
      <Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},
          {"top":"12.25%","left":"0%","innerText":"'Track Runner'","fontSize":30,"textAlign":"center","backgroundColor":"darkblue","color":"yellow","fontWeight":"bold","textDecorationLine":"underline"}]}
        > {'Track Runner'} </Text>
        
 <TouchableOpacity
          
          onPress = { function(){ runWithInterval(`
            appData.baton = appData.baton + 4; that.forceUpdate();
            if (appData.baton>110){appData.baton = appData.baton - 110;alert('here');
            appData.variable3 = Math.floor(Math.random() * 400);

            }
            appData.hurdle = appData.hurdle + 4;
            if(appData.hurdle>110){appData.hurdle = appData.hurdle - 110;
            appData.variable2 = Math.floor(Math.random() * 400);
            }
            appData.javelin = appData.javelin + 4;
            if(appData.javelin>110){appData.javelin = appData.javelin - 110;
            appData.variable1 = Math.floor(Math.random() * 400);
            };
            that.forceUpdate();
            if(appData.javelin>50 && Math.abs(appData.character - appData.variable1)<18){that.props.goTo('FirstPage')}
            if(appData.hurdle>50 && Math.abs(appData.character - appData.variable2)<18){that.props.goTo('FirstPage')}
            if(appData.baton>50 && Math.abs(appData.character - appData.variable3)<18){that.props.goTo('FirstPage')}
            `, 1000)
            that.props.goTo("SECONDPAGE"); that.forceUpdate(); }}  
          
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            width:"30%",fontSize:"32px",
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', 
            height: "7%", borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},
            {"top":"37.85%","left":"34.55%","innerText":"'Play'","backgroundColor":"yellow"}]}
        >
        <Text style = {{color:"black"}}>

        {'Play'}

       </Text>
        </TouchableOpacity>



      
<View
        style= {[{position:'absolute',zIndex:-1000, height:'10%',width:'10%'},
        {"top":"-2.83%","left":"-11.64%","backgroundColor":"darkblue","height":"120%","width":"120%","fontSize":"resizeFont(15%)"}]}
        ></View>
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},
          {"top":"75.51%","left":"9.44%","innerText":"'RUN!'","height":"50%","fontSize":"resizeFont(30)","color":"yellow","fontWeight":"bold","backgroundColor":"transparent"}]}
        > {'RUN!'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"innerText":"'RUN!'","top":"75.51%","left":"71.48%","fontSize":"resizeFont(30)","color":"yellow","fontWeight":"bold"}]}
        > {'RUN!'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},
          {"top":"18.38%","left":"10.48%","innerText":"'The track runner needs your help avoiding the falling obstacles!'","width":"80%","color":"yellow","fontWeight":"bold","textAlign":"center","fontSize":15}]}
        > {'The track runner needs your help avoiding the falling obstacles!'} </Text>
        


      <Image
        style= {[{position:'absolute',resizeMode:"contain", width:"50%","height":"50%","top":"50.38%","left":"20.48%"}]}
        source = {{uri:'https://www.clker.com/cliparts/H/9/M/o/n/a/running-man-race-yellow-md.png'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{"position":"absolute","top":"30%","left":"3.3%","height":"10%","width":"17%","resizeMode":"contain"}]}
        source = {{uri:'https://i.pinimg.com/originals/77/e8/66/77e866665784f9975e3df54c07d2bd1e.png'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{"top":"30%","left":"80.34%","resizeMode":"contain","height":"10%","width":"17%"}]}
        source = {{uri:'https://i.pinimg.com/originals/77/e8/66/77e866665784f9975e3df54c07d2bd1e.png'}} 
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>


      
        </View>
        )
    }
  }
    export default FirstPage; 



  