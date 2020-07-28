
import React, { Component } from "react";
import { ActivityIndicator, Button, Picker, Switch, Image, ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import Calendar from "./Calendar.js";
import appData from "./global.js";
import { Audio } from 'expo-av';
import Multiplier from "./Multiplier.js";

var d = new Date();
var month = d.getMonth();
var day = d.getDate();
global.month = d.getMonth();
global.day = d.getDate();

function hasNumber(myString) {
  return /d/.test(myString);
}



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function resizeFont(num){
  return num / (640/height)
}


global.inputs = {
  0:"This"
}

class Box extends React.Component{
  render(){
    return (<View style={this.props.view}></View>)
  }
}




//READ ONLY API: format
//https://spreadsheets.google.com/feeds/cells/1P0tGuikrAg5ZGpC2fHxLY49Osp6nhwseK2DSr34HM-o/1/public/full?alt=json

function runWithInterval(script_string,interval){
  var script_string = script_string + ";"
  var that = appData.this;
    try{
        eval("function y(){"+script_string+"}")
        return setInterval(function(){ eval(script_string)},interval);
      } catch(e){
        alert("There was an error trying to run this!" + e);
      }
}

window.runWithInterval = runWithInterval;
runWithInterval = runWithInterval;

function realEval(str){
  return eval(str);
}

window.realEval = realEval.bind(this);

function try_eval(input){
  try {
    var output =  eval(input);
    return output
  } catch(e){
    return input;

  }
 }

 function filter_obj_by_phrase(arr,key_name,phrase){
  return arr.filter(function(elem){
    return elem[key_name].indexOf(phrase) !== -1;
  })
}


function filter(arr,phrase){
  return arr.filter(function(elem){
    return elem.indexOf(phrase) !== -1;
  })
}

window.filter = filter;

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

window.onlyUnique = onlyUnique;

function unique(arr){
  return arr.filter(onlyUnique);
}

window.unique = unique;

function unique_return_one_key(arr,key){
  return arr.map(function(obj){
    return obj[key]
  }).filter(onlyUnique);
}

function findInArrayOfObjects(array,search_obj) {
          
            for(var i = 0; i < array.length;i++){
              var match = true;

              Object.keys(search_obj).forEach(function(key){
                if(search_obj[key] !== array[i][key]){
                  match = false;
                }
              })

              if(match){
                return array[i];
              }

            }
            return false;
        }

  window.findInArrayOfObjects = findInArrayOfObjects;

window.unique_return_one_key = unique_return_one_key;

function filter_list_of_objs(arr,key,filter_value){
  return arr.filter(function(obj){
    return obj[key] === filter_value
  })
}

window.filter_list_of_objs = filter_list_of_objs;

function filter_list_of_objs_multiple_keys(arr,filter_object){
  return arr.filter(function(obj){
    var match = true;
    Object.keys(filter_object).forEach(function(key){
      if(filter_object[key] !== obj[key]){
        match = false;
      }
    })
    return match
  })
}

global.filter_list_of_objs_multiple_keys = filter_list_of_objs_multiple_keys;


function map_list_of_objs(arr,key){
  return arr.map(function(obj){
    return obj[key];
  })
}

global.map_list_of_objs = map_list_of_objs;

function clone(arr){
  return arr.slice();
}

global.audio = [];
async function play(url){
  appData.soundObject = new Audio.Sound();
 try {
    await appData.soundObject.loadAsync({uri:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"});
    await appData.soundObject.playAsync();
    // Your sound is playing!
  } catch (error) {
    alert(error);
  }


}

async function pause(){
   await appData.soundObject.pauseAsync();
}

global.play = play;
global.pause = pause;

global.clone = clone;

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
  var value = (try_eval(value) === undefined) ? (default_value):  try_eval(value);
  if(typeof value === "object"){return "Error: This is an object"}
  return value;
}




 class GrantTemplate extends React.Component {
     

    constructor(props)
    {
        super(props);
        this.state = {"key":"value","FirstPageinput4":"Select","FirstPageinput2":"Select","Profileinput4":"Select","Profilepicker5":"","Profileinput7":"Select","Profileinput8":"Select","Saved Grantsinput2":"","grantList":["The 100,000 Strong in the Americas Innovation Fund","AAA Foundation for Traffic Safety","AARP Purpose Prize","AARP Community Challenge","Abbott Grants Programs","The Academy of American Poets","ACM Lifting Lives","The Academy of General Dentistry Foundation","The Academy Grants Program ","The Access Fund's Climbing Conservation Grant Program","AccessLex Institute","Acción Cultural Española (Spanish Cultural Action)","Accion International","Steven B. Achelis Foundation","A Community Thrives","Acorn Foundation","Action for Healthy Kids: School Grants for Healthy Kids","Action For Nature: International Young Eco-Hero Award Program","Actors' Equity Foundation","Adobe Product Donations","AFS Prize for Young Global Citizens","Agricultural and Applied Economics Association Trust","AHRA and Canon Medical Systems USA, Inc. Putting Patients First Program","Aidsfonds","AIDS United","Aid to the Church in Need","AIG Sponsorships Program","Air Force Association: Educator Grant Program","Air France Corporate Foundation","The Alcon Foundation","Alert Fund for Youth","Alexia Foundation for World Peace","Alex's Lemonade Stand Foundation","A Little Hope","Alkermes Inspiration Grants","Allard Prize for International Integrity","Allegany Franciscan Ministries","Allen Foundation","Rita Allen Foundation","Alliance for Cancer Gene Therapy Research Grants","The Alliance for Young Artists & Writers: The Scholastic Art & Writing Awards","Alliant Credit Union Foundation","Allstate Foundation: Executive Leadership Program","The Alo Grant","The Alongside Wildlife Foundation","Alternatives Research and Development Foundation","Alwaleed Philanthropies","Alzheimer's Association","Alzheimer's Foundation of America","AMA (American Medical Association) Foundation","AMC Cares Charitable Fund","American Academy in Rome: The Rome Prize","American Academy of Arts and Letters","American Academy of Pediatric Dentistry (AAPD) Foundation","American Academy of Dermatology: Shade Structure Grant Program","American Academy of Family Physicians Foundation: Family Medicine Cares USA","American Academy of Pediatrics: Community Access to Child Health (CATCH)","Americana Foundation","American Alliance of Museums: Museum Assessment Program","American Alpine Club Grant Program","The American Antiquarian Society Fellowship Program","American Arbitration Association-International Centre for Dispute Resolution Foundation","American Association for Cancer Research","American Association of Community Colleges Grant Programs","American Association of People with Disabilities Programs","American Association of Retired Persons (AARP) Foundation","American Association of School Librarians","American Association of University Women","American Bar Endowment: Opportunity Grant Program","American Battlefield Trust: Field Trip Fund","American Cancer Society Research Grants Program","American Chemical Society","American Climate Leadership Awards","American College of Bankruptcy Foundation: Pro Bono Grant Program","American Composers Forum","American Conservation Association"],"firstGrant":65,"index":76,"testList":[1,2,3],"LoginScreeninput2":"","FirstPageinput1":"AA","myresult":[{"Grantor Name":"AAA Foundation for Traffic Safety","Who the grant is for":"Nonprofit & Government organizations, for-profit research research institutions","Deadline to apply for grant":"Suspended till further notice","Grant description ":"The AAA Foundation for Traffic Safety is a not-for-profit, publicly supported charitable research and education organization dedicated to saving lives by preventing traffic crashes and reducing injuries when crashes occur.","Grant focus areas (location)":"USA","Amount provided by grants":"Not listed","":"","Index":1},{"Grantor Name":"AARP Purpose Prize","Who the grant is for":"Individuals","Deadline to apply for grant":"March 32, 2020. Deadline for 2021 available in the Fall.","Grant description ":"The AARP® Purpose Prize® award supports AARP's mission by honoring extraordinary people ages 50 and older who tap into the power of life experience to build a better future for us all.","Grant focus areas (location)":"USA","Amount provided by grants":"Award of $5,000 and $50,000 are given.","":"","Index":2},{"Grantor Name":"AARP Community Challenge","Who the grant is for":"Nonprofit organizations and government agencies","Deadline to apply for grant":"May 15, 2020. Deadline for 2021 available later this year.","Grant description ":"The AARP Community Challenge provides small grants to fund \"quick-action\" projects that can help communities become more livable for people of all ages. Applications are being accepted for projects to improve housing, transportation, public space, technology (\"smart cities\"), civic engagement and more.","Grant focus areas (location)":"USA","Amount provided by grants":"Awards range from hundreds of dollars to tens of thousands.","":"","Index":3},{"Grantor Name":"American Academy of Pediatric Dentistry (AAPD) Foundation","Who the grant is for":"Nonprofit organizations, government agencies, hospitals and clinics, colleges of dentistry and medicine, and dental societies","Deadline to apply for grant":"Available in Fall","Grant description ":"The American Academy of Pediatric Dentistry (AAPD) Foundation is committed to supporting community-based initiatives providing Dental Homes to children whose families cannot afford dental care.","Grant focus areas (location)":"USA","Amount provided by grants":"Grants range up to $20,000.","":"","Index":53},{"Grantor Name":"American Association of Retired Persons (AARP) Foundation","Who the grant is for":"Nonprofit organizations, government agencies, and educational institutions","Deadline to apply for grant":"Varies by request for proposals","Grant description ":"The mission of the American Association of Retired Persons (AARP) Foundation is to work toward a country free of poverty, where no older person feels vulnerable.","Grant focus areas (location)":"USA","Amount provided by grants":"Not listed","":"","Index":65}],"savedgrants":[],"grantindexes":[],"grantdata":[],"searchresult":[]}
    }


      
  


   

    render(){ 
      var that = this; 
      appData.this = this;
      
      if(!that.props.loaded){
        return(<View style = {{height:'100%',width:'100%', alignItems:'center',justifyContent:'center'}}>
        <ActivityIndicator size="large" />
        <Text style = {{textAlign:'center'}}>Are you a student? Build an app with VineyardAppCamp.com</Text>
        </View>)
      }
      return (
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"white"}}>
      <Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{
            "innerText":"  JSON.parse(JSON.stringify(data[appData.firstGrant][\"Who the grant is for\"]));","top":"14.43%","left":"5.31%","height":"3%","width":"80%"}]}
        > {  JSON.parse(JSON.stringify(data[appData.firstGrant]["Who the grant is for"]))} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{
            "innerText":"JSON.parse(JSON.stringify(data[appData.firstGrant][\"Deadline to apply for grant\"]))","top":"24.04%","left":"6.03%"}]}
        > {JSON.parse(JSON.stringify(data[appData.firstGrant]["Deadline to apply for grant"]))} </Text>
