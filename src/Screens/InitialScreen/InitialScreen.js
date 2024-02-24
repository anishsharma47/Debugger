//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import WrapperComp from '../../components/WrapperComp';
import colors from '../../styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';
import imagePath from '../../constants/imagePath';
import ButtonComp from '../../components/ButtonComp';
import navigationStrings from '../../Navigations/navigationStrings';

// create a component
const InitialScreen = ({navigation}) => {
  function login() {
    navigation.navigate(navigationStrings.LOGINSCREEN);
  }

  async function signUp() {
    navigation.navigate(navigationStrings.SIGNUPSCREEN);
  }

  return (
    <WrapperComp>
      <View
        style={{
          flex: 0.3,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.heading}>User Authantication</Text>
          <Text style={styles.heading}>System</Text>
          <Text style={styles.subHeading}>implemented by</Text>
        </View>
      </View>

      <View style={{flex: 0.7, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{
            width: moderateScale(120),
            height: moderateScale(120),
            objectFit: 'contain',
          }}
          source={imagePath.logo}
        />
      </View>

      <View
        style={{
          marginBottom: 0,
          flex: 0.4,
          justifyContent: 'center',
          gap: moderateScaleVertical(20),
        }}>
        <ButtonComp text="Sign up" onPress={() => signUp()} />

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{color: colors.gray3, letterSpacing: 1}}>
            Already have an account?
          </Text>
          <TouchableOpacity activeOpacity={0.7} onPress={() => login()}>
            <Text
              style={{color: colors.blackColor, marginLeft: moderateScale(6)}}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </WrapperComp>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  heading: {
    color: colors.orangeColor,
    fontSize: textScale(26),
    fontWeight: 'bold',
  },
  subHeading: {
    color: colors.gray3,
    letterSpacing: 1,
    marginTop: moderateScaleVertical(10),
  },
});

//make this component available to the app
export default InitialScreen;
