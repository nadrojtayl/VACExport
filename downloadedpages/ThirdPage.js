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
      <View style = {{width:"380px", height:"657px", borderWidth:5, borderColor:"black", backgroundColor:"white"}}><Text
          style= {{"top":-33.096000000000004,"left":34.81350000000003}}
        > {} </Text>
        
<Text
          style= {{"top":0.9039999999999964,"left":-2.186499999999967,"innerText":"weapons[appData.WeaponIndex][\"Gun Name\"]","textAlign":"Center","height":"25%","fontStyle":null,"fontSize":25,"fontWeight":"bold"}}
        > {weapons[appData.WeaponIndex]["Gun Name"]} </Text>
        
<Text
          style= {{"top":170.904,"left":-0.1864999999999668,"innerText":"'Damage'","fontStyle":"Bold","fontWeight":"bold"}}
        > {'Damage'} </Text>
        
<Text
          style= {{"top":247.904,"left":0.8135000000000332,"innerText":"'Fire Rate/Style'","fontWeight":"bold"}}
        > {'Fire Rate/Style'} </Text>
        
<Text
          style= {{"top":-44.096000000000004,"left":43.81350000000003,"innerText":"'Clip/Stack Size'"}}
        > {'Clip/Stack Size'} </Text>
        
<Text
          style= {{"top":-39.096000000000004,"left":44.81350000000003,"innerText":"'Rarity '"}}
        > {'Rarity '} </Text>
        
<Text
          style= {{"top":339.904,"left":2.813500000000033,"innerText":"'Clip/Stack Size'","fontWeight":"bold"}}
        > {'Clip/Stack Size'} </Text>
        
<Text
          style= {{"top":598.904,"left":1.8135000000000332,"innerText":"'Description'","fontWeight":"bold"}}
        > {'Description'} </Text>
        
<Text
          style= {{"top":428.904,"left":3.813500000000033,"innerText":"'Rarity'","fontWeight":"bold"}}
        > {'Rarity'} </Text>
        
<Text
          style= {{"top":517.904,"left":0.8135000000000332,"innerText":"'Rank in Class'","fontWeight":"bold"}}
        > {'Rank in Class'} </Text>
        

      <Image
        style= {[{width:"200px",height:"200px"}, {"width":"50%","top":14.903999999999996,"left":131.81350000000003,"height":"20%","source":"weapons[appData.WeaponIndex][\"Image Of Item\"]","innerText":"'Damage: 110'"}]}
        source = {{uri:weapons[appData.WeaponIndex]["Image Of Item"]}}
      >
      </Image>
<Text
          style= {{"top":639.904,"left":0.8135000000000332,"backgroundColor":"transparent","innerText":null}}
        > {null} </Text>
        
<Text
          style= {{"top":632.904,"left":4.813500000000033,"paddingBottom":null,"backgroundColor":"transparent","innerText":"appData.FilteredList[0][\"Description\"]"}}
        > {appData.FilteredList[0]["Description"]} </Text>
        
<Text
          style= {{"top":-43.096000000000004,"left":46.81350000000003,"backgroundColor":"transparent","innerText":110,"width":"100%"}}
        > {110} </Text>
        
<Text
          style= {{"top":-45.096000000000004,"left":56.81350000000003,"innerText":"'Medium'","backgroundColor":"transparent"}}
        > {'Medium'} </Text>
        
<Text
          style= {{"top":379.904,"left":9.813500000000033,"innerText":"weapons[appData.WeaponIndex][\"Clip\"]","backgroundColor":"transparent"}}
        > {weapons[appData.WeaponIndex]["Clip"]} </Text>
        
<Text
          style= {{"top":-48.096000000000004,"left":22.813500000000033,"innerText":110,"backgroundColor":"transparent"}}
        > {110} </Text>
        
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
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"top":736.904,"left":235.81350000000003,"innerText":"'Return to page 1'"}]}
        ><Text>{'Return to page 1'}</Text>
        </TouchableOpacity>
<Text
          style= {{"innerText":110,"top":-40.096000000000004,"left":-5.186499999999967}}
        > {110} </Text>
        
<Text
          style= {{"top":202.904,"left":4.813500000000033,"innerText":"weapons[appData.WeaponIndex].Damage"}}
        > {weapons[appData.WeaponIndex].Damage} </Text>
        
<Text
          style= {{"top":288.904,"left":8.813500000000033,"innerText":"weapons[appData.WeaponIndex][\"Fire Rate/Style\"]"}}
        > {weapons[appData.WeaponIndex]["Fire Rate/Style"]} </Text>
        
<Text
          style= {{"top":468.904,"left":8.813500000000033,"innerText":"weapons[appData.WeaponIndex].Rarity"}}
        > {weapons[appData.WeaponIndex].Rarity} </Text>
        
<Text
          style= {{"top":555.904,"left":9.813500000000033,"innerText":"weapons[appData.WeaponIndex][\"Ranking For Class\"]","source":"appData.FilteredList[0][\"Ranking For Class\"]"}}
        > {weapons[appData.WeaponIndex]["Ranking For Class"]} </Text>
        </View>
        )
      }
    }

    
      export default ThirdPage;