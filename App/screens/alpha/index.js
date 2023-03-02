import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'

export class Alpha extends React.Component {
  static navigationOptions = {
    title: ('Alpha').toLowerCase(),
    tabBarLabel: 'Alpha',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image source={require('./../../icons/alpha.png')} style={{ height: responsiveHeight(3.5), width: responsiveWidth(7) }} resizeMode="contain" />
    )
  };

  render() {
    return (
      <View>
      </View>
    )
  }
}
