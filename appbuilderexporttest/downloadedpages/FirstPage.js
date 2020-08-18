
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
        this.state = {"character":260,"baton":22,"hurdle":8,"javelin":8,"variable1":109,"variable2":8,"variable3":48}
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
          style= {[{position:'absolute',zIndex:100,width:'100%'},
          {"top":"12.25%","left":"0%","innerText":"'Track Runner'","fontSize":30,"textAlign":"center","backgroundColor":"darkblue","color":"yellow","fontWeight":"bold","textDecorationLine":"underline"}]}
        > {'Track Runner'} </Text>
        
 <TouchableOpacity
          
          onPress = { function(){runWithInterval("appData.baton = appData.baton + 4;\
if (appData.baton>110){appData.baton = appData.baton - 110;\
appData.variable3 = Math.floor(Math.random() * 400);\
}\
appData.hurdle = appData.hurdle + 4;\
if(appData.hurdle>110){appData.hurdle = appData.hurdle - 110;\
appData.variable2 = Math.floor(Math.random() * 400);\
}\
appData.javelin = appData.javelin + 4;\
if(appData.javelin>110){appData.javelin = appData.javelin - 110;\
appData.variable1 = Math.floor(Math.random() * 400);\
};\
if(appData.javelin>50 && Math.abs(appData.character - appData.variable1)<18){that.props.goTo('FirstPage')}\
if(appData.hurdle>50 && Math.abs(appData.character - appData.variable2)<18){that.props.goTo('FirstPage')}\
if(appData.baton>50 && Math.abs(appData.character - appData.variable3)<18){that.props.goTo('FirstPage')}\
", 1000)
that.props.goTo("SECONDPAGE"); that.forceUpdate(); }}  
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
            {"top":"37.85%","left":"34.55%","innerText":"'Play'","backgroundColor":"yellow"}]}
        >
        <Text style = {{color:"black"}}>

        {'Play'}

       </Text>
        </TouchableOpacity>


      <Image
        style= {[{width:"20%",height:"20%"}, 
        {"top":"67.17%","left":"39.62%","source":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9aBS2OtHa3U_l4oTobf4cip42v3UKmsjeEg&usqp=CAU","backgroundColor":"transparent"}]}
        source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9aBS2OtHa3U_l4oTobf4cip42v3UKmsjeEg&usqp=CAU'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      
<View
        style= {[{position:'absolute',zIndex:-1000, height:'10%',width:'10%'},
        {"top":"-2.83%","left":"-11.64%","backgroundColor":"darkblue","height":"120%","width":"120%","fontSize":"resizeFont(15%)"}]}
        ></View>
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},
          {"top":"75.51%","left":"9.44%","innerText":"'RUN!'","height":"50%","fontSize":"resizeFont(30)","color":"yellow","fontWeight":"bold","backgroundColor":"transparent"}]}
        > {'RUN!'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"innerText":"'RUN!'","top":"75.51%","left":"71.48%","fontSize":"resizeFont(30)","color":"yellow","fontWeight":"bold"}]}
        > {'RUN!'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},
          {"top":"18.38%","left":"10.48%","innerText":"'The track runner needs your help avoiding the falling obstacles!'","width":"80%","color":"yellow","fontWeight":"bold","textAlign":"center","fontSize":15}]}
        > {'The track runner needs your help avoiding the falling obstacles!'} </Text>
        


      <Image
        style= {[{position:'absolute'},
          {width:"20%",height:"20%"}, {"source":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fbookertalk.com%2Fgold-star-tbr%2F&psig=AOvVaw13Dvl7zSBgPVQE_kcL54W-&ust=1596727369673000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiy74-vhOsCFQAAAAAdAAAAABAD"},
        {"top":"38.38%","left":"10.48%"}]}
        source = {{uri:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbookertalk.com%2Fgold-star-tbr%2F&psig=AOvVaw13Dvl7zSBgPVQE_kcL54W-&ust=1596727369673000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiy74-vhOsCFQAAAAAdAAAAABAD'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"source":"https://bookertalk.com/wp-content/uploads/2016/05/gold-star.jpg?w=150","top":"16.8%","left":"3.3%","height":"10%","width":"17%"}]}
        source = {{uri:'https://bookertalk.com/wp-content/uploads/2016/05/gold-star.jpg?w=150'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":"6.55%","left":"80.34%","source":"https://bookertalk.com/wp-content/uploads/2016/05/gold-star.jpg?w=150","height":"10%","width":"17%"}]}
        source = {{uri:'https://bookertalk.com/wp-content/uploads/2016/05/gold-star.jpg?w=150'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},
          {"top":"24.13%","left":"34.57%","innerText":"'Click play to start!'","fontSize":15,"fontWeight":"bold","color":"yellow"}]}
        > {'Click play to start!'} </Text>
        


      <Image
        style= {[{width:"20%",height:"20%"}, {"source":"data:image/png;base64,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","top":"91.15%","left":"5.85%","height":"5%","width":"90%"}]}
        source = {{uri:'data:image/png;base64,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'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      
        </View>
        )
    }
  }
    export default FirstPage; 



  