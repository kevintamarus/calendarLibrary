import Text from 'components/Text';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Main;
