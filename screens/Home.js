import { useEffect, useState } from "react";
import { View, FlatList , Text, Image, TouchableOpacity ,RefreshControl} from "react-native";
import { getNewsByCategory } from "../srevice/Api";
import styles from "../styles";
import Loader from "../screens/Loader";
import CategoryList from "../screens/CategoryList";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";


export default function HomeScreen({ navigation }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("general");
  const [refreshing ,setRefreshing]=useState(false);
  useEffect(() => {
    fetchNews();
  }, [category]);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const data = await getNewsByCategory(category);
      setNews(data);
    } catch (error) {
      console.error(error);
      alert("Error fetching news");
    } finally {
      setLoading(false);
    }
  };
  const onRefresh = async () => {
  setRefreshing(true);
  try {
    const data = await getNewsByCategory(category);
    setNews(data);
  } catch (error) {
    alert("Error refreshing news");
  } finally {
    setRefreshing(false);
  }
};

  

  return (
    <View  style={styles.container}>
      {loading? <Loader /> : null}
      <CategoryList selected={category} onSelect={setCategory} />

      <FlatList data={news} keyExtractor={(item, index) => index.toString()} 
        refreshControl={<RefreshControl refreshing={refreshing}onRefresh={onRefresh}/>}
        renderItem={({ item }) => (
          
        <TouchableOpacity onPress={() =>  navigation.navigate("Details", { item })}>
          <View style={{ margin: 10 }}>
            <Image
              source={{ uri: item.urlToImage }}
              style={{ height: hp("30"), borderRadius: hp("2%") }}
            />
            <Text style={{ fontSize: 16, fontWeight: "bold" , color: "white", marginTop: 5 }}>
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>     
        )}
      />
    </View>
  );
}
