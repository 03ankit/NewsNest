import {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Splashscreen({navigation}) {
    useEffect(() => {
        const checkUserData = async () => {
            try {
                const userData = await AsyncStorage.getItem('userData');
                if (userData !== null) {
                    navigation.navigate("Bottomtab");
                } else {
                    navigation.navigate("PhoneNumberScreen");
                }
            } catch (e) {
                console.log("Failed to retrieve the data from storage");
                navigation.replace('PhoneNumberScreen');
            }
        };
        checkUserData();
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image source={require('../asset/splash.png')} style={styles.logo} />
        </View>
    );
}

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    logo: {
        width: 80,
        height: 80,
    },
});