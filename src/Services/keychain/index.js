import * as Keychain from 'react-native-keychain';
import { saveTokenFromKeychain } from '../../redux/authSlice';
import { useDispatch } from 'react-redux'

const saveTokenOnKeychain = async (token) => {
    await Keychain.setGenericPassword('username', token);
}

const getTokenOnKeychain = async () => {
    const dispatch = useDispatch()
    try {
        const credentials = await Keychain.getGenericPassword();
        if (credentials) {
            dispatch(saveTokenFromKeychain(credentials.password))
        } else {
            console.log('No credentials stored');
        }
    } catch (error) {
        console.log("Keychain couldn't be accessed!", error);
    }
}

const removeTokenOnKeychain = async () => {
    await Keychain.resetGenericPassword();
}

export { saveTokenOnKeychain, removeTokenOnKeychain, getTokenOnKeychain }