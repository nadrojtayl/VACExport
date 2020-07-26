
import React, { Component } from "react";
import { ActivityIndicator, Modal, Button, Picker, Switch, Image, ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import Calendar from "./Calendar.js";
import appData from "./global.js";
import { Audio } from 'expo-av';
import Multiplier from "./Multiplier.js";
import { CheckBox } from 'react-native-elements'
import * as Linking from 'expo-linking';
 
import AwesomeAlert from 'react-native-awesome-alerts';

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


function modifyPercentage(percent,change){
  return (parseInt(percent.replace("#","")) + change) + "%"

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




 class DRAWERS extends React.Component {
     

    constructor(props)
    {
        super(props);
        this.state = {showAlert:false, "FirstPageinput0":"","details":"Leonardo DaVinci", modalVisible:true}
    }


      
  
 

     showAlert = () => {
        this.setState({
          showAlert: true
        });
      };
     
      hideAlert = () => {
        this.setState({
          showAlert: false
        });
      };
     
   

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
      
      
       <AwesomeAlert
          show={that.state.showAlert}
          showProgress={false}
          title="AwesomeAlert"
          message={that.state.data}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          cancelText="Okay"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            that.setState({showAlert:false});
          }}
         
        />

      <TouchableOpacity
      style= {[{width:"20%",height:"20%", position:'absolute',top:"24.42%",left:modifyPercentage("12.12%",appData.wiggle)}]}
       onPress = { function(){appData.selectedBio = link[5].Url; appData.selectedArtist = link[5].Name;  that.forceUpdate(); }}  
      >
      <Image
        style= {[{width:"100%",height:"100%"}, {"source":link[5]["image"]}]}
        source = {{uri: link[5]["image"]}}
       
      >
      </Image>
      </TouchableOpacity>


      

      

      <TouchableOpacity
      style= {[{width:"20%",height:"20%", position:'absolute',top:"75.42%",left:modifyPercentage("68.87%",appData.wiggle)}]}
       onPress = { function(){appData.selectedBio = link[9].Url; appData.selectedArtist = link[9].Name;   that.forceUpdate(); }}  
      >
      <Image
        style= {[{width:"100%",height:"100%"}, {"source":" link[9][\"image\"];"}]}
        source = {{uri: link[9]["image"]}}
       
      >
      </Image>
      </TouchableOpacity>


      

      

      <TouchableOpacity
      style= {[{width:"20%",height:"20%", position:'absolute',top:"50.39%",left:modifyPercentage("42.27%", appData.wiggle)}]}
       onPress = { function(){appData.selectedBio = link[7].Url; appData.selectedArtist = link[7].Name;  that.forceUpdate(); }}  
      >
      <Image
        style= {[{width:"100%",height:"100%"}]}
        source = {{uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALoAhwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAIEBQYBB//EAD4QAAIBAwMCBAIGBwcFAQAAAAECAwAEERIhMQVBEyJRYQYyFHGBkaGxIzNCYnPB0VJTkpOy4fAHJENyohX/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAiEQEBAAICAgICAwAAAAAAAAAAAQIREiEDMSJBE2EEMlH/2gAMAwEAAhEDEQA/AIFxPPrmxNNkscAOdtzUczzAAtNNsN/OeakTYa4lU7AucH7TQhbs0Gd23OAK5+Tfjt1Ly5C6WnkCE/LrOa7LdS4yJJdx3kNc8LGAVIJO5bmhyBS22w7ClsUP6XLq/WzDftIaelzMWybiXH8Q0lWMHJGTTW3O+Ke0cRjPNti4l/xmnrcyhf10mfUyGgHjag3NwLdPKNUrfKp7e/1UtmmvdSoC0k8iL6mQj+dRX63FFnE9y/uCSPzqkuJGkfVNJ4r+rHYfUKGrCQHK785Jq5+02rpev6jgNdHP7x/rT16yN1NxcIx/tE1mwZC/lBxRmjfHmYn0o0nbRx9RaT5Lw/5h3/Gnm6uQP18pHqHNZFoiCWXIosFxcQ7rIceh3p6G2n+k3LDInl/zDXRdXPH0iXP/ALmq20vVmGHfS3p61KA/aBpehUkT3RbH0iXP8RqVASQ5zmlRsJ8q6bmQnsWH4muWxBhxvx5q7JnxpV7625HagwgLyxwDg471nk6J0JIOQnyg5HrQtGp9sYFOk1HJIJ2qMrFVyDzShW9nk4bGRigucHI2x+NcZ2ZgsYJPtUW7uEi23L9/aqTbtIkuNEZc9u1VU85UM7jXK/8A8ihTTOwBkJ9QKHGDOSS+MU5GeyhEjbnGSdwRmiuWLFS4wPTiuMURdIyF755NDeeKJQVxketXE7SUGAAoYiis+ItOAMcE81Uy30j/ACsAPQVHaWRj5nNOQbWUkoUYAGkfjQfG1dqhh27k0l3O5qtBMD4IK1edNuFniKt84qiEREYYkYPrUvpcnh3SYIw3lNTl2IvSgztSpb6sUqzVtLnYmebJ/bb86AS+sEgbUaZtN5Pngswx9tBkk82Bz61P21p4ZnyS2P51HmG+BT9fZD5uM0NGHiZPC74FBVFv7r6EpVT5mG9UzTADxJCSTwCdzTr+4Ek0rsdZLeuwqOoB3O5960kZ2iKHclnO570XXHCp3FQrm+CeSLdqjo5clnyWPrT0kS4unckJgD35oQBxyTRPo0z4KwuQf3aPF0+8fZVVcdicU/Q1UXRhqdpNKaG4iZvFQjemAtnnFMCquakW9trJJwAB60CAHVRwxGrHFAgjhgoGnK47miWCk3EYxjzbU1Q0gZnOFVal9FTXdAkeVfNSp6XRYZpUmwaVRBUi5bTPKcZzIw/Go4lClsDejXIxcTjt4rn8aABFGDNO2EH41NalIxVWkchFHc1Q3l+0rGOHUiNz2Zv6Cm3t+1zNttED5R6e5oE5jhi1enPuaqRGVBlKKNxnH3CoMtwzEquQMffTZrgyksBj2FXvw90SS8ljLRmR2PlQCr3JOyxxuV1EPpHRri8ZWZRHGR87/wAq9E+HfgK5usPbW4VTzPNj8K2/wp8FW1tFHcdSRZZQAVT9la3CIkaBEAVBwAKnHeXf02yuHj6k3Xmd38DCxiMtxJ4+ByO1ZLqvTVjL6Qmkele236JLGyyDymvPvizosMeLiIlAdn9DWN+OTT++Pby+6zlo20sDgfVVNLGEYqOx7Vc9Vg03hCfL7cVBcR4wSoxxitsa5soiAYG1SQAFAxyKE37vNEC+UFt8Dc1aDfpB+XTlewq96NCYrMyv80nAxwKrOkWJvZxn9Uu7n29K0UuD5FGAO1RlV/Ww/m3pUTwywAUZHpSqRYUxzeShjsJWH4mqPrfUPpEgigAWGPYY7n1qz6q5hkvHOch3x9ZNZzYnUd/505Ozt6Ng8zAHIydvf3qN1F8sVGNjn66fM2F15OD6VCuMsCzc5q4zSukWwu+oIjLkDJIr3r4A6BDYwJdXCqZnGRtwK8U+ESsV8ssu6kgH6jXv0HUbO1t4y86RrgYDGsPNl8tOrwYy41pdeDtRtZKZOB9tVK3sctqZoHDjTkFTkVnlF/eTtc3V9cC2UFkhh2JpTy6P8O2qvX8mAapurRJLYSiQBgF2HY1V9J6inVofFsYr1I9TLquNjkbcZq3uEYW4V8ttvtWWed23xxkmniHU2aa8eNPLGHIxQerWMcVkJ0UAqQMgc5rT9d6dDH1mTQp0OCSfQ1WfEPhRdPEYzrcjyn15Jroxy3pjl4/jbWVQEjbf3okUMlzPHFEpLNhQB60IqWYKoyxOABWn6RZ/QIDJIB9IYf4RWuV05cZtKit4rC1WCPDPzIw7mmDnUTv70/GNyaa7jgH76yadURGQSaflJPPPalUcuTjJU+lKmEL4qbHjrgnNw3H11nzKPDXPcVffFQZo7kpuVlLH6sn+tZIsdONyRWknTPK9iltXlO4HAFdlcyJ+kTI7EbYqMGZQBj1qRbBZDpdsZ4p+kH9Pl0SgA/NtzXqvRLm56v0gR28cHiGI+HJMNQLg7g+leRsQkjBfmXvXpX/SjqCMbq0kfB2dRn7D/KsfNOtur+Nflxeh/C3Sn6ZEVdwZJYwZVX5dfcgdqt4gHQAJh14I5qLA5WZACSAOarp+u2dr1NLEXKm7dhiIHJA9a5N7dnCtFFbxxtrZdJA2qB1S6CQtjkUp718YYgn905qq6pdKYSDyTincpZo8PHZ3WS6yQZTKj5bVkr6j1rI9akuOp3i21tbHVDsxUbb9z6Vo+tMLcnS5LOcA5/CoMyX011Da9PyWkJyFH3kmujDqMPPdzpDsOlpZKHbMk+Oey+wqXMSSMDFX8HwwLS2a56jcEBBqcsxAUe9Uk99blvDs4C2DtJIMA/ZVb3XJrQRGBnVQmB3yakRK7zfpfMcElfShzhTtnFM6ADpb12pVyUAMG7cVyghuoxh7udGwQXcEH0yayt90traXxIQzRk8ela26H/eTkn/yMPxoRyy420+4p8tFcdsPLEzMQI2XH7NNS0nfZIpCfqNbkQQPu0YyO9OFugAKIPup/kHCsbB0m7c7x6DnYtWg+H7O76bdR3MUi+ODgAbjGdwat4kjbOoDUNt64pEZZk8unepuW4vHHV229z1N1skkHlkZOc401negwTx39z1OR1upJvKgVfMoz3PeolxeyXcOhWxgbVbdKnkt7NYY31HGeMDFc3Hji9Lx5455fJPk6uUkEcoZGPINQeodVaRQq6frPb/el1R4Po/iuNMhH24rFz3k6SMY5fEjJCgMdxT8eEvaPNnr0t538e6iMg1IDn3Na/4RsFXx+ouoJOY4z6D9r/ntWY+Hel3PU5QItsnLyNwq/wBa1XxN17p3w30xbaOYCbTpjjXdvckdv962s/xy55KH/qD8Tr/+aLCyBxLICzHbUF32HpmqXps0EkalUyfUVlOpXz39y07+UcKvoKFBdTW5/QyOme4rWYajmuW63jHwS7scFht7CoXiQuGLMCe29ZF7ieU+eV2+tjXAspGQNqOB8mpdoy+AxJz2+qlWct3YEDUFPvXafAttRdtquZhjYSt+ZpBsLgnah3Umm6nA58RvzNDYkKPX0rO+1QQuBk9vaixTjGg8+9BJDYyo4rkWcMcZ9aSpsd31eUBQKG3GlhzyajK3nPOM8DtUlNBUlt/agTtP6dBGXfxThI1L7d6La3JUZdsLjgUzp3heDLLPIkUAXBZjgGqa76jZwDSLgSKP7s80uO22Pk4idb62skxjQEswzyTiqy1hEjjxG0Rg5JIzS6p1ey6kkBtLeOzlgGnQOHHrn1qHJceDDLgHxCMDParmPTLPyXK7ayb44XpNkbHo1ogk7zSMSc+uOKwt1cTXc7z3MrSSucszHJNMiV5MtnPqTT0TLDfcnFaTGRjcrT7e3aUlmbRGO5p0yDICAhR29afIcAIrZVNse/rSjXfOKoOKgo+MJzTdgDtuOfah6zkjNBiRjB3pUy3zI5Ge9Kno2ou97qfbcyN+ZoOAATvnmi3RJup8f3rfmajtqLYI2IrnpjqCSDmnEIg5O9cJKoQu9Quq3awW4dmwx4xSVs65uI7ZfMQM/eaqpuozY/RHGe+KqZJpJpDIzb09nLJ7961mLO1y9u5rqcfSGJC/KvZfsoZl1bDjihk5YmiRRmR1XV5mOM+lVrSaLEgjdMjYelSL+bxWLFncZwCe4oAczSkKTzhdu1PK7ae2KQMV8p4ajFS7SHOqTGAgqMFAAIGc9quri2Nn0JDuGmfn2H/BTGlRgE96LHheTgUOLIcd6lTkeFgd+cUzhsjJjSvm9x3oMoIXJGM7CiLFse2Fz99AnctpQDYcUKo3TwDOB2waVd6ftIx9sClVHj6aS7OLy4/it+ZoRJHO4/Kn3ch+m3AxxI/+o0LUFGWBNc9J0yBPO7AIB3NZvq1z9KlVlH6L9gU6+nl8Yq4YAcDtioeGcscYA71WOP2VoQONqenfftQpDhhgAgUZSGXfY1okzkkbb1Js4yyzyhcCKMnP4VHUYfFWaERdGmIPmkdFP50BHsANjuCP5U0MWLHGPanWzBUOTjNNTPI5pBJsYvFu4g3BYZAq5+JJPJFAG8sewHYHvVf0R8XYdsbUbr0ivMoPIBJ+2l9n9K+JN85+6j+GWZfc8VHhO+e2KkRtl1qjgl/pii0JsWGW/lUBiCU9AN6PeAvIwbZic1HYaRgnO1B0WxPmJPBNKmwt+zxilTVPTSXW19c5/vX/ANRqPJucajj1ot3tf3H8Z/zoBPmO2w4rCpR2RGBEiBiar+olIYvATyZ3IxU67k8MGTSxCr2qinlaQlnySfUU8ZtNDK6lBDV1FwQfSkDjjAp6YO2M1sTmklsjnNSScWccZz82o+9AV2UtpTtvmiR/pAhJ2xSDg2UCiL5RzTBGzNg7EnAFOY4zQE/pcixzM7cBDTLl/EuC2e2DQrbOdIHzcn2rmosSf7R3pHBV0c8D35qRYqJZthwRUURjBLHepMDG3gDJuzjaiqR72QyTuVPeguMrj8aeFI8xBNDYEmmChBLAg5zx70qfBs+T27VyqJeXzEXtwSeZn4+s0MSEjGCc+lSLtVPUbgFQR4jdv3jRWRRGcKB5Ow96wsEig6h4pTTFkLyfeqhS2NxWwmVTOoKjGk9qperRot2QqKBjsKvGlVQcinrIw4Ao5AxwKbgY4FWHUkznI30miRTL4aKVxvzQyBhdhzRI1GW2FA2OpQDOoagdq4MYOwpiAZ4FGAG+1EhHQcOMDGOe9dAULXAB6Dg0UgelGlQLVsVA29a66khQvYURuK6QPSkYQU+/310qQN2z91EUDPArmBvsKYhQrGTjQSaVNiOJTjalTOP/2Q=="}}
       
      >
      </Image>
      </TouchableOpacity>


      

      

      <TouchableOpacity
      style= {[{width:"20%",height:"20%", position:'absolute',top:"26.29%",left: modifyPercentage("69.88%",appData.wiggle)}]}
       onPress = { function(){appData.selectedBio = link[6].Url; appData.selectedArtist = "Albrecht Durer";   that.forceUpdate(); }}  
      >
      <Image
        style= {[{width:"100%",height:"100%"}, {"source":" link[6][\"image\"];"}]}
        source = {{uri: link[6]["image"]}}
       
      >
      </Image>
      </TouchableOpacity>


      

      

      <TouchableOpacity
      style= {[{width:"20%",height:"20%", position:'absolute',top:"75.04%",left:modifyPercentage("13.38%",appData.wiggle)}]}
       onPress = { function(){appData.selectedBio = link[8].Url; appData.selectedArtist = link[8].Name;   that.forceUpdate(); }}  
      >
      <Image
        style= {[{width:"100%",height:"100%"}, {"source":" link[8][\"image\"];"}]}
        source = {{uri: link[8]["image"]}}
       
      >
      </Image>
      </TouchableOpacity>

   


      
<Text
          style= {[{fontFamily:'Bradley Hand', fontSize:resizeFont(12),position:'absolute',zIndex:100,width:'100%'},{textDecorationLine:'underline', "top":"72.06%","left":"69.88%","innerText":"' link[9][\"Name\"];'"}]}
        > {link[9]["Name"]} </Text>
        
<Text
          style= {[{fontFamily:'Bradley Hand', fontSize:resizeFont(12),position:'absolute',zIndex:100,width:'100%'},{textDecorationLine:'underline',"top":"71.31%","left":"9.08%","innerText":"' link[8][\"Name\"];'"}]}
        > { link[8]["Name"]} </Text>
        
<Text
          style= {[{fontFamily:'Bradley Hand', fontSize:resizeFont(12),position:'absolute',zIndex:100,width:'100%'},{textDecorationLine:'underline',"top":"47.02%","left":"38.97%","innerText":"' link[7][\"Name\"];'"}]}
        > {link[7]["Name"]} </Text>
        
<Text
          style= {[{fontFamily:'Bradley Hand', fontSize:resizeFont(12), position:'absolute',zIndex:100,width:'100%'},{textDecorationLine:'underline',"top":"21.8%","left":"68.11%","innerText":"'Albrecht Dürer'"}]}
        > {'Albrecht Dürer'} </Text>
        
<Text
          style= {[{fontFamily:'Bradley Hand',position:'absolute',zIndex:100,width:'100%'},{textDecorationLine:'underline', "top":"21.06%","left":"10.6%","innerText":"' link[5][\"Name\"];'"}]}
        > {link[5]["Name"]} </Text>
        
<Text
          style= {[{fontFamily:'Baskerville-SemiBoldItalic', textDecorationLine:'underline',position:'absolute',zIndex:100,width:'100%'},{"top":"6.79%","left":"38.72%","innerText":"'DRAWERS'","fontSize":resizeFont(30),"color":"green"}]}
        > {'DRAWERS'} </Text>
        
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
            return obj[appData.selectedArtist] !== "" && obj[appData.selectedArtist].indexOf("Download") === -1 && obj[appData.selectedArtist].indexOf("online") === -1;
          }).slice(0,20)
          

          appData.data = data;
          appData.checked = checked;
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
    export default DRAWERS; 



  