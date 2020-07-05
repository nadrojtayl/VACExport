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
          style={[{ height: 40, borderColor: 'black', backgroundColor:'white', color:'black', width:"100%", borderWidth: 5}, additionalStyle]}
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
          appData.selected = unwrap_dynamically(additionalStyle['innerText']);
          appData.filtered = events.filter(function(event){return event["Calendar Name"] === appData.selected});
         that.props.goTo("repeater");
        } }
          
          key = {int}
          style={[{
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            backgroundColor: 'white',
            color:'black',
            elevation: 2, // Android
            marginTop:"2%",
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            height:"100%",
            width:"100%",
            borderRadius: 10,
            borderColor: 'gray', borderWidth: 1}]}
        ><Text style = {{textAlign:'center'}}> { unwrap_dynamically(additionalStyle['innerText'])  }</Text>
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




      class Onecalendar extends React.Component {
      constructor(props){
        super(props);
        this.state = {"key":["calendar 1","calendar 2","q34wugti34wgaes","q34wugti34wgaes","q34wugti34wgaes","q34wugti34wgaes","q34wugti34wgaes","q34wugti34wgaes","q34wugti34wgaes"],"namenewcalendarinput1":"gy","calendars":["calendar1","calendar2","hi","hi","hi","hi","hi","gy","gy"],"loaded":false,"dbLinks":{}}
      }
      render(){ 
      var that = this; 
      



      return (
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"#959c98"}}><Text
          style= {{"innerText":"'What calendar would you like to access? '","top":69.15199999999999,"left":0.6879999999999882,"fontSize":20,"backgroundColor":"transparent"}}
        > {'What calendar would you like to access? '} </Text>
        
 <TouchableOpacity
          
          onPress = { function(){that.props.goTo("namenewcalendar"); that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, 
            width:"50%",
            backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', 
            height: "7%",  title:'Test', borderColor: 'gray', 
            color:'black', borderRadius:15, borderWidth: 1},
            {"innerText":"'Name new calendar!!'",
            "top":"70%",
            "left":"25%",
            "backgroundColor":"black","borderRadius":10,
            "color":"yellow"}]}
        ><Text style = {{color:"yellow"}}>{'Make new calendar!!'}</Text>
        </TouchableOpacity>
    <Multiplier
      type = {"button"}
      data = {appData.calendars}
      goTo = {that.props.goTo}
      style = {[{alignItems:'center'},{"options":"appData.calendars",
      "repeaterinnerText":"elem","top":"10%","left":"0%","height":"50%","repeaterType":"button",
      "repeateronPress":"goTo(\"repeater\")"}]}
      clickfunction = {function(){
        goTo("repeater")
      }}
      >
      </Multiplier></View>
        )
      }
    }

    
      export default Onecalendar;