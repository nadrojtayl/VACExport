
import React, { Component } from "react";
import { ActivityIndicator, Button, Picker, Switch, Image, ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import Calendar from "./Calendar.js";
import appData from "./global.js";
import Multiplier from "./Multiplier.js";
import { Audio } from 'expo-av'; 
import * as SMS from 'expo-sms';


var d = new Date();
var month = d.getMonth();
var day = d.getDate();
global.month = d.getMonth();
global.day = d.getDate();
global.created = [];

function hasNumber(myString) {
  return /d/.test(myString);
}

async function user_text(phone,message){
  const isAvailable = await SMS.isAvailableAsync();
  if (isAvailable) {
    SMS.sendSMSAsync(phone, message)
  } else {
    alert("You don't have text on this device");
  }
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
  var script_string = script_string + "; global.thisapp.forceUpdate();"
  script_string = script_string.split("createElement").join("global.thisapp.createElement");
  var that = appData.this;
    try{
        eval("function y(){"+script_string+"}")
        global.thisapp.forceUpdate();
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




 class Recipes extends React.Component {
     

    constructor(props)
    {
        super(props);
        this.state = {"currentWeight":"120","goalWeight":"110","calPerDay":"2000","calEaten":0,"ThirdPageinput5":"400 ","ThirdPageinput7":"200","ThirdPageinput9":"500","ThirdPageinput11":"100","SecondPageinput9":"63","height":"63","PageTwoinput3":"jasmineusername","PageTwoinput5":"jasminepw","SignIninput3":"jasmineusername","SignIninput5":"jasminepw","Statsinput2":"120","Statsinput4":"110","Statsinput9":"63","Statsinput6":"2000","CreateAccountinput2":"jasminec","CreateAccountinput4":"pw","PageFourinput5":"200","PageFourinput7":"400","PageFourinput9":"500","PageFourinput11":"100","Caloriesinput5":"200","Caloriesinput7":"400","Caloriesinput9":"500","Caloriesinput11":"100","heightInM":1.6002032004064008,"weightInKg":54.29864253393665,"bodyMassIndex":21.2050208117435,"createdelems":[]}
    }

    componentDidMount(){
      global.thisapp = this;
    }


      
  
    createElement(name, style_obj){
      if(name === 'image'){
        this.state.createdelems.push(
        (<Image style = {[{position:'absolute', width:"20%",height:"20%"}, style_obj]}></Image>)
        )
      }

       if(name === 'text'){
        this.state.createdelems.push(
        (<Text style = {style_obj}></Text>)
        )
      }

      global.created.push(style_obj);
     



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
      {this.state.createdelems}

      <Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"1.79%","left":"4.35%","innerText":"'MOOVE'","fontWeight":"bold"}]}
        > {'MOOVE'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"6.93%","left":"20.33%","innerText":"'HEALTHY RECIPES'","fontSize":"resizeFont(25)","color":"lavender","fontFamily":"Times New Roman","textDecorationLine":"underline"}]}
        > {'HEALTHY RECIPES'} </Text>
        


      <Image
        style= {[{width:"20%",height:"20%",position:'absolute'}, {"top":"14.48%","left":"8.49%","height":"10%","width":"20%","source":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/2/14/0/FNK_Herbed-Chicken-Marsala_s4x3.jpg.rend.hgtvcom.966.725.suffix/1371614296995.jpeg"}]}
        source = {{uri:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/2/14/0/FNK_Herbed-Chicken-Marsala_s4x3.jpg.rend.hgtvcom.966.725.suffix/1371614296995.jpeg'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%",position:'absolute'}, {"top":"26.04%","left":"8.76%","source":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/4/26/0/FNK_LEMONY-YOGURT-POUND-CAKE_s4x3.jpg.rend.hgtvcom.966.725.suffix/1382542461780.jpeg","width":"20%","height":"10%"}]}
        source = {{uri:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/4/26/0/FNK_LEMONY-YOGURT-POUND-CAKE_s4x3.jpg.rend.hgtvcom.966.725.suffix/1382542461780.jpeg'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%",position:'absolute'}, {"top":"37.45%","left":"8.49%","source":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/11/4/1/CCHAP402_Sloppy-Joes_s4x3.jpg.rend.hgtvcom.966.725.suffix/1382540648899.jpeg","width":"20%","height":"10%"}]}
        source = {{uri:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/11/4/1/CCHAP402_Sloppy-Joes_s4x3.jpg.rend.hgtvcom.966.725.suffix/1382540648899.jpeg'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%",position:'absolute'}, {"top":"48.86%","left":"8.76%","source":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/25/0/FNK_pan-seared-salmon-with-kale-apple-salad_s4x3.jpg.rend.hgtvcom.966.725.suffix/1387918756116.jpeg","height":"10%"}]}
        source = {{uri:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/25/0/FNK_pan-seared-salmon-with-kale-apple-salad_s4x3.jpg.rend.hgtvcom.966.725.suffix/1387918756116.jpeg'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%",position:'absolute'}, {"top":"60.58%","left":"8.76%","source":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/1/30/1/BX0201_Lentil-Veg-Soup_s4x3.jpg.rend.hgtvcom.966.725.suffix/1371613978805.jpeg","width":"20%","height":"10%"}]}
        source = {{uri:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/1/30/1/BX0201_Lentil-Veg-Soup_s4x3.jpg.rend.hgtvcom.966.725.suffix/1371613978805.jpeg'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%",position:'absolute'}, {"top":"72.15%","left":"8.76%","source":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/12/12/0/fnk_mixed-berries-and-banana-smoothie_s4x3.jpg.rend.hgtvcom.966.725.suffix/1386935601342.jpeg","height":"10%"}]}
        source = {{uri:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/12/12/0/fnk_mixed-berries-and-banana-smoothie_s4x3.jpg.rend.hgtvcom.966.725.suffix/1386935601342.jpeg'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      
 <TouchableOpacity
          
          onPress = { function(){that.props.goTo('Weight'); that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, 
            backgroundColor:'#8fd158',
             alignItems:'center',
             justifyContent:'center', height: "7%",  
             title:'Test', borderColor: 'gray', color:'black',
              borderRadius:15, borderWidth: 1},
              {"top":"93.04%","left":"34.11%","innerText":"'Weight'","backgroundColor":"lavender"}]}
        >
        <Text style = {{color:"black"}}>

        {'Weight'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){that.props.goTo('Calories'); that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, 
            backgroundColor:'#8fd158',
             alignItems:'center',
             justifyContent:'center', height: "7%",  
             title:'Test', borderColor: 'gray', color:'black',
              borderRadius:15, borderWidth: 1},
              {"top":"92.88%","left":"3.8%","innerText":"'Calories'","backgroundColor":"lavender"}]}
        >
        <Text style = {{color:"black"}}>

        {'Calories'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){; that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, 
            backgroundColor:'#8fd158',
             alignItems:'center',
             justifyContent:'center', height: "7%",  
             title:'Test', borderColor: 'gray', color:'black',
              borderRadius:15, borderWidth: 1},
              {"top":"93.04%","left":"63.87%","innerText":"'Recipes'","backgroundColor":"mediumslateblue"}]}
        >
        <Text style = {{color:"black"}}>

        {'Recipes'}

       </Text>
        </TouchableOpacity>


      <Image
        style= {[{width:"20%",height:"20%",position:'absolute'}, {"top":"87.9%","left":"14.27%","source":"https://i.pinimg.com/originals/48/39/63/48396351091a31d5636205f16d6b343c.jpg","height":"5%","width":"10%","borderColor":"lavender","borderWidth":5}]}
        source = {{uri:'https://i.pinimg.com/originals/48/39/63/48396351091a31d5636205f16d6b343c.jpg'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%",position:'absolute'}, {"top":"88.06%","left":"44.31%","source":"https://www.clipartkey.com/mpngs/m/238-2385312_weight-clipart-kilogram-weight-tons-icon.png","height":"5%","width":"10%","borderWidth":5,"borderColor":"lavender"}]}
        source = {{uri:'https://www.clipartkey.com/mpngs/m/238-2385312_weight-clipart-kilogram-weight-tons-icon.png'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%",position:'absolute'}, {"top":"88.06%","left":"74.07%","source":"https://www.clipartkey.com/mpngs/m/140-1406707_recipe-icon-png-recipe-clipart-black-and-white.png","height":"5%","width":"10%","borderWidth":5,"borderColor":"mediumslateblue"}]}
        source = {{uri:'https://www.clipartkey.com/mpngs/m/140-1406707_recipe-icon-png-recipe-clipart-black-and-white.png'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      
 <TouchableOpacity
          
          onPress = { function(){window.open('https://www.foodnetwork.com/recipes/food-network-kitchen/herbed-chicken-marsala-recipe-2121049'); that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, 
            backgroundColor:'#8fd158',
             alignItems:'center',
             justifyContent:'center', height: "7%",  
             title:'Test', borderColor: 'gray', color:'black',
              borderRadius:15, borderWidth: 1},
              {"top":"15.76%","left":"34.11%","innerText":"'Herbed Chicken Masala'","width":"50%","backgroundColor":"lavender"}]}
        >
        <Text style = {{color:"black"}}>

        {'Herbed Chicken Masala'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){window.open('https://www.foodnetwork.com/recipes/food-network-kitchen/healthy-lemony-yogurt-loaf-cake-recipe-2112126'); that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, 
            backgroundColor:'#8fd158',
             alignItems:'center',
             justifyContent:'center', height: "7%",  
             title:'Test', borderColor: 'gray', color:'black',
              borderRadius:15, borderWidth: 1},
              {"top":"27.01%","left":"34.11%","innerText":"'Lemony Yogurt Pound Cake'","width":"50%","backgroundColor":"lavender"}]}
        >
        <Text style = {{color:"black"}}>

        {'Lemony Yogurt Pound Cake'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){window.open('https://www.foodnetwork.com/recipes/ellie-krieger/sloppy-joes-recipe-1946755'); that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, 
            backgroundColor:'#8fd158',
             alignItems:'center',
             justifyContent:'center', height: "7%",  
             title:'Test', borderColor: 'gray', color:'black',
              borderRadius:15, borderWidth: 1},
              {"top":"38.25%","left":"33.84%","innerText":"'Sloppy Joes'","width":"50%","backgroundColor":"lavender"}]}
        >
        <Text style = {{color:"black"}}>

        {'Sloppy Joes'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){window.open('https://www.foodnetwork.com/recipes/food-network-kitchen/pan-seared-salmon-with-kale-and-apple-salad-recipe-3361718'); that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, 
            backgroundColor:'#8fd158',
             alignItems:'center',
             justifyContent:'center', height: "7%",  
             title:'Test', borderColor: 'gray', color:'black',
              borderRadius:15, borderWidth: 1},
              {"top":"50.62%","left":"33.84%","innerText":"'Pan-Seared Salmon with Kale-Apple Salad'","width":"50%","backgroundColor":"lavender"}]}
        >
        <Text style = {{color:"black"}}>

        {'Pan-Seared Salmon with Kale-Apple Salad'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){window.open('https://www.foodnetwork.com/recipes/ina-garten/lentil-vegetable-soup-recipe-1948822'); that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, 
            backgroundColor:'#8fd158',
             alignItems:'center',
             justifyContent:'center', height: "7%",  
             title:'Test', borderColor: 'gray', color:'black',
              borderRadius:15, borderWidth: 1},
              {"top":"61.55%","left":"33.31%","innerText":"'Inas Lentil Vegetable Soup'","width":"50%","backgroundColor":"lavender"}]}
        >
        <Text style = {{color:"black"}}>

        {'Inas Lentil Vegetable Soup'}

       </Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){window.open("https://www.foodnetwork.com/recipes/food-network-kitchen/mixed-berries-and-banana-smoothie-and-smoothie-bowl-3364898"); that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, 
            backgroundColor:'#8fd158',
             alignItems:'center',
             justifyContent:'center', height: "7%",  
             title:'Test', borderColor: 'gray', color:'black',
              borderRadius:15, borderWidth: 1},
              {"top":"73.12%","left":"33.58%","innerText":"'Mixed Berries and Banana Smoothie'","width":"50%","backgroundColor":"lavender"}]}
        >
        <Text style = {{color:"black"}}>

        {'Mixed Berries and Banana Smoothie'}

       </Text>
        </TouchableOpacity>
        </View>
        )
    }
  }
    export default Recipes; 



  