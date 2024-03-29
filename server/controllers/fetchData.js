import axios from 'axios';

export const fetchData = async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: {
          q: 'London',
          days: '3'
        },
        headers: {
          'X-RapidAPI-Key': 'e84d3c38a2msh74ab9345b56b322p170214jsn43efe8a07ad1',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}