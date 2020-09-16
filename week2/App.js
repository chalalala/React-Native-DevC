import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from "expo-constants";
import { StyleSheet, ScrollView, View, Image, Text} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={
        {
          flexDirection: 'row',
          backgroundColor: '#f3f6fa',
          alignItems: 'center',
          justifyContent: 'space-between',
        }
      }
      >
        <View style={{width:40}}/>
        {/* Header logo */}
        <Image
          source={
            {
            uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png',   
            }
          }
          style={
            {
              flex:1,
              width:null,
              height:44,
            }
          }
          resizeMode="contain"
        />

        {/* Logo inbox */}
        <Feather name="inbox" size={27} color="black" style={{margin:10}}/>
      </View>
      
      {/* Posts */}
      <View>
      {
        feedData.map(feed=>{
          return (
            <View style={styles.feedItem} key={feed.id}>
              <View style={{flex:1,flexDirection:'row'}}>
                <View style={styles.avatarWrapper}>
                  <Image
                    source={feed.avatar}
                    style={styles.avatarImage}
                    resizeMode="cover"
                  />
                  <Text style={styles.posterName}>{feed.name}</Text>
                </View>
                <Feather
                  name="more-vertical"
                  size={24}
                  color="black"
                  style={{alignSelf:'flex-end',marginBottom:17,marginRight:10}}
                  onPress={() => alert("Reported")}
                />
              </View>
              <View style={styles.imageWrapper}>
                <Image
                  source={feed.image}
                  style={styles.imagePoster}
                  resizeMode="cover"
                />
              </View>
              {/* Buttons */}
              <View style={{flex:1,flexDirection:'row',marginVertical:10}}>
                <Feather name="heart" size={27} color="black" style={styles.actionButton} onPress={()=> alert("Liked")}/>
                <Feather name="message-square" size={27} color="black" style={styles.actionButton} onPress={()=> alert("Commented")}/>
                <Feather name="share" size={27} color="black" style={styles.actionButton} onPress={()=> alert("Shared")}/>
                <View style={{width:205}}/>
                <Feather name="bookmark" size={27} color="black" onPress={() => alert("Save to Collection")}/>
              </View>
              <Text style={{marginLeft:12,fontWeight:'700'}}>{feed.likeCount} likes</Text>
            </View>
          )
        })
      }
      </View>
    </ScrollView>
  );
}

const feedData = [
  {
    id: 1,
    name: 'misoradoan',
    image: require('./assets/image01.jpg'),
    likeCount: 128,
    avatar: require('./assets/avatar.jpg')
  },
  {
    id: 2,
    name: 'misoradoan',
    image: require('./assets/image02.jpg'),
    likeCount: 20,
    avatar: require('./assets/avatar.jpg')
  },
  {
    id: 3,
    name: 'misoradoan',
    image: require('./assets/image03.jpg'),
    likeCount: 55,
    avatar: require('./assets/avatar.jpg')
  },
  {
    id: 4,
    name: 'misoradoan',
    image: require('./assets/image04.jpg'),
    likeCount: 120,
    avatar: require('./assets/avatar.jpg')
  },
  {
    id: 5,
    name: 'misoradoan',
    image: require('./assets/image05.jpg'),
    likeCount: 101,
    avatar: require('./assets/avatar.jpg')
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  avatarWrapper: {
    flex:1,
    flexDirection: 'row',
    marginVertical: 7,
    marginHorizontal: 12,
  },
  avatarImage: {
    width:46,
    height:46,
    borderRadius: 23,
  },
  posterName:{
    marginVertical: 15,
    marginLeft: 12,
    fontSize: 15,
    fontWeight: '700'
  },
  imageWrapper:{
    height:300
  },
  imagePoster: {
    flex:1,
    width:null,
    height:null,
  },
  actionButton: {
    marginLeft:12,
  }
});

