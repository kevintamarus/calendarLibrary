import Selector from 'components/Selector';
import Text from 'components/Text';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Day from './components/Day';
import Month from './components/Month';

const Main = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const componentList = [
    <Day {...{selectedDay, setSelectedDay}} />,
    <Text>Week Component</Text>,
    <Month {...{selectedDay, setSelectedDay}} />,
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
