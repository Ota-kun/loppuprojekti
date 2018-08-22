import React, { Component } from 'react';
import './Toiletlist.scss';
import { GetAllToilets } from '../utils/WebapiService';
import geolib from 'geolib';

class Toiletlist extends Component {
    state = {  }

    constructor() {
        super()
        
        this.state = {
        lat: 60.17131,
        lng: 24.94145,
        zoom: 17,
        markers: []

        }
    }

    componentDidMount() {
    
        var allToilets = []
        
        GetAllToilets((data) => {
            data.map(res => {
            allToilets.push(res)
            })
    
            this.setState({markers: allToilets})
            console.log(this.state.markers)
        });

    }

    render() {

        // var distance = this.props.markerList((marker) => {
        //     geolib.getDistance(
        //         {latitude: sessionStorage.getItem("latitude"), longitude: sessionStorage.getItem("longitude")},
        //         {latitude: marker.latitude, longitude: marker.longitude}
        //     );
        // });

        var t = this.state.markers.map(marker => (

            <li style={{ margin: '1% 12%', padding: '3%', border: 'solid', borderRadius: '10px', backgroundColor: '#e2edff' }}>

                {marker.name}, {marker.address}, {marker.zip}, {marker.city},
                {marker.rating} , {marker.inva} , {marker.pricing} , {geolib.getDistance(
                    {latitude: sessionStorage.getItem("latitude"), longitude: sessionStorage.getItem("longitude")},
                    {latitude: marker.latitude, longitude: marker.longitude}
                )/1000 } km

            </li>

        ));

        return (
            <div>
                <br />
                <h2>TOILET LIST</h2>
                <br />
                
                <table style={{ marginLeft: 0, marginRight: 0, display: 'block', listStyleType: 'none' }}>
                    {t}
                </table>
            </div>
        );
    }
}

export default Toiletlist;