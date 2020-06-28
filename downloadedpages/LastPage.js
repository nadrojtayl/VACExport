import React from 'react';

class LastPage extends React.Component {
      constructor(props){
        super(props);
        this.state = {"key":"value","RegisterPageinput0":"Dog","RegisterPageinput5":"Russian Blue","RegisterPageinput8":"Light blue skin","Info Pageinput1":"d","RegisterPageinput10":"973 768 9820","RegisterPageinput11":"","FindorAdd":true,"AddorFind":true,"loaded":false,"dbLinks":{}}
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
      var appData = this.state; var that = this; 
      

      if(!that.state.loaded){
        return(<View><Text>LOADING</Text></View>)
      }


      return (
      <View style = {{width:"380px", height:"657px", borderWidth:5, borderColor:"black", backgroundColor:"white"}}><Text
          style= {{"innerText":"Thank You For Adding/Help Find an Animal!","top":151.712,"left":94.82049999999998,"textAlign":"Center","backgroundColor":"#ccb2db","height":"20%","width":"50%","borderColor":"black"}}
        > {"Thank You For Adding/Help Find an Animal!"} </Text>
        
 <TouchableOpacity
          
          onPress = { function(){goTo("FirstPage"); that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"innerText":"Back<<","borderColor":"black","color":"black"}]}
        ><Text>{"Back<<"}</Text>
        </TouchableOpacity></View>
        )
      }
    }