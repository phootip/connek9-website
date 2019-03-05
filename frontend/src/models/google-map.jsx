import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// const Listing = ({ places }) => (
//   <ul>{places && places.map(p => <li key={p.id}>{p.name}</li>)}</ul>
// );

export class MapContainer extends Component {
  state = {
    places: []
  }

  searchNearby = (map, center) => {
    const { google } = this.props;

    const service = new google.maps.places.PlacesService(map);

    // Specify location, radius and place types for your Places API search.
    const request = {
      location: center,
      radius: '500',
      type: ['food']
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK)
        this.setState({ places: results });
    });
  };

  onMapReady = (mapProps, map) => this.searchNearby(map, map.center);

  render() {
    
    return (
      <Map google={this.props.google} zoom={16} 
      style={{width:'100%',height:'100%',position:'relative'}}
      clickableIcons={true}
      className={'map'}
      onReady={this.onMapReady}
      initialCenter={{
        lat:13.736781,
        lng:100.533747,
        // lat:40.7589,
        // lng:-73.9851,
      }}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
            </div>
        </InfoWindow>
        {/* <Listing places={this.state.places} /> */}
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyBfCR4kGhiH8xV6jUoqN4m_JD8uVFT9BJ0')
})(MapContainer)