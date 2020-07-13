import React from 'react';
import { TextInput, StyleSheet, ScrollView, TouchableOpacity, Button, Picker, Switch, Image, Text, View } from 'react-native';
import appData from './global.js';

import * as Linking from 'expo-linking';
import { Ionicons } from '@expo/vector-icons';


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
          style={[{ width:'20%', height:'20%'}, additionalStyle]}
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




      class Locationpage extends React.Component {
      constructor(props){
        super(props);
        this.state = {"key":"value","locationpageinput10":"Select","loaded":false,"dbLinks":{}}
      }

      like(){
        var that = this;
        locations[appData.index]["Votes"] = parseInt(locations[appData.index]["Votes"]) + 1;
        var find_obj = {Name:locations[appData.index]["Name"]};
        var update_obj = {Votes:locations[appData.index]["Votes"]};
        var schema = fetch("https://script.google.com/macros/s/AKfycbxYi_bS8n6zOD_3f-YsIDgAc65A-DEL5CA31kHBQg1w9BMzZwk-/exec?sheetName=Kenny", {
                  method: 'POST',
                  body:JSON.stringify({find_obj, update_obj}),
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept": "application/json"
                  }
        }).then(async function(res){
         
          that.forceUpdate();


        })
        this.forceUpdate();
      }

    render(){ 
       var that = this; 
        

        if(!that.props.loaded){
          return(<View><Text>LOADING</Text></View>)
    }


      return (
    <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"#7ab5f5"}}> 
    <TouchableOpacity
        
        onPress = { function(){that.props.goTo("FirstPage"); that.forceUpdate(); }}  
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
          position:'absolute',top:"4%",left:10, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', 
          height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1}]}
      ><Text>{'Home'}</Text>
      </TouchableOpacity>
    <Text
        style= {{"top":100,textAlign:"center","color":"white","fontSize":28,"fontWeight":"bold"}}
      > {locations[appData.index]["Name"]} </Text>
      
    <Text
        style= {{"top":125,"color":"white","textAlign":"center","fontSize":18}}
      > {locations[appData.index].Neighborhood} </Text>

    <Text
        style= {{"top":135,textAlign:"center","color":"white","fontSize":18}}
      > {locations[appData.index].Address} </Text>
      
    <Text
        style= {{"top":145,"color":"white","textAlign":"center","fontSize":18}}
      > {locations[appData.index].PhoneNumber} </Text>
      
    <Text
        style= {{"top":155,textAlign:"center","color":"white","fontSize":18}}
      > {locations[appData.index].HoursOfOperation} </Text>

    <Image
      style= {[{"top":200,"left":5,"height":"30%","width":"80%"}]}
      source = {{uri:locations[appData.index]["Link"]}}>
    </Image>
    <TouchableOpacity onPress = {that.like.bind(that)} style= {[{position:'absolute', "top":"5.5%","left":"80%", flexDirection:'row', alignItems:'center'}]}>
      <Text
        >
        { parseInt(locations[appData.index]["Votes"]) + "  " }
      </Text>
      <Ionicons name="ios-thumbs-up" size={28} color="green" />
    </TouchableOpacity>
  
     <TouchableOpacity
          
          onPress = { function(){
              Linking.openURL('tel:'+locations[appData.index].PhoneNumber)
             }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            backgroundColor: '#fff',
            elevation: 2, // Android
            height: "10%",
            width: "30%",
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            position:'absolute',backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', 
            height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},
            {"top":"85%","right":"60%"}]}
        ><Text>{"Reach out"}</Text>
        </TouchableOpacity>
      <TouchableOpacity
          
          onPress = { function(){
            appData.index = (appData.index + 1) % (locations.length-1);
            that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            backgroundColor: '#fff',
            elevation: 2, // Android
            height: "10%",
            width: "30%",
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            position:'absolute',backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', 
            height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},
            {"top":"85%","right":"5%"}]}
        ><Text>{"Explore More"}</Text>
        </TouchableOpacity>
        </View>
        )
      }
    }

    
      export default Locationpage;