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
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { AuthContext } from '../Context';
import allImages from './allImages';

const Header = ({ openDrawer }) => {
    const { logout, access } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={openDrawer}>
                <Image
                    source={allImages.burgerLogo}
                    style={{
                        width: 24,
                        height: 24,
                        opacity: 0.6
                    }}
                    resizeMode={'contain'}
                />
            </TouchableOpacity>
            <Image
                source={allImages.companyLogo}
                style={{
                    height: 55,
                    marginRight: 3,
                    marginBottom: 12
                }}
                resizeMode={'contain'}
            />
            <View style={{ width: 24 }}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff'
    },
    buttonStyle: {},
    buttonLabelStyle: {
        fontSize: 18,
        color: '#0070d2',
        fontWeight: '300'
    },
});

export default Header;