<ScrollView style= {[{height:'10%', position:'absolute'},{"innerText":"JSON.parse(JSON.stringify(data[appData.firstGrant][\"Grant description \"]))","top":"33.96%","left":"5.79%","width":375}]}>
<Text
          style= {[{"innerText":"JSON.parse(JSON.stringify(data[appData.firstGrant][\"Grant description \"]))","width":375}]}
        > {JSON.parse(JSON.stringify(data[appData.firstGrant]["Grant description "]))} </Text>
</ScrollView> 
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{
            "innerText":"JSON.parse(JSON.stringify(data[appData.firstGrant][\"Grant focus areas (location)\"]))",
          "top":"52.2%","left":"6.03%"}]}
        > {JSON.parse(JSON.stringify(data[appData.firstGrant]["Grant focus areas (location)"]))} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{
            "innerText":"JSON.parse(JSON.stringify(data[appData.firstGrant][\"Amount provided by grants\"]))","top":"62.21%","left":"6.51%"}]}
        > {JSON.parse(JSON.stringify(data[appData.firstGrant]["Amount provided by grants"]))} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{
            "innerText":"'Recipient Type:'","top":"11.63%","left":"5.55%",
            "color":"orange","fontWeight":"bold","height":"3%","textAlign":"left"}]}
        > {'Recipient Type:'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"innerText":"'Deadline:'","top":"21.09%","left":"5.79%","color":"orange","fontWeight":"bold"}]}
        > {'Deadline:'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"innerText":"'Grant Description:'","top":"30.86%","left":"5.79%","color":"orange","fontWeight":"bold"}]}
        > {'Grant Description (can scroll):'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"innerText":"'Geograhic Scope:'","top":"48.88%","left":"5.55%","height":25,"color":"orange","fontWeight":"bold"}]}
        > {'Geographic Scope:'} </Text>
        
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{
            "innerText":"'Grant amount:'","top":"58.73%","left":"6.27%","color":"orange","fontWeight":"bold"}]}
        > {'Grant amount:'} </Text>
        
