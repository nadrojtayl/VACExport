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


class ThirdPage extends React.Component {
      constructor(props){
        super(props);
        this.state = {}
      }
     
      render(){ 
      var that = this; 
      

      if(!that.props.loaded){
        return(<View><Text>LOADING</Text></View>)
      }


      return (
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"white"}}>
        <Image
        style= {[ 
        {"width":"50%",
        "top":"5%","left":"45%",
        position:'absolute',
        "height":"20%",
        width:"50%",
        "source":"weapons[appData.WeaponIndex][\"Image Of Item\"]","innerText":"'Damage: 110'"}]}
        source = {{uri:weapons[appData.WeaponIndex]["Image Of Item"]}}
      >
      </Image>

        
        <Text
          style= {{"innerText":"weapons[appData.WeaponIndex][\"Gun Name\"]","textAlign":"Center",
          "height":"25%","fontStyle":null,
          position:'absolute', 
          top:"10%",
          "fontSize":25,"fontWeight":"bold"}}
        > {weapons[appData.WeaponIndex]["Gun Name"]} </Text>
     
         <Text
          style= {{"innerText":"'Rank in Class'","fontWeight":"bold", "marginTop":"65%", fontSize:"18px"}}
        > {'Rank in Class'} </Text>
         <Text
          style= {{fontSize:"18px","innerText":"weapons[appData.WeaponIndex][\"Ranking For Class\"]","source":"appData.FilteredList[0][\"Ranking For Class\"]"}}
        > {weapons[appData.WeaponIndex]["Ranking For Class"]} </Text>
        
        
          <Text
          style= {{fontSize:"18px","innerText":"'Damage'","fontStyle":"Bold","fontWeight":"bold"}}
        > {'Damage'} </Text>
        <Text
          style= {{fontSize:"18px","innerText":"weapons[appData.WeaponIndex].Damage"}}
        > {weapons[appData.WeaponIndex].Damage} </Text>
        
        <Text
          style= {{fontSize:"18px","innerText":"'Fire Rate/Style'","fontWeight":"bold"}}
        > {'Fire Rate/Style'} </Text>
        <Text
          style= {{fontSize:"18px","innerText":"weapons[appData.WeaponIndex][\"Clip\"]","backgroundColor":"transparent"}}
        > {weapons[appData.WeaponIndex]["Fire Rate/Style"]} </Text>
        <Text
          style= {{fontSize:"18px","innerText":"'Clip/Stack Size'","fontWeight":"bold"}}
        > {'Clip/Stack Size'} </Text>
        <Text
          style= {{fontSize:"18px","innerText":"weapons[appData.WeaponIndex][\"Clip\"]","backgroundColor":"transparent"}}
        > {weapons[appData.WeaponIndex]["Clip"]} </Text>
        
            <Text
          style= {{fontSize:"18px","innerText":"'Rarity '","fontWeight":"bold"}}
        > {'Rarity '} </Text>
        
             <Text
          style= {{fontSize:"18px","innerText":"weapons[appData.WeaponIndex][\"Clip\"]","backgroundColor":"transparent"}}
        > {weapons[appData.WeaponIndex]["Rarity"]} </Text>
        
            <Text
          style= {{fontSize:"18px","innerText":"'Description'","fontWeight":"bold"}}
        > {'Description'} </Text>
        <Text
          style= {{fontSize:"18px","paddingBottom":null,"backgroundColor":"transparent","innerText":"appData.FilteredList[0][\"Description\"]"}}
        > {appData.FilteredList[0]["Description"]} </Text>
        
        
  


        

        
   
        
 <TouchableOpacity
          
          onPress = { function(){that.props.goTo("FirstPage");; that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            backgroundColor: '#fff',
            elevation: 2, // Android
            height: 50,
            width: "40%",
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"top":"90%",
            "left":"55%","innerText":"'Return to page 1'"}]}
        ><Text>{'Return to page 1'}</Text>
        </TouchableOpacity>
      
        
        
      
        
        
         
        </View>
        )
      }
    }

    
      export default ThirdPage;