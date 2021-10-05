import ReactWeather, { useOpenWeather } from 'react-open-weather';
import Weather from 'simple-react-weather'
const WeatherApp = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '80f4d94a8038dc5274f4113b84de39cd',
    city:"Chandler",
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <div>
    <Weather unit="C" city="Mesa" appid="80f4d94a8038dc5274f4113b84de39cd" />
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Munich"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
    </div>
  );
};
export default WeatherApp