import Selector from 'components/Selector';
import Text from 'components/Text';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Month from './components/Month';

const Main = () => {
  const componentList = [
    <Text>Day Component</Text>,
    <Text>Week Component</Text>,
    <Month />,
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Selector
        labels={['Day', 'Week', 'Month']}
        components={componentList}
        defaultIndex={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
