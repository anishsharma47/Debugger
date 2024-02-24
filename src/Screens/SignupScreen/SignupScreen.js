//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import validator from '../../utils/vailidations';
import ButtonComp from '../../components/ButtonComp';
import TextInputComp from '../../components/TextInputComp';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {showError, showSucess} from '../../utils/helperFunctions';
import navigationStrings from '../../Navigations/navigationStrings';

import {userSignup} from '../../redux/actions/auth';

// create a component
const SignupScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const isValidData = () => {
    const error = validator({userName, email, password, fullName});
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };

  const signUp = async () => {
    const checkValid = isValidData();
    if (checkValid) {
      setLoading(true);
      let data = {
        userName: userName,
        fullName: fullName,
        password: password,
        email: email,
      };
      try {
        console.log('here>>');
        const res = await userSignup(data);
        console.log('signup api res', res);
        setLoading(false);
        showSucess('you register successfully please login');
        navigation.navigate(navigationStrings.LOGINSCREEN);
      } catch (error) {
        console.log('error in signUp api', error);
        showError(error?.error);
        setLoading(false);
      }
    }
  };

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <View
        style={{
          flex: 0.3,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.orangeColor,
        }}>
        <Text style={{color: colors.whiteColor, fontSize: textScale(70)}}>
          Debugger
        </Text>
      </View>

      <View
        style={{
          flex: 0.7,
          backgroundColor: colors.whiteColor,
          borderRadius: moderateScale(20),
          marginTop: moderateScaleVertical(-20),
          padding: moderateScale(20),
          justifyContent: 'space-between',
        }}>
        <KeyboardAwareScrollView>
          <View>
            <Text
              style={{
                fontSize: textScale(26),
                color: colors.blackColor,
                fontWeight: 'bold',
              }}>
              Signup
            </Text>

            <View style={{marginTop: moderateScaleVertical(20)}}>
              <TextInputComp
                value={userName}
                inputStyle={{...styles.boxWithShadow, ...styles.inputStyle}}
                placeholder="User Name"
                onChangeText={value => setUserName(value)}
              />
              <TextInputComp
                value={fullName}
                inputStyle={{...styles.boxWithShadow, ...styles.inputStyle}}
                placeholder="Full Name"
                onChangeText={value => setFullName(value)}
              />
              <TextInputComp
                value={email}
                inputStyle={{...styles.boxWithShadow, ...styles.inputStyle}}
                placeholder="E-mail"
                onChangeText={value => setEmail(value)}
              />
              <TextInputComp
                value={password}
                inputStyle={{...styles.boxWithShadow, ...styles.inputStyle}}
                placeholder="Password"
                onChangeText={value => setPassword(value)}
              />
            </View>
          </View>
          <ButtonComp
            isLoading={isLoading}
            text="Create Account"
            onPress={() => signUp()}
          />
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  boxWithShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  inputStyle: {
    backgroundColor: colors.whiteColor,
    marginVertical: moderateScaleVertical(4),
    borderRadius: moderateScale(50),
  },
});

//make this component available to the app
export default SignupScreen;
