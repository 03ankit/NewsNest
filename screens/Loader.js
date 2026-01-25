import { ActivityIndicator, View } from "react-native";

export default function Loader() {
  return (
    <View style={{ flex:1, justifyContent:"center" ,opacity:0.51,backgroundColor:"black",position:"absolute",alignItems:"center",
    top:0,bottom:0,left:0,right:0}}>
      <ActivityIndicator size="large" />
    </View>
  );
}
