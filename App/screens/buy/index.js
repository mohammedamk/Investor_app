import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native'

import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
import Swiper from 'react-native-swiper'

export class Buy extends React.Component {
  static navigationOptions = {
    title: ('Buy').toLowerCase(),
    tabBarLabel: 'Buy',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image source={require('./../../icons/buy.png')} style={{ height: responsiveHeight(4.5), width: responsiveWidth(9) }} resizeMode="contain" />
    )
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <View style={{ height: responsiveHeight(10), alignItems: 'flex-start', justifyContent: 'center', backgroundColor: 'white' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: responsiveWidth(28), alignItems: 'flex-start', justifyContent: 'center'}}>
              <TouchableOpacity style={{ marginLeft: '15%' }}>
                <Image source={require('./../../icons/back_arrow.png')} style={{ width: responsiveWidth(6), height: responsiveHeight(3), resizeMode: 'contain' }} />
              </TouchableOpacity>
            </View>
            <View style={{ width: responsiveWidth(15), alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity style={{ }}>
                <Image source={require('./../../icons/notification.png')} style={{ width: responsiveWidth(7), height: responsiveHeight(3.5), resizeMode: 'contain' }} />
              </TouchableOpacity>
            </View>
            <View style={{ width: responsiveWidth(25), alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#DCDCDC', width: responsiveWidth(24), height: responsiveHeight(5), borderRadius: 5.7, alignItems: 'center' }}>
                <Image source={require('./../../icons/share.png')} style={{ width: responsiveWidth(8), marginLeft: '8%', height: responsiveHeight(2.5), resizeMode: 'contain' }} />
                <Text style={{ width: responsiveWidth(12), fontSize: responsiveFontSize(2), fontFamily: 'Sofia Pro Regular', color: '#707070' }}> Send</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: responsiveWidth(25), alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#0956B8', width: responsiveWidth(24), height: responsiveHeight(5), borderRadius: 5.7, alignItems: 'center' }}>
                <Image source={require('./../../icons/pin.png')} style={{ width: responsiveWidth(8), marginLeft: '8%', height: responsiveHeight(2.5), resizeMode: 'contain' }} />
                <Text style={{ width: responsiveWidth(12), fontSize: responsiveFontSize(2), fontFamily: 'Sofia Pro Regular', color: 'white' }}> Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ height: responsiveHeight(50) }}>
              <View style={{ height: responsiveHeight(5), width: responsiveWidth(20), position: 'absolute', zIndex: 999, backgroundColor: '#DCDCDC', borderRadius: 5, justifyContent: 'center', alignItems: 'center', bottom: '25%', left: '15%' }}>
                <Text style={{ fontSize: responsiveFontSize(2), justifyContent: 'center', alignItems: 'center', fontFamily: 'Sofia Pro Regular' }}>Website</Text>
              </View>
              <Swiper
                horizontal={true}
                dot={<View style={{ backgroundColor: '#9B9B9B', width: 5, height: 5, borderRadius: 2, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                activeDot={<View style={{ backgroundColor: '#0956B8', width: 30, height: 4, borderRadius: 2, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                autoplay>
                <View style={{ alignItems: 'center' }}>
                  <Image resizeMode="stretch" style={{ width: responsiveWidth(80), height: responsiveHeight(40) }} source={require('./../../icons/image.png')} />
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Image resizeMode="stretch" style={{ width: responsiveWidth(80), height: responsiveHeight(40) }} source={require('./../../icons/image.png')} />
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Image resizeMode="stretch" style={{ width: responsiveWidth(80), height: responsiveHeight(40) }} source={require('./../../icons/image.png')} />
                </View>
              </Swiper>
            </View>
            <View style={{ width: responsiveWidth(80), alignSelf: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: responsiveWidth(12), alignItems: 'flex-start', justifyContent: 'center' }}>
                  <Image source={require('./../../icons/image_1_icon.png')} style={{ width: responsiveWidth(10), height: responsiveHeight(5), resizeMode: 'contain' }} />
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={{ fontSize: responsiveFontSize(2.7), fontFamily: 'Sofia Pro Medium' }}>Lyondell Basell Industries.</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <View style={{ alignItems: 'flex-start', justifyContent: 'center', paddingTop: '2%' }}>
                  <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sofia Pro Medium', color: '#2AB700' }}>Equity Investment (Wealth) , Energy Sector</Text>
                </View>
                <View style={{ justifyContent: 'center', paddingTop: '2%' }}>
                  <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sofia Pro Regular', color: 'black' }}>24 Street road, London UK</Text>
                </View>
                <View style={{ justifyContent: 'center', paddingTop: '2%' }}>
                  <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sofia Pro Light', color: '#606060' }}>Lyondell basell company was started in 2017 and it has
                  the goal of $389M USD last year.And the rest is lorem
                  ipsum text which is very cool the rest is lorem ipsum
                  text which is very cool</Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: '1%', paddingTop: '2%' }}>
                  <View style={{ justifyContent: 'center', paddingTop: '1%', width: responsiveWidth(40) }}>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sofia Pro SemiBold', color: '#0956B8' }}>$15,558,924 raised</Text>
                  </View>
                  <View style={{ justifyContent: 'center', paddingTop: '1%', width: responsiveWidth(40) }}>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sofia Pro Regular', color: '#000000' }}>Sale ending in 2 days</Text>
                  </View>
                </View>
                <View style={{ justifyContent: 'center', paddingTop: '15%' }}>
                  <Text style={{ fontSize: responsiveFontSize(2.7), fontFamily: 'Sofia Pro Medium', color: '#010101' }}>Token Details</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: '5%' }}>
                  <View style={{ width: responsiveWidth(30), justifyContent: 'center', alignSelf: 'flex-start' }}>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sofia Pro Regular', color: 'black' }}>Ticker</Text>
                  </View>
                  <View style={{ width: responsiveWidth(50), justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sofia Pro SemiBold', color: 'black' }}>LBDS</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: '3%' }}>
                  <View style={{ width: responsiveWidth(35), justifyContent: 'center', alignSelf: 'flex-start' }}>
                    <Text style={{ fontSize: responsiveFontSize(2), fontFamily: 'Sofia Pro Regular', color: 'black' }}>Technology type</Text>
                  </View>
                  <View style={{ width: responsiveWidth(45), justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: responsiveFontSize(2), fontFamily: 'Sofia Pro SemiBold', color: 'black' }}>ERC20</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: '3%' }}>
                  <View style={{ width: responsiveWidth(30), justifyContent: 'center', alignSelf: 'flex-start' }}>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sofia Pro Regular', color: 'black' }}>ETO Token Price</Text>
                  </View>
                  <View style={{ width: responsiveWidth(50), justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sofia Pro SemiBold', color: 'black' }}>1 LBDS = 0.0800 USD</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: '3%' }}>
                  <View style={{ width: responsiveWidth(35), justifyContent: 'center', alignSelf: 'flex-start' }}>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sofia Pro Regular', color: 'black' }}>Fundraising Goal </Text>
                  </View>
                  <View style={{ width: responsiveWidth(45), justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sofia Pro SemiBold', color: 'black' }}>24,000,000 USD</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: '3%' }}>
                  <View style={{ width: responsiveWidth(35), justifyContent: 'center', alignSelf: 'flex-start' }}>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sofia Pro Regular', color: 'black' }}>Soft Cap</Text>
                  </View>
                  <View style={{ width: responsiveWidth(45), justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sofia Pro SemiBold', color: 'black' }}>10,000,000 USD</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: '3%' }}>
                  <View style={{ width: responsiveWidth(35), justifyContent: 'center', alignSelf: 'flex-start' }}>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sofia Pro Regular', color: 'black' }}>Hard Cap</Text>
                  </View>
                  <View style={{ width: responsiveWidth(45), justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sofia Pro SemiBold', color: 'black' }}>40M USD</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: '3%' }}>
                  <View style={{ width: responsiveWidth(35), justifyContent: 'center', alignSelf: 'flex-start' }}>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sofia Pro Regular', color: 'black' }}>Total Tokens</Text>
                  </View>
                  <View style={{ width: responsiveWidth(45), justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sofia Pro SemiBold', color: 'black' }}>2,000,000,000</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sofia Pro SemiBold', color: '#ff5b5b' }}> (70%)</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: '3%' }}>
                  <View style={{ width: responsiveWidth(35), justifyContent: 'center', alignSelf: 'flex-start' }}>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sofia Pro Regular', color: 'black' }}>Available Tokens</Text>
                  </View>
                  <View style={{ width: responsiveWidth(45), justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sofia Pro SemiBold', color: 'black' }}>480,000,000</Text>
                  </View>
                </View>
                <View style={{ borderBottomColor: '#e3e3e3', borderBottomWidth: 1, paddingTop: '5%' }}>
                  <View style={{ borderTopWidth: 1, borderTopColor: '#e3e3e3', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sofia Pro Regular', color: '#ff5b5b', paddingTop: '2%', paddingBottom: '2%' }}>Note :</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.4), fontFamily: 'Sofia Pro Regular', color: '#000000', paddingTop: '2%', paddingBottom: '2%' }}> Company tokens will be listed on pluto500 </Text>
                  </View>
                </View>
                <View style={{ justifyContent: 'center', paddingTop: '15%' }}>
                  <Text style={{ fontSize: responsiveFontSize(2.7), fontFamily: 'Sofia Pro Medium', color: '#010101' }}>Download docs</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: '6%' }}>
                  <View style={{ width: responsiveWidth(35), justifyContent: 'center', alignSelf: 'flex-start' }}>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sofia Pro Regular', color: 'black' }}>Whitepaper</Text>
                  </View>
                  <View style={{ width: responsiveWidth(45), justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Image source={require('./../../icons/download.png')} style={{ width: responsiveWidth(4.8), height: responsiveHeight(2.4), resizeMode: 'contain' }} />
                  </View>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: '6%' }}>
                  <View style={{ width: responsiveWidth(35), justifyContent: 'center', alignSelf: 'flex-start' }}>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sofia Pro Regular', color: 'black' }}>Pitchdeck</Text>
                  </View>
                  <View style={{ width: responsiveWidth(45), justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Image source={require('./../../icons/download.png')} style={{ width: responsiveWidth(4.8), height: responsiveHeight(2.4), resizeMode: 'contain' }} />
                  </View>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: '6%' }}>
                  <View style={{ width: responsiveWidth(35), justifyContent: 'center', alignSelf: 'flex-start' }}>
                    <Text style={{ fontSize: responsiveFontSize(1.7), fontFamily: 'Sofia Pro Regular', color: 'black' }}>Market Analysis</Text>
                  </View>
                  <View style={{ width: responsiveWidth(45), justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Image source={require('./../../icons/download.png')} style={{ width: responsiveWidth(4.8), height: responsiveHeight(2.4), resizeMode: 'contain' }} />
                  </View>
                </View>
                <View style={{ justifyContent: 'center', paddingTop: '15%' }}>
                  <Text style={{ fontSize: responsiveFontSize(2.7), fontFamily: 'Sofia Pro Medium', color: '#010101' }}>Investors also visited</Text>
                </View>
              </View>
            </View>
            <ScrollView horizontal={true} style={{ marginLeft: '5%' }}>
              <View style={{ width: responsiveWidth(20) }}>
                <Image source={require('./../../icons/list_image_1.png')} style={{ width: responsiveWidth(28), height: responsiveHeight(20), resizeMode: 'contain' }} />
              </View>
              <View style={{ width: responsiveWidth(20) }}>
                <Image source={require('./../../icons/list_image_2.png')} style={{ width: responsiveWidth(28), height: responsiveHeight(20), resizeMode: 'contain' }} />
              </View>
              <View style={{ width: responsiveWidth(20) }}>
                <Image source={require('./../../icons/list_image_3.png')} style={{ width: responsiveWidth(28), height: responsiveHeight(20), resizeMode: 'contain' }} />
              </View>
              <View style={{ width: responsiveWidth(20) }}>
                <Image source={require('./../../icons/list_image_4.png')} style={{ width: responsiveWidth(28), height: responsiveHeight(20), resizeMode: 'contain' }} />
              </View>
              <View style={{ width: responsiveWidth(20) }}>
                <Image source={require('./../../icons/list_image_5.png')} style={{ width: responsiveWidth(28), height: responsiveHeight(20), resizeMode: 'contain' }} />
              </View>
              <View style={{ width: responsiveWidth(20) }}>
                <Image source={require('./../../icons/list_image_1.png')} style={{ width: responsiveWidth(28), height: responsiveHeight(20), resizeMode: 'contain' }} />
              </View>
              <View style={{ width: responsiveWidth(20) }}>
                <Image source={require('./../../icons/list_image_2.png')} style={{ width: responsiveWidth(28), height: responsiveHeight(20), resizeMode: 'contain' }} />
              </View>
              <View style={{ width: responsiveWidth(20) }}>
                <Image source={require('./../../icons/list_image_3.png')} style={{ width: responsiveWidth(28), height: responsiveHeight(20), resizeMode: 'contain' }} />
              </View>
              <View style={{ width: responsiveWidth(20) }}>
                <Image source={require('./../../icons/list_image_4.png')} style={{ width: responsiveWidth(28), height: responsiveHeight(20), resizeMode: 'contain' }} />
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}
