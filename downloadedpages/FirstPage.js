
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




 class FirstPage extends React.Component {
     

    constructor(props)
    {
        super(props);
        this.state = {"key":"value","filterWeapons":[{"Category":"Shotguns","Weapon":"Model 680","URL":"https://img.gfinityesports.com/upload/_resized/640x360-nc/_other/class-2-680.png","Index":27},{"Category":"Shotguns","Weapon":725,"URL":"https://img.gfinityesports.com/upload/_resized/640x360-nc/_other/class-2-725.png ","Index":28},{"Category":"Shotguns","Weapon":"R9-0 Shotgun","URL":"https://img.gfinityesports.com/upload/_resized/640x360-nc/_other/class-1-r9-0.png ","Index":29},{"Category":"Shotguns","Weapon":"Origin 12 Shotgun","URL":"https://img.gfinityesports.com/upload/_resized/640x360-nc/_other/class-1-origin.png","Index":30}],"Image":"https://www.bestgamingsettings.com/wp-content/uploads/2019/11/BestCallofDutyWeapons2.jpg","Weapon":""}
    }


      
  


   

    render(){ 
      var that = this; 
      
      if(!that.props.loaded){
        return(<View><Text>LOADING</Text></View>)
      }
      return (
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"grey"}}>
      <Text
          style= {[{position:'absolute'},{"innerText":"'BEST CLASS SETUPS '","top":-0.3120000000000118,"left":41.105399999999975,"fontSize":30}]}
        > {'BEST CLASS SETUPS '} </Text>
        
<Text
          style= {[{position:'absolute'},{"top":"6.9%","left":"26.57%","innerText":"'Select a Type of Weapon'"}]}
        > {'Select a Type of Weapon'} </Text>
        
 <TouchableOpacity
          
          onPress = { function(){appData.filterWeapons = filter_list_of_objs(CallofDuty,"Category","AR");
that.props.goTo("TWO");; that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"top":"54.42%","left":"1.74%","innerText":"'ARs'","backgroundColor":"#0a4a08","color":"white"}]}
        >
        <Text style = {{color:"white"}}>

        {'ARs'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){appData.filterWeapons = filter_list_of_objs(CallofDuty,"Category","SMG");
that.props.goTo("TWO");; that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"top":"54.82%","left":"35.99%","innerText":"'SMGs'","backgroundColor":"#0a4a08","color":"white"}]}
        >
        <Text style = {{color:"white"}}>

        {'SMGs'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){appData.filterWeapons = filter_list_of_objs(CallofDuty,"Category","LMG");
that.props.goTo("TWO");; that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"top":"55.21%","left":"68.82%","innerText":"'LMGs'","backgroundColor":"#0a4a08","color":"white"}]}
        >
        <Text style = {{color:"white"}}>

        {'LMGs'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){appData.filterWeapons = filter_list_of_objs(CallofDuty,"Category","Marksman");
that.props.goTo("TWO");; that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"top":"70.52%","left":"1.46%","innerText":"'Marksmen Rifles'","fontSize":13,"backgroundColor":"#0a4a08","color":"white"}]}
        >
        <Text style = {{color:"white"}}>

        {'Marksmen Rifles'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){appData.filterWeapons = filter_list_of_objs(CallofDuty,"Category","Sniper");
that.props.goTo("TWO");; that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"top":"70.72%","left":"34.85%","innerText":"'Snipers'","backgroundColor":"#0a4a08","color":"white"}]}
        >
        <Text style = {{color:"white"}}>

        {'Snipers'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){appData.filterWeapons = filter_list_of_objs(CallofDuty,"Category","Pistols");
that.props.goTo("TWO");; that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"top":"70.72%","left":"67.39%","innerText":"'Pistols'","source":null,"backgroundColor":"#0a4a08","color":"white"}]}
        >
        <Text style = {{color:"white"}}>

        {'Pistols'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){appData.filterWeapons = filter_list_of_objs(CallofDuty,"Category","Shotguns");
that.props.goTo("TWO");; that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"top":"82.25%","left":"34.57%","innerText":"'Shotguns'","backgroundColor":"#0a4a08","color":"white"}]}
        >
        <Text style = {{color:"white"}}>

        {'Shotguns'}

       </Text>
        </TouchableOpacity>

      <Image
        style= {[{width:"20%",height:"20%"}, {"source":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/35271885-b64b-49da-b43d-e9aa8fa4d471/ddtf89c-ca90d3f4-ef60-438a-b0e1-a9608e54ae79.jpg/v1/fill/w_1280,h_720,q_75,strp/call_of_duty_modern_warfare_warzone__wallpaper_2_by_thetruemask_ddtf89c-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03MjAiLCJwYXRoIjoiXC9mXC8zNTI3MTg4NS1iNjRiLTQ5ZGEtYjQzZC1lOWFhOGZhNGQ0NzFcL2RkdGY4OWMtY2E5MGQzZjQtZWY2MC00MzhhLWIwZTEtYTk2MDhlNTRhZTc5LmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.czhZx5kzJpUFE6TpCyAGsqjcakkMbN88uxoXl-EWvcc","top":"13.46%","left":"0.03%","width":"100%","height":"30%"}]}
        source = {{uri:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/35271885-b64b-49da-b43d-e9aa8fa4d471/ddtf89c-ca90d3f4-ef60-438a-b0e1-a9608e54ae79.jpg/v1/fill/w_1280,h_720,q_75,strp/call_of_duty_modern_warfare_warzone__wallpaper_2_by_thetruemask_ddtf89c-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03MjAiLCJwYXRoIjoiXC9mXC8zNTI3MTg4NS1iNjRiLTQ5ZGEtYjQzZC1lOWFhOGZhNGQ0NzFcL2RkdGY4OWMtY2E5MGQzZjQtZWY2MC00MzhhLWIwZTEtYTk2MDhlNTRhZTc5LmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.czhZx5kzJpUFE6TpCyAGsqjcakkMbN88uxoXl-EWvcc'}}
      >
      </Image>
        </View>
        )
    }
  }
    export default FirstPage; 



  