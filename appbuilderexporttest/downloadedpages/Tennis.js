
import React, { Component } from "react";
import { ActivityIndicator, Button, Picker, Switch, Image, ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
// import Calendar from "./Calendar.js";
import * as Calendar from 'expo-calendar';
import AsyncStorage from '@react-native-community/async-storage';


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




 class Tennis extends React.Component {
     

    constructor(props)
    {
        super(props);
        this.state = {"key":"value","timer":11,"createdelems":[]}
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
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"#cccccc"}}>
      {this.state.createdelems}

      <Text
          style= {[{position:'absolute',zIndex:100,
          width:'100%'},{"top":"9.21%","left":"0%", textAlign:"center",
          "innerText":"'Tennis'","fontSize":resizeFont(27)}]}
        > {'Tennis'} </Text>

        <TouchableOpacity
          
          onPress = { async function(){
            
             const { status } = await Calendar.requestCalendarPermissionsAsync();
      const reminderPermission = Calendar.requestRemindersPermissionsAsync();
      if (status === 'granted') {
        const calendars = await Calendar.getCalendarsAsync();
        const defaultCalendarSource =
        Platform.OS === 'ios';
        const sportsCal = await AsyncStorage.getItem('calendar');
      if(sportsCal === null){
        const newCalendarID = await Calendar.createCalendarAsync({
          title: 'Sports Return Calendar',
          color: 'blue',
          entityType: Calendar.EntityTypes.EVENT,
          sourceId: defaultCalendarSource.id,
          source: defaultCalendarSource,
          name: 'internalCalendarName',
          ownerAccount: 'personal',
          accessLevel: Calendar.CalendarAccessLevel.OWNER,
        });

        storeData("calendar", newCalendarID);
        var date = new Date();
        date.setDate(29);
        date.setMonth(9)
        date.setYear("2020")
        var enddate = new Date();
        enddate.setDate(30);
        enddate.setMonth(9)
        enddate.setYear("2020")

        var id = await Calendar.createEventAsync(newCalendarID, {
          title:"NBA Returns",
          startDate: date,
          endDate: enddate

        })

        alert("Its on your calendar!");

      } else {
       
        var date = new Date();
        date.setDate(29);
        date.setMonth(9)
        date.setYear("2020")
        var enddate = new Date();
        enddate.setDate(30);
        enddate.setMonth(9)
        enddate.setYear("2020")

         var id = await Calendar.createEventAsync(sportsCal, {
          title:"NBA Returns",
          startDate: date,
          endDate: enddate

        })

          alert("Its on your calendar!");
      }
     
    }



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
            position:'absolute',top:0,left:0, 
            backgroundColor:'purple',
             alignItems:'center',
             justifyContent:'center', height: "7%",  
             title:'Test', borderColor: 'gray', color:'black',
             top:"70%",
             left:"35%",
             textAlign:'center',
             zIndex:100,
              borderRadius:15, borderWidth: 1},
              {"innerText":"'Previous Page'"}]}
        >
        <Text style = {{color:"white", textAlign:'center'}}>

        {'Create Calendar Event'}

       </Text>
        </TouchableOpacity>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"24.03%","left":"0.82%","innerText":"'The ATP/WTA is set to reschedule on August 22nd. The US is to open their tennis with no change August 31st-September 13th. French-Open is rescheduled from Spetember 27th-October 11th  '"}]}
        > {'The ATP/WTA is set to reschedule on August 22nd. The US is to open their tennis with no change August 31st-September 13th. French-Open is rescheduled from Spetember 27th-October 11th  '} </Text>
        
 <TouchableOpacity
          
          onPress = { function(){that.props.goTo("SportsPage"); that.forceUpdate(); }}  
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
             alignItems:'center', top:"3%",
             justifyContent:'center', height: "4%",  
             title:'Test', borderColor: 'gray', color:'black',
              borderRadius:15, borderWidth: 1},
              {"innerText":"'Previous Page'"}]}
        >
        <Text style = {{color:"black"}}>

        {'Previous Page'}

       </Text>
        </TouchableOpacity>


      <Image
        style= {[{width:"20%",height:"20%",position:'absolute'}, {"top":"43.67%","left":"0%","height":"55%","width":"100%","source":"https://cdn.shopify.com/s/files/1/0646/5773/products/Tennis_Gallery_Calendar_2020_Cover_Dan_Evans_1024x1024.jpg?v=1573073540"}]}
        source = {{uri:'https://cdn.shopify.com/s/files/1/0646/5773/products/Tennis_Gallery_Calendar_2020_Cover_Dan_Evans_1024x1024.jpg?v=1573073540'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"15%","left":"28.08%","innerText":"   appData.timer + \" seconds until refresh\";"}]}
        > {   appData.timer + " seconds until refresh"} </Text>
        
        </View>
        )
    }
  }
    export default Tennis; 



  