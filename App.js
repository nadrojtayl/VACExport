import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Button, Picker, Switch, Image, Text, View } from 'react-native';



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
this.state = {"key":"value","id":3,"ID":null,"loaded":false,"dbLinks":{}}
}
componentDidMount(){
var appData = this.state;
var that = this;
var dbLinks = {"null":null,"Movies":"https://spreadsheets.google.com/feeds/cells/1QJPEnmZRWsjySvExe8sQfB2ozeUf32lTwEjl8UJhSOI/1/public/full?alt=json"}
Object.keys(dbLinks).forEach(function(key){
that.connectToDatabase(dbLinks[key], key);
})
}
render(){ var appData = this.state; var that = this; 
if(!that.state.loaded){
return(
<View>
   <Text>LOADING</Text>
</View>
)
}
return (
<View style = {{width:"380px", height:"657px", borderWidth:5, borderColor:"black", backgroundColor:"white"}}>
<Image
style= {[{width:"200px",height:"200px"}, {"source":"Movies[appData.id].Poster","top":62.98399999999998,"left":12.245999999999981,"textAlign":"center","paddingTop":1,"height":"40%","width":"35%","innerText":"Movies[appData.id].IMDb"}]}
source = {{uri:Movies[appData.id].Poster}}
>
</Image>
<Text
   style= {{"innerText":"Movies[appData.id].Title","textAlign":"center","backgroundColor":"transparent","top":41.31999999999999,"left":0.3294999999999959,"fontFamily":"Verdana","fontSize":24,"color":"#828282","fontWeight":"BOLD"}}
   > {Movies[appData.id].Title} </Text>
<TouchableOpacity
onPress = { function(){goTo("settings"); that.forceUpdate(); }}  
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
position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"innerText":"Settings","backgroundColor":"#757778","top":0.3199999999999932,"left":339.3295}]}
>
<Text>{"Settings"}</Text>
</TouchableOpacity>
<TouchableOpacity
onPress = { function(){that.forceUpdate();}} 
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
position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"top":524.3199999999999,"left":-0.6705000000000041,"height":"10%","width":"30%","innerText":"Yes","backgroundColor":"#16e03f","fontFamily":null}]}
>
<Text>{"Yes"}</Text>
</TouchableOpacity>
<TouchableOpacity
onPress = { function(){appData.id=appData.id+1; that.forceUpdate(); }}  
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
position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"top":523.3199999999999,"left":274.3295,"height":"10%","width":"30%","innerText":"Give me another","backgroundColor":"#e81010"}]}
>
<Text>{"Give me another"}</Text>
</TouchableOpacity>
<Text
style= {{"top":-32.68000000000001,"left":69.3295,"width":"50%","source":null,"innerText":"Director: Edgar Wright"}}
> {"Director: Edgar Wright"} </Text>
<Text
   style= {{"top":95.32,"left":171.3295,"width":"55%","innerText":"Movies[appData.id].Director","fontFamily":"Lato","color":"#828282"}}
   > {Movies[appData.id].Director} </Text>
<Text
   style= {{"innerText":null,"top":-21.680000000000007,"left":31.329499999999996}}
   > {null} </Text>
<Text
   style= {{"innerText":"Movies[appData.id].Genre","width":"60%","top":172.32,"left":170.3295,"color":"#828282"}}
   > {Movies[appData.id].Genre} </Text>
<Text
   style= {{"top":310.32,"left":0.3294999999999959,"height":"25%","width":"100%","innerText":"Movies[appData.id].Description","fontFamily":"Verdana","fontSize":14,"backgroundColor":"transparent","color":"#828282"}}
   > {Movies[appData.id].Description} </Text>
<Text
   style= {{"top":118.32,"left":171.3295,"backgroundColor":"transparent","innerText":"Movies[appData.id].Rating","color":"#828282"}}
   > {Movies[appData.id].Rating} </Text>
<Text
   style= {{"backgroundColor":"transparent","innerText":null,"top":146.32,"left":211.3295,"color":"#828282"}}
   > {null} </Text>
<Text
   style= {{}}
   > {undefined} </Text>
<Text
   style= {{}}
   > {undefined} </Text>
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
          window.$("#database_table_rows").append(`<tr>
      <td>`+ name +`</td>
      <td>`+`Loaded` +`</td>
      <td><button onclick = "view_database('`+name+`')">`+`View` +`</button></td>
    </tr>`)


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


