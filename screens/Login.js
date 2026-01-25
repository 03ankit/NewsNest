import {useState,useEffect} from 'react';
import {View,Text,TouchableOpacity,Image,Alert} from 'react-native';
import styles from '../styles';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Login({ navigation }) {
  const [mode, setMode] = useState("login");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const storeData = async () => {
        try {
            const userData = {
                name: name,
                email: email,
                password: password,};
            if(!name || !email || !password){
                Alert.alert("Error","Please fill all the fields");
                return;
            }
            else{
                await AsyncStorage.setItem('userData', JSON.stringify(userData));
                console.log("Data Stored");
                Alert.alert("Success","You have registered successfully");
                navigation.navigate("Otpscreen");
            }
        }catch (e){
            console.log("Failed to save the data to the storage");
        }
    }

  const loginUser = async () => {
    const storedUser = await AsyncStorage.getItem("userData");
    if (!storedUser) {
      if (rememberMe) {
        await AsyncStorage.setItem("isLoggedIn", "true");
        await AsyncStorage.setItem("loggedInUser", email);
      }
      Alert.alert("Error", "No user found. Please register first.");
      return;
    }
    const user = JSON.parse(storedUser);

    if (user.email === email && user.password === password) {
      console.log("Login Successful");
      navigation.navigate("Home");
    } else {
      Alert.alert("Error", "Invalid Credentials");
    }  
    
    useEffect(() => {
      const checkRememberMe = async () => {
        const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");

        if (isLoggedIn === "true") {
          navigation.navigate("Register");
        }
      };

      checkRememberMe();
  }, []);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Go ahead and set up Your account</Text>
        <Text style={styles.subtitle}>
          Sign-in-up to enjoy the best managing{' '}
        </Text>
      </View>
      <View style={styles.card}>
        <View style={styles.toggle}>
          <TouchableOpacity style={styles.togglebtnLogin} onPress={() => setMode('login')}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.togglebtnRegister} onPress={() => setMode('Register')}>
            <Text>Register</Text>
          </TouchableOpacity>
        </View>

        {mode === "login" ? ( 
          <>
            <CustomTextInput placeholder="E-mail ID" value={email} onChangeText={setemail} />
            <CustomTextInput placeholder="Password" secureTextEntry={true} value={password} onChangeText={setpassword} />

            <View style={styles.row}>
                <TouchableOpacity  style={styles.checkboxRow} onPress={() => setRememberMe(!rememberMe)}>
                  <Text style={styles.checkbox}>{rememberMe ? "✓" : ""}</Text>
                  <Text> Remember me</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.text}>Forget Password?</Text>
                </TouchableOpacity>
            </View>
            <CustomButton text="Login" onPress={loginUser}/>
            {/* <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity> */}

            <View style={styles.orRow}>
              <View style={styles.orLeft}></View>
              <Text style={styles.orText}>Or login with</Text>
              <View style={styles.orRight}></View>
            </View>

            <View style={styles.socialRow}>
              <View style={styles.socialBtn}>
                <Image
                  source={require('../asset/google.png')}
                  style={{ width: '20', height: '20' }}
                />
                <Text> Google</Text>
              </View>
              <View style={styles.socialBtn}>
                <Image
                  source={require('../asset/apple.png')}
                  style={{ width: '20', height: '20' }}
                />
                <Text> Apple</Text>
              </View>
            </View>
        </>
        ) : null}


      {mode === "Register" ? (
          <>
             <CustomTextInput placeholder="Name" value={name} onChangeText={setname}/>
              <CustomTextInput placeholder="Email" value={email} onChangeText={setemail}/>
              <CustomTextInput placeholder="Phone Number" value={phone} onChangeText={setphone}/>
              <CustomTextInput placeholder="Password" secureTextEntry={true} value={password} onChangeText={setpassword} />
              <CustomButton text="Register" onPress={storeData} />
          </>
      ) : null}


      </View>
    </View>
  );
}
