


import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Button, Picker, Switch, Image, Text, View } from 'react-native';
import FirstPage from './downloadedpages/FirstPage.js'
import SportsPage from './downloadedpages/SportsPage.js'
import NBA from './downloadedpages/NBA.js'
import FootBall from './downloadedpages/FootBall.js'
import Baseball from './downloadedpages/Baseball.js'
import Soccer from './downloadedpages/Soccer.js'
import Tennis from './downloadedpages/Tennis.js'
import Golf from './downloadedpages/Golf.js'
import Olympics from './downloadedpages/Olympics.js'
import Boston from './downloadedpages/Boston.js'
import Cycling from './downloadedpages/Cycling.js'
import NHL from './downloadedpages/NHL.js'
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
  var dbLinks = {"sports":"https://script.googleusercontent.com/macros/echo?user_content_key=YTFr-IPJoFOyRIdcoPGfxUDJt_6b0EA48pZZUqIogE5Sf-b5eq8A9PWWTjqMUXbakdd17SVMczzVr9uOCd7xFdn3vq1XvUt_m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJCXdJh6yvCv4yxm_uUVb2J8MjGe8B4ojjE_l8XvAqv0BE42TnJ6HCkTEih7QiyCq8LKBORzzn2EUx6HvROSgvE&lib=MXHwZDWn5UDNOS8I8eml2bEXCaJ-4jKQR"}
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



    


    if(that.state.page === "SportsPage"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <SportsPage  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></SportsPage>
          </View>
        )
    }



    


    if(that.state.page === "SportsPage"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <SportsPage  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></SportsPage>
          </View>
        )
    }



    


    if(that.state.page === "SportsPage"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <SportsPage  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></SportsPage>
          </View>
        )
    }



    


    if(that.state.page === "SportsPage"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <SportsPage  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></SportsPage>
          </View>
        )
    }



    


    if(that.state.page === "SportsPage"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <SportsPage  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></SportsPage>
          </View>
        )
    }



    


    if(that.state.page === "NBA"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NBA  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NBA>
          </View>
        )
    }



    


    if(that.state.page === "FootBall"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <FootBall  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></FootBall>
          </View>
        )
    }



    


    if(that.state.page === "Baseball"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Baseball  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Baseball>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "Soccer"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Soccer  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Soccer>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "Tennis"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Tennis  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Tennis>
          </View>
        )
    }



    


    if(that.state.page === "Golf"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Golf  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Golf>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "Olympics"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Olympics  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Olympics>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "Boston"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Boston  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Boston>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "Cycling"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Cycling  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Cycling>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "America"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <America  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></America>
          </View>
        )
    }



    


    if(that.state.page === "Election"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Election  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Election>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "Tiktok"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Tiktok  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Tiktok>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
          </View>
        )
    }



    


    if(that.state.page === "NHL"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <NHL  saveTo = {that.sendToDatabase.bind(that)} goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></NHL>
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







  