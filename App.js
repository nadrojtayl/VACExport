import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Button, Picker, Switch, Image, Text, View } from 'react-native';

/*
EXPORT PROCESS

1. Click export in AppBuilder

2. Copy and paste all text on line 12

3. Fix errors (Adding quotation marks and semicolons where necessary)

4. Take the generated componentdidmount from the class and paste it over the App class's componentdidmount

5. Delete componentdidmount from generated classes

*/

class FirstPage extends React.Component {
      constructor(props){
        super(props);
        this.state = {"key":"value","RegisterPageinput0":"Dog","RegisterPageinput5":"Russian Blue","RegisterPageinput8":"Light blue skin","Info Pageinput1":"d","RegisterPageinput10":"973 768 9820","RegisterPageinput11":"","FindorAdd":true,"AddorFind":true,"loaded":false,"dbLinks":{}}
      }
      
      render(){ 
      var appData = this.state; var that = this; 
      

      if(!that.props.loaded){
        return(<View><Text>LOADING</Text></View>)
      }


      return (
      <View style = {{width:"380px", height:"657px", borderWidth:5, borderColor:"black", backgroundColor:"white"}}><Text
          style= {{"top":-31.28800000000001,"left":11.820499999999981}}
        > {undefined} </Text>
        
 <TouchableOpacity
          
          onPress = { function(){goTo("RegisterPage"); that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"innerText":"Add New Animal","top":198.98399999999998,"left":14.245999999999981,"width":"90%","textAlign":"Center","backgroundColor":"#9face0","color":"black"}]}
        ><Text>{"Add New Animal"}</Text>
        </TouchableOpacity>
 <TouchableOpacity
          
          onPress = { function(){appData.AddorFind=true;
goTo("RegisterPage"); that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"top":291.984,"left":16.24599999999998,"innerText":"Find Animal","width":"90%","textAlign":"Center","backgroundColor":"#9face0","color":"black"}]}
        ><Text>{"Find Animal"}</Text>
        </TouchableOpacity>
<Text
          style= {{"innerText":null}}
        > {null} </Text>
        
<Text
          style= {{"innerText":"Are You Here To \"Find an Animal\" or \"Add a New Animal\"","top":148.98399999999998,"left":0.2459999999999809,"height":"5%","textAlign":"center","backgroundColor":"#ccb2db","borderColor":"black"}}
        > {'Are You Here To "Find an Animal" or "Add a New Animal"'} </Text>
        
 <TouchableOpacity
          
          onPress = { function(){goTo("Privacy"); that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"innerText":"Privacy Agrements","top":373.984,"left":150.24599999999998,"backgroundColor":"#e6a3aa","color":"black"}]}
        ><Text>{"Privacy Agrements"}</Text>
        </TouchableOpacity>

      <Image
        style= {[{width:"200px",height:"200px"}, {"source":"data:image/jpeg;base64,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","width":"100%","top":-43.01600000000002,"left":-1.754000000000019,"height":"20%","zIndex":-100}]}
        source = {{uri:"data:image/jpeg;base64,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"}}
      >
      </Image></View>
        )
      }
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

    console.log("STYLE");
    console.log(additionalStyle)


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
          onPress = { function(){ eval(additionalStyle.onPress) } } 
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
            height:"7%",
            borderRadius: 10,
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
  
    

      if(!window.edit_mode){
        return (<View
          style = {that.props.style}
          >
       <ScrollView>
          {that.props.data.map(function(elem,ind){

            return that.renderElement(that.props.type,ind,that.props.style, that.props.clickfunction, elem)
          }) }
        </ScrollView>
        </View>
        )


      }

      return (<TouchableOpacity
      style = {that.props.style}
      onPress = { function(){if(window.drag_mode){ that.setState({selectedElemToStyle:that.props.int});  return} if(window.edit_mode){ console.log("IND" + that.props.int); window.edit(that.props.int); return}  eval('(' + that.state.clickfunctions[that.props.int] + ')()'); if(that.state.clickfunctions[that.props.int].indexOf("appData") !== -1){ that.forceUpdate()}   } }

      >
        <ScrollView>
          {that.props.data.map(function(elem,ind){
            console.log(that.props.clickfunction)
            return that.renderElement(that.props.type,ind,that.props.style, that.props.clickfunction, elem)
          }) }
        </ScrollView>
        </TouchableOpacity>
        )
    }

  }

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
this.state = {dbLinks:{}, loaded:false}
}

 componentDidMount(){
        var appData = this.state;
        var that = this;
        var dbLinks = {"animals":"https://sheetsu.com/apis/v1.0su/3e46d7afe9c1"}
        Object.keys(dbLinks).forEach(function(key){
          that.connectToDatabase(dbLinks[key], key);
        })


      }


render(){ 

  var appData = this.state; var that = this; this.state.page = "FirstPage";

  return(
    <View style = {{width:"100%",height:"100%"}}>
       <FirstPage loaded = {that.state.loaded}></FirstPage>
    </View>
  )

}

connectToDatabase(db_link,name){
      var that = this;
      that.state.dbLinks[name] = db_link;
      console.log(db_link)
      if(db_link === null || name === null){
        return
      }
      if(db_link.indexOf("google.com") !== -1){
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
          console.log("SAVED");
          res = await res.json();
          window[name] = res;
          global[name] = res;
          that.forceUpdate();
          that.setState({dbLinks:that.state.dbLinks, loaded:true})
        


        })
    }

  goTo(pageName){
    this.setState({page:pageName,
      children:this.state.pages[pageName].children,
      childrenAdditionalStyles: this.state.pages[pageName].childrenAdditionalStyles,
      clickfunctions: this.state.pages[pageName].clickfunctions })
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


