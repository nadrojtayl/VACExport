import React from 'react';

import { TextInput, StyleSheet, ScrollView, TouchableOpacity, Button, Picker, Switch, Image, Text, View } from 'react-native';

import appData from './global.js';
import { CheckBox } from 'react-native-elements'



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




class Suggestions2 extends React.Component {
      constructor(props){
        super(props);
        this.state = {"0":1,"1":2,"2":3,"key":"Resources","FirstPageinput1":"Enter College Name","FirstPageinput5":"","FirstPagepicker6":"Option1","loaded":false,"dbLinks":{}}
      }
      render(){ 
      var that = this; 
      

      if(!that.props.loaded){
        return(<View><Text>LOADING</Text></View>)
      }


      return (
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"blue"}}>
      <Text
          style= {{"fontSize":30,"backgroundColor":"crimson","textAlign":"center","top":"5%","left":"30%","height":null,"fontWeight":null,"width":"50%"}}
        > {'Advice'} </Text>
        
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
            position:'absolute',"top":"90%","left":"4%", width:"20%", backgroundColor:'#8fd158',
            height: "5%"}]}>
            <Text>{'Back'}</Text>
        </TouchableOpacity>
        <View style = {{height:"80%", marginTop:"10%"}}>
        <ScrollView style = {{height:"3000%"}}>
    
          <View style= {{flexDirection:'row', "backgroundColor":"#8fd158","top":"7%","left":"0%", "width": "100%"}}>
           <CheckBox
                  checked={appData.tasks[0 + 10]}
                  uncheckedColor = {"black"}
                  onPress={function(){appData.tasks[0 + 10] = !appData.tasks[0 + 10]; that.forceUpdate();} }
                />
            <Text
              style= {{"fontSize":16,"textAlign":"center", width:"80%" }}
            > {Colleges[1]["Suggestions for College"]} </Text>
          </View>
           
           <View style= {{flexDirection:'row', "backgroundColor":"#8fd158","top":"12%","left":"0%", "width": "100%"}}>
           <CheckBox
                  checked={appData.tasks[1 + 10]}
                  uncheckedColor = {"black"}
                  onPress={function(){appData.tasks[1 + 10] = !appData.tasks[1 + 10]; that.forceUpdate();} }
                />
            <Text
              style= {{"fontSize":16,"textAlign":"center" , width:"80%"}}
            > {Colleges[2]["Suggestions for College"]} </Text>
          </View>

          <View style= {{flexDirection:'row', "backgroundColor":"#8fd158","top":"17%","left":"0%", "width": "100%"}}>
           <CheckBox
                  checked={appData.tasks[2 + 10]}
                  uncheckedColor = {"black"}
                  onPress={function(){appData.tasks[2 + 10]= !appData.tasks[2 + 10]; that.forceUpdate();} }
                />
            <Text
              style= {{"fontSize":16,"textAlign":"center" , width:"80%"}}
            > {Colleges[3]["Suggestions for College"]} </Text>
          </View>

          <View style= {{flexDirection:'row', "backgroundColor":"#8fd158","top":"22%","left":"0%", "width": "100%"}}>
           <CheckBox
                  checked={appData.tasks[3 + 10]}
                  uncheckedColor = {"black"}
                  onPress={function(){appData.tasks[3 + 10] = !appData.tasks[3 + 10]; that.forceUpdate();} }
                />
            <Text
              style= {{"fontSize":16,"textAlign":"center" , width:"80%"}}
            > {Colleges[4]["Suggestions for College"]} </Text>
          </View>
          
          <View style= {{flexDirection:'row', "backgroundColor":"#8fd158","top":"27%","left":"0%", "width": "100%"}}>
           <CheckBox
                  checked={appData.tasks[4 + 10]}
                  uncheckedColor = {"black"}
                  onPress={function(){appData.tasks[4 + 10] = !appData.tasks[4 + 10]; that.forceUpdate();} }
                />
            <Text
              style= {{"fontSize":16,"textAlign":"center" , width:"80%"}}
            > {Colleges[5]["Suggestions for College"]} </Text>
          </View>

        <View style= {{flexDirection:'row', "backgroundColor":"#8fd158","top":"32%","left":"0%", "width": "100%"}}>
           <CheckBox
                  checked={appData.tasks[5 + 10]}
                  uncheckedColor = {"black"}
                  onPress={function(){appData.tasks[5 + 10] = !appData.tasks[5 + 10]; that.forceUpdate();} }
                />

            <Text
              style= {{"fontSize":16,"textAlign":"center" , width:"80%"}}
            > {Colleges[6]["Suggestions for College"]} </Text>
          </View>


          
        
        
        </ScrollView>
        </View>
        
 
 </View>
        )
      }
    }

    
      export default Suggestions2;