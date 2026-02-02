import React, { useState, useEffect } from "react";
import { View, Text, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import styles from "../styles";

export default function Profile({ navigation }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState(""); 
  const [phone, setPhone] = useState("");
  const [isEdit, setIsEdit] = useState(true);
  const [isProfileCompleted, setIsProfileCompleted] = useState(false);

  useEffect(() => {
    loadUser();
  }, []);
  
  




  // const getMobile = async () => {
  //   if (route?.params?.mobile) {
  //     setMobile(route.params.mobile);
  //   } else {
  //     const storedMobile = await AsyncStorage.getItem("tempMobile");
  //     setMobile(storedMobile);
  //   }
  // };


  const loadUser = async () => {
    const data = await AsyncStorage.getItem("userData");

    if (data) {
      const user = JSON.parse(data);
      setMobile(user.mobile || "");
      //setPhone(user.mobile || "");
      setIsProfileCompleted(user.isProfileCompleted || false);
      if (user.isProfileCompleted) {
        setName(user.name);
        setEmail(user.email);
        setAddress(user.address);
        setIsEdit(false);
      }
    }
  };

  const saveUser = async () => {
    if (!name || !email || !address) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    
    if (!isValidEmail(email)) {
      Alert.alert("Error", "Please enter a valid email");
      return;
    }

    const userData = {
      mobile: mobile,
      name,
      email,
      address,
      isProfileCompleted: true, 
    };

    await AsyncStorage.setItem("userData", JSON.stringify(userData));

    Alert.alert("Success", "Profile Submitted");
    setIsProfileCompleted(true);
    setIsEdit(false);

    navigation.replace("Bottomtab");
  };

  const logout = async () => {
    await AsyncStorage.removeItem("userData");
    navigation.replace("PhoneNumberScreen");
  };

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>Profile</Text>
    </View>
        <View style={styles.card}>
           <CustomTextInput
          placeholder="Name"
          value={name}
          editable={isEdit}
          onChangeText={setName}
        />

        <CustomTextInput
          placeholder="Email"
          value={email}
          editable={isEdit}
          onChangeText={(text) => setEmail(text.toLowerCase())}
        />

        <CustomTextInput
          placeholder="Phone"
          value={mobile}
          editable={false}
        />

        <CustomTextInput
          placeholder="Address"
          value={address}
          editable={isEdit}
          onChangeText={setAddress}
        />
        {!isProfileCompleted && (
          <CustomButton text="Submit Profile" onPress={saveUser} />
        )}

        {isProfileCompleted && !isEdit && (
          <CustomButton text="Edit Profile" onPress={() => setIsEdit(true)} />
        )}

        {isProfileCompleted && isEdit && (
            <CustomButton text="Save Profile" onPress={saveUser} />
        )}

        {isProfileCompleted && (
          <CustomButton text="Logout" onPress={logout} />
        )}
      </View>
    </View>
  );
}
