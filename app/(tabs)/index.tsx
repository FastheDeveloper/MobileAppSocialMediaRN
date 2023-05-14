import { Image, StyleSheet,View,FlatList } from 'react-native';


import tweets from '../../assets/data/tweets';
import Tweet from '../../components/tweet';

export default function TabOneScreen() {
  return (
    <View style={{backgroundColor:'white',flex:1}}>
      {/* <Tweet tweet={tweets[0]}/> */}
      <FlatList data={tweets}
      renderItem={({item})=><Tweet tweet={item}/>}
      />
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
  

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
