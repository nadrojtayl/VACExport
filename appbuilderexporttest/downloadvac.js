var axios = require('axios');
var fs = require('fs');
var args = process.argv;



const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

if(args[2] !== undefined && args[3] !== undefined){
  var name = args[2], printname = args[3], bundleId = args[4];
  load_app(name, printname,bundleId);
} else {
  rl.question("What is the name of the app? ", function(name) {
      load_app(name);
  });
}





function load_app(name, printname, bundleId){
  axios.get('https://streamedbooks.herokuapp.com/apps?name=' + name)
.then(function (response) {
   if(response.data.length === 0){
    console.log("app not found");
    rl.close();
    return 
   }
   var appdata = null;
   var files = fs.readdirSync(__dirname + "/downloadedpages");
   console.log(files);

    
     files.forEach(function(file){

          console.log(file);
        fs.unlink(__dirname + "/downloadedpages/" + file, err => {
          if (err) throw err;
        });
        
     })

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
    
           fs.writeFileSync(__dirname + "/downloadedpages/global.js",`var global = `+ JSON.stringify(appdata) + `\n\n` + `export default global;`);
           fs.writeFileSync(__dirname + "/downloadedpages/Calendar.js",createCalendarPage());
          fs.writeFileSync(__dirname + "/downloadedpages/Multiplier.js",create_multiplier_page());
          fs.writeFileSync(__dirname + "/App.js",make_App_page(databases, response.data.map(function(data){return data.page}) ));
          produceAppJSONFile(printname,bundleId);
          



        }
      })


     
       
        
  })
  .catch(function (error) {
    console.log(error);
  });
}








function translate_page(page_name,children,childrenAdditionalStyles,clickfunctions,databases,appdata,color){
 appdata["createdelems"] = [];
  return `
import React, { Component } from "react";
import { ActivityIndicator, Button, Picker, Switch, Image, ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import Calendar from "./Calendar.js";
import appData from "./global.js";
import Multiplier from "./Multiplier.js";


var d = new Date();
var month = d.getMonth();
var day = d.getDate();
global.month = d.getMonth();
global.day = d.getDate();
global.created = [];

function hasNumber(myString) {
  return /\d/.test(myString);
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




 class `+page_name+` extends React.Component {
     

    constructor(props)
    {
        super(props);
        this.state = ` + JSON.stringify(appdata) + `
    }


      
  
    createElement(name, style_obj){
      if(name === 'image'){
        this.state.createdelems.push(
        (<Image style = {[{position:'absolute', width:"20%",height:"20%"}, style_obj]}></Image>)
        )
      }

       if(name === 'text'){
        this.state.createdelems.push(
        (<Text style = {style_obj}></Text>)
        )
      }

      global.created.push(style_obj);
     



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
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"` + color +`"}}>
      {this.state.createdelems}

      `+
    children.map(function(child,int){
      return exportElemToExpo(child,int,page_name,childrenAdditionalStyles[int],clickfunctions[int],databases,appdata)
    }).join("\n")
      +`
        </View>
        )
    }
  }
    export default `+page_name+`; 



  `


}


