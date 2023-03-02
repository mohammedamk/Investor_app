import React from 'react'
import {
  View
} from 'react-native'
import {
  createDrawerNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import * as Screens from './screens'

const tab = createMaterialTopTabNavigator({
  home: { screen: Screens.Home },
  accounts: { screen: Screens.Accounts },
  buy: { screen: Screens.Buy },
  alpha: { screen: Screens.Alpha },
  profile: { screen: Screens.Profile }
},
{
  tabBarPosition: 'bottom',
  animationEnabled: false,
  lazy: true,
  tabBarOptions:
    {
      tabStyle:{
        backgroundColor: 'white'
      },
      style: {
        borderTopWidth: 0.4,
        elevation: 6,
        justifyContent: 'center',
        color: '#808A9A',
        borderColor: 'transparent',
        backgroundColor: 'white',
        height: '9%'
      },
      labelStyle: {
        fontSize: responsiveFontSize(1.1),
        fontFamily: 'Sofia Pro Regular',
        color: '#808A9A'
      },
      activeTintColor: '#808A9A',
      upperCaseLabel: false,
      inactiveTintColor: '#808A9A',
      indicatorStyle: {
        borderBottomColor: 'transparent',
        borderBottomWidth: 1
      },
      showIcon: true,
      showLabel: true,

    },

  });

  const Investor = createStackNavigator({
    tab: { screen: tab }
  },{
    headerMode: 'none'
  })

  export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Investor />
      </View>
    );
  }
}
