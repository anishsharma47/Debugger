import React from 'react';
import navigationStrings from './navigationStrings';
import * as Screens from '../Screens';


export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.TAB_ROUTES}
        component={Screens.HomeScreen}
        options={{headerShown: false, title: 'Profile'}}
      />
    </>
  );
}
