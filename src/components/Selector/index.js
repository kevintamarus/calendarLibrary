import Text from 'components/Text';
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import colors from 'styles/colors';

const Selector = forwardRef(({labels, components, defaultIndex}, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

  const handleLabelPress = index => {
    setSelectedIndex(index);
  };

  useImperativeHandle(ref, () => ({
    changeTabToDay() {
      setSelectedIndex(0);
    },
  }));

  return (
    <>
      <View style={styles.labelContainer}>
        {labels.map((label, i) => (
          <TouchableHighlight
            style={[
              styles.labelBox,
              i === selectedIndex && {backgroundColor: colors.Gray2},
            ]}
            onPress={() => handleLabelPress(i)}
            key={`label ${i}`}>
            <Text>{label}</Text>
          </TouchableHighlight>
        ))}
      </View>
      {components[selectedIndex]}
    </>
  );
});

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  componentContainer: {},
  labelBox: {
    width: 100,
    height: 40,
    borderWidth: 1,
    borderColor: colors.Black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Selector.defaultProps = {
  labels: [],
  components: [],
  defaultIndex: 0,
};

export default Selector;
