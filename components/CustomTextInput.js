import { TextInput,StyleSheet } from "react-native";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";
const CustomTextInput = (props) => {
    return(
        <TextInput 
            style={styles.inputone}
            placeholder={props.placeholder}
            //placeholderTextColour:{props.placeholderTextColor||"#0f1c2e""}
            placeholderTextColor={props.placeholderTextColor || "#2d64f5"}
            onChangeText={props.onChangeText}
            value={props.value}
            secureTextEntry={props.secureTextEntry}
            
        />
    )
}


export default CustomTextInput;
const styles = StyleSheet.create({


    inputone: {
    borderWidth: 2,
    borderColor: "#e1e5eb",
    borderRadius: hp("4%"),
    padding: hp("1.5%"),
    margin: hp("2%"),
    fontSize: hp("2%"),
    color: "black",
  },
  
})