import React, { Component } from "react";
import { ActivityIndicator, Button, Picker, Switch, Image, ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import Calendar from "./Calendar.js";
import appData from "./global.js";
import { Audio } from 'expo-av';
import Multiplier from "./Multiplier.js";
import * as Linking from 'expo-linking';
import { CheckBox } from 'react-native-elements'
import Swiper from 'react-native-swiper';

var d = new Date();
var month = d.getMonth();
var day = d.getDate();
global.month = d.getMonth();
global.day = d.getDate();

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  slide5: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

function modifyPercentage(percent,change){
  return (parseInt(percent.replace("#","")) + change) + "%"

}

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







export default class PAINTER extends Component {

  async more(){
    var data = await Location.getCurrentPositionAsync();
    alert(JSON.stringify(data));
  }

 render() {
  var that = this;
    return (
      <Swiper showsPagination = {false} style={styles.wrapper} showsButtons={false}>
        {
          link.map(function(artist,int){

            return (

              <View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }}>

          <Text
          style= {[{fontFamily:'Bradley Hand', alignItems:'center', color:'white', fontSize:resizeFont(30),position:'absolute',zIndex:100,width:'100%'},{textDecorationLine:'underline',"top":"13.21%","left":"0%", width:'100%', textAlign:'center', "innerText":"' link[0][\"Name\"];'"}]}
        > {artist["Name"]} </Text>

        <TouchableOpacity
      style= {[{width:"100%",height:"100%", position:'absolute',top:"0%",left:modifyPercentage("0%",appData.wiggle)}]}
       onPress = { function(){appData.selectedBio = artist["Url"]; appData.selectedArtist = artist["Name"];   that.forceUpdate(); }}  
      >
      <Image
        style= {[{width:"100%",height:"100%"}, {"source":" link[4][\"image\"];"}]}
        source = {{uri: artist["image"]}}
       
      >
      </Image>
      </TouchableOpacity>

       <Text style = {{width:'30%', left:'65%', textDecorationLine:'underline', fontWeight:'bold', fontSize:resizeFont(14), backgroundColor:'white', position:'absolute', top:'39%', textAlign:'center'}}>Early Works</Text>
      <ScrollView style = {{height:'7%',position:'absolute', top:'42%', left:"65%", width:'30%'}}>
        <Text style = {{backgroundColor:'white',  textAlign:'center'}}>{artist["Early works"]}</Text>
      </ScrollView>


      <Text style = {{width:'30%', left:'5%', textDecorationLine:'underline', fontWeight:'bold', fontSize:resizeFont(14), backgroundColor:'white', position:'absolute', top:'42%', textAlign:'center'}}>Style</Text>
      <ScrollView style = {{height:'20%',position:'absolute', top:'45%', left:"5%", width:'30%'}}>
        <Text style = {{backgroundColor:'white',  textAlign:'center'}}>{artist["Style"]}</Text>
      </ScrollView>


      <Text style = {{textDecorationLine:'underline', fontWeight:'bold', fontSize:resizeFont(14), backgroundColor:'white', position:'absolute', top:'53%', textAlign:'center'}}>Overview</Text>
      <ScrollView style = {{height:'10%',position:'absolute', top:'57%',}}>
        <Text style = {{backgroundColor:'white',  textAlign:'center'}}>{artist["Blurb"]}</Text>
      </ScrollView>

      <TouchableOpacity
          
          onPress = { function(){
           
          

         that.props.goTo("FirstPage");

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
            height:"5%",
            width:"30%",
            position:'absolute',
            top:'5%',
            backgroundColor:'#8fd158', 
            alignItems:'center',justifyContent:'center',  
             title:'Test', borderColor: 'gray',
              color:'black', 
             borderRadius:15, borderWidth: 1},{
              "innerText":"'Home'"}]}
        >
        <Text style = {{color:"black"}}>

        {'Back'}

       </Text>
        </TouchableOpacity>


      <View style = {{position:'absolute',top:'85%',width:'100%',flexDirection:'row',justifyContent:'space-evenly'}}>


       <TouchableOpacity
          
          onPress = { function(){
           var data =  
          museums.filter(function(obj){
            return obj[artist["Name"]] !== "";
          }).slice(0,5).map(function(obj){
            return obj[artist["Name"]]
          })
          

          appData.data = data;
          appData.recommendedMuseums.push(data[0],data[1],data[2]);
          // alert("\nClosest museums:\n\n\n" + data[0] + "\n\n" + data[1] + "\n\n" + data[3] );
          alert("OK Saved!");

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
            backgroundColor:'#8fd158', 
            alignItems:'center',justifyContent:'center', height: "100%", 
             title:'Test', borderColor: 'gray', color:'black', 
             borderRadius:15, borderWidth: 1},{
              "innerText":"'Home'"}]}
        >
        <Text style = {{color:"black"}}>

        {'Save to my list'}

       </Text>
        </TouchableOpacity>
         <TouchableOpacity
          
          onPress = { function(){
           var data =  
          museums.filter(function(obj){
            return obj[artist["Name"]] !== "";
          }).slice(0,5).map(function(obj){
            return obj[artist["Name"]]
          })
          

          that.props.goTo("Museums");

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
            backgroundColor:'#8fd158', 
            alignItems:'center',justifyContent:'center', height: "100%", 
             title:'Test', borderColor: 'gray', color:'black', 
             borderRadius:15, borderWidth: 1},{
              "innerText":"'Home'"}]}
        >
        <Text style = {{color:"black"}}>

        {'See my recommended museums'}

       </Text>
        </TouchableOpacity>
        
      </View>
        </View>




              )





          })
        }
        
      </Swiper>
    )
  }
}