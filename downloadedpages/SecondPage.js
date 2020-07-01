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
    console.log(additionalStyle)

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
          appData.WeaponIndex = parseInt(elem.Index);
          that.props.goTo("ThirdPage");
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
            height:"50%",
            width:"80%",
            borderRadius: 10,
            marginLeft:"10%",
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
  
    

      

      return (<View style = {{height:"100%",width:"100%", marginTop:"20%", justifyContent:'center', alignItems:"center"}}
      >
        <ScrollView >
          {that.props.data.map(function(elem,ind){
          
            return that.renderElement(that.props.type,ind,that.props.style, that.props.clickfunction, elem)
          }) }
        </ScrollView>
        </View>
        )
    }

  }



      class SecondPage extends React.Component {
      constructor(props){
        super(props);
        this.state = {};
      }

      render(){ 
      var that = this; 
      

      if(!that.props.loaded){
        return(<View><Text>LOADING</Text></View>)
      }


      return (
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"white"}}>
      <Text
          style= {{"top":"5%","width":"100%", "height":"7%","textAlign":"center","innerText":"appData.FilteredList[0][\"Gun Class\"]","fontSize":25}}
        > {appData.FilteredList[0]["Gun Class"]} </Text>
        
<Text
          style= {{"top":"5%","textAlign":"center","source":null,"innerText":"'Click to Learn about Weapon'"}}
        > {'Click to Learn about Weapon'} </Text>
        
 <TouchableOpacity
          
          onPress = { function(){that.props.goTo ("FirstPage"); that.forceUpdate(); }}  
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
            zIndex:5000,
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"top":702.904,"left":226.81350000000003,"innerText":"'Return To Page One'"}]}
        ><Text>{'Return To Page One'}</Text>
        </TouchableOpacity>
      <Multiplier
      type = {"button"}
      goTo = {that.props.goTo}
      data = {appData.FilteredList}
      style = {[{alignItems:'center'},{"options":"appData.FilteredList","repeaterinnerText":"elem[\"Gun Name\"]","repeaterType":"button",
      "top":"10%",
      "left":"6%",
      "repeateronPress":"appData.WeaponIndex = parseInt(elem.Index);\ngoTo(\"ThirdPage\");"}]}
      clickfunction = {function(){}}
      >
      </Multiplier></View>
        )
      }
    }

    
      export default SecondPage;