


import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Button, Picker, Switch, Image, Text, View } from 'react-native';
import FirstPage from './downloadedpages/FirstPage.js'
import SecondPage from './downloadedpages/SecondPage.js'
import EighthPage from './downloadedpages/EighthPage.js'
import SixthPage from './downloadedpages/SixthPage.js'
import ThirdPage from './downloadedpages/ThirdPage.js'
import SeventhPage from './downloadedpages/SeventhPage.js'
import FourthPage from './downloadedpages/FourthPage.js'
import FifthPage from './downloadedpages/FifthPage.js'
import TwelfthPage from './downloadedpages/TwelfthPage.js'
import ThirteenthPage from './downloadedpages/ThirteenthPage.js'
import EleventhPage from './downloadedpages/EleventhPage.js'
import TenthPage from './downloadedpages/TenthPage.js'
import NInthPage from './downloadedpages/NInthPage.js'
import Template from './downloadedpages/Template.js'
import PlaylistWorkout from './downloadedpages/PlaylistWorkout.js'
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
  var dbLinks = {"Data":"https://script.google.com/a/vineyardappcamp.com/macros/s/AKfycbwnU71tJvGzjIWhOCjYg3dQRYj9YjLru7mCrw3LdQ/exec?sheetName=Janae","Janae's_Database":"https://script.google.com/a/vineyardappcamp.com/macros/s/AKfycbwnU71tJvGzjIWhOCjYg3dQRYj9YjLru7mCrw3LdQ/exec?sheetName=Janae"}
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



    


    if(that.state.page === "SecondPage"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <SecondPage  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></SecondPage>
          </View>
        )
    }



    


    if(that.state.page === "EighthPage"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <EighthPage  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></EighthPage>
          </View>
        )
    }



    


    if(that.state.page === "SixthPage"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <SixthPage  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></SixthPage>
          </View>
        )
    }



    


    if(that.state.page === "ThirdPage"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <ThirdPage  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></ThirdPage>
          </View>
        )
    }



    


    if(that.state.page === "SeventhPage"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <SeventhPage  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></SeventhPage>
          </View>
        )
    }



    


    if(that.state.page === "FourthPage"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <FourthPage  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></FourthPage>
          </View>
        )
    }



    


    if(that.state.page === "FifthPage"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <FifthPage  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></FifthPage>
          </View>
        )
    }



    


    if(that.state.page === "TwelfthPage"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <TwelfthPage  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></TwelfthPage>
          </View>
        )
    }



    


    if(that.state.page === "ThirteenthPage"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <ThirteenthPage  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></ThirteenthPage>
          </View>
        )
    }



    


    if(that.state.page === "EleventhPage"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <EleventhPage  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></EleventhPage>
          </View>
        )
    }



    


    if(that.state.page === "TenthPage"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <TenthPage  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></TenthPage>
          </View>
        )
    }



    


    if(that.state.page === "NInthPage"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NInthPage  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NInthPage>
          </View>
        )
    }



    


    if(that.state.page === "Template"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Template  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Template>
          </View>
        )
    }



    


    if(that.state.page === "PlaylistWorkout"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <PlaylistWorkout  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></PlaylistWorkout>
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







  