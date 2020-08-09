
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




 class PlayPage extends React.Component {
     

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

      

      <Image
        style= {[{width:"20%",height:"20%"}, {"top":600,"left":appData.skinPosition,"source":" appData.selectedSkin;","resizeMode":"contain","width":"15%"}]}
        source = {{uri: appData.selectedSkin}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      
 <TouchableOpacity
          
          onPress = { function(){pause("https://vgmdownloads.com/soundtracks/wii-music-collection/tasdctcp/04.%20Mii%20Plaza.mp3");
clearInterval(appData.interval);
appData.batPosition = 0;
appData.meters = 0;
that.props.goTo('SkinsPage');; that.forceUpdate(); }}  
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
              {"innerText":"'Change Skin'","top":"5%","left":"70.31%","backgroundColor":"blue","color":"yellow"}]}
        >
        <Text style = {{color:"yellow"}}>

        {'Change Skin'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){pause("https://vgmdownloads.com/soundtracks/wii-music-collection/tasdctcp/04.%20Mii%20Plaza.mp3");
clearInterval(appData.interval);
appData.batPosition = 0;
appData.meters = 0;
that.props.goTo("FirstPage");; that.forceUpdate(); }}  
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
              {"top":"5%","left":"0.16%","innerText":"'Home'","backgroundColor":"blue","color":"yellow"}]}
        >
        <Text style = {{color:"yellow"}}>

        {'Home'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){
            if (appData.skinPosition=="75%"){
    appData.skinPosition="50%";
}
else if (appData.skinPosition=="50%"){
    appData.skinPosition="25%";
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
            height:"5%",
            width:"30%",
            position:'absolute',top:0,left:0, 
            backgroundColor:'#8fd158',
             alignItems:'center',
             justifyContent:'center', height: "5%",  
             title:'Test', borderColor: 'gray', color:'black',
              borderRadius:15, borderWidth: 1},
              {"top":"86.84%","left":"15%","innerText":"'<-'","backgroundColor":"yellow","color":"blue"}]}
        >
        <Text style = {{color:"blue"}}>

        {'<-'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){if (appData.skinPosition=="25%"){
    appData.skinPosition="50%";
}
else if (appData.skinPosition=="50%"){
    appData.skinPosition="75%";
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
             justifyContent:'center', height: "5%",  
             title:'Test', borderColor: 'gray', color:'black',
              borderRadius:15, borderWidth: 1},
              {"top":"86.95%","left":"57.3%","innerText":"'->'","backgroundColor":"yellow","color":"blue"}]}
        >
        <Text style = {{color:"blue"}}>

        {'->'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){appData.interval = runWithInterval("appData.batPosition=appData.batPosition+12;\
appData.meters=appData.meters+4;\
if(appData.batPosition > 590){appData.batPosition = 0;\
    var rand = Math.floor(Math.random()*3);\
if (rand==0){appData.lane='25%';}\
    if (rand==1){appData.lane='50%';}\
    if (rand==2){appData.lane='75%';}\
}\
if(appData.batPosition > 500 && appData.skinPosition == appData.lane){\
clearInterval(appData.interval);\
appData.batPosition = 0;\
that.props.goTo('FinalPage');}",10);
appData.bulldog = runWithInterval("appData.batPosition2=appData.batPosition2+15;\
if(appData.batPosition2 > 590){appData.batPosition2 = 0;\
    var rand2 = Math.floor(Math.random()*3);\
if (rand2==0){appData.lane2=100;}\
    if (rand2==1){appData.lane2='50%';}\
    if (rand2==2){appData.lane2='75%';}\
}\
if(appData.batPosition2 > 500 && appData.skinPosition == appData.lane2){\
clearInterval(appData.bulldog);\
appData.batPosition2 = 0;\
clearInterval(appData.interval);\
appData.batPosition = 0;\
that.props.goTo('FinalPage');}",12);; that.forceUpdate(); }}  
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
              {"top":"92.82%","left":"34.29%","innerText":"' \"MEDIUM\";'","backgroundColor":"blue","color":"yellow"}]}
        >
        <Text style = {{color:"yellow"}}>

        {'MEDIUM'}

       </Text>
        </TouchableOpacity>


      <Image
        style= {[{width:"20%",height:"20%"}, {"source":"https://piskel-imgstore-b.appspot.com/img/6ab55c26-cb55-11ea-8f79-535e5c0a374b.gif","top":appData.batPosition,"left":appData.lane,"width":"15%","resizeMode":"contain"}]}
        source = {{uri:'https://piskel-imgstore-b.appspot.com/img/6ab55c26-cb55-11ea-8f79-535e5c0a374b.gif'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"7.69%","left":"4.5%","innerText":" appData.meters;","fontSize":"resizeFont(25)","color":"purple","source":"http://www.pngmart.com/files/1/Transparent-Pineapple-PNG.png","height":"25%","fontWeight":"bold"}]}
        > { appData.meters} </Text>
        


      <Image
        style= {[{resizeMode:'contain',width:"20%",height:"20%"}, {position:'absolute',"source":"http://www.pngmart.com/files/1/Transparent-Pineapple-PNG.png","top":"17.78%","left":"27.88%"}]}
        source = {{uri:'http://www.pngmart.com/files/1/Transparent-Pineapple-PNG.png'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{resizeMode:'contain',width:"20%",height:"20%"}, {position:'absolute',"source":"http://www.pngmart.com/files/1/Transparent-Pineapple-PNG.png","top":"41.09%","left":"27.88%"}]}
        source = {{uri:'http://www.pngmart.com/files/1/Transparent-Pineapple-PNG.png'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{resizeMode:'contain',width:"20%",height:"20%"}, {position:'absolute',"source":"http://www.pngmart.com/files/1/Transparent-Pineapple-PNG.png","top":"41.42%","left":"51.83%"}]}
        source = {{uri:'http://www.pngmart.com/files/1/Transparent-Pineapple-PNG.png'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{resizeMode:'contain',width:"20%",height:"20%"}, {position:'absolute',"source":"http://www.pngmart.com/files/1/Transparent-Pineapple-PNG.png","top":"17.66%","left":"52.21%"}]}
        source = {{uri:'http://www.pngmart.com/files/1/Transparent-Pineapple-PNG.png'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      
 <TouchableOpacity
          
          onPress = { function(){appData.interval = runWithInterval("appData.batPosition=appData.batPosition+14;\
appData.meters=appData.meters+8;\
if(appData.batPosition > 590){appData.batPosition = 0;\
    var rand = Math.floor(Math.random()*3);\
if (rand==0){appData.lane=100;}\
    if (rand==1){appData.lane=230;}\
    if (rand==2){appData.lane=350;}\
}\
if(appData.batPosition > 500 && appData.skinPosition == appData.lane){\
clearInterval(appData.interval);\
appData.batPosition = 0;\
clearInterval(appData.bulldog);\
appData.batPosition2 = 0;\
that.props.goTo('FinalPage');}",10);
appData.bulldog = runWithInterval("appData.batPosition2=appData.batPosition2+16;\
if(appData.batPosition2 > 590){appData.batPosition2 = 0;\
    var rand2 = Math.floor(Math.random()*3);\
if (rand2==0){appData.lane2='25%';}\
    if (rand2==1){appData.lane2='50%';}\
    if (rand2==2){appData.lane2='75%';}\
}\
if(appData.batPosition2 > 500 && appData.skinPosition == appData.lane2){\
clearInterval(appData.bulldog);\
appData.batPosition2 = 0;\
clearInterval(appData.interval);\
appData.batPosition = 0;\
that.props.goTo('FinalPage');}",10);; that.forceUpdate(); }}  
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
              {"top":"92.71%","left":"65.01%","innerText":"'HARD'","backgroundColor":"blue","color":"yellow"}]}
        >
        <Text style = {{color:"yellow"}}>

        {'HARD'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){appData.interval = runWithInterval("appData.batPosition=appData.batPosition+10;\
appData.meters=appData.meters+2;\
if(appData.batPosition > 590){appData.batPosition = 0;\
    var rand = Math.floor(Math.random()*3);\
if (rand==0){appData.lane='25%';}\
    if (rand==1){appData.lane='50%';}\
    if (rand==2){appData.lane='75%';}\
}\
if(appData.batPosition > 500 && appData.skinPosition == appData.lane){\
clearInterval(appData.interval);\
appData.batPosition = 0;\
that.props.goTo('FinalPage');}",20);; that.forceUpdate(); }}  
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
              {"top":"92.49%","left":"3.81%","innerText":"'EASY'","backgroundColor":"blue","color":"yellow"}]}
        >
        <Text style = {{color:"yellow"}}>

        {'EASY'}

       </Text>
        </TouchableOpacity>


      <Image
        style= {[{width:"20%",height:"20%"}, {"source":"https://piskel-imgstore-b.appspot.com/img/8d4e3121-d019-11ea-ab58-7bce0c6b7f53.gif","height":"25%","top":appData.batPosition2,"left":appData.lane2,"width":"10%","resizeMode":"contain"}]}
        source = {{uri:'https://piskel-imgstore-b.appspot.com/img/8d4e3121-d019-11ea-ab58-7bce0c6b7f53.gif'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      
        </View>
        )
    }
  }
    export default PlayPage; 



  