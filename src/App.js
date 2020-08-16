import React from 'react';
import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

//37:45

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  handleCountryChange = async (country) => {
    // fetches the data and set the state
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country});
    
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({data});
  }
  render() {
    const {data, country} = this.state;
    return(
      <div className={styles.container}>
        <h1>COVID-19 TRACER</h1>
        <div className={styles.p}><p>By Parinita &copy;</p></div>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
