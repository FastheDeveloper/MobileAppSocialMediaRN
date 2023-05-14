import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import tweets from '../assets/data/tweets'
import {TweetType} from '../types'

type TweetProps={
    tweet:TweetType;
}




const Tweet = ({tweet}:TweetProps) => {
    
  return (
    <View style={styles.container}>
    <Image src={tweet.user.image} style={styles.userImage}/>

<View style={styles.mainC}>
<Text style={styles.name}>{tweet.user.name}</Text>
<Text style={styles.content}>{tweet.content}</Text>
</View>
  

</View>
  )
}

export default Tweet

const styles = StyleSheet.create({
    container: {
    
        backgroundColor:'white',
      flexDirection:'row',
      padding:10,
      borderBottomWidth:StyleSheet.hairlineWidth,
      borderColor:'lightgrey'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    userImage:
      {width:50,height:50,borderRadius:25},
      mainC:{
        marginLeft:10,
        flex:1
      },
      name:{
        fontWeight:'600'
      },
      content:{
        lineHeight:20,
        marginTop:5
      }
    
  });