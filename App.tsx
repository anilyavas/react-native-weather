import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=31cdf7c2dad66944c8801a652ff06d61&units=metric`;

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
      <Text style={styles.location}>{weather.name}</Text>
      <Text style={styles.temp}>{Math.round(weather.main.temp)}</Text>
    </View>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  location: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 150,
    fontWeight: 'bold',
    color: 'grey',
  },
});
