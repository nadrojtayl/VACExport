


import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Button, Picker, Switch, Image, Text, View } from 'react-native';
import FirstPage from './downloadedpages/FirstPage.js'
import TWO from './downloadedpages/TWO.js'
import ARs from './downloadedpages/ARs.js'
import MFOURAONE from './downloadedpages/MFOURAONE.js'
import MTHIRTEEN from './downloadedpages/MTHIRTEEN.js'
import AK from './downloadedpages/AK.js'
import GRAU from './downloadedpages/GRAU.js'
import ODEN from './downloadedpages/ODEN.js'
import FRFIVEFIVESIX from './downloadedpages/FRFIVEFIVESIX.js'
import FAL from './downloadedpages/FAL.js'
import KILO from './downloadedpages/KILO.js'
import SCAR from './downloadedpages/SCAR.js'
import RAMSEVEN from './downloadedpages/RAMSEVEN.js'
import SMGs from './downloadedpages/SMGs.js'
import MPFIVE from './downloadedpages/MPFIVE.js'
import PNINTY from './downloadedpages/PNINTY.js'
import MPSEVEN from './downloadedpages/MPSEVEN.js'
import BIZZON from './downloadedpages/BIZZON.js'
import UZI from './downloadedpages/UZI.js'
import THREE from './downloadedpages/THREE.js'
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
        var dbLinks = {"CallofDuty":"https://script.google.com/macros/s/AKfycbzDyMiWgXeE24lZvoLT6IoNJHlPZJUGxTOAmaaDtLToC1U4t-8a/exec?sheetName=Jack"}
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



    


    if(that.state.page === "TWO"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <TWO goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></TWO>
          </View>
        )
    }



    


    if(that.state.page === "ARs"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <ARs goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></ARs>
          </View>
        )
    }



    


    if(that.state.page === "MFOURAONE"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <MFOURAONE goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></MFOURAONE>
          </View>
        )
    }



    


    if(that.state.page === "MFOURAONE"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <MFOURAONE goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></MFOURAONE>
          </View>
        )
    }



    


    if(that.state.page === "MFOURAONE"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <MFOURAONE goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></MFOURAONE>
          </View>
        )
    }



    


    if(that.state.page === "MTHIRTEEN"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <MTHIRTEEN goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></MTHIRTEEN>
          </View>
        )
    }



    


    if(that.state.page === "AK"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <AK goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></AK>
          </View>
        )
    }



    


    if(that.state.page === "GRAU"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <GRAU goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></GRAU>
          </View>
        )
    }



    


    if(that.state.page === "ODEN"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <ODEN goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></ODEN>
          </View>
        )
    }



    


    if(that.state.page === "FRFIVEFIVESIX"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <FRFIVEFIVESIX goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></FRFIVEFIVESIX>
          </View>
        )
    }



    


    if(that.state.page === "FAL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <FAL goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></FAL>
          </View>
        )
    }



    


    if(that.state.page === "KILO"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <KILO goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></KILO>
          </View>
        )
    }



    


    if(that.state.page === "SCAR"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <SCAR goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></SCAR>
          </View>
        )
    }



    


    if(that.state.page === "RAMSEVEN"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <RAMSEVEN goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></RAMSEVEN>
          </View>
        )
    }



    


    if(that.state.page === "SMGs"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <SMGs goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></SMGs>
          </View>
        )
    }



    


    if(that.state.page === "MPFIVE"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <MPFIVE goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></MPFIVE>
          </View>
        )
    }



    


    if(that.state.page === "PNINTY"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <PNINTY goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></PNINTY>
          </View>
        )
    }



    


    if(that.state.page === "MPSEVEN"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <MPSEVEN goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></MPSEVEN>
          </View>
        )
    }



    


    if(that.state.page === "BIZZON"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <BIZZON goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></BIZZON>
          </View>
        )
    }



    


    if(that.state.page === "UZI"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <UZI goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></UZI>
          </View>
        )
    }



    


    if(that.state.page === "THREE"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <THREE goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></THREE>
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







  