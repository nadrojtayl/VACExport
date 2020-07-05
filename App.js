import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Button, Picker, Switch, Image, Text, View } from 'react-native';
import FirstPage from './downloadedpages/FirstPage.js'
import Namenewcalendar from './downloadedpages/RegisterPage.js'
import Repeater from './downloadedpages/LastPage.js'
import Privacy from './downloadedpages/Privacy.js'
import Settings from './downloadedpages/settings.js'
import Onecalendar from './downloadedpages/InfoPage.js'
import appData from './downloadedpages/global.js';

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

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
    var dbLinks = {"events":"https://spreadsheets.google.com/feeds/cells/1YvAE2YPRpn7Wkn4QLfbUZ0chudMAyX72wULwgXLl3H0/2/public/full?alt=json","https://spreadsheets.google.com/feeds/cells/1YvAE2YPRpn7Wkn4QLfbUZ0chudMAyX72wULwgXLl3H0/2/public/full?alt=json":"events"}
    Object.keys(dbLinks).forEach(function(key){
      that.connectToDatabase(dbLinks[key], key);
    })
  }

    sendToDatabase(name,obj){
      var that = this;
      var url = that.state.dbLinks[name];
     
      var schema = fetch(url, {
                  method: 'POST',
                  body:JSON.stringify(obj),
                  headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                  }
        }).then(async function(res){
          
          window[name].push(obj);
          alert("OK! We saved your animal to our database.")
          that.forceUpdate();


        })
    }


render(){ 

   var that = this; 

 if(that.state.page === "FirstPage"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <FirstPage goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></FirstPage>
          </View>
        )
      }
    

    if(that.state.page === "namenewcalendar"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Namenewcalendar goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Namenewcalendar>
          </View>
        )
      }
    

    if(that.state.page === "1calendar"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Onecalendar goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Onecalendar>
          </View>
        )
      }
    

    if(that.state.page === "null"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <null goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></null>
          </View>
        )
      }
    

    if(that.state.page === "calendar"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <calendar goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></calendar>
          </View>
        )
      }
    

    if(that.state.page === "fries"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <fries goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></fries>
          </View>
        )
      }
    

    if(that.state.page === "calendar 2"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <calendartwo goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></calendartwo>
          </View>
        )
      }
    

    if(that.state.page === "repeater"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Repeater goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Repeater>
          </View>
        )
      }

  

}

connectToDatabase(db_link,name){
      var that = this;
      that.state.dbLinks[name] = db_link;
      console.log(db_link)
      if(db_link === null || name === null){
        return
      }
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
              
          
    
            window[name] = data_arr;
            global[name] = data_arr;
            data_arr.shift();
            appData.calendars = events.map(function(elem){
              return elem["Calendar Name"];
            }).filter(onlyUnique);

            that.forceUpdate();
            that.setState({dbLinks:that.state.dbLinks, loaded:true})
          


          })

        return;
      }

      
      
      var schema = fetch(db_link, {
                  method: 'GET',
                  headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                  }
        }).then(async function(res){
          
          res = await res.json();
          window[name] = res;
          global[name] = res;
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


