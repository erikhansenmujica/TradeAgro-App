import React from "react"
import {  Text, View,Button } from 'react-native';
import styles from "../../generalStyles"

export default function ({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('OrderFertilizer')}
      />
    </View>
  );
}
