import { View, Text, StyleSheet } from 'react-native';
import dayjs from 'dayjs';
import { WeatherForecast } from '../types';

const ForecastItem = ({ forecast }: { forecast: WeatherForecast }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.temp}>{Math.round(forecast.main.temp)}˙</Text>
      <Text style={styles.date}>
        {dayjs(forecast.dt * 1000).format('ddd HH a')}
      </Text>
    </View>
  );
};

export default ForecastItem;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    aspectRatio: 9 / 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gainsboro',
    opacity: 0.8,
  },
  temp: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'grey',
  },
  date: {
    fontWeight: '500',
    color: 'grey',
    fontSize: 16,
  },
});
