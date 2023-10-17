import React from "react";
import { View, Text, SafeAreaView, StyleSheet, useColorScheme, Button } from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <SafeAreaView >
      <View style={styles.container}>
        {/* <View> */}
        <Text style={isDarkMode ? styles.darkText : styles.lightText}>
          Hello World
        </Text>
        
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    // flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  lightText: {
    color: '#000000',
  },
  darkText: {
    color: '#FFFFFF',
  }
})

export default AppPro;
