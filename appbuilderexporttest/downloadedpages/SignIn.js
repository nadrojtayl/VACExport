
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




 class SignIn extends React.Component {
     

    constructor(props)
    {
        super(props);
        this.state = {"currentWeight":"120","goalWeight":"110","calPerDay":"2000","calEaten":0,"ThirdPageinput5":"400 ","ThirdPageinput7":"200","ThirdPageinput9":"500","ThirdPageinput11":"100","SecondPageinput9":"63","height":"63","PageTwoinput3":"jasmineusername","PageTwoinput5":"jasminepw","SignIninput3":"jasmineusername","SignIninput5":"jasminepw","Statsinput2":"120","Statsinput4":"110","Statsinput9":"63","Statsinput6":"2000","CreateAccountinput2":"jasminec","CreateAccountinput4":"pw","PageFourinput5":"200","PageFourinput7":"400","PageFourinput9":"500","PageFourinput11":"100","Caloriesinput5":"200","Caloriesinput7":"400","Caloriesinput9":"500","Caloriesinput11":"100","heightInM":1.6002032004064008,"weightInKg":54.29864253393665,"bodyMassIndex":21.2050208117435,"createdelems":[]}
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
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"mediumslateblue"}}>
      {this.state.createdelems}

      <Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"6.95%", textAlign:'center', "innerText":"'MOOVE'","fontWeight":"bold", fontSize:20}]}
        > {'MOOVE'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"12.55%","left":"39.9%","innerText":"'Sign In'","fontSize":resizeFont(25),"color":"lavender","fontFamily":"Times New Roman"}]}
        > {'Sign In'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"19.46%","left":"4.9%","innerText":"'Username:'","fontSize":resizeFont(20),"color":"white","fontFamily":"Times New Roman"}]}
        > {'Username:'} </Text>
        
<TextInput
       style= {[{color:'black', position:'absolute', width:"60%", height:"5%", width:'60%', backgroundColor:'white',borderColor:'grey',borderWidth:1},{"top":"19.3%","left":"37.42%","color":"black","borderColor":"lavender"}]}
        value={appData["SignIninput3"]}
         onChangeText={function(val){ appData["SignIninput3"] = val; that.forceUpdate();   } }
        />
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"28.78%","left":"4.9%","innerText":"'Password:'","fontSize":resizeFont(20),"color":"white","fontFamily":"Times New Roman"}]}
        > {'Password:'} </Text>
        
<TextInput
       style= {[{position:'absolute', width:"60%", height:"5%", width:'60%', backgroundColor:'white',borderColor:'grey',borderWidth:1},{"top":"28.13%","left":"36.87%","color":"black","borderColor":"lavender"}]}
        value={appData["SignIninput5"]}
         onChangeText={function(val){ appData["SignIninput5"] = val; that.forceUpdate();   } }
        />
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"53.84%","left":"19.51%","innerText":"'Don't have an account?'","fontSize":"resizeFont(25)","color":"lavender","fontFamily":"Times New Roman"}]}
        > {'Dont have an account?'} </Text>
        


      <Image
        style= {[{width:"20%",height:"20%",position:'absolute'}, {"top":"75.2%","left":"25.57%","source":"https://i.imgflip.com/2yao8g.jpg?a443064","width":"50%"}]}
        source = {{uri:'https://i.imgflip.com/2yao8g.jpg?a443064'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      
 <TouchableOpacity
          
          onPress = { function(){alert('start');
if (filter_list_of_objs(Users,"Username","jasminecarnevale")){
    alert("true"); 
    that.props.goTo('Calories');
}else{
    alert("false");
    that.props.goTo('CreateAccount');
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
            position:'absolute',top:0,left:0, 
            backgroundColor:'#8fd158',
             alignItems:'center',
             justifyContent:'center', height: "7%",  
             title:'Test', borderColor: 'gray', color:'black',
              borderRadius:15, borderWidth: 1},
              {"top":"38.09%","left":"34.66%","innerText":"'Sign In'","backgroundColor":"lavender"}]}
        >
        <Text style = {{color:"black"}}>

        {'Sign In'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){that.props.goTo('CreateAccount'); that.forceUpdate(); }}  
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
              {"top":"62.19%","left":"34.94%","innerText":"'Create Account'","backgroundColor":"lavender"}]}
        >
        <Text style = {{color:"black"}}>

        {'Create Account'}

       </Text>
        </TouchableOpacity>
        </View>
        )
    }
  }
    export default SignIn; 



  