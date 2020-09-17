import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from "expo-constants";
import { StyleSheet, ScrollView, View, Image, Text} from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons'; 

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.top}>
        <Feather name="arrow-left" size={27} color={GRAY_COLOR} style={{margin:20}}/>
        <Feather name="menu" size={27} color={GRAY_COLOR} style={{margin:20}}/>  
      </View>

      {/* Full information wrapper */}
      <View style={styles.fullInfoWrapper}>
        <Image 
          source={require('./assets/avatar.jpg')}
          style={styles.avatar}
          resizeMode="cover"
        />

        <View style={styles.infoWrapper}>
          <Text style={styles.username}> Misora Doan</Text>
          <Text style={styles.job}>Student at University of Science and Technology of Hanoi</Text>
          
          <View style={styles.buttonWrapper}>
            <View style={styles.followButton}>
              <Text style={{color:'white'}} onPress={()=>alert("Followed")}>Follow</Text>
            </View>
            <View style={styles.sendButton}>
              <MaterialIcons name="send" size={20} color="white" onPress={()=>alert("Message sended")}/>
            </View>
          </View>
        </View>
      </View>
      
      <View style={styles.statisticsWrapper}>
        <View style={styles.statistic}>
          <Text style={styles.count}>{imgData.length}</Text>
          <Text style={styles.category}>Photos</Text>
        </View>

        <View style={styles.statistic}>
          <Text style={styles.count}>12k</Text>
          <Text style={styles.category}>Followers</Text>
        </View>

        <View style={styles.statistic}>
          <Text style={styles.count}>7</Text>
          <Text style={styles.category}>Following</Text>
        </View>
      </View>

      <View style={styles.gallery}>
        <View style={{flexDirection: 'column'}}>
        {
          imgData.slice(0, centerImgData).map(item => {
            return(
              <View style={styles.imageWrapper} key={item.id}>
                <Image
                  source={item.imgSource}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
            )
          })
        }
        </View>

        <View style={{flexDirection: 'column'}}>
              {
                imgData.slice(centerImgData).map(item => {
                  return(
                    <View style={styles.imageWrapper} key={item.id}>
                      <Image
                        source={item.imgSource}
                        style={styles.image}
                        resizeMode="cover"
                      />
                    </View>
                  )
                })
              }
        </View>
      </View>
    </ScrollView>
  );
}

const GRAY_COLOR = 'rgb(132, 141, 177)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const imgData = [
  { id: 1, imgSource: require('./assets/1.jpg') },
  { id: 2, imgSource: require('./assets/2.jpg') },
  { id: 3, imgSource: require('./assets/3.jpg') },
  { id: 4, imgSource: require('./assets/4.jpg') },
  { id: 5, imgSource: require('./assets/5.jpg') },
  { id: 6, imgSource: require('./assets/6.jpg') },
  { id: 7, imgSource: require('./assets/7.jpg') },
  { id: 8, imgSource: require('./assets/8.jpg') },
  { id: 9, imgSource: require('./assets/9.jpg') },
  { id: 10, imgSource: require('./assets/10.jpg') },
  { id: 11, imgSource: require('./assets/11.jpg') },
  { id: 12, imgSource: require('./assets/12.jpg') },
];

const centerImgData = Math.ceil(imgData.length / 2);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fullInfoWrapper: {
    flexDirection: 'row',
    marginBottom:7,
    marginHorizontal:20,
    justifyContent: 'space-between',
  },
  avatar: {
    width:100,
    height:100,
    borderRadius:50
  },
  username:{
    fontSize:26,
    fontWeight:'700',
    marginLeft:11,
  },
  job: {
    color: GRAY_COLOR,
    fontWeight:'600',
    marginLeft:18,
    width:200,
  },
  buttonWrapper: {
    flexDirection: 'row',
    marginLeft:18,
    marginTop:10,
  },
  followButton: {
    backgroundColor: FOLLOW_COLOR,
    borderRadius:50,
    width:100,
    height:30,
    alignItems:'center',
    justifyContent: 'center',
    
    // Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  sendButton: {
    backgroundColor: SEND_MESSAGE_COLOR,
    borderRadius:50,
    width:50,
    height:30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:7,

    // Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  statisticsWrapper: {
    flexDirection: 'row',
    marginHorizontal: 40,
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  statistic: {
    alignItems: 'center',
  },
  count: {
    fontSize: 24,
    fontWeight: '700',
  },
  category: {
    color: GRAY_COLOR,
  },
  gallery: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageWrapper: {
    width: 160,
    height: 200,
    margin: 5
  },
  image: {
    flex: 1,
    borderRadius:10,
    width: null,
    height: null,
  }
});