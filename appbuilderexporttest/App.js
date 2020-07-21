


import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Button, Picker, Switch, Image, Text, View } from 'react-native';
import FirstPage from './downloadedpages/FirstPage.js'
import Baseball from './downloadedpages/Baseball.js'
import Football from './downloadedpages/Football.js'
import Cricket from './downloadedpages/Cricket.js'
import Basketball from './downloadedpages/Basketball.js'
import Hockey from './downloadedpages/Hockey.js'
import Tennis from './downloadedpages/Tennis.js'
import Results from './downloadedpages/Results.js'
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
this.state = {dbLinks:{}, loaded:false, page:"FirstPage", numLoaded:0}
}

      componentDidMount(){
        
        var that = this;
        var dbLinks = {"Sports":"https://script.google.com/macros/s/AKfycbzDyMiWgXeE24lZvoLT6IoNJHlPZJUGxTOAmaaDtLToC1U4t-8a/exec?sheetName=Raghav"}
        Object.keys(dbLinks).forEach(function(key){
          that.connectToDatabase(dbLinks[key], key);
        })
      };



render(){ 

  var that = this; 

  
    if(that.state.page === "FirstPage"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <FirstPage goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></FirstPage>
          </View>
        )
    }



    


    if(that.state.page === "Baseball"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Baseball goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Baseball>
          </View>
        )
    }



    


    if(that.state.page === "Football"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Football goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Football>
          </View>
        )
    }



    


    if(that.state.page === "Cricket"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Cricket goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Cricket>
          </View>
        )
    }



    


    if(that.state.page === "Basketball"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Basketball goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Basketball>
          </View>
        )
    }



    


    if(that.state.page === "Hockey"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Hockey goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Hockey>
          </View>
        )
    }



    


    if(that.state.page === "Tennis"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Tennis goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Tennis>
          </View>
        )
    }



    


    if(that.state.page === "Results"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Results goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Results>
          </View>
        )
    }



      

  

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







  