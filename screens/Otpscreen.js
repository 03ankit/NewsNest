import { useState,useEffect } from "react";
import { View, Text, Alert, StyleSheet } from "react-native";
import { CodeField, Cursor } from "react-native-confirmation-code-field";
import styles from "../styles";
import CustomButton from "../components/CustomButton";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { verifyingVerificationCode } from "../auth/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
const CELL_COUNT = 4;

export default function Otpscreen({ navigation ,route}) {

  const [otp, setOtp] = useState("");
  const [mobile, setMobile] = useState(""); 

  useEffect(() => {
    getMobile();
  }, []);

  const getMobile = async () => {
    if (route?.params?.mobile) {
      setMobile(route.params.mobile);
    } else {
      const storedMobile = await AsyncStorage.getItem("tempMobile");
      setMobile(storedMobile);
    }
  };

  const onOtpComplete = () => {
    if (otp.length !== 4) {
      Alert.alert("Error", "Please enter valid OTP");
    }
        console.log("OTP complete:", otp, mobile);
        const mobileDetails = {
            otp: otp,
            mobileNo:mobile
        }
        verifyingVerificationCode(mobileDetails, verifyingVerificationCodeCallback)
    };

    const verifyingVerificationCodeCallback = async(success, error) => {
      if (success) {
      await AsyncStorage.setItem(
        "userData",
        JSON.stringify({ mobile })
      );

      await AsyncStorage.removeItem("tempMobile");

      Alert.alert("Success", "OTP Verified Successfully");

      navigation.reset({
        index: 0,
        routes: [{ name: "Profile" }],
      });
    } else {
    Alert.alert("Error", error?.message || "OTP Verification Failed");
  }
  };


  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: hp("2.5%"), textAlign: "center" , marginTop: hp("20%") }}>
          Enter the OTP sent to {mobile}
        </Text>
      <View style={{ marginTop: hp("20%") }}>
        
        <CodeField
          value={otp}
          onChangeText={setOtp}
          cellCount={CELL_COUNT}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoFocus
          renderCell={({ index, symbol, isFocused }) => (
            <View
              key={index}
              style={[
                local.cell,
                isFocused && local.focusCell,
              ]}
            >
              <Text style={local.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
      </View>

      <CustomButton
        text="Verify OTP"
        style={{ marginTop: hp("5%") }}
        onPress={onOtpComplete}
      />
    </View>
  );
}


const local = StyleSheet.create({
  cell: {
    width: 55,
    height: 55,
    borderWidth: 2,
    borderColor: "#2d64f5",
    borderRadius: 8,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  focusCell: {
    borderColor: "#4f7cff",
  },
  cellText: {
    fontSize: hp("3%"),
    color: "white",
  },
});