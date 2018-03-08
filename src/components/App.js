import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, displayMap } from '../actions/satelliteActions';
import Map from './Map'


class App extends Component {
  state = {
    isClicked: false
  }

  getIssPosition = () => {
    setInterval(() => this.props.fetchData('http://api.open-notify.org/iss-now.json?'), 1000);
  }

  render() {
    let { latitude, longitude } = this.props.getLatLng
    console.log('displayMap', this.props)
    return (
      <div className="App">
        <button onClick={this.getIssPosition}>GET POSITION</button>
        <p>La position de la station est de lat {latitude} et de long {longitude} </p>
        {latitude && longitude ? <Map /> : <p>...loading</p>}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    getLatLng: state.getLatLng,
    hasErrored: state.itemsHasErrored,
    displayMap: state.displayMap
  };
};

export default connect(mapStateToProps, { fetchData, displayMap })(App);
