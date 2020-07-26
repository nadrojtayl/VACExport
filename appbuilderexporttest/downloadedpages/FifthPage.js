
import React, { Component } from "react";
import { ActivityIndicator, Button, Picker, Switch, Image, ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import Calendar from "./Calendar.js";
import appData from "./global.js";
import { Audio } from 'expo-av';
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




 class FifthPage extends React.Component {
     

    constructor(props)
    {
        super(props);
        this.state = {"addyson":"beauty bar byappData.addyson","FirstPageinput0":"  beauty bar byappData.addyson ","color":"pink","color2":"purple","button1":"hairstyles & hair tutorials","button2":"makeup looks & tutorials","button3":"skincare","button4":"purchase products","firstbutton":"beauty bar byappData.addyson","index":13,"imageurl1":["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfQu2CblPy7_PXtk08x5XKd4pQjdArYMygEw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ48rYcHkJ2yjKkQZekm9HPrFlQBeg_ErN13Q&usqp=CAU","https://i.pinimg.com/736x/f4/b4/26/f4b42627d71cc86ee52a412c00597005.jpg","https://i.pinimg.com/736x/81/87/75/8187751d1056f9f37fd9a0b3bcc5239d.jpg","https://i.ytimg.com/vi/HuA2A9WY2yI/hqdefault.jpg","https://i.pinimg.com/564x/c5/ab/72/c5ab72699e110c38d1c6331cd790fd40.jpg","https://i.pinimg.com/564x/93/14/02/93140262f948ff928547cbb37ff08c68.jpg","https://i.pinimg.com/564x/8c/38/a1/8c38a103670a318d22cadadf3aa27e0a.jpg","https://i.pinimg.com/736x/7f/d0/bd/7fd0bd6780dcd7218a14c701bb271048.jpg","https://i.pinimg.com/564x/6d/ac/75/6dac7544b357097d1b9a66feca864b67.jpg","https://i.pinimg.com/564x/1f/b6/9c/1fb69ce783bbf826b09a7f7432841cf3.jpg","https://i.pinimg.com/736x/73/63/05/7363057da054ba310f4c99b21c1594ed.jpg","https://i.pinimg.com/originals/08/53/1e/08531e3e1a65dede0d777fd61e14e423.jpg","https://i.pinimg.com/564x/a0/12/6d/a0126d9aa234a17ea88cbf0fd8d071cf.jpg","https://i.pinimg.com/originals/35/82/90/35829090c685b42759428ddac5d0db7c.jpg","https://i.pinimg.com/564x/76/75/0d/76750d85f64fbfb8cb172d86bb2f4478.jpg","https://storage.googleapis.com/prose-blog-media/1/2019/03/Webp.net-resizeimage-copy-7.jpg","https://i.pinimg.com/564x/4d/2d/b0/4d2db04e26fc63cb3fd87506d97a1625.jpg"],"addyson1":2,"picurls":["https://i.pinimg.com/736x/f4/b4/26/f4b42627d71cc86ee52a412c00597005.jpg"],"button5":"nail inspo","makeupindex":0,"nailindex":0,"nail_index":0,"inspo":10}
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
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"3.84%","left":"-0.04%","borderStyle":"solid","backgroundColor":"pink","color":"purple","textAlign":"center","innerText":"'reccomended beauty productys'"}]}
        > {'Monthly Reccomended Beauty Products'} </Text>
        

      

      <TouchableOpacity
      style= {[{width:"10%",height:"10%", position:'absolute',top:"10.44%",left:"1.04%"}]}
       onPress = { function(){; that.forceUpdate(); }}  
      >
      <Image
        style= {[{width:"100%",height:"100%"}, {"top":"10.44%","left":"1.04%","source":"https://sep.yimg.com/ay/yhst-17606501929367/ecoco-eco-styler-styling-gel-5lb-13.jpg","width":125,"height":115}]}
        source = {{uri:'https://sep.yimg.com/ay/yhst-17606501929367/ecoco-eco-styler-styling-gel-5lb-13.jpg'}}
       
      >
      </Image>
      </TouchableOpacity>


      
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"29.71%","left":"2.67%","innerText":"'eco styling gel you can buy at a beauty supply store , target , walmart and many more'","width":115,"color":"purple"}]}
        > {'eco styling gel you can buy at a beauty supply store , target , walmart and many more'} </Text>
        


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":"10.44%","left":"49.82%","source":"https://m.media-amazon.com/images/I/916W5hhy1pL._AC_UL480_FMwebp_QL65_.jpg","width":145,"height":115}]}
        source = {{uri:'https://m.media-amazon.com/images/I/916W5hhy1pL._AC_UL480_FMwebp_QL65_.jpg'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      
      <Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"top":"30.63%","left":"58.18%","color":"purple","innerText":"'this is a hair accesory kit that you can purchase on amazon'","width":115}]}
        > {'this is a hair accessory kit that you can purchase on amazon'} </Text>
        


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":"0%","left":"58.42%","source":"https://contestimg.wish.com/api/webimage/5b9396ce6ee7bf328db43564-large.jpg?cache_buster=70433c0838f8570e17f76c828aaefdf8","width":125,"height":105}]}
        source = {{uri:'https://contestimg.wish.com/api/webimage/5b9396ce6ee7bf328db43564-large.jpg?cache_buster=70433c0838f8570e17f76c828aaefdf8'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      

        <TouchableOpacity
          
          onPress = { function(){that.props.goTo("FirstPage");; that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', 
            alignItems:'center',justifyContent:'center', height: "7%", 
             title:'Test', borderColor: 'gray', color:'black', borderRadius:15,
              borderWidth: 1},{"top":"85%","left":"35%",
              "innerText":"'beauty products'","height":75,"backgroundColor":"purple"}]}
        >
        <Text style = {{color:"black"}}>

        {'Back'}

       </Text>
        </TouchableOpacity>

        </View>
        )
    }
  }
    export default FifthPage; 



  