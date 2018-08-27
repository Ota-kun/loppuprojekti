import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import ModalAddReview from './ModalAddReview';
import ModalReportToilet from './ModalReportToilet';
import { Button } from 'reactstrap';


class InfoWindowMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }

    }

    handleToggleOpen = () => {

        this.setState({
            isOpen: true
        });
    }

    handleToggleClose = () => {
        this.setState({
            isOpen: false
        });
    }

    showDirectionsMap = () => {
        this.props.showRouteOnClick(this.props.marker.latitude, this.props.marker.longitude)
        console.log('olen infowindowsmapissa ja showroutemap:issa')
    }

    render() {
        return (
            <Marker
                key={this.props.index}
                position={{ lat: parseFloat(this.props.lat), lng: parseFloat(this.props.lng) }}
                label={this.props.toilet_id}
                onClick={() => this.handleToggleOpen()}
            >
                {
                    this.state.isOpen &&
                    <InfoWindow onCloseClick={this.handleToggleClose}>
                        <div>
                            <h4>{this.props.marker.name}</h4>
                            <ModalAddReview marker={this.props.marker} />
                            <ModalReportToilet marker={this.props.marker} />
                            <Button onClick={this.showDirectionsMap} color="success">Reitti</Button>{' '}
                        </div>
                    </InfoWindow>
                }


            </Marker>

        )

    }
}

export default InfoWindowMap;