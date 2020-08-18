
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
        this.state = {"key":"value","FirstPageinput2":"Select","FirstPagepicker0":"","loaded":false,"dbLinks":{},"LOGIN_SIGNUPinput2":"","LOGIN_SIGNUPinput3":"","FirstPageinput4":"","FirstPageinput5":"","FirstPageinput3":"","CREATEinput3":"","CREATEinput4":"","index":1,"opacity":0,"FirstPageinput6":"","index2":1,"search":[{"Riddle":"Why did the lizard cross the playground?","Answer":"To get to the other slide.","Owner":"Mamacita"},{"Riddle":"Why?","Answer":"Of course","Owner":"Mamacita"}],"opacity2":0,"SEARCH_VIEWinput3":"","data":[{"Riddle":"What comes once in a minute, twice in a moment, but never in a thousand years?","Answer":"The letter \"M\".","Owner":"Riddlemethis","Index":0},{"Riddle":"What is more useful when it is broken?","Answer":"An egg.","Owner":"Riddlemethis","Index":1},{"Riddle":"I'm not clothes but I cover your body. The more I'm used, the thinner I grow. What am I?","Answer":"A bar of soap.","Owner":"Riddlemethis","Index":2},{"Riddle":"What eight letter word can you take one letter away from to create a new word, until it's just one letter?","Answer":"Starting.","Owner":"Riddlemethis","Index":3},{"Riddle":"What can go up and come down without moving?","Answer":"The temperature / Mood / The sun.","Owner":"Riddlemethis","Index":4},{"Riddle":"Why did the lizard cross the playground?","Answer":"To get to the other slide.","Owner":"Mamacita"},{"Riddle":"Why?","Answer":"Of course","Owner":"Mamacita"}],"SEARCH_VIEWinput8":"","searching":"","searching2":"","profiles":[{"Usernames":"Mamacita","Passwords":"1019"}]}
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
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"pink"}}>
       <TouchableOpacity
          
          onPress = { function(){if(findInArrayOfObjects(Data_Profiles,{'Usernames': appData.FirstPageinput4})){
alert("This username is already taken");
} else if (appData.FirstPageinput4 === ""){
    alert('Please add a username.');
} else if (appData.FirstPageinput6 === ""){
    alert('Please add a password.');
} else{
that.props.saveTo('Data_Profiles',{'Usernames':appData.FirstPageinput4, 'Passwords': appData.FirstPageinput6});
that.props.goTo('HOME');  
appData.FirstPageinput3 = appData.FirstPageinput4;
appData.FirstPageinput4 = "";
appData.FirstPageinput5 = appData.FirstPageinput6;
appData.FirstPageinput6 = "";
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"innerText":"'SIGN UP'","backgroundColor":"#204016","color":"pink","borderWidth":1,"borderStyle":"dashed","top":"71.85%","left":"34.88%","fontWeight":"BOLD"}]}
        >
        <Text style = {{color:"pink"}}>

        {'SIGN UP'}

       </Text>
        </TouchableOpacity>
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},
          {"color":"#204016","top":"10.48%","left":"0%", "fontSize": 15, "textAlign": "center", "innerText":"'Enter your username and password in the Log In spot if you already have an account. Enter a new username and password in the Sign Up spot to create a new account. The password must be no more or less than four characters long.'"}]}
        > {'Enter your username and password in the Log In spot if you already have an account. Enter a new username and password in the Sign Up spot to create a new account. The password must be no more or less than four characters long.'} </Text>
        
 <TouchableOpacity
          
          onPress = { function(){var user = findInArrayOfObjects(Data_Profiles,{'Usernames': appData.FirstPageinput3});
if(appData.FirstPageinput3 === ""){
alert("Please add a username.");
} else if (findInArrayOfObjects(Data_Profiles,{'Usernames': appData.FirstPageinput3}) === false){
    alert('This username does not exist.');
} else if (appData.FirstPageinput5 === ""){
    alert("Please add a password");
} else {
if (user ["Passwords"] != appData.FirstPageinput5){
    alert("Password does not match.");
} else{
    that.props.goTo('HOME');
    appData.FirstPageinput4 = "";
}}; that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"innerText":"'LOG IN'","backgroundColor":"#204016","color":"pink","borderWidth":1,"borderStyle":"dashed","top":"43.72%","left":"35.13%","fontWeight":"bold"}]}
        >
        <Text style = {{color:"pink"}}>

        {'LOG IN'}

       </Text>
        </TouchableOpacity>
<TextInput
       style= {[{width:"60%", height:"5%", width:'60%', backgroundColor:'white',borderColor:'grey',borderWidth:1},
       {"top":"28.69%","left":"19.97%"}]}
        value={appData["FirstPageinput3"]}
         onChangeText={function(val){ appData["FirstPageinput3"] = val; that.forceUpdate();   } }
        />
<TextInput
       style= {[{width:"60%", height:"5%", width:'60%', backgroundColor:'white',borderColor:'grey',borderWidth:1},
       {"top":"53.26%","left":"20.19%"}]}
        value={appData["FirstPageinput4"]}
         onChangeText={function(val){ appData["FirstPageinput4"] = val; that.forceUpdate();   } }
        />
<TextInput
       style= {[{width:"60%", height:"5%", width:'60%', backgroundColor:'white',borderColor:'grey',borderWidth:1},
       {"top":"26.98%","left":"20.19%"}]}
        value={appData["FirstPageinput5"]}
         onChangeText={function(val){ appData["FirstPageinput5"] = val; that.forceUpdate();   } }
        />
<TextInput
       style= {[{width:"60%", height:"5%", width:'60%', backgroundColor:'white',borderColor:'grey',borderWidth:1},
       {"top":"50.3%","left":"20.19%"}]}
        value={appData["FirstPageinput6"]}
         onChangeText={function(val){ appData["FirstPageinput6"] = val; that.forceUpdate();   } }
        />
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"30.02%","left":"0.93%","innerText":"'Username'","color":"#204016"}]}
        > {'Username'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"59.82%","left":"1.18%","innerText":"'Username'","color":"#204016"}]}
        > {'Username'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"38.53%","left":"0.93%","innerText":"'Password'","color":"#204016"}]}
        > {'Password'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"66.67%","left":"1.18%","innerText":"'Password'","color":"#204016"}]}
        > {'Password'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"52.97%","left":"7.26%","innerText":"'__________________________________________________________'","color":"#204016"}]}
        > {'__________________________________________________________'} </Text>
        


      <Image
        style= {[{width:"20%",height:"20%"}, {"source":"https://i.postimg.cc/sf02McrR/My-Post-4.png","top":"81.66%","left":"0.17%","width":"100%","height":"20%"}]}
        source = {{uri:'https://i.postimg.cc/sf02McrR/My-Post-4.png'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      
        </View>
        )
    }
  }
    export default FirstPage; 



  