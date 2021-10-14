import axios from 'axios';
const baseUrl = 'http://localhost:3001/weather/fetch';

const getCityWeather = async (name) => {
  try {
    const response = await axios.get(`${baseUrl}/${name}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getCityWeather };
