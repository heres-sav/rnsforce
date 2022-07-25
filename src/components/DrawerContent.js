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
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { AuthContext } from '../Context';
import allImages from './allImages';

const DrawerContent = () => {
    const { logout, access } = useContext(AuthContext)
    return (
        <View style={{
            flex: 1
        }}>
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        width: 88,
                        height: 88,
                        alignSelf: 'center',
                        margin: 28,
                        backgroundColor: '#2666CF',
                        borderRadius: 50
                    }}
                />
                <View style={{
                    paddingLeft: 20,
                    paddingRight: 20
                }}>
                    <Text
                        style={{
                            color: '#444',
                            fontSize: 16,
                            fontFamily: 'Poppins-Regular'
                        }}>Chandler Bing</Text>
                    <Text
                        style={{
                            color: '#444',
                            fontSize: 12,
                            fontFamily: 'Poppins-Regular'
                        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => logout()}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 20,
                    backgroundColor: '#2666CF66'
                }}>
                <Image
                    style={{
                        width: 22,
                        height: 22,
                        marginRight: 20
                    }}
                    source={allImages.logoutLogo}
                />
                <Text style={{
                    fontSize: 18,
                    color: '#000',
                    fontFamily: 'Poppins-SemiBold'
                }}>LOG OUT</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({});

export default DrawerContent;