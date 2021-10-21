import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedbackBase, View } from 'react-native';
import  React,{useState,useEffect,Component} from 'react';
import appTheme from './appTheme';
import appStyle from './style';


const Card = (props)=>{
  return(
    <View style={styles.card}>
        <Text style={styles.card_title}>{props.title}</Text>

        <View style={{marginHorizontal:10,width:'60%'}}>
          <Text style={{}} >{props.descr}</Text>
          <View style={appStyle.divider}></View>
          <Text style={{fontSize:10,color:'white',borderRadius:40,width:'90%',justifyContent:'center',textAlign:'center',padding:5}}>Posted By {props.creator} on {props.date}</Text>
          <View style={appStyle.divider}></View>
          <Pressable  style={appStyle.button}>
            <Text style={{color:'white'}}>Complete task</Text>
          </Pressable>

        </View>
    </View>
  )

};

const UserCard = (props)=>{

  const AvailableView = ()=>{
    if(props.availability == "available"){
      return(
        <View style={{padding:8,alignSelf:'center',marginBottom:5,marginLeft:10,backgroundColor:appTheme.primaryColor,borderRadius:20}}>
          <Text style={{color:'white'}}>available</Text>
        </View>
      )
    }
    if(props.availability == "busy"){
      return(
        <View style={{padding:8,alignSelf:'center',marginBottom:5,marginLeft:10,backgroundColor:'red',borderRadius:20}}>
          <Text style={{color:'white'}}>Busy</Text>
        </View>
      )
    }else{
      return(
        <View style={{padding:8,alignSelf:'center',marginBottom:5,marginLeft:10,backgroundColor:'red',borderRadius:20}}>
          <Text style={{color:'white'}}>Not found!</Text>
        </View>
      )
    }
  }
  return(
    <View style={styles.card}>
        <Text style={styles.card_title}>{props.user}</Text>
        <View style={{marginHorizontal:10,width:'60%'}}>
          <Text style={{fontSize:10,color:'white',borderRadius:40,width:'100%',justifyContent:'center',textAlign:'center',padding:5}}>{props.email}</Text>
          <View style={appStyle.divider}></View>
          <AvailableView></AvailableView>
          

        </View>
    </View>
  )
};

const NotificationCard = (props)=>{
  return(
    <View style={styles.card}>
        <Text style={styles.card_title}>{props.title}</Text>
        <View style={{marginHorizontal:10,width:'60%'}}>
          <Text style={{}} >{props.descr}</Text>

          <View style={appStyle.divider}></View>
          <Text style={{fontSize:10,color:'white',borderRadius:40,width:'100%',justifyContent:'center',textAlign:'center',padding:5}}>Posted by {props.creator} on {props.date}</Text>
          <View style={appStyle.divider}></View>
        </View>
    </View>
  )
}

