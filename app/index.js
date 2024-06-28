import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Index = () => {
  const handleCustomPress = () => {
    console.log("pressed ")
  }
  const router =useRouter();

  return (
    <SafeAreaView style={styles.container}>
       <StatusBar
        barStyle="dark-content" 
        backgroundColor="#6a51ae" 
        translucent={true} 
      />
      <Image
        source={require('../assets/images/wallpaper1.jpg')}
        style={styles.image}
      />
      <LinearGradient
        colors={['transparent', '#18181b']}
        style={styles.gradient}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
      >
        <Animated.View entering={FadeInDown.delay(100).springify
          ().reduceMotion('alwaysr')
        } style={{ fontSize: hp(8) }} className='text-white font-bold tracking-wider mt-52'>

        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200).springify
          ().reduceMotion('alwaysr')}>
          <TouchableOpacity
            onPress={()=>{router.push('/(drawer)/(tabs)/feed')}} asChild
          >
            
            <Text style={[{ fontSize: hp(3) }, styles.textConnect]}  >Get Started</Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textContainer: {
    justifyContent: 'center',

  },
  text: {
    fontSize: 35,
    textAlign: 'center',
    margin: 20,
    color: '#FFFFFF', 
  },
  image: {
    width: wp(100),
    height: hp(100),
    resizeMode: 'cover',
    position: 'absolute',
  },
  gradient: {
    width: wp(100),
    height: hp(70),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  textConnect: {
    margin: 16,
    fontSize: hp(3), // 3% of screen height
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#b91c1c', // rose-900
    paddingVertical: 20, // 5 * 4
    paddingHorizontal: 40, // 10 * 4
    borderRadius: 9999, // rounded-full
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    letterSpacing: 1.25, // tracking-wider
  },
});
