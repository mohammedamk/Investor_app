import React from 'react'
import {
  View,
  Image,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'

export class Home extends React.Component {
  static navigationOptions = {
    title: ('Portfolio').toLowerCase(),
    tabBarLabel: 'Portfolio',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image source={require('./../../icons/protfolio.png')} style={{ height: responsiveHeight(3.5), width: responsiveWidth(7) }} resizeMode="contain" />
    )
  };

  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={{ marginTop: '5%' }} />
        <View style={{ height: responsiveHeight(10), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: responsiveWidth(78), height: responsiveHeight(8), borderWidth: 1, borderColor: '#DBE0F4', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('./../../icons/search.png')} style={{ height: responsiveHeight(4.5), width: responsiveWidth(9), marginLeft: '2%' }} resizeMode="contain" />
            <TextInput
              style={{ flex: 1, paddingTop: 10, paddingRight: 10, paddingBottom: 10, paddingLeft: 10, backgroundColor: '#fff', color: '#000', fontSize: responsiveFontSize(2.2) }}
              placeholder="Enter keywords.."
              placeholderTextColor="#DBE0F4"
              onChangeText={(searchString) => { this.setState({ searchString }) }}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ position: 'absolute', zIndex: 999, alignSelf: 'flex-end' }}>
              <Image source={require('./../../icons/dot.png')} style={{ height: responsiveHeight(1.3), width: responsiveWidth(2.6), marginLeft: '2%', marginBottom: '30%', marginRight: '10%' }} resizeMode="contain" />
            </View>
            <Image source={require('./../../icons/notification.png')} style={{ height: responsiveHeight(4), alignSelf: 'flex-end', width: responsiveWidth(8), marginLeft: '2%' }} resizeMode="contain" />
          </View>
        </View>
        <View style={{ backgroundColor: 'transparent', width: responsiveWidth(16.5), height: responsiveHeight(10), borderRadius: 70, position: 'absolute', zIndex: 999, bottom: '2.5%', right: '2.5%', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./../../icons/filter.png')} style={{ height: responsiveHeight(12), width: responsiveWidth(24), marginTop: '10%' }} resizeMode="contain" />
        </View>
        <ScrollView>
          <View style={{ flexDirection: 'row', marginTop: '7%', marginBottom: '7%' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('buy')} style={{ height: responsiveHeight(50), overflow: 'hidden', width: responsiveWidth(40), backgroundColor: 'transparent', borderRadius: 10, marginLeft: '6.5%', flexDirection: 'column', shadowColor: '#ffffff', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.1, shadowRadius: 0.1, elevation: 2 }}>
              <View style={{ height: responsiveHeight(35) }}>
                <View style={{ position: 'absolute', zIndex: 999, backgroundColor: '#FFBC00', width: responsiveWidth(40), height: responsiveHeight(5), top: '10%', left: '-25%', transform: [{ rotate: '-45deg' }], alignItems: 'center' }}>
                  <Text numberOfLines={1} style={{ fontSize: responsiveFontSize(1.6), color: '#fff', paddingTop: '4%', fontFamily: 'Sofia Pro SemiBold' }}>Wealth</Text>
                </View>
                <Image source={require('./../../icons/image_1.png')} style={{ height: responsiveHeight(35), width: responsiveWidth(40) }} resizeMode="stretch" />
              </View>
              <View style={{ flexDirection: 'row', height: responsiveHeight(15) }}>
                <View style={{ width: responsiveWidth(11), backgroundColor: 'transparent', alignItems: 'center', marginTop: '5%' }}>
                  <Image source={require('./../../icons/image_1_icon.png')} style={{ height: responsiveHeight(4), width: responsiveWidth(8) }} resizeMode="contain" />
                </View>
                <View style={{ width: responsiveWidth(28), flexDirection: 'column' }}>
                  <Text numberOfLines={1} style={{ fontSize: responsiveFontSize(1.2), color: '#000', paddingTop: '10%', fontFamily: 'Sofia Pro SemiBold' }}>Lyondell Basell Ind.</Text>
                  <Text numberOfLines={1} style={{ fontSize: responsiveFontSize(0.9), color: '#000', paddingTop: '10%', fontFamily: 'Sofia Pro Regular' }}>Equity Investment</Text>
                  <View style={{ flexDirection: 'row', width: responsiveWidth(28) }}>
                    <Text numberOfLines={1} style={{ fontSize: responsiveFontSize(0.9), color: '#000', paddingTop: '10%', fontFamily: 'Sofia Pro Regular' }}>Energy Sector</Text>
                    <Text numberOfLines={1} style={{ fontSize: responsiveFontSize(0.9), color: '#18A41B', paddingTop: '10%', paddingLeft: '5%', fontFamily: 'Sofia Pro Bold' }}>Hardcap $40m</Text>
                  </View>
                  <Text numberOfLines={1} style={{ fontSize: responsiveFontSize(0.9), color: '#2875A8', paddingTop: '10%', fontFamily: 'Sofia Pro Regular' }}>Add to compare</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('buy')} style={{ height: responsiveHeight(50), overflow: 'hidden', width: responsiveWidth(40), backgroundColor: 'transparent', borderRadius: 10, marginLeft: '6.5%', flexDirection: 'column', shadowColor: '#ffffff', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.1, shadowRadius: 0.1, elevation: 2 }}>
              <View style={{ height: responsiveHeight(35) }}>
                <View style={{ position: 'absolute', zIndex: 999, backgroundColor: '#FFBC00', width: responsiveWidth(40), height: responsiveHeight(5), top: '10%', left: '-25%', transform: [{ rotate: '-45deg' }], alignItems: 'center' }}>
                  <Text numberOfLines={1} style={{ fontSize: responsiveFontSize(1.6), color: '#fff', paddingTop: '4%', fontFamily: 'Sofia Pro SemiBold' }}>Cover Plan</Text>
                </View>
                <Image source={require('./../../icons/image_2.png')} style={{ height: responsiveHeight(35), width: responsiveWidth(40) }} resizeMode="stretch" />
              </View>
              <View style={{ flexDirection: 'row', height: responsiveHeight(15) }}>
                <View style={{ width: responsiveWidth(11), backgroundColor: 'transparent', alignItems: 'center', marginTop: '5%' }}>
                  <Image source={require('./../../icons/image_2_icon.png')} style={{ height: responsiveHeight(4), width: responsiveWidth(8) }} resizeMode="contain" />
                </View>
                <View style={{ width: responsiveWidth(28), flexDirection: 'column' }}>
                  <Text numberOfLines={1} style={{ fontSize: responsiveFontSize(1.2), color: '#000', paddingTop: '10%', fontFamily: 'Sofia Pro SemiBold' }}>Homoradial Care and..</Text>
                  <Text numberOfLines={1} style={{ fontSize: responsiveFontSize(0.9), color: '#000', paddingTop: '10%', fontFamily: 'Sofia Pro Regular' }}>Private Health cover plan</Text>
                  <View style={{ flexDirection: 'row', width: responsiveWidth(28) }}>

                    <Text numberOfLines={1} style={{ fontSize: responsiveFontSize(0.9), color: '#18A41B', paddingTop: '10%', fontFamily: 'Sofia Pro Bold' }}>from $10 monthly</Text>
                  </View>
                  <Text numberOfLines={1} style={{ fontSize: responsiveFontSize(0.9), color: '#2875A8', paddingTop: '10%', fontFamily: 'Sofia Pro Regular' }}>Add to compare</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: '7%' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('buy')} style={{ height: responsiveHeight(50), overflow: 'hidden', width: responsiveWidth(40), backgroundColor: 'transparent', borderRadius: 10, marginLeft: '6.5%', flexDirection: 'column', shadowColor: '#ffffff', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.1, shadowRadius: 0.1, elevation: 2 }}>
              <View style={{ height: responsiveHeight(35) }}>
                <View style={{ position: 'absolute', zIndex: 999, backgroundColor: '#FFBC00', width: responsiveWidth(40), height: responsiveHeight(5), top: '10%', left: '-25%', transform: [{ rotate: '-45deg' }], alignItems: 'center' }}>
                  <Text numberOfLines={1} style={{ fontSize: responsiveFontSize(1.6), color: '#fff', paddingTop: '4%', fontFamily: 'Sofia Pro SemiBold' }}>Money</Text>
                </View>
                <Image source={require('./../../icons/image_3.png')} style={{ height: responsiveHeight(35), width: responsiveWidth(40) }} resizeMode="stretch" />
              </View>
              <View style={{ flexDirection: 'row', height: responsiveHeight(15) }}>
                <View style={{ width: responsiveWidth(11), backgroundColor: 'transparent', alignItems: 'center', marginTop: '5%' }}>
                  <Image source={require('./../../icons/image_3_icon.png')} style={{ height: responsiveHeight(4), width: responsiveWidth(8) }} resizeMode="contain" />
                </View>
                <View style={{ width: responsiveWidth(28), flexDirection: 'column' }}>
                  <Text numberOfLines={1} style={{ fontSize: responsiveFontSize(1.2), color: '#000', paddingTop: '10%', fontFamily: 'Sofia Pro SemiBold' }}>James Bonel Apartmen..</Text>
                  <View style={{ flexDirection: 'row', width: responsiveWidth(28) }}>
                    <Text numberOfLines={1} style={{ fontSize: responsiveFontSize(0.9), color: '#000', paddingTop: '10%', fontFamily: 'Sofia Pro Regular' }}>Mortgage</Text>
                    <Text numberOfLines={1} style={{ fontSize: responsiveFontSize(0.9), color: '#000', paddingTop: '10%', paddingLeft: '5%', fontFamily: 'Sofia Pro Regular' }}>3.5% APR</Text>
                  </View>
                  <View style={{ flexDirection: 'row', width: responsiveWidth(28) }}>
                    <Text numberOfLines={1} style={{ fontSize: responsiveFontSize(0.9), color: '#18A41B', paddingTop: '10%', fontFamily: 'Sofia Pro Regular' }}>$30k -200K</Text>
                    <Text numberOfLines={1} style={{ fontSize: responsiveFontSize(0.9), color: '#000', paddingTop: '10%', paddingLeft: '5%', fontFamily: 'Sofia Pro Regular' }}>Quick Approval</Text>
                  </View>
                  <Text numberOfLines={1} style={{ fontSize: responsiveFontSize(0.9), color: '#2875A8', paddingTop: '10%', fontFamily: 'Sofia Pro Regular' }}>Add to compare</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('buy')} style={{ height: responsiveHeight(50), overflow: 'hidden', width: responsiveWidth(40), backgroundColor: 'transparent', borderRadius: 10, marginLeft: '6.5%', flexDirection: 'column', shadowColor: '#ffffff', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.1, shadowRadius: 0.1, elevation: 2 }}>
              <View style={{ height: responsiveHeight(35) }}>
                <View style={{ position: 'absolute', zIndex: 999, backgroundColor: '#FFBC00', width: responsiveWidth(40), height: responsiveHeight(5), top: '10%', left: '-25%', transform: [{ rotate: '-45deg' }], alignItems: 'center' }}>
                  <Text numberOfLines={1} style={{ fontSize: responsiveFontSize(1.6), color: '#fff', paddingTop: '4%', fontFamily: 'Sofia Pro SemiBold' }}>Money</Text>
                </View>
                <Image source={require('./../../icons/image_4.png')} style={{ height: responsiveHeight(35), width: responsiveWidth(40) }} resizeMode="stretch" />
              </View>
              <View style={{ flexDirection: 'row', height: responsiveHeight(15) }}>
                <View style={{ width: responsiveWidth(11), backgroundColor: 'transparent', alignItems: 'center', marginTop: '5%' }}>
                  <Image source={require('./../../icons/image_4_icon.png')} style={{ height: responsiveHeight(4), width: responsiveWidth(8) }} resizeMode="contain" />
                </View>
                <View style={{ width: responsiveWidth(28), flexDirection: 'column' }}>
                  <Text numberOfLines={1} style={{ fontSize: responsiveFontSize(1.2), color: '#000', paddingTop: '10%', fontFamily: 'Sofia Pro SemiBold' }}>Foodzilla Meat Agenc..</Text>
                  <View style={{ flexDirection: 'row', width: responsiveWidth(28) }}>
                    <Text numberOfLines={1} style={{ fontSize: responsiveFontSize(0.9), color: '#000', paddingTop: '10%', fontFamily: 'Sofia Pro Regular' }}>Personal Loan</Text>
                    <Text numberOfLines={1} style={{ fontSize: responsiveFontSize(0.9), color: '#000', paddingTop: '10%', paddingLeft: '5%', fontFamily: 'Sofia Pro Regular' }}>9.9% APR</Text>
                  </View>
                  <View style={{ flexDirection: 'row', width: responsiveWidth(28) }}>
                    <Text numberOfLines={1} style={{ fontSize: responsiveFontSize(0.9), color: '#18A41B', paddingTop: '10%', fontFamily: 'Sofia Pro Regular' }}>$5k-$25k</Text>
                    <Text numberOfLines={1} style={{ fontSize: responsiveFontSize(0.9), color: '#000', paddingTop: '10%', paddingLeft: '5%', fontFamily: 'Sofia Pro Regular' }}>Quick Approval</Text>
                  </View>
                  <Text numberOfLines={1} style={{ fontSize: responsiveFontSize(0.9), color: '#2875A8', paddingTop: '10%', fontFamily: 'Sofia Pro Regular' }}>Add to compare</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}
