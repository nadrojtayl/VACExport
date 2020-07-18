var axios = require('axios');
var fs = require('fs');
var name = "Baptiste-Louis";
axios.get('https://streamedbooks.herokuapp.com/apps?name=' + name)
.then(function (response) {
  
   var appdata = null;
      response.data.forEach(function(data,int){


        var {page,
        clickfunctions,
        app_children,
        app_styles,
        appdata,
        color,
        databases} = response.data[int];


        app_children = JSON.parse(app_children);
        appdata = JSON.parse(appdata);
        app_styles = JSON.parse(app_styles);
        clickfunctions = JSON.parse(clickfunctions);
        fs.writeFileSync(__dirname + "/downloadedpages/" +page +".js",translate_page(page,app_children,app_styles,clickfunctions,databases,appdata,color));
        if(int === response.data.length-1){
          console.log(databases);
           fs.writeFileSync(__dirname + "/downloadedpages/global.js",`var global = `+ JSON.stringify(appdata) + `\n\n` + `export default global;`);
           fs.writeFileSync(__dirname + "/App.js",make_App_page(databases, response.data.map(function(data){return data.page}) ));
        }
      })
     
     
      
})
.catch(function (error) {
  console.log(error);
});




function translate_page(page_name,children,childrenAdditionalStyles,clickfunctions,databases,appdata,color){
  return `
import React, { Component } from "react";
import { Button, Picker, Switch, Image, ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import Calendar from "./Calendar.js";
import appData from "./global.js";
import { Audio } from 'expo-av';

var d = new Date();
var month = d.getMonth();
var day = d.getDate();
global.month = d.getMonth();
global.day = d.getDate();

function hasNumber(myString) {
  return /\d/.test(myString);
}


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
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
  var script_string = script_string + "; window.FrontPage.forceUpdate(); window.updateAppData();"
    try{
        eval("function y(){"+script_string+"}")
        return setInterval(function(){ eval(script_string)},interval);
      } catch(e){
        alert("There was an error trying to run this!" + e);
      }
}

window.runWithInterval = runWithInterval;
runWithInterval = runWithInterval;

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
  
 try {
    await appData.soundObject.loadAsync({uri:url});
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




 class `+page_name+` extends React.Component {
     

    constructor(props)
    {
        super(props);
        this.state = ` + JSON.stringify(appdata) + `
    }

    componentDidMount(){
      appData.soundObject = new Audio.Sound();

    }
      
  


   

    render(){ 
      var that = this; 
      
      if(!that.props.loaded){
        return(<View><Text>LOADING</Text></View>)
      }
      return (
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"` + color +`"}}>
      `+
    children.map(function(child,int){
      return exportElemToExpo(child,int,page_name,childrenAdditionalStyles[int],clickfunctions[int],databases)
    }).join("\n")
      +`
        </View>
        )
    }
  }
    export default `+page_name+`; 



  `


}


