


import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Button, Picker, Switch, Image, Text, View } from 'react-native';
import FirstPage from './downloadedpages/FirstPage.js'
import PAINTER from './downloadedpages/PAINTER.js'
import DRAWERS from './downloadedpages/DRAWERS.js'
import VIDEOGRAPHERS from './downloadedpages/VIDEOGRAPHERS.js'
import SCULPTORS from './downloadedpages/SCULPTORS.js'
import PHOTOGRAPHERS from './downloadedpages/PHOTOGRAPHERS.js'
import DaVinciDetails from './downloadedpages/DaVinciDetails.js'
import Sculptors from './downloadedpages/Scuptors.js'
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

function modifyPercentage(percent,change){
  return (parseInt(percent.replace("#","")) + change) + "%"
}


//prettifier: https://www.prettifier.net/js/
class App extends React.Component {

constructor(props){
super(props);
this.state = {dbLinks:{}, loaded:false, page:"FirstPage", numLoaded:0}
}

componentDidMount(){
  var that = this;
  var dbLinks = {museums:"https://script.google.com/macros/s/AKfycbwGDmTBl5IV95GKMBdxpMP5VelXYZHDJ5qE8ECjEYjpLmHo-MQ/exec?sheetName=museums","data":"https://script.googleusercontent.com/a/macros/digitaltechhs.org/echo?user_content_key=TJ1016nYZ0DZbO4hzbuwXhn4w8GjDHf5tmhmvMpRJDGUTdsmaO0-eyTgEsB1D6ENPgZh0BqII6nVgZSiALqhZJMREqMeOpD1m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_AUoGWcFkcRNXRXZ8MY7GJqi0KLuFqxv7xbbXQd4eZLDMLbD0tVjOiHhJreuiblCRxGEhNZKuDLliWZdKcaAJdWjzvu2sAxXIBaXBGGtuoifvYXGi_Aw5AmD053358BwcG7RcrVv2q0M&lib=MuTl0KbzMb0P-1mM6u-JMf9ycmz3e6ipK","link":"https://script.google.com/a/vineyardappcamp.com/macros/s/AKfycbx8uQw_4uk3m3ApBlCl80x_3B6hpocK9onsdnja/exec?sheetName=TJ"}
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

  
    if(that.state.page === "FirstPage"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <FirstPage  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></FirstPage>
          </View>
        )
    }



    


    if(that.state.page === "PAINTER"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <PAINTER  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></PAINTER>
          </View>
        )
    }



    


    if(that.state.page === "DRAWERS"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <DRAWERS  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></DRAWERS>
          </View>
        )
    }



    


    if(that.state.page === "VIDEOGRAPHERS"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <VIDEOGRAPHERS  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></VIDEOGRAPHERS>
          </View>
        )
    }



    


    if(that.state.page === "SCULPTORS"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <SCULPTORS  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></SCULPTORS>
          </View>
        )
    }



    


    if(that.state.page === "SCULPTORS"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <SCULPTORS  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></SCULPTORS>
          </View>
        )
    }



    


    if(that.state.page === "PHOTOGRAPHERS"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <PHOTOGRAPHERS  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></PHOTOGRAPHERS>
          </View>
        )
    }



    


    if(that.state.page === "DaVinciDetails"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <DaVinciDetails  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></DaVinciDetails>
          </View>
        )
    }



    


    if(that.state.page === "DaVinciDetails"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <DaVinciDetails  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></DaVinciDetails>
          </View>
        )
    }



    


    if(that.state.page === "Scuptors"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Scuptors  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Scuptors>
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







  