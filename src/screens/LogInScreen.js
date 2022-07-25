import React, {
    Node,
    useContext,
    useEffect,
    useState
} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
    Image,
    ActivityIndicator
} from 'react-native';
import { AuthContext } from '../Context';
import allImages from '../components/allImages';

const LogInScreen = () => {
    const { loading, handleLogIn } = useContext(AuthContext)
    const [username, setUsername] = useState('cyber.sav@outlook.com')
    const [password, setPassword] = useState('Learning@123')
    const [token, setToken] = useState('TP9DQ3WUYvMMZ3e2AJ5ecDsmc')
    const [error, setError] = useState(null)
    useEffect(() => {
        setError(null)
    }, [username, password, token])
    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <Image
                source={allImages.companyLogo}
                style={{
                    height: 80,
                    marginBottom: 16
                }}
                resizeMode={'contain'}
            />
            {error && <View
                style={{
                    width: '72%',
                    paddingBottom: 12
                }}>
                <Text style={{
                    fontSize: 12,
                    color: 'red',
                    fontFamily: 'Poppins-Regular'
                }}>{error}</Text>
            </View>}
            <View style={styles.containerStyle}>
                <Text style={styles.labelStyle}>Username</Text>
                <TextInput
                    value={username}
                    onChangeText={text => setUsername(text)}
                    style={styles.inputStyle}
                />
                <Text style={styles.labelStyle}>Password</Text>
                <TextInput
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                    style={styles.inputStyle}
                />
                <Text style={styles.labelStyle}>Security Token</Text>
                <TextInput
                    value={token}
                    onChangeText={text => setToken(text)}
                    style={styles.inputStyle}
                />
                {
                    loading ?
                    <View style={{ padding: 20 }}>
                        <ActivityIndicator
                            size={28}
                            color='#0070d2'
                        />
                    </View>
                     :
                    <TouchableOpacity
                        onPress={() => handleLogIn(username, password, token, (message) => {
                            setError(message)
                        })}
                        style={styles.buttonStyle}>
                        <Text style={styles.buttonLabelStyle}>LOG IN</Text>
                    </TouchableOpacity>
                }
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    containerStyle: {
        width: '80%',
        padding: 22,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#D8DDE6',
        borderRadius: 5,
        marginBottom: 40
    },
    labelStyle: {
        fontSize: 13,
        color: '#54698d',
        marginBottom: 12,
        fontFamily: 'Poppins-Regular'
    },
    inputStyle: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#D8DDE6',
        borderRadius: 5,
        color: '#000',
        padding: 16,
        fontSize: 13,
        marginBottom: 16,
        fontFamily: 'Poppins-Regular'
    },
    buttonStyle: {
        backgroundColor: '#0070d2',
        borderRadius: 5,
        alignItems: 'center',
        padding: 20
    },
    buttonLabelStyle: {
        fontSize: 14,
        color: '#fff',
        fontFamily: 'Poppins-SemiBold'
    }
});

export default LogInScreen;
  