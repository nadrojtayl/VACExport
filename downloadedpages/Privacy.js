import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Button, Picker, Switch, Image, Text, View } from 'react-native';
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



      class Privacy extends React.Component {
      constructor(props){
        super(props);
        this.state = {"key":"value","SecondPageinput5":"Select","SelectedGroup":"SMG","FilteredList":[{"Gun Name":"Submachine","Gun Class":"SMG","Damage":"19","Fire Rate/Style":"Fast","Clip":"30","Rarity":"Common-Rare","Ranking For Class":"1","Description":"With an insane fire rate, the submachine rips through people and builds. By far the best SMG","Image Of Item":"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Finsertcoin%2Ffiles%2F2018%2F07%2Fsmg-new.jpg","Index":"3"},{"Gun Name":"Sillenced Submachine","Gun Class":"SMG","Damage":"22","Fire Rate/Style":"Fast","Clip":"30","Rarity":"Common-Rare","Ranking For Class":"2","Description":"Only found at certain POI's, this SMG is hard to find, yet still not good, and is the 2nd best SMG.","Image Of Item":"https://assets.rockpapershotgun.com/images/2019/01/fortnite-suppressed-smg-1212x682.jpg/RPSS/resize/760x-1/format/jpg/quality/90","Index":"4"}],"WeaponIndex":4,"loaded":false,"dbLinks":{}}
      }
      
      render(){ 
      var appData = this.state; var that = this; 
      

      if(!that.props.loaded){
        return(<View><Text>LOADING</Text></View>)
      }


      return (
      <View style = {{width:"380px", height:"657px", borderWidth:5, borderColor:"black", backgroundColor:"white"}}><Text
          style= {{"innerText":null}}
        > {null} </Text>
        
<Text
          style= {{"innerText":"'This app does not require any personal information due to the fact that we are strictly a source of information and a helpful guide to your future of Fortnite. Nothing that you enter will be retained allowing privacy and no need for your information. Thank you!'","top":82.904,"left":21.813500000000033,"height":"40%"}}
        > {'This app does not require any personal information due to the fact that we are strictly a source of information and a helpful guide to your future of Fortnite. Nothing that you enter will be retained allowing privacy and no need for your information. Thank you!'} </Text>
        
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"innerText":"'Back to Home'"}]}
        ><Text>{'Back to Home'}</Text>
        </TouchableOpacity></View>
        )
      }
    }

    
      export default Privacy;