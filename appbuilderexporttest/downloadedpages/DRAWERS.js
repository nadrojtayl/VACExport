
import React, { Component } from "react";
import { ActivityIndicator, Button, Picker, Switch, Image, ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import Calendar from "./Calendar.js";
import appData from "./global.js";
import { Audio } from 'expo-av';
import Multiplier from "./Multiplier.js";
import * as Linking from 'expo-linking';

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


function modifyPercentage(percent,change){
  return (parseInt(percent.replace("#","")) + change) + "%"

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




 class DRAWERS extends React.Component {
     

    constructor(props)
    {
        super(props);
        this.state = {"FirstPageinput0":"","details":"Leonardo DaVinci"}
    }


      
  
    componentDidMount(){
      appData.page = this;
      setInterval(function(){
       
       appData.wiggle = (appData.wiggle === 4 ? 0: 4);
       appData.page.forceUpdate();
      },2000)
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
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"#C8A2C8"}}>
      
      

      <TouchableOpacity
      style= {[{width:"20%",height:"20%", position:'absolute',top:"24.42%",left:modifyPercentage("12.12%",appData.wiggle)}]}
       onPress = { function(){appData.selectedBio = link[5].Url; appData.selectedArtist = link[5].Name;  that.forceUpdate(); }}  
      >
      <Image
        style= {[{width:"100%",height:"100%"}, {"source":link[5]["image"]}]}
        source = {{uri: link[5]["image"]}}
       
      >
      </Image>
      </TouchableOpacity>


      

      

      <TouchableOpacity
      style= {[{width:"20%",height:"20%", position:'absolute',top:"75.42%",left:modifyPercentage("68.87%",appData.wiggle)}]}
       onPress = { function(){appData.selectedBio = link[9].Url; appData.selectedArtist = link[9].Name;   that.forceUpdate(); }}  
      >
      <Image
        style= {[{width:"100%",height:"100%"}, {"source":" link[9][\"image\"];"}]}
        source = {{uri: link[9]["image"]}}
       
      >
      </Image>
      </TouchableOpacity>


      

      

      


      

      

      <TouchableOpacity
      style= {[{width:"20%",height:"20%", position:'absolute',top:"26.29%",left: modifyPercentage("69.88%",appData.wiggle)}]}
       onPress = { function(){appData.selectedBio = link[6].Url; appData.selectedArtist = "Albrecht Durer";   that.forceUpdate(); }}  
      >
      <Image
        style= {[{width:"100%",height:"100%"}, {"source":" link[6][\"image\"];"}]}
        source = {{uri: link[6]["image"]}}
       
      >
      </Image>
      </TouchableOpacity>


      

      

      <TouchableOpacity
      style= {[{width:"20%",height:"20%", position:'absolute',top:"75.04%",left:modifyPercentage("13.38%",appData.wiggle)}]}
       onPress = { function(){appData.selectedBio = link[8].Url; appData.selectedArtist = link[8].Name;   that.forceUpdate(); }}  
      >
      <Image
        style= {[{width:"100%",height:"100%"}, {"source":" link[8][\"image\"];"}]}
        source = {{uri: link[8]["image"]}}
       
      >
      </Image>
      </TouchableOpacity>

   


      
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{textDecorationLine:'underline', "top":"72.06%","left":"69.88%","innerText":"' link[9][\"Name\"];'"}]}
        > {link[9]["Name"]} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{textDecorationLine:'underline',"top":"71.31%","left":"9.08%","innerText":"' link[8][\"Name\"];'"}]}
        > { link[8]["Name"]} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{textDecorationLine:'underline',"top":"47.02%","left":"38.97%","innerText":"' link[7][\"Name\"];'"}]}
        > {link[7]["Name"]} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{textDecorationLine:'underline',"top":"21.8%","left":"68.11%","innerText":"'Albrecht Dürer'"}]}
        > {'Albrecht Dürer'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{textDecorationLine:'underline', "top":"21.06%","left":"10.6%","innerText":"' link[5][\"Name\"];'"}]}
        > {link[5]["Name"]} </Text>
        
<Text
          style= {[{textDecorationLine:'underline',position:'absolute',zIndex:100,width:'100%'},{"top":"6.79%","left":"38.72%","innerText":"'DRAWERS'","fontSize":resizeFont(30),"color":"green"}]}
        > {'DRAWERS'} </Text>
        
 <TouchableOpacity
          
          onPress = { function(){that.props.goTo("FirstPage"); that.forceUpdate(); }}  
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
            position:'absolute',top:"6%",left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"innerText":"'Home'"}]}
        >
        <Text style = {{color:"black"}}>

        {'Home'}

       </Text>
        </TouchableOpacity>

         <View style = {{display:appData.selectedArtist !== "" ? "flex":"none",position:'absolute', top:'15%',width:"100%", flexDirection:'row', justifyContent:"space-evenly"}}>
        <TouchableOpacity
          
         onPress = {function(){
          Linking.openURL(appData.selectedBio);
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
       
            backgroundColor:'#8fd158', 
             title:'Test', borderColor: 'gray', color:'black', 
             borderRadius:15, borderWidth: 1},{"innerText":"'Home'"}]}
             >
             <Text>Learn More</Text>
             </TouchableOpacity>
             <TouchableOpacity
          
          onPress = {function(){
          var data =  JSON.stringify(
          museums.filter(function(obj){
            return obj[appData.selectedArtist] !== "";
          }).map(function(obj){
            return obj[appData.selectedArtist]
          }).join("\n\n")
          )

          alert(data);

          
        }}

          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            backgroundColor: '#fff',
            elevation: 2, // Android
           backgroundColor:'#8fd158', 
            alignItems:'center',justifyContent:'center', 
             title:'Test', borderColor: 'gray', color:'black', 
             borderRadius:15, borderWidth: 1},{"innerText":"'Home'"}]}
             >
             <Text>Museum Journey</Text>
             </TouchableOpacity>
        
     
        </View>



        </View>
        )
    }
  }
    export default DRAWERS; 



  