//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import WrapperComp from '../../components/WrapperComp';
import {
  moderateScale,
  textScale,
} from '../../styles/responsiveSize';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import fonstFamily from '../../styles/fonstFamily';
import ButtonComp from '../../components/ButtonComp';
import {logout} from '../../redux/actions/auth';
import {useSelector} from 'react-redux';

// create a component
const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const userData = useSelector(state => state.auth.userData);

  return (
    <WrapperComp>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            width: moderateScale(50),
            height: moderateScale(50),
            justifyContent: 'center',
            alignItems: 'center',
            padding: moderateScale(5),
          }}>
          <Image
            style={{width: '100%', height: '199%', objectFit: 'contain'}}
            source={imagePath.logo}
          />
        </View>
        <Text
          style={{
            color: colors.blackColor,
            fontSize: textScale(16),
            fontWeight: '600',
            textTransform: 'capitalize',
          }}>
          Debugger
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: colors.blackColor,
              fontSize: textScale(18),
              fontFamily: fonstFamily.bold,
            }}>
            Welcome To{' '}
          </Text>
          <Text
            style={{
              color: colors.orangeColor,
              fontSize: textScale(18),
              fontFamily: fonstFamily.bold,
            }}>
            {userData?.data?.fullName}{' '}
          </Text>
        </View>
        <View
          style={{
            width: moderateScale(120),
            height: moderateScale(120),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: '100%', height: '199%', objectFit: 'contain'}}
            source={imagePath.logo}
          />
        </View>
        <Text style={{color: colors.blackColor, fontSize: textScale(22)}}>
          Debugger
        </Text>
      </View>
      <ButtonComp
        isLoading={isLoading}
        text="Logout"
        onPress={() => logout()}
        style={{marginBottom: moderateScale(30)}}
      />
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
});

//make this component available to the app
export default HomeScreen;
