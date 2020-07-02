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
    console.log("SER")
    console.log(appData)

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

    console.log("STYLE");
    console.log(additionalStyle)


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
        
          appData.FilteredList = filter_list_of_objs(weapons,"Gun Class",elem);
          that.props.goTo("SecondPage");
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
            borderColor: 'gray', borderWidth: 1}, additionalStyle]}
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
  
    

      if(!window.edit_mode){
        return (<View
          style = {that.props.style}
          >
       <ScrollView>
          {that.props.data.map(function(elem,ind){

            return that.renderElement(that.props.type,ind,that.props.style, that.props.clickfunction, elem)
          }) }
        </ScrollView>
        </View>
        )


      }

      return (<TouchableOpacity
      style = {that.props.style}
      onPress = { function(){if(window.drag_mode){ that.setState({selectedElemToStyle:that.props.int});  return} if(window.edit_mode){ console.log("IND" + that.props.int); window.edit(that.props.int); return}  eval('(' + that.state.clickfunctions[that.props.int] + ')()'); if(that.state.clickfunctions[that.props.int].indexOf("appData") !== -1){ that.forceUpdate()}   } }

      >
        <ScrollView>
          {that.props.data.map(function(elem,ind){
            console.log(that.props.clickfunction)
            return that.renderElement(that.props.type,ind,that.props.style, that.props.clickfunction, elem)
          }) }
        </ScrollView>
        </TouchableOpacity>
        )
    }

  }




      class FirstPage extends React.Component {
      constructor(props){
        super(props);
        this.state = {"key":"value","id":3,"ID":null,"settingsinput1":"","settingspicker3":"Option1","settingspicker4":"","settingspicker6":"","settingspicker9":"","settingspicker10":"","settingspicker11":"","settingspicker12":"","APIKey":"09dc52b6b12bb0a87cfd0c79f2dfe1e9","loaded":false,"dbLinks":{}}
      }
      
      render(){ 
      var appData = this.state; var that = this; 
      

      if(!that.props.loaded){
        return(<View><Text>LOADING</Text></View>)
      }


      return (
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"black"}}>
      <Image
        style= {[{width:"40%",height:"20%"}, {"source":"Movies[appData.id].Poster",
        "top":"5%",
        "left":"5%","textAlign":"center","paddingTop":1,"height":"40%","width":"50%",
        resizeMode:"cover",        
        "innerText":"Movies[appData.id].IMDb"}]}
        source = {{uri:Movies[appData.id].Poster}}
      >
      </Image>
      <View style = {{marginTop:"20%",height:"100%"}}>
<Text
          style= {{"innerText":"Movies[appData.id].Title","textAlign":"center","backgroundColor":"transparent","fontFamily":"Verdana","fontSize":24,"color":"#828282","fontWeight":"bold"}}
        > {Movies[appData.id].Title} </Text>
                
        <Text
          style= {{"width":"55%","innerText":"Movies[appData.id].Director","color":"#828282"}}
        > {Movies[appData.id].Director} </Text>


<Text
          style= {{"innerText":"Movies[appData.id].Genre","width":"60%","color":"#828282"}}
        > {Movies[appData.id].Genre} </Text>
        <Text
          style= {{"backgroundColor":"transparent","innerText":"Movies[appData.id].Rating","color":"#828282"}}
        > {Movies[appData.id].Rating} </Text>
        
<Text
          style= {{"height":"25%","width":"100%","innerText":"Movies[appData.id].Description","fontFamily":"Verdana","fontSize":14,"backgroundColor":"transparent","color":"#828282"}}
        > {Movies[appData.id].Description} </Text>
        

        </View>
        
        
 <TouchableOpacity
          
          onPress = { function(){that.props.goTo("settings"); that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"innerText":"'Settings'","backgroundColor":"#757778",
            "top":"5%","left":"70%"}]}
        ><Text>{'Settings'}</Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){; 

            alert("OK! This is available on " + Movies[appData.id].Location);
            that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0,
             backgroundColor:'#8fd158', alignItems:'center',
             justifyContent:'center', 
             height: "7%",  title:'Test', borderColor: 'gray', color:'black', 
             borderRadius:15, borderWidth: 1},{
              "top":"89%","left":"0%","height":"10%","width":"30%","innerText":"'Yes'","backgroundColor":"#16e03f","fontFamily":null}]}
        ><Text>{'Yes'}</Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){appData.id=((appData.id+1) % (Movies.length -1) ) + 1 ; that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{
              "top":"89%","left":"70%",
            "height":"10%","width":"30%","innerText":"'Give me another'","backgroundColor":"#e81010"}]}
        ><Text>{'Give me another'}</Text>
        </TouchableOpacity>

        </View>
        )
      }
    }

    
      export default FirstPage;