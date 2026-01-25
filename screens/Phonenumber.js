import { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Alert, Keyboard,} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { sendVerificationCode } from "../auth/index";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function PhoneNumberScreen({ navigation }) {
  const [mobile, setMobile] = useState("");
   const [phone, setphone] = useState("");
  const completeMobile = `+91${mobile}`;

  // const storeData = async () => {
  //       try {
  //           const userData = {
  //               mobile: mobile};
  //           if(!mobile){
  //               Alert.alert("Error","Please fill all the fields");
  //               return;
  //           }
  //           else{
  //               await AsyncStorage.setItem('userData', JSON.stringify(userData));
  //               console.log("Data Stored");
  //               //Alert.alert("Success","You have registered successfully");
  //               navigation.reset("Bottomtab");
  //           }
  //       }catch (e){
  //           console.log("Failed to save the data to the storage");
  //           Alert.alert("Failed to save the data to the storage");    
  //       }
  //   }





   const sendOTP = async () => {
        // Keyboard.dismiss()
        // setLoading(true)
        // let countryDialCode = country.countryCode || '+91'

         if (mobile.length !== 10) {
            Alert.alert("Invalid Number", "Enter 10 digit mobile number");
            return;
        }
        await AsyncStorage.setItem("tempMobile", completeMobile);
       
        //console.log('mobile no for sending OTP -', completeMobile)
        sendVerificationCode(completeMobile, sendVerificationCodeCallback);
       //props.sendVerificationCode(completeMobile, sendVerificationCodeCallback)
    }

    const sendVerificationCodeCallback = (success, error) => {
        console.log('Twilio callback executed')
        // setLoading(false)

        if(success) {
            navigation.navigate("Otpscreen", { mobile: completeMobile },mobile);
        }
        else 
        {
            if (error == 'Max send attempts reached' || 
                error == 'Rate limit for phone number and service reached'  || 
                error == "Rate limit for phone number and account reached") {
                Alert.alert("Error", "You have reached the maximum number of OTP requests. Please try again later.");
                // showAlert(strings.tooManyRequests, strings.maxOtpSent)
            }
            else if (error.includes('Invalid parameter')) {
                Alert.alert("Error", "The mobile number entered is invalid. Please check and try again.");
                // showAlert(strings.invalidNo, strings.invalidMobileNo)
            }
            else if (error.includes('blocked by Twilio')) {
                Alert.alert("Error", "The mobile number entered is blocked. Please use a different number.");
                // showAlert(strings.blockedNo, strings.blockedMobileNo)
            } else {
                Alert.alert("Error", "Failed to send OTP. Please try again.");
                // showAlert(strings.codeSendingFail, strings.otpNotSend)
            }
        }     
    }

//   const onSendOTP = () => {
//     if (mobile.length !== 10) {
//       Alert.alert("Invalid Number", "Enter 10 digit mobile number");
//       return;
//     }

//     const fullNumber = `+91${mobile}`;
//     navigation.navigate("Otp", { mobile: fullNumber });
//   };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login with Mobile</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.prefix}>+91</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter mobile number"
          placeholderTextColor={"white"}
          keyboardType="number-pad"
          maxLength={10}
          value={mobile}
          onChangeText={setMobile}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={sendOTP}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#0f1c2e",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "white",
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  prefix: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 6,
    color: "white",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "white",
  },
  button: {
    marginTop: 30,
    backgroundColor: "#2563EB",
    padding: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
