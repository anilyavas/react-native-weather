type MainWeather = {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
    dt: number;
  };
};
type Weather = {
  name: string;
  main: MainWeather;
};

type WeatherForecast = {
  main: MainWeather;
};

export type { MainWeather, Weather, WeatherForecast };
