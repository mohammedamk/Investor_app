import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'

export class Profile extends React.Component {
  static navigationOptions = {
    title: ('Me').toLowerCase(),
    tabBarLabel: 'Me',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image source={require('./../../icons/User.png')} style={{ height: responsiveHeight(3.5), width: responsiveWidth(7) }} resizeMode="contain" />
    )
  };

  render() {
    return (
      <View>
      </View>
    )
  }
}
