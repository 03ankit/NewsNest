import {useState} from "react";
import { View, Text ,TouchableOpacity,Alert} from "react-native";
import styles from "../styles";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { heightPercentageToDP as hp } from "react-native-responsive-screen";



export default function Register({ navigation }) {
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [address,setaddress]=useState("");

   

    const storeData = async () => {
        try {
            const userData = {
                name: name,
                email: email,
                address: address,
            };
            if(!name || !email || !address){
                Alert.alert("Error","Please fill all the fields");
                return;
            }
            else{
                await AsyncStorage.setItem('userData', JSON.stringify(userData));
                console.log("Data Stored");
                //Alert.alert("Success","You have registered successfully");
                navigation.replace("Bottomtab");
            }
        }catch (e){
            console.log("Failed to save the data to the storage");
            Alert.alert("Failed to save the data to the storage");    
        }
    }
    return(
        <View style={styles.container}>
            {/* <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Login")}>
                <Text style={{color:"white", fontSize:20 }}>←</Text>
            </TouchableOpacity> */}
            <View style={styles.header}>
                <Text style={styles.title}>Create Your Account</Text>
                <Text style={styles.subtitle}>Sign up to get started!</Text>
            </View>

            <View style={styles.card}>  
                {/* <View style={styles.toggle}>
                    <TouchableOpacity style={styles.activeToggle}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.togglebtnRegister}>
                        <Text>Register</Text>
                    </TouchableOpacity> 
                </View>     */}
                <View style={{marginTop:hp("5%")}}>
                    <CustomTextInput placeholder="Name" value={name} onChangeText={setname} />
                    <CustomTextInput placeholder="Email" value={email} onChangeText={setemail}/>
                    <CustomTextInput placeholder="Address" value={address} onChangeText={setaddress}/>
                    {/* <CustomTextInput placeholder="Phone" value={phone} onChangeText={setphone}/>  
                    {/* <CustomTextInput placeholder="Password" secureTextEntry={true} value={password} onChangeText={setpassword}  /> */}
                    <CustomButton text="Register" onPress={storeData } />
                </View>
            </View>
        </View>
    
    );
}   