<View
        style= {[{position:'absolute',zIndex:-1000, height:'10%',width:'10%'},{"height":475,"width":400,"top":"9.93%","left":"2.43%"}]}
        ></View>
 <TouchableOpacity
          
          onPress = { function(){that.props.goTo("FirstPage");; that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            backgroundColor: '#fff',
            elevation: 2, // Android
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            height:"7%",
            width:"30%",
            position:'absolute',top:0,left:0, 
            backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', 
            height: "7%",  title:'Test', borderColor: 'gray', color:'black', 
            borderRadius:15, borderWidth: 1},{"innerText":"'Return to Search'",
            "top":"86.69%","left":"36%"}]}
        >
        <Text style = {{color:"black"}}>

        {'Return to Search'}

       </Text>
        </TouchableOpacity>
<Text
          style= {[{position:'absolute',zIndex:100,width:'100%'},{"textAlign":"center","innerText":" JSON.parse(JSON.stringify(data[appData.firstGrant][\"Grantor Name\"]));","color":"orange","fontWeight":"bold","top":"5%","left":"11.06%", fontSize:resizeFont(16), "width":"80%"}]}
        > { JSON.parse(JSON.stringify(data[appData.firstGrant]["Grantor Name"]))} </Text>
        
 <TouchableOpacity
          
          onPress = { function(){
            that.props.saveTo("userdata",{"Username": appData.LoginScreeninput2, "Grant Indexes": appData.firstGrant});
            appData.grantdata.push(data[appData.firstGrant]);
             that.props.goTo("Saved Grants"); that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            backgroundColor: '#fff',
            elevation: 2, // Android
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            height:"7%",
            width:"30%",
            position:'absolute',top:0,left:0,
             backgroundColor:'#8fd158', 
             alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"top":"78.65%","left":"36%","innerText":"'Save Grant'"}]}
        >
        <Text style = {{color:"black"}}>

        {'Save Grant'}

       </Text>
        </TouchableOpacity>
        </View>
        )
    }
  }
    export default GrantTemplate; 



  