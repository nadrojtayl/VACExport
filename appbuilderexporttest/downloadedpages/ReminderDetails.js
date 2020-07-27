
import React, { Component } from "react";
import { ActivityIndicator, Button, Picker, Switch, Image, ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
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




 class ReminderDetails extends React.Component {
     

    constructor(props)
    {
        super(props);
        this.state = {"displayText":"Brush Teeth","ReminderDetailsinput2":"Select","ReminderDetailspicker3":"Select","ReminderDetailsswitch4":true,"ReminderDetailsswitch3":true,"ReminderDetailsinput3":"","ReminderDetailsswitch2":false,"ReminderDetailsswitch6":false,"ReminderDetailsswitch7":false,"ReminderDetailsswitch8":false,"ReminderDetailsswitch9":false,"ReminderDetailsswitch10":false,"ReminderDetailsswitch11":false,"ReminderDetailspicker19":"12:00 AM","accentColor":"#ADD8E6","lightBlueColor":"#ADD8E6","ReminderDetailspicker22":"Twice per day","ReminderDetailspicker25":"12:00 AM","ReminderDetailspicker26":"12:00 AM","ReminderDetailspicker27":"12:00 AM","ReminderDetailspicker28":"","ReminderDetailspicker29":"","ReminderDetailspicker30":"","ReminderDetailspicker31":"","ReminderDetailspicker32":"","filter":[{"Name":"Mason","Day Taken":"","How Often":"","Time Taken":"","Index":0},{"Name":"Mason","Day Taken":"","How Often":"","Time Taken":"","Index":2}],"userInformation":[{"Name":"Mason","Day Taken":"","How Often":"","Time Taken":"","Index":0},{"Name":"Mason","Day Taken":"","How Often":"","Time Taken":"","Index":2}],"Welcomeinput2":"k ladjfkdajs;dfj","FirstPageinput3":"Select","pickerB":-1,"FirstPageinput2":"Mason","pickerC":-1,"pickerD":-1}
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
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"9%","left":"0%","innerText":" appData.displayText;","fontSize":"resizeFont(22)","width":"100%","textAlign":"center"}]}
        > { appData.displayText} </Text>
        
 <TouchableOpacity
          
          onPress = { function(){that.props.goTo("NewReminder");; that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"innerText":"'Previous'","top":"2.5%","left":"2.5%","backgroundColor":"#ADD8E6","fontSize":"resizeFont(14)","width":"25%","height":"5%"}]}
        >
        <Text style = {{color:"black"}}>

        {'Previous'}

       </Text>
        </TouchableOpacity>
<Switch 
         value={appData["ReminderDetailsswitch2"]}
         onValueChange={function(val){ appData["ReminderDetailsswitch2"] = val; that.forceUpdate();   } }
        style= {[{position:'absolute',width:'30%'},{"top":"33%","left":"13%"}]}
        ></Switch>
<TextInput
       style= {[{width:"60%", height:"5%", width:'60%', backgroundColor:'white',borderColor:'grey',borderWidth:1},{"top":"19%","left":"13%","width":"74%","placeholder [string]":"Enter Name Here"}]}
        value={appData["ReminderDetailsinput3"]}
         onChangeText={function(val){ appData["ReminderDetailsinput3"] = val; that.forceUpdate();   } }
        />
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"innerText":"'Name:'","top":"15%","left":"13%"}]}
        > {'Name:'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"innerText":"'Day(s):'","top":"29%","left":"13%"}]}
        > {'Day(s):'} </Text>
        
<Switch 
         value={appData["ReminderDetailsswitch6"]}
         onValueChange={function(val){ appData["ReminderDetailsswitch6"] = val; that.forceUpdate();   } }
        style= {[{position:'absolute',width:'30%'},{"top":"33.19%","left":"33.57%"}]}
        ></Switch>
<Switch 
         value={appData["ReminderDetailsswitch7"]}
         onValueChange={function(val){ appData["ReminderDetailsswitch7"] = val; that.forceUpdate();   } }
        style= {[{position:'absolute',width:'30%'},{"top":"42.03%","left":"65.19%"}]}
        ></Switch>
<Switch 
         value={appData["ReminderDetailsswitch8"]}
         onValueChange={function(val){ appData["ReminderDetailsswitch8"] = val; that.forceUpdate();   } }
        style= {[{position:'absolute',width:'30%'},{"top":"42.18%","left":"44.11%"}]}
        ></Switch>
