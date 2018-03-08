import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { connect } from 'react-redux';
import L from 'leaflet';


class MapL extends Component {
    state = {
        zoom: 3,
    }

    render() {
        const iconISS = new L.Icon({
            iconUrl: require('../ISSIcon.png'),
        });
        console.log('ALL the props', this.props)
        let { latitude, longitude } = this.props.getLatLng
        return (
            <div>
                <Map id="test-map" center={[latitude, longitude]} zoom={this.state.zoom} >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    <Marker position={[latitude, longitude]} icon={iconISS}>
                        <Popup>
                            <span>A pretty CSS3 popup.<br />Easily customizable.</span>
                        </Popup>
                    </Marker>
                </Map>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        getLatLng: state.getLatLng,
        hasErrored: state.itemsHasErrored,
        displayMap: state.displayMap
    };
};

export default connect(mapStateToProps)(MapL);

