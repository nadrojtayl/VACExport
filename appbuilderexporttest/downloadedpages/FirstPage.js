
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
        this.state = {"currentWeight":"120","goalWeight":"110","calPerDay":"2000","calEaten":0,"ThirdPageinput5":"400 ","ThirdPageinput7":"200","ThirdPageinput9":"500","ThirdPageinput11":"100","SecondPageinput9":"63","height":"63","PageTwoinput3":"jasmineusername","PageTwoinput5":"jasminepw","SignIninput3":"jasmineusername","SignIninput5":"jasminepw","Statsinput2":"120","Statsinput4":"110","Statsinput9":"63","Statsinput6":"2000","CreateAccountinput2":"jasminec","CreateAccountinput4":"pw","PageFourinput5":"200","PageFourinput7":"400","PageFourinput9":"500","PageFourinput11":"100","Caloriesinput5":"200","Caloriesinput7":"400","Caloriesinput9":"500","Caloriesinput11":"100","heightInM":1.6002032004064008,"weightInKg":54.29864253393665,"bodyMassIndex":21.2050208117435}
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
      <Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},
          {"top":"4.36%","left":"1.78%","innerText":"'MOOVE'","fontSize":30,"fontStyle":"Times New Roman","color":"lavender"}]}
        > {'MOOVE'} </Text>
        


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":"19.62%","left":"14.82%","source":"https://us.123rf.com/450wm/olgamaslov/olgamaslov1603/olgamaslov160300162/53862974-stock-vector-fitness-emblem-woman-silhouette-illustration.jpg?ver=6"}]}
        source = {{uri:'https://us.123rf.com/450wm/olgamaslov/olgamaslov1603/olgamaslov160300162/53862974-stock-vector-fitness-emblem-woman-silhouette-illustration.jpg?ver=6'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":"19.62%","left":"41.28%","source":"https://www.netclipart.com/pp/m/32-326469_fitness-clipart-group-fitness-fitness-cartoon-transparent.png"}]}
        source = {{uri:'https://www.netclipart.com/pp/m/32-326469_fitness-clipart-group-fitness-fitness-cartoon-transparent.png'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":"19.62%","left":"68.28%","source":"https://www.netclipart.com/pp/m/340-3406114_fitness-clipart.png"}]}
        source = {{uri:'https://www.netclipart.com/pp/m/340-3406114_fitness-clipart.png'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":"42.91%","left":"15.1%","source":"https://www.clipartkey.com/mpngs/m/11-113014_clipart-exercise-weight-gym-transparent-background-fitness-png.png"}]}
        source = {{uri:'https://www.clipartkey.com/mpngs/m/11-113014_clipart-exercise-weight-gym-transparent-background-fitness-png.png'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":"43.07%","left":"41.83%","source":"https://www.pngitem.com/pimgs/m/178-1788846_health-transparent-healthy-transparent-background-healthy-clipart-png.png"}]}
        source = {{uri:'https://www.pngitem.com/pimgs/m/178-1788846_health-transparent-healthy-transparent-background-healthy-clipart-png.png'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":"43.07%","left":"68.56%","source":"https://pp.netclipart.com/pp/s/35-354190_community-health-clipart.png"}]}
        source = {{uri:'https://pp.netclipart.com/pp/s/35-354190_community-health-clipart.png'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":"67.01%","left":"15.1%","source":"https://www.vippng.com/png/detail/106-1061168_health-clipart-png-medical-services-clip-art.png"}]}
        source = {{uri:'https://www.vippng.com/png/detail/106-1061168_health-clipart-png-medical-services-clip-art.png'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":"66.85%","left":"42.38%","source":"https://www.netclipart.com/pp/m/97-972744_mass-scale-clip-art-weight-scale-clipart-png.png"}]}
        source = {{uri:'https://www.netclipart.com/pp/m/97-972744_mass-scale-clip-art-weight-scale-clipart-png.png'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":"66.85%","left":"69.11%","source":"https://static.vecteezy.com/system/resources/previews/000/463/565/non_2x/healthy-food-clipart-vector.jpg"}]}
        source = {{uri:'https://static.vecteezy.com/system/resources/previews/000/463/565/non_2x/healthy-food-clipart-vector.jpg'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      
 <TouchableOpacity
          
          onPress = { function(){that.props.goTo('SignIn');; that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},
            {"top":"83.31%","left":"35.77%","backgroundColor":"lavender","innerText":"'Get Started'","fontFamily":"Times New Roman"}]}
        >
        <Text style = {{color:"black"}}>

        {'Get Started'}

       </Text>
        </TouchableOpacity>
        </View>
        )
    }
  }
    export default FirstPage; 



  