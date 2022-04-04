import Text from 'components/Text';
import React, {useState} from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import colors from 'styles/colors';

const Selector = ({labels, components, defaultIndex}) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

  const handleLabelPress = index => {
    setSelectedIndex(index);
  };

  const CurrentComponent = components[selectedIndex];

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
      {CurrentComponent}
    </>
  );
};

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
