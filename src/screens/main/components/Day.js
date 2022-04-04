import Text from 'components/Text';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const Day = ({selectedDay}) => {
  return (
    <View style={styles.container}>
      {selectedDay ? (
        <Text>{toString(selectedDay)}</Text>
      ) : (
        <Text>No Day Selected</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Day;
