
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




 class FirstPage extends React.Component {
     

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
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"#f5dced"}}>
      <View style = {{width:"100%", height:'15%', position:'absolute',top:'0%', paddingTop:'8%', left:"0%", backgroundColor:'purple'}}>
        <Text style = {{fontFamily:"Avenir",fontSize:60, fontWeight:'bold', textAlign:'center', color:'white'}}>Beauty Bar</Text>
      </View>
<Text
          style= {[{color:'white', position:'absolute',zIndex:100,width:'100%'},{textAlign:'center', "top":"18%","left":"0.23%","innerText":"'Hi welcome to my app,  this app is for you to get hair ideas, makeup ideas, etc plus tutorials on how to do certain things so you can look even more fabulous than you already are'","color":"black"}]}
        > {'Monthly ideas to look even more fabulous than you already are'} </Text>
        
 <TouchableOpacity
          
          onPress = { function(){that.props.goTo("SecondPage");; that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  
            title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{
              "top":"27%","left":"10%","innerText":"' \"hairstyles & hair tutorials\";'","height":"27%","backgroundColor":"purple"}]}
        >
        <Text style = {{fontFamily:"Avenir", textAlign:'center', color:"white"}}>

        {"hairstyles & hair tutorials"}

       </Text>
        </TouchableOpacity>

 <TouchableOpacity
          
          onPress = { function(){that.props.goTo("FourthPage");; that.forceUpdate(); }}  
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
            position:'absolute',top:"30%",left:0, backgroundColor:'#8fd158', 
            alignItems:'center',justifyContent:'center', height: "7%",  
            title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{
              "top":"27%","left":"55%","innerText":"'nail isnpo'","backgroundColor":"purple",
            "height":75}]}
        >
        <Text style = {{fontFamily:"Avenir",color:"white"}}>

        {'nail inspo'}

       </Text>
        </TouchableOpacity>

        
       <Image
        style= {[{width:"43%",height:"12%"}, {position:'absolute', "top":"57.2%",
        "left":"56.67%","source":"https://reviewed-com-res.cloudinary.com/image/fetch/s--QYmIHTUO--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1548449044000/GettyImages-1024577404.jpg"}]}
        source = {{uri:'data:image/jpeg;base64,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'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>

      <Image
        style= {[{width:"20%",height:"20%"}, {"top":"69.2%","left":"2.67%","source":"https://reviewed-com-res.cloudinary.com/image/fetch/s--QYmIHTUO--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1548449044000/GettyImages-1024577404.jpg","height":100,"width":200}]}
        source = {{uri:'https://reviewed-com-res.cloudinary.com/image/fetch/s--QYmIHTUO--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1548449044000/GettyImages-1024577404.jpg'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      


      <Image
        style= {[{width:"20%",height:"20%"}, {"top":"68.98%","left":"57.41%","source":"https://www.asiaone.com/sites/default/files/styles/a1_og_image/public/original_images/Jul2019/040719_makeup_pixabay.jpg?itok=mYDnv1qW","width":150,"height":100}]}
        source = {{uri:'https://www.asiaone.com/sites/default/files/styles/a1_og_image/public/original_images/Jul2019/040719_makeup_pixabay.jpg?itok=mYDnv1qW'}}
        onPress = { function(){; that.forceUpdate(); }}  
      >
      </Image>



      
 <TouchableOpacity
          
          onPress = { function(){that.props.goTo("FifthPage");; that.forceUpdate(); }}  
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
             title:'Test', borderColor: 'gray', color:'white', borderRadius:15,
              borderWidth: 1},{"top":"45%","left":"55%",
              "innerText":"'beauty products'","height":75, "backgroundColor":"purple"}]}
        >
        <Text style = {{fontFamily:"Avenir",color:"white"}}>

        {'beauty products'}

       </Text>
        </TouchableOpacity>
        </View>
        )
    }
  }
    export default FirstPage; 



  