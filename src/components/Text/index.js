import React from 'react';
import {StyleSheet, Text as RNText} from 'react-native';
import colors from 'styles/colors';

const Text = ({style, children, ...textProps}) => (
  <RNText
    style={[styles.defaultStyle, style]}
    maxFontMultiplier={1.5}
    {...textProps}>
    {children}
  </RNText>
);

const styles = StyleSheet.create({
  defaultStyle: {
    fontSize: 14,
    color: colors.Black,
  },
});

Text.defaultProps = {
  style: null,
  children: null,
};

export default Text;