function exportElemToExpo(name,int, page, childrenAdditionalStyle, clickfunction,databases, appData){
  
    int = parseInt(int)

    if(typeof clickfunction === "string"){
      clickfunction  = clickfunction.replace("saveTo","that.props.saveTo")
    }

    Object.keys(childrenAdditionalStyle).forEach(function(key){
      var value = childrenAdditionalStyle[key];
     
      if(key === "innerText" && typeof value === "string" && value.indexOf("appData") === -1 && databases[key] === undefined){
        childrenAdditionalStyle[key] = ("'" + childrenAdditionalStyle[key] + "'")
      }

       if(key === "fontSize"){
        childrenAdditionalStyle[key] = "resizeFont(" + childrenAdditionalStyle[key]  + ")"
      }

      if(key === "onPress" || key === "repeater:onPress"){
        childrenAdditionalStyle[key] = childrenAdditionalStyle[key].replace("saveTo","that.props.saveTo")
      }


      
    })

    

  
    if(name === "text"){
     
      return `<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},`+ JSON.stringify(childrenAdditionalStyle) +`]}
        > {` + (childrenAdditionalStyle.innerText !== undefined ? (typeof childrenAdditionalStyle.innerText === "string"? childrenAdditionalStyle.innerText.replace(";","") : childrenAdditionalStyle.innerText ) :"")  + `} </Text>
        `


    }

    if(name === "switch"){

      return (
        `<Switch 
         value={appData["` + page + "switch" + int + `"]}
         onValueChange={function(val){ appData["` + page + "switch" + int + `"] = val; that.forceUpdate();   } }
        style= {[{position:'absolute',width:'30%'},`+ JSON.stringify(childrenAdditionalStyle) +`]}
        ></Switch>`

        )
    }

    if(name === "box"){

      return (
        `<View
        style= {[{position:'absolute',zIndex:-1000, height:'10%',width:'10%'},`+ JSON.stringify(childrenAdditionalStyle) +`]}
        ></View>`

        )
    }

    if(name === "picker"){
      var options = childrenAdditionalStyle['options'] !== undefined ? childrenAdditionalStyle['options']:["example"];
      var options = eval(options)
   return `<Picker
         value={appData["` + page + "picker" + int + `"]}
         onValueChange={function(val){ appData["` + page + "picker" + int + `"] = val; that.forceUpdate();   } }
        style= {[{position:'absolute',height:'5%',width:'50%'}, `+ JSON.stringify(childrenAdditionalStyle) +`]}
        
      > 
        <Picker.Item label={"Select"} value={"Select"} />
        <Picker.Item label={"Option1"} value={"Option1"} />
        ` + options.map(function(option){
          return `<Picker.Item label={"`+option+`"} value={"`+option+`"} />`
        }).join("") + `
      </Picker>`




    }

    if(name === "repeater"){
      console.log("click"+clickfunction);
      var options = childrenAdditionalStyle['options'] !== undefined ? childrenAdditionalStyle['options'].replace(";",""):["example"];
     
      var type = childrenAdditionalStyle["repeaterType"] === undefined ? ("text"): (childrenAdditionalStyle["repeaterType"]);
      
      return `<Multiplier
      goTo = {that.props.goTo}
      type = {"`+type+`"}
      data = {`+options+`}
      style = {[{alignItems:'center',position:'absolute',height:'60%',width:'80%'},`+JSON.stringify(childrenAdditionalStyle) + `]}
      clickfunction = {function(){`+clickfunction +`}}
      >
      </Multiplier>`

    }

    if(name === "image" && typeof clickfunction === "string"){
      console.log(typeof clickfunction)

      var link = (childrenAdditionalStyle.source === undefined ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Tobu_Skytree_Line_%28TS%29_symbol.svg/600px-Tobu_Skytree_Line_%28TS%29_symbol.svg.png": (childrenAdditionalStyle.source.indexOf("appData") !== -1 || childrenAdditionalStyle.source.indexOf("[") !== -1 ) ? childrenAdditionalStyle.source.replace(";","") : "'" + childrenAdditionalStyle.source + "'" )

      return `
      

      <TouchableOpacity
      style= {[{width:"`+(childrenAdditionalStyle.width ? childrenAdditionalStyle.width: "20%")+`",height:"`+ (childrenAdditionalStyle.height ? childrenAdditionalStyle.height: "20%") +`", position:'absolute',top:"`+childrenAdditionalStyle.top+`",left:"`+childrenAdditionalStyle.left+`"}]}
       onPress = { function(){`+ ((typeof clickfunction === "string") ? clickfunction.split("goTo").join("that.props.goTo"):"") + ";" +` that.forceUpdate(); }}  
      >
      <Image
        style= {[{width:"100%",height:"100%"}, `+ JSON.stringify(childrenAdditionalStyle) +`]}
        source = {{uri:`+ link +`}}
       
      >
      </Image>
      </TouchableOpacity>


      `
    }

    if(name === "image"){


      var link = (childrenAdditionalStyle.source === undefined ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Tobu_Skytree_Line_%28TS%29_symbol.svg/600px-Tobu_Skytree_Line_%28TS%29_symbol.svg.png": (childrenAdditionalStyle.source.indexOf("appData") !== -1 || childrenAdditionalStyle.source.indexOf("[") !== -1 ) ? childrenAdditionalStyle.source.replace(";","") : "'" + childrenAdditionalStyle.source + "'" )

      return `

      <Image
        style= {[{width:"20%",height:"20%"}, `+ JSON.stringify(childrenAdditionalStyle) +`]}
        source = {{uri:`+ link +`}}
        onPress = { function(){`+ ((typeof clickfunction === "string") ? clickfunction.split("goTo").join("that.props.goTo"):"") + ";" +` that.forceUpdate(); }}  
      >
      </Image>



      `
    }

    if(name === "input"){

      return `<TextInput
       style= {[{width:"60%", height:"5%", width:'60%', backgroundColor:'white',borderColor:'grey',borderWidth:1},`+ JSON.stringify(childrenAdditionalStyle) +`]}
        value={appData["` + page + "input" + int + `"]}
         onChangeText={function(val){ appData["` + page + "input" + int + `"] = val; that.forceUpdate();   } }
        />`
    }

    if(name === "button"){
      var color = childrenAdditionalStyle.color ? childrenAdditionalStyle.color:"black";
      var innerText = childrenAdditionalStyle.innerText !== undefined ? childrenAdditionalStyle.innerText.replace(";",""):"";
   
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
            height:"7%",
            width:"30%",
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},`+ JSON.stringify(childrenAdditionalStyle) +`]}
        >
        <Text style = {{color:"`+color+`"}}>

        {`+ innerText.replace(";","") +  `}

       </Text>
        </TouchableOpacity>`

    }

    


  }


  function make_App_page(dbLinks,pages){
    console.log(dbLinks);
    console.log("HEREN");
    console.log(typeof dbLinks)
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
this.state = {dbLinks:{}, loaded:`+ (dbLinks === "{}" ? true:false) +`, page:"FirstPage", numLoaded:0}
}

componentDidMount(){
  
  var that = this;
  var dbLinks = `+ dbLinks +`
  Object.keys(dbLinks).forEach(function(key){
    that.connectToDatabase(dbLinks[key], key);
  })
};

sendToDatabase(name,obj){
    var that = this;
    var url = that.state.dbLinks[name];
   
    var schema = fetch(url, {
                method: 'POST',
                body:JSON.stringify(obj),
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "Accept": "application/json"
                }
      }).then(async function(res){
       
        that.forceUpdate();


      })
  }



render(){ 

  var that = this; 

  `+ 
  pages.map(function(page){
    return `
    if(that.state.page === "`+page+`"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <`+page+`  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></`+page+`>
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
            
          if(that.state.numLoaded === Object.keys(that.state.dbLinks).length-1){
            that.setState({dbLinks:that.state.dbLinks, loaded:true})
          } else {
            that.setState({dbLinks:that.state.dbLinks, numLoaded:that.state.numLoaded + 1});
          }


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
          

          
          if(that.state.numLoaded === Object.keys(that.state.dbLinks).length-1){
            that.setState({dbLinks:that.state.dbLinks, loaded:true})
          } else {
            that.setState({dbLinks:that.state.dbLinks, numLoaded:that.state.numLoaded + 1});
          }


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

  function createCalendarPage(){
    return `


import React, { Component } from "react";
import { Button, Picker, Switch, Image, ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput, Dimensions } from "react-native";


class Calendar extends Component{
  constructor(props){
    super(props);

    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    var days_in_month = {
      "January":31,
      "February":28,
      "March":31,
      "April":30,
      "May":31,
      "June":30,
      "July":31,
      "August":31,
      "September":30,
      "October":31,
      "November":30,
      "December":31
    }



    this.state = {
      current_month:0,
      days_in_month:days_in_month,
      days:[],
      months:months
    }
  }

  changeMonth(advance_bool){
    if(advance_bool && (this.state.current_month + 1) < 12 ){
      this.setState({current_month:this.state.current_month + 1}) 
      return
    } 

    if(!advance_bool && (this.state.current_month - 1) > -1 ){
      this.setState({current_month:this.state.current_month - 1}) 
      return
    } 

  }



  render(){
    var that = this;
    that.state.days = [];
    for(var i = 0; i < this.state.days_in_month[this.state.months[this.state.current_month]];i++){
   
      this.state.days.push([]);
    }
    
    return (
      <View style = {[{height:"100%",width:"100%", alignItems:"center"}]}>
        <Text style = {{color:'black'}}>{that.state.months[that.state.current_month]}</Text>
        <View style = {{flexDirection:'row', width:"100%", height:"14%", alignItems:"center"}}>
        {that.state.days.slice(0,5).map(function(event,day){
          return (<TouchableOpacity
            style = {[{width:"20%", borderColor:'black',borderWidth:1, height:"100%"}, that.props.events[that.state.current_month] ? that.props.events[that.state.current_month][day]:{}]}
            onPress = {function(){
                if(that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day]){
                  alert(that.props.events[that.state.current_month][day].innerText)
                }
              }
            }
            
            >
            <Text>
              {that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day] ? that.props.events[that.state.current_month][day].innerText:"" }
            </Text>
            </TouchableOpacity>)
        })}
        </View>
        <View style = {{flexDirection:'row', width:"100%", height:"14%", alignItems:"center"}}>
        {that.state.days.slice(5,10).map(function(event,day){
          return (<TouchableOpacity
            style = {[{width:"20%", borderColor:'black',borderWidth:1, height:"100%"}, that.props.events[that.state.current_month] ? that.props.events[that.state.current_month][day]:{}]}
            onPress = {function(){
                if(that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day]){
                  alert(that.props.events[that.state.current_month][day].innerText)
                }
              }
            }
            
            >
            <Text>
              {that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day] ? that.props.events[that.state.current_month][day].innerText:"" }
            </Text>
            </TouchableOpacity>)
        })}
        </View>
        <View style = {{flexDirection:'row', width:"100%", height:"14%", alignItems:"center"}}>
        {that.state.days.slice(10,15).map(function(event,day){
          return (<TouchableOpacity
            style = {[{width:"20%", borderColor:'black',borderWidth:1, height:"100%"}, that.props.events[that.state.current_month] ? that.props.events[that.state.current_month][day]:{}]}
            onPress = {function(){
                if(that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day]){
                  alert(that.props.events[that.state.current_month][day].innerText)
                }
              }
            }
            
            >
            <Text>
              {that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day] ? that.props.events[that.state.current_month][day].innerText:"" }
            </Text>
            </TouchableOpacity>)
        })}
        </View>
        <View style = {{flexDirection:'row', width:"100%", height:"14%", alignItems:"center"}}>
        {that.state.days.slice(15,20).map(function(event,day){
          return (<TouchableOpacity
            style = {[{width:"20%", borderColor:'black',borderWidth:1, height:"100%"}, that.props.events[that.state.current_month] ? that.props.events[that.state.current_month][day]:{}]}
            onPress = {function(){
                if(that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day]){
                  alert(that.props.events[that.state.current_month][day].innerText)
                }
              }
            }
            
            >
            <Text>
              {that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day] ? that.props.events[that.state.current_month][day].innerText:"" }
            </Text>
            </TouchableOpacity>)
        })}
        </View>
        <View style = {{flexDirection:'row', width:"100%", height:"14%", alignItems:"center"}}>
        {that.state.days.slice(20,25).map(function(event,day){
          return (<TouchableOpacity
            style = {[{width:"20%", borderColor:'black',borderWidth:1, height:"100%"}, that.props.events[that.state.current_month] ? that.props.events[that.state.current_month][day]:{}]}
            onPress = {function(){
                if(that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day]){
                  alert(that.props.events[that.state.current_month][day].innerText)
                }
              }
            }
            
            >
            <Text>
              {that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day] ? that.props.events[that.state.current_month][day].innerText:"" }
            </Text>
            </TouchableOpacity>)
        })}
        </View>
        <View style = {{flexDirection:'row', width:"100%", height:"14%", alignItems:"center"}}>
        {that.state.days.slice(25,30).map(function(event,day){
          return (<TouchableOpacity
            style = {[{width:"20%", borderColor:'black',borderWidth:1, height:"100%"}, that.props.events[that.state.current_month] ? that.props.events[that.state.current_month][day]:{}]}
            onPress = {function(){
                if(that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day]){
                  alert(that.props.events[that.state.current_month][day].innerText)
                }
              }
            }
            
            >
            <Text>
              {that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day] ? that.props.events[that.state.current_month][day].innerText:"" }
            </Text>
            </TouchableOpacity>)
        })}
        </View>
        <View style = {{flexDirection:'row', width:"100%", height:"14%", alignItems:"center"}}>
        {that.state.days.slice(30,35).map(function(event,day){
          return (<TouchableOpacity
            style = {[{width:"20%", borderColor:'black',borderWidth:1, height:"100%"}, that.props.events[that.state.current_month] ? that.props.events[that.state.current_month][day]:{}]}
            onPress = {function(){
                if(that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day]){
                  alert(that.props.events[that.state.current_month][day].innerText)
                }
              }
            }
            
            >
            <Text>
              {that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day] ? that.props.events[that.state.current_month][day].innerText:"" }
            </Text>
            </TouchableOpacity>)
        })}
        </View>

        <View style = {{flexDirection:"row"}}>
          <Button title = "Last" onPress = {function(){
            that.changeMonth(false);
          }} >Last</Button>
          <Button title = "Next" onPress = {function(){
            that.changeMonth(true);
          }}>Next</Button>
        </View>
        
      </View>)
  }
}

