import React from 'react';

import { TextInput, StyleSheet, ScrollView, TouchableOpacity, Button, Picker, Switch, Image, Text, View } from 'react-native';




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
        onPress = { function(){  eval(additionalStyle.onPress); if(additionalStyle.onPress.indexOf("appData") !== -1){ console.log("UPDATING APP DATA"); that.forceUpdate(); window.updateAppData(); }   } }
          
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



class FirstPage extends React.Component {
      constructor(props){
        super(props);
        this.state = {"key":"value","SecondPageinput5":"Select","SelectedGroup":"SMG","FilteredList":[{"Gun Name":"Submachine","Gun Class":"SMG","Damage":"19","Fire Rate/Style":"Fast","Clip":"30","Rarity":"Common-Rare","Ranking For Class":"1","Description":"With an insane fire rate, the submachine rips through people and builds. By far the best SMG","Image Of Item":"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Finsertcoin%2Ffiles%2F2018%2F07%2Fsmg-new.jpg","Index":"3"},{"Gun Name":"Sillenced Submachine","Gun Class":"SMG","Damage":"22","Fire Rate/Style":"Fast","Clip":"30","Rarity":"Common-Rare","Ranking For Class":"2","Description":"Only found at certain POI's, this SMG is hard to find, yet still not good, and is the 2nd best SMG.","Image Of Item":"https://assets.rockpapershotgun.com/images/2019/01/fortnite-suppressed-smg-1212x682.jpg/RPSS/resize/760x-1/format/jpg/quality/90","Index":"4"}],"WeaponIndex":4,"loaded":false,"dbLinks":{}}
      }


      
      render(){ 
      var appData = this.state; var that = this; 

      if(!that.props.loaded){
        return(<View><Text>LOADING</Text></View>)
      }
      

      


      return (
      <View style = {{width:"380px", height:"657px", borderWidth:5, borderColor:"black", backgroundColor:"white"}}><Text
          style= {{"innerText":"'Slippery's Guide to a Fortnite Tier List'","textAlign":"center","top":64.09247999999997,"left":53.297514999999976,"width":"75%","height":"7%","backgroundColor":"#49c4fc","fontSize":24}}
        > {"Slippery's Guide to a Fortnite Tier List"} </Text>
        
<Text
          style= {{"top":340.904,"left":4.813500000000033,"innerText":"'Click a Class to View'","textAlign":"center"}}
        > {'Click a Class to View'} </Text>
        
<Multiplier
      type = {"button"}
      data = {map_list_of_objs(weapons,"Gun Class")}
      style = {[{alignItems:'center'},{"options":"map_list_of_objs(weapons,\"Gun Class\")","repeaterinnerText":"elem","repeaterType":"button","top":398.904,"left":-9.186499999999967,"width":null,"height":"40%","repeateronPress":"appData.SelectedGroup = elem;\nappData.FilteredList = filter_list_of_objs(weapons,\"Gun Class\",elem);\ngoTo(\"SecondPage\");"}]}
      clickfunction = {function(){goTo("SecondPage");}}
      >
      </Multiplier>

      <Image
        style= {[{width:"200px",height:"200px"}, {"source":"https://cm1.narvii.com/7192/f75cb8c8074b5ccc961668aa91bbec9256a4c544_00.jpg","top":-87.24799999999999,"left":109.91700000000003,"height":"25%"}]}
        source = {{uri:"https://cm1.narvii.com/7192/f75cb8c8074b5ccc961668aa91bbec9256a4c544_00.jpg"}}
      >
      </Image>
 <TouchableOpacity
          
          onPress = { function(){that.props.goTo("Privacy");; that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"top":5.903999999999996,"left":444.81350000000003,"innerText":"'Go To Privacy Page'","height":"5%","width":"20%"}]}
        ><Text>{'Go To Privacy Page'}</Text>
        </TouchableOpacity></View>
        )
      }
    }

    
      export default FirstPage;