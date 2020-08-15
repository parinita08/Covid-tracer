// const { default: Axios } = require("axios")

import axios from 'axios'; //used to make API requests

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async() => { //asyn is much easier to both read and wrote asynchronus data
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);
        
        const modifiedData = { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        
    }
}