
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

async function user_text(phone,message){
  const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      SMS.sendSMSAsync(phone, message);
    } else {
      alert("Texting isn't available on your device")
    }
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

// async function user_text(phone,message){
//   const isAvailable = await SMS.isAvailableAsync();
//     if (isAvailable) {
//       SMS.sendSMSAsync(phone, message);
//     } else {
//       alert("Texting isn't available on your device")
//     }
// }

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
        this.state = {"counter":4,"coins":0,"SecondChance":1,"visible":0,"createdelems":[]}
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
          style= {[{position:'absolute', backgroundColor:'white', textAlign:'center', zIndex:100,width:'100%'},{"top":"13.22%","left":"0.82%","height":"15%","fontSize":resizeFont(25)}]}
        > { JSON.parse(JSON.stringify(Data[appData.counter]["Question"])) } </Text>
        
        <Image 
        style = {{height:"105%",width:"100%",position:'absolute',zIndex:-500, left:"0%",top:"-5%"}}
        source = {{uri:"https://i.pinimg.com/736x/0f/25/19/0f2519e9175416f12789f7706da5fad3.jpg"}}>
        </Image>
 <TouchableOpacity
          
          onPress = { function(){if(JSON.parse(JSON.stringify(Data[appData.counter]["Answer 1"])) === JSON.parse(JSON.stringify(Data[appData.counter]["Correct Answer"]))  ){
    that.props.goTo("RightPage")
    appData.counter=appData.counter+1
    appData.coins=appData.coins+5
    appData.visible=0
}
else{if(appData.SecondChance!=1){
  that.props.goTo("IncorrectPage")
    appData.counter=appData.counter+1  
}
    appData.SecondChance=0
    appData.visible=1
    
   
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
            position:'absolute',
            backgroundColor:'#8fd158',
             alignItems:'center',
             justifyContent:'center', height: "7%",  
             title:'Test', borderColor: 'gray', color:'black',
              borderRadius:15, borderWidth: 1},
              {"top":"34.47%","left":"31.87%",
              "backgroundColor":"purple","color":"yellow"}]}
        >
        <Text style = {{color:"yellow"}}>

        { JSON.parse(JSON.stringify(Data[appData.counter]["Answer 1"])) }

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){if(JSON.parse(JSON.stringify(Data[appData.counter]["Correct Answer"])) === JSON.parse(JSON.stringify(Data[appData.counter]["Correct Answer"]))  ){
    that.props.goTo("RightPage")
    appData.counter=appData.counter+1
    appData.coins= appData.coins+5
    appData.visible=0
}
else{if(appData.SecondChance!=1){
  that.props.goTo("IncorrectPage")
    appData.counter=appData.counter+1  
}
    appData.SecondChance=0
    appData.visible=1

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
            position:'absolute',
            backgroundColor:'#8fd158',
             alignItems:'center',
             justifyContent:'center', height: "7%",  
             title:'Test', borderColor: 'gray', color:'black',
              borderRadius:15, borderWidth: 1},
              {"top":"65.42%","left":"32.82%"}]}
        >
        <Text style = {{color:"red"}}>

        { JSON.parse(JSON.stringify(Data[appData.counter]["Answer 4"])) }

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){if(JSON.parse(JSON.stringify(Data[appData.counter]["Answer 3"])) === JSON.parse(JSON.stringify(Data[appData.counter]["Correct Answer"]))  ){
    that.props.goTo("RightPage")
    appData.counter=appData.counter+1
    appData.coins=appData.coins+5
    appData.visible=0
}
else{if(appData.SecondChance!=1){
  that.props.goTo("IncorrectPage")
    appData.counter=appData.counter+1  
}
    appData.SecondChance=0
    appData.visible=1

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
            position:'absolute',
            backgroundColor:'#8fd158',
             alignItems:'center',
             justifyContent:'center', height: "7%",  
             title:'Test', borderColor: 'gray', color:'black',
              borderRadius:15, borderWidth: 1},
              {"top":"54.49%","left":"32.82%","backgroundColor":"green","color":"white"}]}
        >
        <Text style = {{color:"white"}}>

        { JSON.parse(JSON.stringify(Data[appData.counter]["Answer 3"])) }

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){if(JSON.parse(JSON.stringify(Data[appData.counter]["Answer 2"])) === JSON.parse(JSON.stringify(Data[appData.counter]["Correct Answer"]))  ){
    that.props.goTo("RightPage")
    appData.counter=appData.counter+1
    appData.coins=appData.coins+5
    appData.visible=0
}
else{if(appData.SecondChance!=1){
  that.props.goTo("IncorrectPage")
    appData.counter=appData.counter+1  
}
    appData.SecondChance=0
    appData.visible=1

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
            position:'absolute',
            backgroundColor:'#8fd158',
             alignItems:'center',
             justifyContent:'center', height: "7%",  
             title:'Test', borderColor: 'gray', color:'black',
              borderRadius:15, borderWidth: 1},
              {"top":"44.23%","left":"32.1%","backgroundColor":"blue","color":"yellow"}]}
        >
        <Text style = {{color:"yellow"}}>

        { JSON.parse(JSON.stringify(Data[appData.counter]["Answer 2"])) }

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){that.props.goTo("StartPage"); that.forceUpdate(); }}  
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
            position:'absolute',
            backgroundColor:'#8fd158',
             alignItems:'center',
             justifyContent:'center', height: "7%",  
             title:'Test', borderColor: 'gray', color:'black',
              borderRadius:15, borderWidth: 1},
              {"innerText":"'Back'","top":"2.5%","left":"0.11%","backgroundColor":"yellow"}]}
        >
        <Text style = {{color:"black"}}>

        {'Start Over'}

       </Text>
        </TouchableOpacity>
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"5%","left":"71.91%"}]}
        > { appData.Zoins} </Text>
        
<Text
          style= {[{backgroundColor:'yellow', width:"2%", position:'absolute',zIndex:100,width:'18%', borderRadius:5},{"top":"5%","left":"74.57%"}]}
        > {'Zoins:'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"innerText":" appData.coins;","top":"5%","left":"86.3%"}]}
        > { appData.coins} </Text>
        

 <TouchableOpacity
          
          onPress = { function(){

            user_text("","This is an automated message from NBATriviaApp. I need your help with a question because I know you're an NBA whiz. Here's the question: " + JSON.parse(JSON.stringify(Data[appData.counter]["Question"] + "?")) );
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
            position:'absolute',
            backgroundColor:'#8fd158',
             alignItems:'center',
             justifyContent:'center', height: "7%",  
             title:'Test', borderColor: 'gray', color:'black',
              borderRadius:15, borderWidth: 1},
              {"top":"84.45%","left":0,
              "innerText":"'Second Chance= 15 Zoins'",
              "fontSize":"resizeFont(10)",
              "backgroundColor":"yellow"}]}
        >
        <Text style = {{color:"black"}}>

        {'Text A Friend'}

       </Text>
        </TouchableOpacity>



 <TouchableOpacity
          
          onPress = { function(){if(appData.coins>=15){
    appData.coins=appData.coins-15
    appData.SecondChance=1
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
              {"top":"84.45%","left":"70%"
              ,"fontSize":"resizeFont(10)","backgroundColor":"yellow"}]}
        >
        <Text style = {{color:"black"}}>

        {'Second Chance= 15 Zoins'}

       </Text>
        </TouchableOpacity>
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"76.51%","left":"11.73%","color":"red","opacity":" appData.visible;"}]}
        > {'You Got It Wrong But Try Again!!'} </Text>
        
        </View>
        )
    }
  }
    export default FirstPage; 



  