import fetch from 'node-fetch';

export const getCoinDatas = async (req, res) => {
  try {
    const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      method: 'GET',
      headers: {
        "X-CMC_PRO_API_KEY": "a823cea2-6c3b-4c08-9e9c-6a52ba147207"
      }
    });

    const data = await response.json();

    res.status(201).json({
      success: true,
      data
    })
  } catch (error) {
    console.error('Error fetching data:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Error'
    })
  }
};

export const getCoinInfos = async (req, res) => {
  const { id } = req.query;

  try {
    const response = await fetch(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${id}`, {
      method: 'GET',
      headers: {
        "X-CMC_PRO_API_KEY": "a823cea2-6c3b-4c08-9e9c-6a52ba147207",
      }
    });

    const data = await response.json();

    res.status(201).json({
      success: true,
      data
    })
  } catch (error) {
    console.error('Error fetching data:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Error'
    })
  }
};