<Switch 
         value={appData["ReminderDetailsswitch9"]}
         onValueChange={function(val){ appData["ReminderDetailsswitch9"] = val; that.forceUpdate();   } }
        style= {[{position:'absolute',width:'30%'},{"top":"42.18%","left":"22.55%"}]}
        ></Switch>
<Switch 
         value={appData["ReminderDetailsswitch10"]}
         onValueChange={function(val){ appData["ReminderDetailsswitch10"] = val; that.forceUpdate();   } }
        style= {[{position:'absolute',width:'30%'},{"top":"33.03%","left":"55.85%"}]}
        ></Switch>
<Switch 
         value={appData["ReminderDetailsswitch11"]}
         onValueChange={function(val){ appData["ReminderDetailsswitch11"] = val; that.forceUpdate();   } }
        style= {[{position:'absolute',width:'30%'},{"top":"33%","left":"77.5%"}]}
        ></Switch>
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"46.06%","left":"63.27%","innerText":"'Saturday'","width":"25%"}]}
        > {'Saturday'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"45.75%","left":"44.35%","innerText":"'Friday'","width":"25%"}]}
        > {'Friday'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"45.75%","left":"20.4%","innerText":"'Thursday'","width":"25%"}]}
        > {'Thursday'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"36.45%","left":"73.09%","innerText":"'Wednesday'","width":"40%"}]}
        > {'Wednesday'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"36.32%","left":"53.17%","innerText":"'Tuesday'","width":"25%"}]}
        > {'Tuesday'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"36.6%","left":"33.09%","innerText":"'Monday'","width":"25%"}]}
        > {'Monday'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"36.45%","left":"13%","innerText":"'Sunday'","width":"25%"}]}
        > {'Sunday'} </Text>
        
<Picker
      itemStyle = {{height:"100%"}}
         value={appData["ReminderDetailspicker19"]}
         onValueChange={function(val){ appData["ReminderDetailspicker19"] = val; that.forceUpdate();   } }
        style= {[{position:'absolute',height:'5%',width:'50%'}, {"top":"68.24%","left":"13.38%","options":["12:00 AM","12:30 AM","1:00 AM","1:30 AM","2:00 AM","2:30 AM","3:00 AM","3:30 AM","4:00 AM","4:30 AM","5:00 AM","5:30 AM","6:00 AM","6:30 AM","7:00 AM","7:30 AM","8:00 AM","8:30 AM","9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","1:00 PM","1:30 PM","2:00 PM","2:30 PM","3:00 PM","3:30 PM","4:00 PM","4:30 PM","5:00 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM","9:30 PM","10:00 PM","10:30 PM","11:00 PM","11:30 PM"],"innerText":"'undefined'","backgroundColor":"#ADD8E6","color":"black","height":"7%","width":"35%"}]}
        
      > 
        <Picker.Item label={"Select"} value={"Select"} />
        <Picker.Item label={"Option1"} value={"Option1"} />
        <Picker.Item label={"12:00 AM"} value={"12:00 AM"} /><Picker.Item label={"12:30 AM"} value={"12:30 AM"} /><Picker.Item label={"1:00 AM"} value={"1:00 AM"} /><Picker.Item label={"1:30 AM"} value={"1:30 AM"} /><Picker.Item label={"2:00 AM"} value={"2:00 AM"} /><Picker.Item label={"2:30 AM"} value={"2:30 AM"} /><Picker.Item label={"3:00 AM"} value={"3:00 AM"} /><Picker.Item label={"3:30 AM"} value={"3:30 AM"} /><Picker.Item label={"4:00 AM"} value={"4:00 AM"} /><Picker.Item label={"4:30 AM"} value={"4:30 AM"} /><Picker.Item label={"5:00 AM"} value={"5:00 AM"} /><Picker.Item label={"5:30 AM"} value={"5:30 AM"} /><Picker.Item label={"6:00 AM"} value={"6:00 AM"} /><Picker.Item label={"6:30 AM"} value={"6:30 AM"} /><Picker.Item label={"7:00 AM"} value={"7:00 AM"} /><Picker.Item label={"7:30 AM"} value={"7:30 AM"} /><Picker.Item label={"8:00 AM"} value={"8:00 AM"} /><Picker.Item label={"8:30 AM"} value={"8:30 AM"} /><Picker.Item label={"9:00 AM"} value={"9:00 AM"} /><Picker.Item label={"9:30 AM"} value={"9:30 AM"} /><Picker.Item label={"10:00 AM"} value={"10:00 AM"} /><Picker.Item label={"10:30 AM"} value={"10:30 AM"} /><Picker.Item label={"11:00 AM"} value={"11:00 AM"} /><Picker.Item label={"11:30 AM"} value={"11:30 AM"} /><Picker.Item label={"12:00 PM"} value={"12:00 PM"} /><Picker.Item label={"12:30 PM"} value={"12:30 PM"} /><Picker.Item label={"1:00 PM"} value={"1:00 PM"} /><Picker.Item label={"1:30 PM"} value={"1:30 PM"} /><Picker.Item label={"2:00 PM"} value={"2:00 PM"} /><Picker.Item label={"2:30 PM"} value={"2:30 PM"} /><Picker.Item label={"3:00 PM"} value={"3:00 PM"} /><Picker.Item label={"3:30 PM"} value={"3:30 PM"} /><Picker.Item label={"4:00 PM"} value={"4:00 PM"} /><Picker.Item label={"4:30 PM"} value={"4:30 PM"} /><Picker.Item label={"5:00 PM"} value={"5:00 PM"} /><Picker.Item label={"5:30 PM"} value={"5:30 PM"} /><Picker.Item label={"6:00 PM"} value={"6:00 PM"} /><Picker.Item label={"6:30 PM"} value={"6:30 PM"} /><Picker.Item label={"7:00 PM"} value={"7:00 PM"} /><Picker.Item label={"7:30 PM"} value={"7:30 PM"} /><Picker.Item label={"8:00 PM"} value={"8:00 PM"} /><Picker.Item label={"8:30 PM"} value={"8:30 PM"} /><Picker.Item label={"9:00 PM"} value={"9:00 PM"} /><Picker.Item label={"9:30 PM"} value={"9:30 PM"} /><Picker.Item label={"10:00 PM"} value={"10:00 PM"} /><Picker.Item label={"10:30 PM"} value={"10:30 PM"} /><Picker.Item label={"11:00 PM"} value={"11:00 PM"} /><Picker.Item label={"11:30 PM"} value={"11:30 PM"} />
      </Picker>
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"innerText":"'Time:'","top":"65.29%","left":"13.15%","width":"100%"}]}
        > {'Time:'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"innerText":"'How Often:'","top":"51.64%","left":"13%","width":"100%"}]}
        > {'How Often:'} </Text>
        