export default function App() {
  
  const [page,setPage] =  useState("home");
  const [isAvailable,setIsAvailable] = useState('available');
  const [workId,setWorkId] = useState('');
  const [password,setPassword] = useState('');
  const [loginWarning, setLoginWarning] = useState('enter the details below');
  
  const StatusButton = ()=>{
    if(isAvailable == "available"){
      return(
        <Pressable onPress={()=>setIsAvailable('busy')} style={{padding:8,alignSelf:'center',marginBottom:5,marginLeft:10,backgroundColor:appTheme.primaryColor,borderRadius:20}}>
          <Text style={{color:'white'}}>Available</Text>
        </Pressable>
      );
    }
    if(isAvailable == "busy"){
      return(
        <Pressable onPress={()=>setIsAvailable('available')} style={{padding:8,alignSelf:'center',marginBottom:5,marginLeft:10,backgroundColor:'red',borderRadius:20}}>
          <Text style={{color:'white'}}>Busy</Text>
        </Pressable>
      )
    }else{
      return(
        <Pressable style={{padding:8,alignSelf:'center',marginBottom:5,marginLeft:10,backgroundColor:'red',borderRadius:20}}>
          <Text style={{color:'white'}}>app error!</Text>
        </Pressable>
      )
    }

  }
  
  //for home screen
  if(page == "home"){
    return (
      <View style={styles.container}>
        <ImageBackground style={{width:'100%',height:'100%',position:'absolute'}} source={require('./assets/c.jpg')}></ImageBackground>
        
        <View style={{flexDirection:'row'}}>

          <Text style={appStyle.title}>Openlab</Text>
          <StatusButton></StatusButton>
          
        </View>

        <Text style={{color:'white'}}>Welcome to openlab for mobile</Text>
        <View style={{flexDirection:'row',backgroundColor:'gray',borderRadius:8,marginTop:20}}>
          <Pressable onPress={()=>{setPage("home")}}  style={{padding:14,marginHorizontal:10}}>
            <Text style={{fontSize:20,color:'darkgrey'}}>Home</Text>
          </Pressable>

          <Pressable onPress={()=>{setPage("people")}} style={{padding:14,marginHorizontal:10}}>
            <Text style={{fontSize:20,color:'white'}}>People</Text>
          </Pressable>

          <Pressable onPress={()=>{setPage("notifications")}}  style={{padding:14,marginHorizontal:10}}>
            <Text style={{fontSize:20,color:'white'}}>Notifications</Text>
          </Pressable>
          
        </View>
        <View style={appStyle.divider}></View>

        <View style={{height:'70%',width:'90%'}}>
          <Card date={'20/2/102'} descr={'We provide separate builds for browser, module bundlers (e.g. Webpack) and in case of Services library - Node.js. In the next sections we describe how to include and use libraries depending the on environment.'} creator={"Pholosho"}  title={"clean office please"}></Card>
        

        </View>

       
        <StatusBar style="dark" />
      </View>
    );

    
  }
  
  //for login screen
  if(page  == "login"){

    const login = ()=>{
      if(workId.length >= 8|| password.length >= 8 ){

      }else{
        setLoginWarning('please check you password or work id');
      }
    }

    return (
      <View style={styles.container}>
        <ImageBackground style={{width:'100%',height:'100%',position:'absolute'}} source={require('./assets/b.jpg')}></ImageBackground>
        <Text style={appStyle.title}>Openlab</Text>
        <Text style={{color:'white'}}>{loginWarning}</Text>
        
        <View>
          <TextInput onChangeText={(text)=>setWorkId(text)} style={appStyle.input} placeholder="Enter your email address"></TextInput>
          <TextInput onChangeText={(text)=>setPassword(text)} style={appStyle.input} placeholder="Enter password"></TextInput>
          <Pressable onPress={()=>{login()}} style={appStyle.button}>
            <Text style={{color:'white'}}>Sign In</Text>
          </Pressable>
        </View>
       
        <StatusBar style="dark" />
      </View>
    );
  }
  
  //for dashboard screeen
  if(page  == "notifications"){
    return (
      <View style={styles.container}>
        <ImageBackground style={{width:'100%',height:'100%',position:'absolute'}} source={require('./assets/c.jpg')}></ImageBackground>

        <View style={{flexDirection:'row'}}>

          <Text style={appStyle.title}>Openlab</Text>
          <StatusButton></StatusButton>
          
        </View>

        <Text style={{color:'white'}}>Get Updates Here</Text>
        <View style={{flexDirection:'row',backgroundColor:'gray',borderRadius:8,marginTop:20}}>
          <Pressable onPress={()=>{setPage("home")}}  style={{padding:14,marginHorizontal:10}}>
            <Text style={{fontSize:20,color:'white'}}>Home</Text>
          </Pressable>

          <Pressable onPress={()=>{setPage("people")}} style={{padding:14,marginHorizontal:10}}>
            <Text style={{fontSize:20,color:'white'}}>People</Text>
          </Pressable>

          <Pressable onPress={()=>{setPage("notifications")}}  style={{padding:14,marginHorizontal:10}}>
            <Text style={{fontSize:20,color:'darkgrey'}}>Notifications</Text>
          </Pressable>
          
        </View>
        <View style={appStyle.divider}></View>

        <View style={{height:'70%',width:'90%'}}>
          <NotificationCard date={'20/03/2023'} title={'we are off'} descr={'hello i wanted to let you know that i am'} creator={'pholosho seloane'}></NotificationCard>
          
 
        </View>
        <View style={{height:'1%'}}>
          <Pressable onPress={()=>{setPage('login')}} style={appStyle.button2}>
            <Text style={{color:'white'}}>Sign Out</Text>
          </Pressable>
        </View>
       
        <StatusBar style="dark" />
      </View>
    );
  }
  
  //for  tasks screen
  if(page == "task"){
    return (
      <View style={styles.container}>
        <ImageBackground style={{width:'100%',height:'100%',position:'absolute'}} source={require('./assets/c.jpg')}></ImageBackground>
        <Text>login</Text>
       
        <StatusBar style="auto" />
      </View>
    );
  }
  
  //for viewing people
  if(page === "people"){
    return (
      <View style={styles.container}>
        <ImageBackground style={{width:'100%',height:'100%',position:'absolute'}} source={require('./assets/c.jpg')}></ImageBackground>

        <View style={{flexDirection:'row'}}>

          <Text style={appStyle.title}>Openlab</Text>
          <StatusButton></StatusButton>
          
        </View>

        <Text style={{color:'white'}}>People in your organisation</Text>
        <View style={{flexDirection:'row',backgroundColor:'gray',borderRadius:8,marginTop:20}}>
          <Pressable onPress={()=>{setPage("home")}}  style={{padding:14,marginHorizontal:10}}>
            <Text style={{fontSize:20,color:'white'}}>Home</Text>
          </Pressable>

          <Pressable onPress={()=>{setPage("people")}} style={{padding:14,marginHorizontal:10}}>
            <Text style={{fontSize:20,color:'darkgrey'}}>People</Text>
          </Pressable>

          <Pressable onPress={()=>{setPage("notifications")}}  style={{padding:14,marginHorizontal:10}}>
            <Text style={{fontSize:20,color:'white'}}>Notifications</Text>
          </Pressable>
          
        </View>
        <View style={appStyle.divider}></View>

        <View style={{height:'70%',width:'90%'}}>
          <UserCard availability={'available'} user={'pholosho'} email={'pholosho@gmail.com'}></UserCard>
          <UserCard availability={'available'} user={'pholosho'} email={'pholosho@gmail.com'}></UserCard>
          <UserCard availability={'available'} user={'pholosho'} email={'pholosho@gmail.com'}></UserCard>
          
 
        </View>
       
        <StatusBar style="dark" />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon : {
    height : 20,
    width : 20,
    marginRight: 5
  },
  card_creator : {
    marginVertical: 20,
    fontSize: 11,
    color : 'gray'
  },
  card_desc : {

  },
  card_title : {
    marginRight:10,
    color: 'white',
    width: '20%'

    
   
    
  },
  card : {
    alignContent:'center',
    justifyContent:'center',
    
    flexDirection:'row',
    borderRadius : 10,
    width : '100%',
    alignItems: 'center',
    shadowOpacity : 0.08,
    backgroundColor :  'gray',
    padding: 20,
    marginVertical: 20,
  },
});
