
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
    SMS.sendSMSAsync(phone, message)
  } else {
    alert("You don't have text on this device");
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
        this.state = {"FirstPageinput23":"100","FirstPageinput24":"5","FirstPageinput25":"-20","FirstPageinput26":"0","total":543.05,"today":"2020-07-23T15:53:39.377Z","createdelems":[]}
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

      <View
        style= {[{position:'absolute',zIndex:-1000, height:'10%',width:'10%'},{"height":"15%","width":"100%","backgroundColor":"#2bed78","borderWidth":0,"top":"-0.32%","left":"0.04%"}]}
        ></View>
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"4.1%","left":"0.04%","fontStyle":"italic","fontSize":resizeFont(35),"textAlign":"center","fontWeight":"light","fontFamily":"Futura","innerText":"'Money$Calc'","textDecorationLine":"underline","color":"#0c4222"}]}
        > {'Money$Calc'} </Text>
        
<View
        style= {[{position:'absolute',zIndex:-1000, height:'10%',width:'10%'},{"top":"14.56%","left":"0.04%","backgroundColor":"#d6d6d6","borderWidth":0,"height":"100%","width":"100%","innerText":"'Email me calculation details'"}]}
        ></View>
<View
        style= {[{position:'absolute',zIndex:-1000, height:'10%',width:'10%'},{"top":"16.82%","left":"2.91%","backgroundColor":"#5c5c5c","width":"29%","height":"6%","borderWidth":0}]}
        ></View>
<View
        style= {[{position:'absolute',zIndex:-1000, height:'10%',width:'10%'},{"top":"16.82%","left":"67.82%","backgroundColor":"#5c5c5c","width":"29%","height":"6%","borderWidth":0}]}
        ></View>
<View
        style= {[{position:'absolute',zIndex:-1000, height:'10%',width:'10%'},{"top":"16.82%","left":"35.49%","backgroundColor":"#5c5c5c","width":"29%","height":"6%","borderWidth":0}]}
        ></View>
<View
        style= {[{position:'absolute',zIndex:-1000, height:'10%',width:'10%'},{"backgroundColor":"#ffffff","top":"22.87%","left":"2.91%","borderWidth":0,"width":"29%","height":"15%"}]}
        ></View>
<View
        style= {[{position:'absolute',zIndex:-1000, height:'10%',width:'10%'},{"backgroundColor":"#ffffff","top":"22.87%","left":"35.49%","borderWidth":0,"width":"29%","height":"15%"}]}
        ></View>
<View
        style= {[{position:'absolute',zIndex:-1000, height:'10%',width:'10%'},{"backgroundColor":"#ffffff","top":"22.87%","left":"67.82%","borderWidth":0,"width":"29%","height":"15%"}]}
        ></View>
<View
        style= {[{position:'absolute',zIndex:-1000, height:'10%',width:'10%'},{"top":"64.42%","left":"2.19%","backgroundColor":"#5c5c5c","width":"95%","height":"7%"}]}
        ></View>
<View
        style= {[{position:'absolute',zIndex:-1000, height:'10%',width:'10%'},{"backgroundColor":"#ffffff","top":"71.35%","left":"2.19%","borderWidth":0,"width":"95%","height":"16%"}]}
        ></View>
<View
        style= {[{position:'absolute',zIndex:-1000, height:'10%',width:'10%'},{"top":"39.49%","left":"2.43%","backgroundColor":"#5c5c5c","width":"45.5%","height":"7%"}]}
        ></View>
<View
        style= {[{position:'absolute',zIndex:-1000, height:'10%',width:'10%'},{"backgroundColor":"#ffffff","top":"46.59%","left":"2.43%","borderWidth":0,"width":"45.5%","height":"16%"}]}
        ></View>
<View
        style= {[{position:'absolute',zIndex:-1000, height:'10%',width:'10%'},{"height":"15%","width":"100%","backgroundColor":"#2bed78","borderWidth":0,"top":"89.7%","left":"0.04%"}]}
        ></View>
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"18.37%","left":"2.91%","width":"29%","textAlign":"center","color":"white","fontWeight":"bold","innerText":"'Rate ($)'","fontSize":resizeFont(12)}]}
        > {'Rate ($)'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"18.37%","left":"35.49%","width":"29%","textAlign":"center","color":"white","fontWeight":"bold","innerText":"'Interest Rate (%)'","fontSize":resizeFont(12)}]}
        > {'Interest Rate (%)'} </Text>
        

        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"65.29%","left":"2.19%","width":"95%","textAlign":"center","color":"white","fontWeight":"bold","innerText":"'Total'","fontSize":resizeFont(20)}]}
        > {'Total'} </Text>
        

        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"18.2%","left":"67.82%","width":"29%","textAlign":"center","color":"white","fontWeight":"bold","innerText":"'Add/Subtract'","fontSize":resizeFont(12)}]}
        > {'Add/Subtract'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"40.88%","left":"2.67%","width":"45%","textAlign":"center","color":"white","fontWeight":"bold","innerText":"'Current Date'","fontSize":resizeFont(15)}]}
        > {'Current Date'} </Text>
        
