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


class Multiplier extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        childrenAdditionalStyles: [],
        clickfunctions: [],
        textTreeChildren:[]
      }
    }

  renderElement(name,int, additionalStyle, clickfunctions,elem){
    var that = this;


    var copy = {};
    additionalStyle.forEach(function(obj,ind){
      // console.log(obj);
      Object.keys(obj).forEach(function(key){
   
        if(key !== undefined && key.indexOf("repeater") !== -1){
          copy[key.replace("repeater","")] = obj[key];
        }

      })
    })
    

    additionalStyle = copy;

    Object.keys(additionalStyle).forEach(function(key){
      if(key !== "onPress" && typeof additionalStyle[key] === "string" && (additionalStyle[key].indexOf('elem') !== -1  || additionalStyle[key].indexOf('width') !== -1 || additionalStyle[key].indexOf('height') !== -1 ) ){
        additionalStyle[key] = eval(additionalStyle[key])
      }
    })



    var innerText = additionalStyle.innerText;
  

     try {
     var evaled = eval(innerText)
     innerText= evaled;
    } catch(e){

    }

   

    int = parseInt(int)
    if(name === "text"){


      return (
        <Text
          style={[{ height: 40, borderColor: 'black', backgroundColor:'white', 
          color:'black', justifyContent:'center', width:"100%", borderWidth: 5}, additionalStyle]}
          key = {int}
          onPress = { function(){  eval('(' + that.props.clickfunction + ')()')   } }
          selectable = {true}
        >{  additionalStyle.innerText === undefined ? "example" :additionalStyle.innerText }</Text>

        )
    }


    if(name === "button"){
    
      return(
        <TouchableOpacity
        onPress = { function(){  
        
          appData.ExerciseIndex = parseInt(elem.Index);
          that.props.goTo("ExerciseDetails");
          that.forceUpdate();    

        } }
          
          key = {int}
          style={[{
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            backgroundColor: 'white',
            color:'black',
            elevation: 2, // Android
            marginTop:"5%",
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            height:"7%",
            borderRadius: 10,
            backgroundColor: "#19b6fa",
            borderColor: 'gray', borderWidth: 1}]}
        ><Text style = {{textAlign:'center', color:'white'}}> { unwrap_dynamically(additionalStyle['innerText'])  }</Text>
        </TouchableOpacity>
      )
    }

    if(name === "image"){
      return(
       <Image
          source = {{uri: additionalStyle['source'] === undefined ? ("https://i.imgur.com/89iERyb.png"):additionalStyle['source']}}
          key = {int}
          style={[{ width:'200px', height:'200px'}, additionalStyle]}
        ></Image>
     
      )
    }




  }


    render(){

      var that = this;
  
    



      return (<View
      style = {that.props.style}
      onPress = { function(){if(window.drag_mode){ that.setState({selectedElemToStyle:that.props.int});  return} if(window.edit_mode){ console.log("IND" + that.props.int); window.edit(that.props.int); return}  eval('(' + that.state.clickfunctions[that.props.int] + ')()'); if(that.state.clickfunctions[that.props.int].indexOf("appData") !== -1){ that.forceUpdate()}   } }

      >
        <ScrollView>
          {that.props.data.map(function(elem,ind){
            console.log(that.props.clickfunction)
            return that.renderElement(that.props.type,ind,that.props.style, that.props.clickfunction, elem)
          }) }
        </ScrollView>
        </View>
        )
    }

  }




      class FirstPage extends React.Component {
      constructor(props){
        super(props);
        this.state = {"key":"","FirstPageinput1":"","FirstPagepicker2":"Option1","FirstPagepicker3":"","FirstPageinput4":"Select","ke":"","k":"","":"Option1","K":"Option1","Ke":"Option1","Key":"Option1","Key1":["Push-Ups","Sit-Ups","Jumping-Jacks","Squats","Lounges"],"FirstPageinput":"","FirstPageinpu":"","FirstPageinp":"","FirstPagein":"","FirstPagei":"","FirstPage":"Option1","FirstPag":"Option1","FirstPa":"Option1","FirstP":"Option1","First":"Option1","Firs":"Option1","Fir":"Option1","Fi":"Option1","F":"Option1","Key2":"Sit-Ups","FirstPagepicker":"Option1","FirstPagepicke":"Option1","FirstPagepick":"Option1","FirstPagepic":"Option1","FirstPagepi":"Option1","FirstPagep":"Option1","Key3":"Jumping-Jacks","ExerciseIndex":3,"loaded":false,"dbLinks":{}}
      }
      render(){ 
      var appData = this.state; var that = this; 
      

      if(!that.props.loaded){
        return(<View><Text>LOADING</Text></View>)
      }
      exercises.shift();

      return (
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"#099ad9"}}>
        
<Text
style= {{"innerText":"'Exercises'","top":"0%","left":"30%",
"width":"40%","textAlign":"center","borderStyle":"solid",
"fontWeight":"bold","repeatercontainerStyle":null,fontSize:30,
"paddingTop":"0%","zIndex":null,"marginTop":"10%","marginRight":null,
"color":"white","fontSize":30}}
> {'Exercises'} </Text>
        
<Multiplier
      type = {"button"}
      data = {exercises}
      goTo = {that.props.goTo}
      style = {[{alignItems:'center'},
      {"repeateronPress":"appData.ExerciseIndex = parseInt(elem.Index);\ngoTo(\"Exercise Details\");",
      "options":"exercises",
      "repeaterinnerText":"elem[\"Exercise Name\"]","repeaterType":"button",
      "top":23.072000000000003,"left":-3.3530000000000086,
      "repeaterbackgroundColor":"#19b6fa",
      "repeatercolor":"white",
      "repeateralignItems":"center",
      "repeaterzIndex":2,
      "repeaterresizeMode":"50%",
      "repeateropacity":"100%",
      "repeatermarginTop":"25%","repeaterheight":"4%",
      "repeaterfontFamily":"Roboto","repeaterfontStyle":"bold","height":"90%"}]}
      clickfunction = {function(){}}
      >
      </Multiplier></View>
        )
      }
    }

    
      export default FirstPage;