import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";


const CustomButton = (props) => {
    
    return(
        <TouchableOpacity style={styles.loginBtn} onPress={props.onPress}>
            <Text style={styles.loginText}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;


const styles = StyleSheet.create({
  loginBtn: {
    backgroundColor: "#2d64f5",
    padding: hp("1.5%"),
    borderRadius: hp("4%"),
    margin:hp("2%"),
  },

  loginText: {
    color: "#fff",
    fontSize: hp("2.2%"),
    textAlign:"center",
  },
})








// <TouchableOpacity
        //     onPress={props.onPress}
        //     disabled={props.disabled}
        //     style={[
        //         styles.BtnStyle,
        //         {
        //             opacity: props.disabled ? 0.7 : 1.0,
        //             backgroundColor: "blue"
        //         }
        //     ]}>
        //     <Text 
        //         allowFontScaling={false}
        //         style={[
        //             styles.btnTextStyle,
        //             {
        //                  color:"black"
        //             }
        //         ]}>
        //         {props.text}
        //     </Text>
        // </TouchableOpacity>