function exportElemToExpo(name,int, page, childrenAdditionalStyle, clickfunction,databases){
  
    int = parseInt(int)

    Object.keys(childrenAdditionalStyle).forEach(function(key){
      var value = childrenAdditionalStyle[key];
     
      if(key === "innerText" && typeof value === "string" && value.indexOf("appData") === -1 && databases[key] === undefined){
        childrenAdditionalStyle[key] = ("'" + childrenAdditionalStyle[key] + "'")
      }
      
    })


  
    if(name === "text"){
      console.log(typeof childrenAdditionalStyle.innerText)
      return `<Text
          style= {[{position:'absolute'},`+ JSON.stringify(childrenAdditionalStyle) +`]}
        > {` + (childrenAdditionalStyle.innerText !== undefined ? (typeof childrenAdditionalStyle.innerText === "string"? childrenAdditionalStyle.innerText.replace(";","") : childrenAdditionalStyle.innerText ) :"")  + `} </Text>
        `


    }

    if(name === "switch"){

      return (
        `<Switch
         value={that.state["` + page + "switch" + int + `"]}
         onValueChange={function(val){that.setState({` + page + "switch" + int + `: val})}}   
        style= {`+ JSON.stringify(childrenAdditionalStyle) +`}
        ></Switch>`

        )
    }

    if(name === "picker"){
      var options = childrenAdditionalStyle['options'] !== undefined ? childrenAdditionalStyle['options']:["example"];
      var options = eval(options)
   return `<Picker
        value={that.state["` + page + "picker" + int + `"]}
        style= {`+ JSON.stringify(childrenAdditionalStyle) +`}
        onValueChange={function(val){that.setState({` + page + "picker" + int + `: val})}}  
      > 
        <Picker.Item label={"Select"} value={"Select"} />
        <Picker.Item label={"Option1"} value={"Option1"} />
        ` + options.map(function(option){
          return `<Picker.Item label={"`+option+`"} value={"`+option+`"} />`
        }).join("") + `
      </Picker>`




    }

    if(name === "repeater"){
      var options = childrenAdditionalStyle['options'] !== undefined ? childrenAdditionalStyle['options']:["example"];
     
      var type = childrenAdditionalStyle["repeaterType"] === undefined ? ("text"): (childrenAdditionalStyle["repeaterType"]);
      
      return `<Multiplier
      type = {"`+type+`"}
      data = {`+options+`}
      style = {[{alignItems:'center'},`+JSON.stringify(childrenAdditionalStyle) + `]}
      clickfunction = {function(){`+clickfunction+`}}
      >
      </Multiplier>`

    }

    if(name === "image"){
      var link = (childrenAdditionalStyle.source === undefined ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Tobu_Skytree_Line_%28TS%29_symbol.svg/600px-Tobu_Skytree_Line_%28TS%29_symbol.svg.png": (childrenAdditionalStyle.source.indexOf("appData") !== -1 || childrenAdditionalStyle.source.indexOf("[") !== -1 ) ? childrenAdditionalStyle.source.replace(";","") : "'" + childrenAdditionalStyle.source + "'" )
      return `
      <Image
        style= {[{width:"20%",height:"20%"}, `+ JSON.stringify(childrenAdditionalStyle) +`]}
        source = {{uri:`+ link +`}}
      >
      </Image>`
    }

    if(name === "input"){

      return `<TextInput
       style= {`+ JSON.stringify(childrenAdditionalStyle) +`}
        value={that.state["` + page + "input" + int + `"]}
        onChangeText={function(val){that.setState({` + page + "input" + int + `: val});  
       }
       }
        />`
    }

    if(name === "button"){
      var color = childrenAdditionalStyle.color ? childrenAdditionalStyle.color:"black";
      var innerText = childrenAdditionalStyle.innerText !== undefined ? childrenAdditionalStyle.innerText.replace(";",""):"";
      console.log("text" + innerText);
      return` <TouchableOpacity
          
          onPress = { function(){`+ ((typeof clickfunction === "string") ? clickfunction.split("goTo").join("that.props.goTo"):"") + ";" +` that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},`+ JSON.stringify(childrenAdditionalStyle) +`]}
        >
        <Text style = {{color:"`+color+`"}}>

        {`+ innerText +  `}

       </Text>
        </TouchableOpacity>`

    }

    if(name === "box"){
      return `<Box
          style= {`+ JSON.stringify(childrenAdditionalStyle) +`}
        >
        </Box>`


    }


  }


  function make_App_page(dbLinks,pages){
  return `


import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Button, Picker, Switch, Image, Text, View } from 'react-native';
`+
pages.map(function(page){
  return `import `+page+` from './downloadedpages/`+page+`.js'`
}).join("\n")
+`
import appData from './downloadedpages/global.js';
/*
EXPORT PROCESS

1. Click export in AppBuilder

2. Go through all the pages in the app, click export, and copy the page code into their own files in downloaded pages directory

3. Import pages. In the render function of class App, add if statements that wil render the pages if that.state.page is changed.

4. Fix errors (Adding quotation marks and semicolons where necessary). Go through every page code and replace 'goTo' with 'that.props.goTo'


5. Take the generated componentdidmount from the class and paste it over the App class's componentdidmount

6. Delete componentdidmount from generated classes

*/


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


//prettifier: https://www.prettifier.net/js/
class App extends React.Component {

constructor(props){
super(props);
this.state = {dbLinks:{}, loaded:false, page:"FirstPage"}
}

      componentDidMount(){
        
        var that = this;
        var dbLinks = `+ dbLinks +`
        Object.keys(dbLinks).forEach(function(key){
          that.connectToDatabase(dbLinks[key], key);
        })
      };



render(){ 

  var that = this; 

  `+ 
  pages.map(function(page){
    return `
    if(that.state.page === "`+page+`"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <`+page+` goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></`+page+`>
          </View>
        )
    }



    `
  }).join("\n\n")

  +`  

  

}

connectToDatabase(db_link,name){
      var that = this;
      that.state.dbLinks[name] = db_link;
      
      if(db_link.indexOf("google.com") !== -1 && db_link.indexOf("macros") === -1){
         var schema = fetch(db_link, {
                  method: 'GET',
                  headers: {
                    "Content-Type": "application/json"
                  }
          }).then(async function(res){
            
 
           var res = await res.json();
           var cols = {};
           var data = res.feed.entry.map(convert_spreadsheet_data_to_obj);
           var output = {};
           data.forEach(function(cell){
            
            if(parseInt(cell.row) === 1){
              cols[cell.col] = cell.data;
            }
           })

          data.forEach(function(cell){
            if(output[cell.row] !== 1){
              if(output[cell.row] === undefined){
                output[cell.row] = {};
              }
              output[cell.row][cols[cell.col]] = cell.data;
            }
          })

          var data_arr = Object.keys(output).map(function(key){
            return output[key]
          })

          data_arr.forEach(function(obj,index){
            console.log("OBJ" + obj);
            obj["Index"] = index;
          })
              
          
    
            window[name] = data_arr;

            that.forceUpdate();
            that.setState({dbLinks:that.state.dbLinks, loaded:true})
            


          })

        return;
      }

      
   
      var schema = fetch(db_link, {
                  method: 'GET',
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept": "application/json"
                  }
        }).then(async function(res){
        
          res = await res.json();
          window[name] = res;
          res.forEach(function(obj,index){
            obj["Index"] = index;
          })
          that.forceUpdate();
          that.setState({dbLinks:that.state.dbLinks, loaded:true})
         


        })
    }



  goTo(pageName){
    console.log("page");
    console.log(pageName);
    this.setState({page:pageName})
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;







  `

  }