import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import CustomButton from "./components/CustomButton";
import { AntDesign } from '@expo/vector-icons';


export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lets Sign you in</Text>
            <Text style={styles.description}>Welcome Back , You have been missed</Text>
            <TextInput
                placeholder="Email , phone & username"
                placeholderTextColor="#555454"
                style={styles.input}
                secureTextEntry={false}
                autoCapitalize="none"
            />
            <TextInput
                placeholder="Password"
                placeholderTextColor="#555454"
                style={styles.input}
                secureTextEntry={true}
                autoCapitalize="none"
            />
            <Text style={styles.password}>Forgot Password ? </Text>
            <CustomButton title="Sign in"/>
            <View style={{flexDirection: 'row', alignItems: 'center' , padding: 20}}>
                <View style={{flex: 1, height: 0.4, backgroundColor: '#585858', marginRight: 10}}/>
                    <Text>or</Text>
                <View style={{flex: 1, height: 0.4, backgroundColor: '#585858', marginLeft: 10}}/>
            </View>
            <View style={styles.iconContainer}>
                <AntDesign name="google" size={30} style={styles.icon} color="black" />
                <AntDesign name="facebook-square" size={30} style={styles.icon} color="black" />
                <AntDesign name="apple1" size={30} style={styles.icon} color="black" />
            </View>
            <View style={styles.register}>
                <Text style={styles.haveAccount}>Don't have an account ? </Text>
                <Text style={styles.now}> Register Now</Text>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 37,
        lineHeight: 47,
        textAlign: "left",
    },
    description: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 28,
        lineHeight: 35,
        textAlign: "left",
        padding: 30
    },
    input: {
        height: 49,
        width: 342,
        padding: 10,
        borderRadius: 5,
        borderWidth: 0.5,
        marginBottom: 4,
        borderColor: '#8E8383',
        backgroundColor: 'white'
    },
    password: {
        color: '#000',
        marginTop: 10,
        marginBottom: 30,
        marginLeft: 200
    },
    iconContainer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row',
        alignContent: 'center',
        marginLeft: 35
    },
    icon: {
        marginRight: 30,
    },
    register: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 30
    },
    haveAccount: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20
    },
    now: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
        fontStyle: 'normal'
    }
});
