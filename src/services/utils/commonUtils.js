import {
    ToastAndroid
} from 'react-native';

export const toast = (message) => {
    console.log(message);
    ToastAndroid.showWithGravityAndOffset(
        message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
    );
};