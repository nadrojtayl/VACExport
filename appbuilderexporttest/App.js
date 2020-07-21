


import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Button, Picker, Switch, Image, Text, View } from 'react-native';
import FirstPage from './downloadedpages/FirstPage.js'
import MyHome from './downloadedpages/MyHome.js'
import PlayGameChoice from './downloadedpages/PlayGameChoice.js'
import InGame from './downloadedpages/InGame.js'
import Correct from './downloadedpages/Correct.js'
import Results from './downloadedpages/Results.js'
import Incorrect from './downloadedpages/Incorrect.js'
import YouLost from './downloadedpages/YouLost.js'
import InGameLegendary from './downloadedpages/InGameLegendary.js'
import Username from './downloadedpages/Username.js'
import InGameCom from './downloadedpages/InGameCom.js'
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
        var dbLinks = {"Data":"https://script.googleusercontent.com/macros/echo?user_content_key=YDfKwivu2Rf6_AhDYKNgGGJtEyY0IzolhAjn4uXaMgYV1DBBZl73iZwi0l7oJCX2OhRdbqrb7WUJJvDcpu7vxjY9el_dcYfKm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNc4QVkQcQoq96yvGrbFWwm4uiRHdlehP2o4YvXoAJsmaKro2WtbIagTEih7QiyCq8LKBORzzn2Eoo6uV5BOEzc&lib=MXc5HCTc2_Heu8Q3HMtlEa0XCaJ-4jKQR","UserPrizes":"https://script.googleusercontent.com/macros/echo?user_content_key=-tOfjcBcBOhYBFOquCWbKXDaZQtHHQUu6tRvSUvETvQudsmu5b1A0_wuntZnrU_elck9rGqGUOy0CyCU4KZm3aZHnk5X76Hcm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNc4QVkQcQoq96yvGrbFWwm4uiRHdlehP2o4YvXoAJsmaKro2WtbIagTEih7QiyCq8LKBORzzn2EvFJRaUOgXBM&lib=MXc5HCTc2_Heu8Q3HMtlEa0XCaJ-4jKQR","PrizeList":"https://script.google.com/a/vineyardappcamp.com/macros/s/AKfycbzDpmx5Lz6rtjtErMkdSt2ksR6qZEwupA2atqdD9Q/exec?sheetName=Sheet3"}
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



    


    if(that.state.page === "MyHome"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <MyHome goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></MyHome>
          </View>
        )
    }



    


    if(that.state.page === "PlayGameChoice"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <PlayGameChoice goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></PlayGameChoice>
          </View>
        )
    }



    


    if(that.state.page === "InGame"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <InGame goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></InGame>
          </View>
        )
    }



    


    if(that.state.page === "Correct"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Correct goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Correct>
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



    


    if(that.state.page === "Incorrect"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Incorrect goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Incorrect>
          </View>
        )
    }



    


    if(that.state.page === "YouLost"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <YouLost goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></YouLost>
          </View>
        )
    }



    


    if(that.state.page === "InGameLegendary"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <InGameLegendary goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></InGameLegendary>
          </View>
        )
    }



    


    if(that.state.page === "Username"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Username goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Username>
          </View>
        )
    }



    


    if(that.state.page === "InGameCom"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <InGameCom goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></InGameCom>
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







  