export default Calendar;





    `
  }


function create_multiplier_page(){
  return `


import React, { Component } from "react";
import { Button, Picker, Switch, Image, ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import Calendar from "./Calendar.js";
import appData from "./global.js";
import { Audio } from 'expo-av';

global.appData = appData;

function hasNumber(myString) {
  return /d/.test(myString);
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
  var script_string = script_string + ";"
  var that = appData.this;
    try{
        eval("function y(){"+script_string+"}")
        return setInterval(function(){ eval(script_string)},interval);
      } catch(e){
        alert("There was an error trying to run this!" + e);
      }
}


function realEval(str){
  return eval(str);
}

window.realEval = realEval.bind(this);
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

class Multiplier extends Component{
    constructor(props){
      super(props);
      this.state = {
        childrenAdditionalStyles: [],
        clickfunctions: [],
        textTreeChildren:[]
      }
    }

    componentDidMount(){
      global.goTo = this.props.goTo;
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
      if(key !== "onPress" && typeof additionalStyle[key] === "string" && (elem[additionalStyle[key]] !== undefined) ){
        additionalStyle[key] = elem[additionalStyle[key]];
      }
    })


    Object.keys(additionalStyle).forEach(function(key){
      if( key !== "onPress" && typeof additionalStyle[key] === "string" && (additionalStyle[key].indexOf('elem') !== -1  || additionalStyle[key].indexOf('width') !== -1 || additionalStyle[key].indexOf('height') !== -1 ) ){
        additionalStyle[key] = eval(additionalStyle[key])
      }

      if(typeof additionalStyle[key] === "object"){
        additionalStyle[key] = JSON.stringify(additionalStyle[key]);
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
          selectable = {true}
        >{  additionalStyle.innerText === undefined ? JSON.stringify(elem):additionalStyle.innerText }</Text>

        )
    }


    if(name === "button"){
    
      return(
        <TouchableOpacity
        onPress = { function(){if(additionalStyle.onPress === undefined){alert("Put a real function here"); return;}   eval(additionalStyle.onPress); if(additionalStyle.onPress.indexOf("appData") !== -1){ console.log("UPDATING APP DATA"); that.forceUpdate();}   } }
          
          key = {int}
          style={[{
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            backgroundColor: 'white',
            color:'black',
            elevation: 2, // Android
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            width:"30%",
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
  
     

      if(!window.edit_mode && !window.drag_mode){

        return (<View
          style = {[{horizontal:true,position:'absolute', width:"100%",alignItems:"center"},that.props.style]}
          >
       <ScrollView 
       style = {{height:"100%",width:"100%"}}
       horizontal = {that.props.style[1].horizontal}>
          {that.props.data.map(function(elem,ind){

            return that.renderElement(that.props.type,ind,that.props.style, that.props.clickfunction, elem)
          }) }
        </ScrollView>
        </View>
        )


      }



      return (<TouchableOpacity
      style = {[{horizontal:true,position:'absolute', width:"100%",alignItems:"center"},that.props.style]}
      onPress = { function(){if(window.drag_mode){that.props.parent.setState({selectedElemToStyle:that.props.int}); return} if(window.edit_mode){ console.log("IND" + that.props.int); window.edit(that.props.int); return}  eval('(' + that.state.clickfunctions[that.props.int] + ')()'); if(that.state.clickfunctions[that.props.int].indexOf("appData") !== -1){ that.forceUpdate()}   } }

      >
        <ScrollView 
        style = {{height:"100%",width:"100%"}}
        horizontal = {that.props.style[1].horizontal}>
          {that.props.data.map(function(elem,ind){
        
            
            return that.renderElement(that.props.type,ind,that.props.style, that.props.clickfunction, elem)
          }) }
        </ScrollView>
        </TouchableOpacity>
        )
    }

  }


  export default Multiplier;



  `

}

function produceAppJSONFile(printname,bundleId){
  var appData = `  {
  "expo": {
    "name": "`+ printname +`",
    "slug": "`+printname+`",
    "platforms": [
      "ios",
      "android",
      "web"
    ],
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/ficon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "`+bundleId+`"
    },
    "android": {
      "package": "`+bundleId+`"
    },
    "entryPoint": "node_modules/expo/AppEntry.js"
  }
}`

  if(printname && bundleId){
   fs.writeFileSync(__dirname +"/app.json",appData);
   return;

  }

  rl.question("What is the print name of the app (that will appear on the AppStore)? ", function(printname) {
   rl.question("What is the bundle identifier in the AppStore? ", function(bundlename) {
      var appData = `  {
      "expo": {
        "name": "`+ printname +`",
        "slug": "`+printname+`",
        "platforms": [
          "ios",
          "android",
          "web"
        ],
        "version": "1.0.0",
        "orientation": "portrait",
        "icon": "./assets/ficon.png",
        "splash": {
          "image": "./assets/splash.png",
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        },
        "updates": {
          "fallbackToCacheTimeout": 0
        },
        "assetBundlePatterns": [
          "**/*"
        ],
        "ios": {
          "supportsTablet": true,
          "bundleIdentifier": "`+bundlename+`"
        },
        "android": {
          "package": "`+bundlename+`"
        },
        "entryPoint": "node_modules/expo/AppEntry.js"
      }
    }`
 rl.close();

 fs.writeFileSync(__dirname +"/app.json",appData);

})


});

}