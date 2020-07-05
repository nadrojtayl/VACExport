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





    class Settings extends React.Component {
      constructor(props){
        super(props);
        this.state = {"key":"value","id":3,"ID":null,"settingsinput1":"","settingspicker3":"Option1","settingspicker4":"","settingspicker6":"","settingspicker9":"","settingspicker10":"","settingspicker11":"","settingspicker12":"","APIKey":"09dc52b6b12bb0a87cfd0c79f2dfe1e9","loaded":false,"dbLinks":{}}
      }
      
      render(){ 
      var that = this; 
      

 
        return(<View style = {{textAlign:'center', alignItems:'center', marginTop:"10%"}}>
          <Text style = {{fontSize:32, marginBottom:'5%', textDecorationLine:"underline"}}>Choose your team [5 max]</Text>
          {players.map(function(player,int){
            return (
             <View style = {{flexDirection:'row', marginTop:"2%", justifyContent:'center', alignItems:'center'}}>
              
                <Text style = {{fontSize:20}}>{player["Players"] + " |"}</Text>
                <Button onPress = {function(){
                  appData.index = int;
                  that.props.goTo("PlayerDetails");
                  that.forceUpdate(int);
                }}   title = {"Add" }  title = {"Stats" + " |"}></Button>

                <Button onPress = {function(){
                  if(appData.lineup.length >= 5){
                    alert("Your lineup is done! Click play.")
                    return;
                  }
                  appData.lineup.push(player);
                  that.forceUpdate();
                }}   title = {"Add" }></Button>

              </View>
              )
          })}
          <Text style = {{marginTop:"10%", textAlign:'center', fontSize:24, borderStyle:"solid", borderWidth:1, width:"100%"}}>{appData.lineup.length +  " players on your team"}</Text>
          <Button
          onPress = {function(){
            if(appData.lineup.length < 5){
                    alert("Add more players to your lineup. You need 5 on the floor.")
                    return;
            }
            that.props.goTo("RegisterPage")

          }}

            title = {"Play"}></Button>
          </View>)
      }

     
    



      
    


    }

    
      export default Settings;