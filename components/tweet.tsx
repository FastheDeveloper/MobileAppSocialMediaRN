import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import tweets from '../assets/data/tweets'
import {TweetType} from '../types'
import { Entypo,EvilIcons } from '@expo/vector-icons'
import IconButton from './iconButton'
IconButton
type TweetProps={
    tweet:TweetType;
}




const Tweet = ({tweet}:TweetProps) => {
    
  return (
<View style={styles.container}>
    <Image src={tweet.user.image} style={styles.userImage}/>

    <View style={styles.mainC}>
      <View style={{flexDirection:'row'}}>
      <Text style={styles.name}>{tweet.user.name}</Text>
      <Text style={styles.Username}>{tweet.user.username} 2hrs</Text>
      <Entypo name='dots-three-horizontal' size={24} color={"gray"} style={{marginLeft:"auto"}} />
      </View>
      

      <Text style={styles.content}>{tweet.content}</Text>

      {tweet.image && <Image src={tweet.image} style={styles.image}/>}
      <View style={styles.footer}>
    <IconButton icon='comment' text={tweet.numberOfComments}/>
    <IconButton icon='retweet' text={tweet.numberOfRetweets}/>
    <IconButton icon='heart' text={tweet.numberOfLikes}/>
    <IconButton icon='chart' text={tweet.impressions || 0}/>
    <IconButton icon='share-apple' />

    </View>
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
      Username:{
        color:'gray',
        marginLeft:10
      },
      content:{
        lineHeight:20,
        marginTop:5
      },
      image:{
        width:'100%',
        aspectRatio:16/9,
        marginVertical:10,
        borderRadius:15
      },
      footer:{
        flexDirection:'row',
        marginVertical:5,
justifyContent:"space-between"
      }
    
  });