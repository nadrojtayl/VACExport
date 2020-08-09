
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




 class SkinsPage extends React.Component {
     

    constructor(props)
    {
        super(props);
        this.state = {"selectedSkin":"https://i.imgur.com/mkHo4H8.gif","skinPosition":230,"batPosition":0,"meters":0,"interval":352,"lane":350,"batPosition2":0,"bulldog":353,"lane2":230,"hard":"hard","easy":"easy","medium":"medium","uses":"easy","createdelems":[]}
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
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"rgb(208, 226, 242)"}}>
      {this.state.createdelems}

      <Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"fontSize":"resizeFont(56)","top":"9.33%","left":"38.25%","innerText":"'Skins'","color":"rgb(253, 255, 0)"}]}
        > {'Skins'} </Text>
        

      

      <TouchableOpacity
      style= {[{position:'absolute',width:"200",height:"20%", position:'absolute',top:"34.22%",left:"-1.72%"}]}
       onPress = { function(){appData.selectedSkin = "https://i.imgur.com/mkHo4H8.gif";
that.props.goTo('FirstPage');; that.forceUpdate(); }}  
      >
      <Image
        style= {[{width:"100%",height:"100%"}, {"top":"\"34.22%\"","left":"\"-1.72%\"","source":"https://i.imgur.com/mkHo4H8.gif","width":200}]}
        source = {{uri:'https://i.imgur.com/mkHo4H8.gif'}}
       
      >
      </Image>
      </TouchableOpacity>


      

      

      <TouchableOpacity
      style= {[{position:'absolute',width:"20%",height:"20%", position:'absolute',top:"35.98%",left:"54.66%"}]}
       onPress = { function(){that.props.goTo("FirstPage")
appData.selectedSkin = "https://i.imgur.com/KXcppEK.gif"; that.forceUpdate(); }}  
      >
      <Image
        style= {[{width:"100%",height:"100%"}, {"source":"https://i.imgur.com/KXcppEK.gifhttps://i.imgur.com/KXcppEK.gif","top":"\"35.98%\"","left":"\"54.66%\""}]}
        source = {{uri:'https://i.imgur.com/KXcppEK.gifhttps://i.imgur.com/KXcppEK.gif'}}
       
      >
      </Image>
      </TouchableOpacity>


      
 <TouchableOpacity
          
          onPress = { function(){that.props.goTo('FirstPage'); that.forceUpdate(); }}  
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
              {"top":"58.41%","left":"36.74%","innerText":"'Home'"}]}
        >
        <Text style = {{color:"black"}}>

        {'Home'}

       </Text>
        </TouchableOpacity>


      <Image
        style= {[{resizeMode:'contain', position:'absolute',width:"20%",height:"20%"}, {"source":"http://www.pngmart.com/files/1/Transparent-Pineapple-PNG.png","top":"2.31%","left":"12.61%"}]}
        source = {{ uri:'http://www.pngmart.com/files/1/Transparent-Pineapple-PNG.png'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{position:'absolute',width:"20%",height:"20%"}, {resizeMode:'contain',"source":"http://www.pngmart.com/files/1/Transparent-Pineapple-PNG.png","top":"2.98%","left":"69.37%"}]}
        source = {{uri:'http://www.pngmart.com/files/1/Transparent-Pineapple-PNG.png'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      

      

      <TouchableOpacity
      style= {[{position:'absolute',width:"20%",height:"20%", position:'absolute',top:"36.34%",left:"33.16%"}]}
       onPress = { function(){appData.selectedSkin = "https://piskel-imgstore-b.appspot.com/img/11610bca-ccf4-11ea-bed0-8faa2d9b7894.gif"
that.props.goTo('FirstPage'); that.forceUpdate(); }}  
      >
      <Image
        style= {[{width:"100%",height:"100%"}, {"source":"https://piskel-imgstore-b.appspot.com/img/11610bca-ccf4-11ea-bed0-8faa2d9b7894.gif","top":"\"36.34%\"","left":"\"33.16%\""}]}
        source = {{uri:'https://piskel-imgstore-b.appspot.com/img/11610bca-ccf4-11ea-bed0-8faa2d9b7894.gif'}}
       
      >
      </Image>
      </TouchableOpacity>


      

      

      <TouchableOpacity
      style= {[{position:'absolute',width:"30%",height:"20%", position:'absolute',top:"37.86%",left:"75.02%"}]}
       onPress = { function(){appData.selectedSkin = "https://piskel-imgstore-b.appspot.com/img/8517a69c-cdb3-11ea-bec3-752299450aeb.gif";
that.props.goTo('FirstPage'); that.forceUpdate(); }}  
      >
      <Image
        style= {[{width:"100%",height:"100%"}, {"source":"https://piskel-imgstore-b.appspot.com/img/8517a69c-cdb3-11ea-bec3-752299450aeb.gif","top":"\"37.86%\"","left":"\"75.02%\"","width":"30%"}]}
        source = {{uri:'https://piskel-imgstore-b.appspot.com/img/8517a69c-cdb3-11ea-bec3-752299450aeb.gif'}}
       
      >
      </Image>
      </TouchableOpacity>


      
        </View>
        )
    }
  }
    export default SkinsPage; 



  