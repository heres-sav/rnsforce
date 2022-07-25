import React, {
    Node,
    useContext,
    useEffect,
    useState
} from 'react';
import {
    View,
    SafeAreaView,
    Text,
    Image,
    FlatList,
    Animated,
    Easing,
    ActivityIndicator,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { AuthContext } from '../Context';
import Header from '../components/Header';
import allImages from '../components/allImages';

const MainScreen = ({ navigation }) => {
    const { logout, access } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [objects, setObjects] = useState([])
    const spinValue = new Animated.Value(0)
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '60deg']
    })
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = () => {
        setLoading(true)
        const query = 'SELECT Id, Name, Type FROM Account LIMIT 100'
        fetch(`https://learning-5f-dev-ed.my.salesforce.com/services/data/v42.0/query?q=${query}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${access.access_token}`
            }
        })
        .then(async response => {
            const data = await response.json();
            if(data.done) {
                setObjects(data.records)
            }
            setLoading(false)
        })
        .catch(err => {
            setLoading(false)
            console.log(err)
        })
    }
    const renderItem = ({item}) => {
        let container = []
        for(let each in item) {
            if(each !== 'attributes')
                container.push(<Text
                    key={item.Id+item[each]}
                    style={styles.itemSub}>
                    {each}: {item[each]}
                </Text>)
        }
        return (<View style={{ padding: 10 }}>
            <Text style={styles.itemTitle}>{item.Name}</Text>
            {container}
        </View>)
    }
    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <Header openDrawer={() => navigation.openDrawer()} />
            <View style={styles.recordHead}>
                <Text style={styles.recordHeadTitle}>Accounts</Text>
                <TouchableOpacity
                    disabled={loading}
                    onPressIn={() => {
                        Animated.spring(spinValue, {
                            toValue: 1,
                            duration: 10,
                            easing: Easing.linear,
                            useNativeDriver: true,
                        }).start();
                    }}
                    onPressOut={() => {
                        Animated.spring(spinValue, {
                            toValue: 0,
                            duration: 10,
                            easing: Easing.linear,
                            useNativeDriver: true,
                        }).start();
                    }}
                    onPress={fetchData}
                    >
                    <Animated.View style={{transform: [{rotate: spin}] }}>
                        <Image
                            source={allImages.refreshLogo}
                            style={{
                                width: 18,
                                height: 18,
                                opacity: 0.6
                            }}
                            resizeMode={'contain'}
                        />
                    </Animated.View>
                </TouchableOpacity>
            </View>
            {
                loading ?
                <View style={{ padding: 20 }}>
                    <ActivityIndicator
                        size={36}
                        color='#0070d2'
                    />
                </View>
                 :
                <FlatList
                    data={objects}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => 'key_' + index}
                />
            }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1,
        backgroundColor: '#fff'
    },
    itemTitle: {
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold'
    },
    itemSub: {
        fontSize: 13,
        fontFamily: 'Poppins-Regular'
    },
    recordHead: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#c9c9c9',
        margin: 4,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 20,
        borderRadius: 8
    },
    recordHeadTitle: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold'
    }
});

export default MainScreen;