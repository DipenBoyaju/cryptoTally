import fetch from 'node-fetch';

export const getCoinDatas = async () => {
  try {
    const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      method: 'GET',
      headers: {
        "X-CMC_PRO_API_KEY": "a823cea2-6c3b-4c08-9e9c-6a52ba147207"
      }
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