<TextInput
       style= {[{position:'absolute', width:"60%", height:"5%", width:'60%', backgroundColor:'white',borderColor:'grey',borderWidth:1},{"top":"22.75%","left":"2.39%","height":"15%","width":"29%","color":"black","textAlign":"center","fontWeight":"normal","fontSize":resizeFont(32),"borderWidth":0}]}
        value={appData["FirstPageinput23"]}
         onChangeText={function(val){ appData["FirstPageinput23"] = val; that.forceUpdate();   } }
        />
<TextInput
       style= {[{position:'absolute', width:"60%", height:"5%", width:'60%', backgroundColor:'white',borderColor:'grey',borderWidth:1},{"top":"22.53%","left":"35.25%","height":"15%","width":"29%","color":"black","textAlign":"center","fontWeight":"normal","fontSize":resizeFont(30),"borderWidth":0}]}
        value={appData["FirstPageinput24"]}
         onChangeText={function(val){ appData["FirstPageinput24"] = val; that.forceUpdate();   } }
        />
<TextInput
       style= {[{position:'absolute', width:"60%", height:"5%", width:'60%', backgroundColor:'white',borderColor:'grey',borderWidth:1},{"top":"22.87%","left":"68.06%","height":"15%","width":"29%","color":"black","textAlign":"center","fontWeight":"normal","fontSize":resizeFont(30),"borderWidth":0}]}
        value={appData["FirstPageinput25"]}
         onChangeText={function(val){ appData["FirstPageinput25"] = val; that.forceUpdate();   } }
        />
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"74.29%","left":"2.19%","width":"95%","height":"10%","textAlign":"center","innerText":"      \"$\" + appData.total;","fontSize":resizeFont(35),"fontWeight":"normal"}]}
        > {      "$" + appData.total} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"49.71%","left":"2.43%","width":"45.5%","height":"15%","textAlign":"center","innerText":"'String(month + 1) + \"/\" + String(day)'","fontSize":resizeFont(35),"fontWeight":"normal"}]}
        > {String(month + 1) + "/" + String(day)} </Text>
        
 <TouchableOpacity
          
          onPress = { function(){appData.total += parseFloat(appData.FirstPageinput23)
appData.total = Math.round(100*appData.total)/100;; that.forceUpdate(); }}  
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
              {"top":"39.67%","left":"51.3%","borderRadius":0,"borderWidth":0,"width":"45.5%","height":"5.75%","backgroundColor":"#5c5c5c","fontSize":resizeFont(15),"color":"white","fontWeight":"bold","innerText":"'Apply Rate'"}]}
        >
        <Text style = {{color:"white"}}>

        {'Apply Rate'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){appData.total *= (1 + parseFloat(appData.FirstPageinput24)/100);
appData.total = Math.round(100*appData.total)/100;; that.forceUpdate(); }}  
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
              {"top":"45.21%","left":"51.3%","borderRadius":0,"borderWidth":0,"width":"45.5%","height":"5.75%","backgroundColor":"#636363","fontSize":resizeFont(15),"color":"white","fontWeight":"bold","innerText":"'Apply Interest'"}]}
        >
        <Text style = {{color:"white"}}>

        {'Apply Interest'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){appData.total += parseFloat(appData.FirstPageinput25);
appData.total = Math.round(100*appData.total)/100;; that.forceUpdate(); }}  
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
              {"top":"50.75%","left":"51.3%","borderRadius":0,"borderWidth":0,"width":"45.5%","height":"5.75%","backgroundColor":"#5c5c5c","fontSize":resizeFont(15),"color":"white","fontWeight":"bold","innerText":"'Add/Subtract'"}]}
        >
        <Text style = {{color:"white"}}>

        {'Add/Subtract'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){appData.total = 0;; that.forceUpdate(); }}  
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
              {"top":"56.46%","left":"51.3%","borderRadius":0,"borderWidth":0,"width":"45.5%","height":"5.75%","backgroundColor":"#636363","fontSize":resizeFont(15),"color":"white","fontWeight":"bold","innerText":"'Reset Total'"}]}
        >
        <Text style = {{color:"white"}}>

        {'Reset Total'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){; 
            user_text("",
            `The rate is ` + appData.FirstPageinput23 + `. The interest rate % is ` + appData.FirstPageinput24 + `. The addition is ` + appData.FirstPageinput25 + `. All together the total is `+ appData.total

            );

            that.forceUpdate(); }}  
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
              {"top":"92.04%","left":"18.54%","innerText":"'Email me calculation details'","width":"65%","height":"5%","backgroundColor":"#d6d6d6"}]}
        >
        <Text style = {{color:"black"}}>

        {'Text calculation details'}

       </Text>
        </TouchableOpacity>
        </View>
        )
    }
  }
    export default FirstPage; 



  