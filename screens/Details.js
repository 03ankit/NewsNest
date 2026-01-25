import { View, Text, Image, StyleSheet ,ScrollView,TouchableOpacity} from "react-native";
import { heightPercentageToDP as hp} from "react-native-responsive-screen";

import { useState } from "react";
export default function DetailsScreen({ route ,navigation }) {
  const { item } = route.params;
  

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                  <Text style={{color:"white", fontSize:20 }}>←</Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: item.urlToImage }} style={styles.image}/>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>
          {item.content || item.description || "No content available"}
        </Text>
      </ScrollView>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex:1,
    backgroundColor: '#0f1c2e',
    padding: hp("1%")
  },
  image: { 
    marginTop: hp("3%"),
    height: 250, 
    borderRadius: 10
   },
  title: { 
    fontSize: 18, 
    fontWeight: "bold",
    color: "white", 
    marginVertical: 10 },
  content: { 
    fontSize: 14,
    color: "white", 
    lineHeight: 22 },
  backButton:{
    width:hp("5%"),
    height:hp("5%"),
    borderWidth:1,
    borderColor:"white",
    marginLeft:hp("2.5%"),
    marginTop:hp("5%"),
    borderRadius:hp("3%"),
    alignItems:"center",

  },
});