<Picker
         value={appData["ReminderDetailspicker22"]}
         onValueChange={function(val){ appData["ReminderDetailspicker22"] = val; that.forceUpdate();   } }
        style= {[{position:'absolute',height:'5%',width:'40%'}, {"top":"53.84%","left":"12.44%","backgroundColor":"#ADD8E6","color":"black","options":["Once per day","Twice per day","3 times per day","4 times per day"],"height":"7%"}]}
        itemStyle = {{height:"100%"}}
      > 
        <Picker.Item label={"Select"} value={"Select"} />
        <Picker.Item label={"Option1"} value={"Option1"} />
        <Picker.Item label={"Once per day"} value={"Once per day"} /><Picker.Item label={"Twice per day"} value={"Twice per day"} /><Picker.Item label={"3 times per day"} value={"3 times per day"} /><Picker.Item label={"4 times per day"} value={"4 times per day"} />
      </Picker>
 <TouchableOpacity
          
          onPress = { function(){var daysTaken = [];
if (appData.ReminderDetailsswitch2){
    daysTaken.push("Sunday")
    appData.ReminderDetailsswitch2 = false;
}
if (appData.ReminderDetailsswitch6){
    daysTaken.push("Monday")
    appData.ReminderDetailsswitch6 = false;
}
if (appData.ReminderDetailsswitch10){
    daysTaken.push("Tuesday")
    appData.ReminderDetailsswitch10 = false;
}
if (appData.ReminderDetailsswitch11){
    daysTaken.push("Wednesday")
    appData.ReminderDetailsswitch11 = false;
}
if (appData.ReminderDetailsswitch9){
    daysTaken.push("Thursday")
    appData.ReminderDetailsswitch9 = false;
}
if (appData.ReminderDetailsswitch8){
    daysTaken.push("Friday")
    appData.ReminderDetailsswitch8 = false;
}
if (appData.ReminderDetailsswitch7){
    daysTaken.push("Saturday")
    appData.ReminderDetailsswitch7 = false;
}
var timeTakenArray = [];
timeTakenArray.push(appData.ReminderDetailspicker19);
//console.log(appData.ReminderDetailspicker19);
if (appData.pickerB > 0){
    timeTakenArray.push(appData.ReminderDetailspicker25);
    //console.log(appData.ReminderDetailspicker25);
}
if (appData.pickerC > 0){
    timeTakenArray.push(appData.ReminderDetailspicker26);
    //console.log(appData.ReminderDetailspicker26)
}
if (appData.pickerD > 0){
    timeTakenArray.push(appData.ReminderDetailspicker27);
    console.log(appData.ReminderDetailspicker27);
}

that.props.saveTo("mhDatabase",{"Name":appData.ReminderDetailsinput3, "Time Taken":JSON.stringify(timeTakenArray), "How Often":appData.ReminderDetailspicker22, "Day Taken":JSON.stringify(daysTaken), "Type":appData.displayText, "Name of User":appData.FirstPageinput2});
var timeAndDate = new Date();
timeAndDate.getFullYear(); timeAndDate.getMonth(); timeAndDate.getDate(); timeAndDate.getDay();timeAndDate.getHours();timeAndDate.getMinutes();timeAndDate.getSeconds();timeAndDate.getMilliseconds();timeAndDate.getTime();       
console.log(timeAndDate);
appData.ReminderDetailsinput3 = "";
appData.ReminderDetailspicker19 = "12:00 AM";
if (appData.pickerB > 0) {
    appData.ReminderDetailspicker25 = "12:00 AM";
    removeElement(appData.pickerB);
    appData.pickerB = -1;
}
if (appData.pickerC > 0) {
    appData.ReminderDetailspicker26 = "12:00 AM";
    removeElement(appData.pickerC);
    appData.pickerC = -1;
}
if (appData.pickerD > 0) {
    appData.ReminderDetailspicker27 = "12:00 AM";
    removeElement(appData.pickerD);
    appData.pickerD = -1;
}
that.props.goTo('Home');; that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"innerText":"'Save Reminder'","top":"87.77%","left":"36.13%","backgroundColor":"#ADD8E6","height":"9%"}]}
        >
        <Text style = {{color:"black"}}>

        {'Save Reminder'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){if (appData.ReminderDetailspicker22 == "Once per day") {
    if (appData.pickerB > 0) {
        removeElement(appData.pickerB);
        appData.pickerB = -1;
    }
    if (appData.pickerC > 0) {
        removeElement(appData.pickerC);
        appData.pickerC = -1;
    }
    if (appData.pickerD > 0) {
        removeElement(appData.pickerD);
        appData.pickerD = -1;
    }
}
if (appData.ReminderDetailspicker22 == "Twice per day") {
    if (appData.pickerB < 0) {
       appData.pickerB = createElement("picker", {"top":"54.43%","left":"56.04%","width":"35%","height":"7%","options":["12:00 AM","12:30 AM","1:00 AM","1:30 AM","2:00 AM","2:30 AM","3:00 AM","3:30 AM","4:00 AM","4:30 AM","5:00 AM","5:30 AM","6:00 AM","6:30 AM","7:00 AM","7:30 AM","8:00 AM","8:30 AM","9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","1:00 PM","1:30 PM","2:00 PM","2:30 PM","3:00 PM","3:30 PM","4:00 PM","4:30 PM","5:00 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM","9:30 PM","10:00 PM","10:30 PM","11:00 PM","11:30 PM"],"innerText":"undefined","backgroundColor":"#ADD8E6","color":"black"});
    }
    if (appData.pickerC > 0) {
        removeElement(appData.pickerC);
        appData.pickerC = -1;
    }
    if (appData.pickerD > 0) {
        removeElement(appData.pickerD);
        appData.pickerD = -1;
    }
    
}
if (appData.ReminderDetailspicker22 == "3 times per day") {
  if (appData.pickerB < 0) {
       appData.pickerB = createElement("picker", {"top":"54.43%","left":"56.04%","width":"35%","height":"7%","options":["12:00 AM","12:30 AM","1:00 AM","1:30 AM","2:00 AM","2:30 AM","3:00 AM","3:30 AM","4:00 AM","4:30 AM","5:00 AM","5:30 AM","6:00 AM","6:30 AM","7:00 AM","7:30 AM","8:00 AM","8:30 AM","9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","1:00 PM","1:30 PM","2:00 PM","2:30 PM","3:00 PM","3:30 PM","4:00 PM","4:30 PM","5:00 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM","9:30 PM","10:00 PM","10:30 PM","11:00 PM","11:30 PM"],"innerText":"undefined","backgroundColor":"#ADD8E6","color":"black"});
    }
    if (appData.pickerC < 0) {
       appData.pickerC = createElement("picker",{"top":"56.61%","left":"13.38%","width":"35%","height":"7%","options":["12:00 AM","12:30 AM","1:00 AM","1:30 AM","2:00 AM","2:30 AM","3:00 AM","3:30 AM","4:00 AM","4:30 AM","5:00 AM","5:30 AM","6:00 AM","6:30 AM","7:00 AM","7:30 AM","8:00 AM","8:30 AM","9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","1:00 PM","1:30 PM","2:00 PM","2:30 PM","3:00 PM","3:30 PM","4:00 PM","4:30 PM","5:00 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM","9:30 PM","10:00 PM","10:30 PM","11:00 PM","11:30 PM"],"innerText":"undefined","backgroundColor":"#ADD8E6","color":"black"});
    }
    if (appData.pickerD > 0) {
        removeElement(appData.pickerD);
        appData.pickerD = -1;
    }
}
if (appData.ReminderDetailspicker22 == "4 times per day") {
    if (appData.pickerB < 0) {
        appData.pickerB = createElement("picker", {"top":"54.43%","left":"56.04%","width":"35%","height":"7%","options":["12:00 AM","12:30 AM","1:00 AM","1:30 AM","2:00 AM","2:30 AM","3:00 AM","3:30 AM","4:00 AM","4:30 AM","5:00 AM","5:30 AM","6:00 AM","6:30 AM","7:00 AM","7:30 AM","8:00 AM","8:30 AM","9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","1:00 PM","1:30 PM","2:00 PM","2:30 PM","3:00 PM","3:30 PM","4:00 PM","4:30 PM","5:00 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM","9:30 PM","10:00 PM","10:30 PM","11:00 PM","11:30 PM"],"innerText":"undefined","backgroundColor":"#ADD8E6","color":"black"});
    }
    if (appData.pickerC < 0) {
       appData.pickerC = createElement("picker",{"top":"56.61%","left":"13.38%","width":"35%","height":"7%","options":["12:00 AM","12:30 AM","1:00 AM","1:30 AM","2:00 AM","2:30 AM","3:00 AM","3:30 AM","4:00 AM","4:30 AM","5:00 AM","5:30 AM","6:00 AM","6:30 AM","7:00 AM","7:30 AM","8:00 AM","8:30 AM","9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","1:00 PM","1:30 PM","2:00 PM","2:30 PM","3:00 PM","3:30 PM","4:00 PM","4:30 PM","5:00 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM","9:30 PM","10:00 PM","10:30 PM","11:00 PM","11:30 PM"],"innerText":"undefined","backgroundColor":"#ADD8E6","color":"black"});
    }
    if (appData.pickerD < 0) {
        appData.pickerD = createElement("picker",{"top":"49.63%","width":"35%","height":"7%","left":"56.27%","options":["12:00 AM","12:30 AM","1:00 AM","1:30 AM","2:00 AM","2:30 AM","3:00 AM","3:30 AM","4:00 AM","4:30 AM","5:00 AM","5:30 AM","6:00 AM","6:30 AM","7:00 AM","7:30 AM","8:00 AM","8:30 AM","9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","1:00 PM","1:30 PM","2:00 PM","2:30 PM","3:00 PM","3:30 PM","4:00 PM","4:30 PM","5:00 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM","9:30 PM","10:00 PM","10:30 PM","11:00 PM","11:30 PM"],"innerText":"undefined","backgroundColor":"#ADD8E6","color":"black"});
    }
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"top":"55.05%","left":"68.6%","innerText":"'Confirm'","backgroundColor":"#ADD8E6","width":"23%","fontSize":"resizeFont(13.5)"}]}
        >
        <Text style = {{color:"black"}}>

        {'Confirm'}

       </Text>
        </TouchableOpacity>
        </View>
        )
    }
  }
    export default ReminderDetails; 



  