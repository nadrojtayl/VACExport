


import React, { Component } from "react";
import { Button, Picker, Switch, Image, ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput, Dimensions } from "react-native";


class Calendar extends Component{
  constructor(props){
    super(props);

    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    var days_in_month = {
      "January":31,
      "February":28,
      "March":31,
      "April":30,
      "May":31,
      "June":30,
      "July":31,
      "August":31,
      "September":30,
      "October":31,
      "November":30,
      "December":31
    }



    this.state = {
      current_month:0,
      days_in_month:days_in_month,
      days:[],
      months:months
    }
  }

  changeMonth(advance_bool){
    if(advance_bool && (this.state.current_month + 1) < 12 ){
      this.setState({current_month:this.state.current_month + 1}) 
      return
    } 

    if(!advance_bool && (this.state.current_month - 1) > -1 ){
      this.setState({current_month:this.state.current_month - 1}) 
      return
    } 

  }



  render(){
    var that = this;
    that.state.days = [];
    for(var i = 0; i < this.state.days_in_month[this.state.months[this.state.current_month]];i++){
   
      this.state.days.push([]);
    }
    
    return (
      <View style = {[{height:"100%",width:"100%", alignItems:"center"}]}>
        <Text style = {{color:'black'}}>{that.state.months[that.state.current_month]}</Text>
        <View style = {{flexDirection:'row', width:"100%", height:"14%", alignItems:"center"}}>
        {that.state.days.slice(0,5).map(function(event,day){
          return (<TouchableOpacity
            style = {[{width:"20%", borderColor:'black',borderWidth:1, height:"100%"}, that.props.events[that.state.current_month] ? that.props.events[that.state.current_month][day]:{}]}
            onPress = {function(){
                if(that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day]){
                  alert(that.props.events[that.state.current_month][day].innerText)
                }
              }
            }
            
            >
            <Text>
              {that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day] ? that.props.events[that.state.current_month][day].innerText:"" }
            </Text>
            </TouchableOpacity>)
        })}
        </View>
        <View style = {{flexDirection:'row', width:"100%", height:"14%", alignItems:"center"}}>
        {that.state.days.slice(5,10).map(function(event,day){
          return (<TouchableOpacity
            style = {[{width:"20%", borderColor:'black',borderWidth:1, height:"100%"}, that.props.events[that.state.current_month] ? that.props.events[that.state.current_month][day]:{}]}
            onPress = {function(){
                if(that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day]){
                  alert(that.props.events[that.state.current_month][day].innerText)
                }
              }
            }
            
            >
            <Text>
              {that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day] ? that.props.events[that.state.current_month][day].innerText:"" }
            </Text>
            </TouchableOpacity>)
        })}
        </View>
        <View style = {{flexDirection:'row', width:"100%", height:"14%", alignItems:"center"}}>
        {that.state.days.slice(10,15).map(function(event,day){
          return (<TouchableOpacity
            style = {[{width:"20%", borderColor:'black',borderWidth:1, height:"100%"}, that.props.events[that.state.current_month] ? that.props.events[that.state.current_month][day]:{}]}
            onPress = {function(){
                if(that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day]){
                  alert(that.props.events[that.state.current_month][day].innerText)
                }
              }
            }
            
            >
            <Text>
              {that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day] ? that.props.events[that.state.current_month][day].innerText:"" }
            </Text>
            </TouchableOpacity>)
        })}
        </View>
        <View style = {{flexDirection:'row', width:"100%", height:"14%", alignItems:"center"}}>
        {that.state.days.slice(15,20).map(function(event,day){
          return (<TouchableOpacity
            style = {[{width:"20%", borderColor:'black',borderWidth:1, height:"100%"}, that.props.events[that.state.current_month] ? that.props.events[that.state.current_month][day]:{}]}
            onPress = {function(){
                if(that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day]){
                  alert(that.props.events[that.state.current_month][day].innerText)
                }
              }
            }
            
            >
            <Text>
              {that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day] ? that.props.events[that.state.current_month][day].innerText:"" }
            </Text>
            </TouchableOpacity>)
        })}
        </View>
        <View style = {{flexDirection:'row', width:"100%", height:"14%", alignItems:"center"}}>
        {that.state.days.slice(20,25).map(function(event,day){
          return (<TouchableOpacity
            style = {[{width:"20%", borderColor:'black',borderWidth:1, height:"100%"}, that.props.events[that.state.current_month] ? that.props.events[that.state.current_month][day]:{}]}
            onPress = {function(){
                if(that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day]){
                  alert(that.props.events[that.state.current_month][day].innerText)
                }
              }
            }
            
            >
            <Text>
              {that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day] ? that.props.events[that.state.current_month][day].innerText:"" }
            </Text>
            </TouchableOpacity>)
        })}
        </View>
        <View style = {{flexDirection:'row', width:"100%", height:"14%", alignItems:"center"}}>
        {that.state.days.slice(25,30).map(function(event,day){
          return (<TouchableOpacity
            style = {[{width:"20%", borderColor:'black',borderWidth:1, height:"100%"}, that.props.events[that.state.current_month] ? that.props.events[that.state.current_month][day]:{}]}
            onPress = {function(){
                if(that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day]){
                  alert(that.props.events[that.state.current_month][day].innerText)
                }
              }
            }
            
            >
            <Text>
              {that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day] ? that.props.events[that.state.current_month][day].innerText:"" }
            </Text>
            </TouchableOpacity>)
        })}
        </View>
        <View style = {{flexDirection:'row', width:"100%", height:"14%", alignItems:"center"}}>
        {that.state.days.slice(30,35).map(function(event,day){
          return (<TouchableOpacity
            style = {[{width:"20%", borderColor:'black',borderWidth:1, height:"100%"}, that.props.events[that.state.current_month] ? that.props.events[that.state.current_month][day]:{}]}
            onPress = {function(){
                if(that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day]){
                  alert(that.props.events[that.state.current_month][day].innerText)
                }
              }
            }
            
            >
            <Text>
              {that.props.events[that.state.current_month] && that.props.events[that.state.current_month][day] ? that.props.events[that.state.current_month][day].innerText:"" }
            </Text>
            </TouchableOpacity>)
        })}
        </View>

        <View style = {{flexDirection:"row"}}>
          <Button title = "Last" onPress = {function(){
            that.changeMonth(false);
          }} >Last</Button>
          <Button title = "Next" onPress = {function(){
            that.changeMonth(true);
          }}>Next</Button>
        </View>
        
      </View>)
  }
}

export default Calendar;



    