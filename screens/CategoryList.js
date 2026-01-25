import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const categories = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

export default function CategoryList({ selected, onSelect }) {
  return (
    <View style={styles.scroll}>
        <Text style={styles.appname}>NewsNest</Text> 
        <FlatList horizontal showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
            const isActive = selected === item;
            return (
            <TouchableOpacity onPress={() => onSelect(item)} style={[ styles.container,
                { backgroundColor: isActive ? "#007AFF" : "#E5E5E5" },]}>
                <Text style={[ styles.text,{ color: isActive ? "#fff" : "#000" },]}>
                {item.toUpperCase()}
                </Text>
            </TouchableOpacity>
            );
        }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  scroll:{
    paddingTop:hp("5%"),
  },
  appname:{
    color:"white",
    fontSize:22,
    fontWeight:"bold",
    marginLeft:hp("2.5%")
  },

  container: {
    marginTop: hp("2%"),
    paddingVertical: hp("1.5%"),
    paddingHorizontal: hp("2%"),
    marginHorizontal: 6,
    borderRadius: hp("5%"),
    marginBottom: hp("1%"), 
  },
  text: {
    textAlign: "center",
    fontSize: hp("1.6%"),
    fontWeight: "bold ",
  },
});
