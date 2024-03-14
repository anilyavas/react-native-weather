import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=31cdf7c2dad66944c8801a652ff06d61&units=metric`;

type Weather = {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
};
const WeatherScreen = () => {
  const [weather, setWeather] = useState<Weather>();
  const fetchWeather = async () => {
    //fetch data
    const results = await fetch(url);
    const data = await results.json();
    console.log(JSON.stringify(data, null, 2));
    setWeather(data);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (!weather) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <Text>{weather.name}</Text>
      <Text>{weather.main.temp}</Text>
    </View>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
