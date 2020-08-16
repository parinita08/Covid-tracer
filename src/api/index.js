// const { default: Axios } = require("axios")

import axios from 'axios'; //used to make API requests

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async(country) => { //asyn is much easier to both read and wrote asynchronus data
    let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get(`${url}/daily`);
  
      const modifiedData = data.map((dailyData) => ({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
      }));

      return modifiedData;
    } catch (error) {
      return error;
    }
  };