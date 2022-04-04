import React from 'react';
import {StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';
import colors from 'styles/colors';

const Month = ({setSelectedDay, navigateToTab}) => {
  const handleDayPress = day => {
    setSelectedDay(day);
    navigateToTab(0);
  };

  return (
    <Calendar
      style={styles.mainStyle}
      onDayPress={handleDayPress}
      theme={{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: colors.Black,
        textSectionTitleDisabledColor: '#d9e1e8',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e1e8',
        dotColor: '#00adf5',
        selectedDotColor: '#ffffff',
        arrowColor: colors.Blue,
        disabledArrowColor: '#d9e1e8',
        monthTextColor: colors.Black,
        indicatorColor: 'blue',
        textDayFontFamily: 'arial',
        textMonthFontFamily: 'arial',
        textDayHeaderFontFamily: 'arial',
        textDayFontWeight: '300',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '300',
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16,
      }}
    />
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 350,
  },
});

export default Month;
