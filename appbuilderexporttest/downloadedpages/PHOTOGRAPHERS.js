
import React, { Component } from "react";
import { ActivityIndicator, Button, Picker, Switch, Image, ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import Calendar from "./Calendar.js";
import appData from "./global.js";
import { Audio } from 'expo-av';
import Multiplier from "./Multiplier.js";
import { CheckBox } from 'react-native-elements'
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


function modifyPercentage(percent,change){
  return (parseInt(percent.replace("#","")) + change) + "%"

}

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




 class PHOTOGRAPHERS extends React.Component {
     

    constructor(props)
    {
        super(props);
        this.state = {"FirstPageinput0":"","details":"Leonardo DaVinci"}
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
          style= {[{textDecorationLine:'underline',position:'absolute',zIndex:100,width:'100%'},{"top":"7.54%","left":"35.93%","innerText":"'PHOTOGRAPHERS'","color":"purple","fontSize":resizeFont(20)}]}
        > {'PHOTOGRAPHERS'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{textDecorationLine:'underline',"top":"73.36%","left":"72.67%","innerText":"'Diane Arbus'"}]}
        > {'Diane Arbus'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{textDecorationLine:'underline',"top":"71.68%","left":"17.18%","innerText":"'Robert Frank'"}]}
        > {'Robert Frank'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{textDecorationLine:'underline',"top":"50.01%","left":"44.04%","source":"Steve McCurry","innerText":"'Steve McCurry'"}]}
        > {'Steve McCurry'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{textDecorationLine:'underline',"top":"24.42%","left":"66.59%","innerText":"'Dorothea Lange'"}]}
        > {'Dorothea Lange'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{textDecorationLine:'underline',"top":"23.3%","left":"15.41%","innerText":"'Annie Leibovitz'"}]}
        > {'Annie Leibovitz'} </Text>
        

      

      <TouchableOpacity
      style= {[{width:"20%",height:"20%", position:'absolute',top:"27.97%",left:modifyPercentage("68.62%",appData.wiggle)}]}
       onPress = { function(){appData.selectedBio = link[16].Url; appData.selectedArtist = link[16].Name;  that.forceUpdate(); }}  
      >
      <Image
        style= {[{width:"100%",height:"100%"}, {"source":"https://www.biography.com/.image/t_share/MTQyOTgwMzM3MTg4NzQyMzQ5/dorothea-lange-gettyimages-117134032_1600jpg.jpg"}]}
        source = {{uri:'https://www.biography.com/.image/t_share/MTQyOTgwMzM3MTg4NzQyMzQ5/dorothea-lange-gettyimages-117134032_1600jpg.jpg'}}
       
      >
      </Image>
      </TouchableOpacity>


      

      

      <TouchableOpacity
      style= {[{width:"20%",height:"20%", position:'absolute',top:"27.78%",left:modifyPercentage("18.2%", appData.wiggle)}]}
       onPress = { function(){appData.selectedBio = link[15].Url; appData.selectedArtist = link[15].Name;   that.forceUpdate(); }}  
      >
      <Image
        style= {[{width:"100%",height:"100%"}, {"source":"https://www.dw.com/image/50660880_303.jpg"}]}
        source = {{uri:'https://www.dw.com/image/50660880_303.jpg'}}
       
      >
      </Image>
      </TouchableOpacity>


      

      

      <TouchableOpacity
      style= {[{width:"20%",height:"20%", position:'absolute',top:"76.17%",left:modifyPercentage("15.92%", appData.wiggle)}]}
       onPress = { function(){appData.selectedBio = link[18].Url; appData.selectedArtist = link[18].Name;   that.forceUpdate(); }}  
      >
      <Image
        style= {[{width:"100%",height:"100%"}, {"source":"https://iphf.org/wp-content/uploads/2016/08/Robert-Frank.jpg"}]}
        source = {{uri:'https://iphf.org/wp-content/uploads/2016/08/Robert-Frank.jpg'}}
       
      >
      </Image>
      </TouchableOpacity>


      

      

      <TouchableOpacity
      style= {[{width:"20%",height:"20%", position:'absolute',top:"76.73%",left:modifyPercentage("71.91%",appData.wiggle)}]}
       onPress = { function(){appData.selectedBio = link[19].Url; appData.selectedArtist = link[19].Name;  that.forceUpdate(); }}  
      >
      <Image
        style= {[{width:"100%",height:"100%"}, {"source":"https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Diane-Arbus-1949.jpg/220px-Diane-Arbus-1949.jpg"}]}
        source = {{uri:'https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Diane-Arbus-1949.jpg/220px-Diane-Arbus-1949.jpg'}}
       
      >
      </Image>
      </TouchableOpacity>


      

      

      <TouchableOpacity
      style= {[{width:"20%",height:"20%", position:'absolute',top:"53.19%",left:modifyPercentage("42.77%",appData.wiggle)}]}
       onPress = { function(){appData.selectedBio = link[17].Url; appData.selectedArtist = link[17].Name;  that.forceUpdate(); }}  
      >
      <Image
        style= {[{width:"100%",height:"100%"}, {"source":"https://upload.wikimedia.org/wikipedia/commons/e/e1/Steve_McCurry_%285824371040%29.jpg"}]}
        source = {{uri:'https://upload.wikimedia.org/wikipedia/commons/e/e1/Steve_McCurry_%285824371040%29.jpg'}}
       
      >
      </Image>
      </TouchableOpacity>


      
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
             var checked = [];

            var data =  
          museums.filter(function(obj){
            return obj[appData.selectedArtist] !== "";
          }).slice(0,5).map(function(obj, ind){
            return (
              <View style = {{flexDirection:'row', backgroundColor:'transparent'}}>
              <CheckBox
                checked={checked[ind]}
                onPress={function(){appData.checked[ind] = true; appData.museums.forceUpdate();} }
              />
              <Text style = {{color:'black', marginTop:'5%'}}>{obj[appData.selectedArtist]}</Text>
              
              </View>

              )
          })
          

          appData.data = data;
          that.props.goTo("VIDEOGRAPHERS")
          
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
    export default PHOTOGRAPHERS; 



  