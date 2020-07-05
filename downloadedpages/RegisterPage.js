import React from 'react';
import { TextInput, StyleSheet, ScrollView, TouchableOpacity, Button, Picker, Switch, Image, Text, View } from 'react-native';
import appData from './global.js';

function try_eval(input){
  try {
    var output =  eval(input);
    return output
  } catch(e){
    return input;

  }
 }


function filter(arr,phrase){
  return arr.filter(function(elem){
    return elem.indexOf(phrase) !== -1;
  })
}

function filter_list_of_objs(arr,key,filter_value){
  return arr.filter(function(obj){
    return obj[key] === filter_value
  })
}

function map_list_of_objs(arr,key){
  return arr.map(function(obj){
    return obj[key];
  })
}

function clone(arr){
  return arr.slice();
}


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
  return try_eval(value) === undefined ? (default_value):  try_eval(value) 
}


class RegisterPage extends React.Component {
      constructor(props){
        super(props);
        this.state = {}
      }

      simGame(){
       
      }

      play(){
        var that = this;
        appData.message = "";
        appData.results = [];
        for(var i = 0;i<Object.keys(appData.lineup).length;i++){

          setTimeout(function(i){
            var player = appData.lineup[appData.results.length], playerLevel = appData.lineup[appData.results.length].Level
             appData.results.push(
              {name:player.Players,score: 15 + Math.floor(Math.random() * (playerLevel*3)) }
              )
             that.forceUpdate();
          },1000*i)
          
        }
        setTimeout(function(i){
            var score = 0;
            for(var i = 0;i <5;i++){
              score += appData.results[i].score;
            }
            var oppScore = 80 + Math.floor(Math.random() * 60);
            if(oppScore > score){
              appData.message = "Unfortunately, they scored... "+ oppScore + ". You Lost";
            } else {
              appData.message = "They scored " + oppScore + ". Collect your championship ring.";
            } 
            
            that.forceUpdate();
          },1000*6)
       
      }
     
      render(){ 
      var that = this; 
      

    


      return (
      <View style = {{width:"100%", alignItems:"center", backgroundColor:'blue', height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"blue"}}>
        <Text style = {{marginTop:"10%",color:'red', fontSize:24}}>You made playoffs. Now you have to win...</Text>
        {appData.results.map(function(result){
            return (
            <View style = {{flexDirection:'row', marginTop:"1%"}}>
            <Text style = {{color:'white', fontSize:24}}>{result.name + " scored "}</Text>
             <Text style = {{color:'white', fontSize:24}}>{result.score}</Text>
             </View>)
          })
        }
        <Text style = {{fontSize:32,marginTop:"10%", color:'white'}}>{appData.message}</Text>
        <View style = {{marginTop:"20%", height:"15%", borderWidth:"1",borderColor:'white'}}>
        <Button onPress = {that.play.bind(that)} title = {"Play"} ></Button>
         <Button style = {{position:"absolute",top:"80%"}} onPress = {function(){ appData.lineup = [];that.props.goTo("options"); that.forceUpdate(); }} title = {"New Roster"} ></Button>
         </View>



        </View>
        )
      }
    }

export default RegisterPage;