import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import StarRating from './StarRating';
import { addNewReview } from '../utilities/Service';

class ModalAddReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            nestedModal: false,
            closeAll: false,
            stars: 3,
            review: ""
        };

        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
    }

    TakeStarsAndReview = (stars, review) => {
        this.setState({ stars: stars, review: review })
    }

    addReview = () => {
        let review = {
            user_id: 1, toilet_id: this.props.marker.toilet_id, rating: this.state.stars,
            review_text: this.state.review
        }
        addNewReview(review);
        this.toggle();
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    toggleNested() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: false
        });
    }

    toggleAll() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: true
        });
    }

    render() {
        return (
            <div>
                <Button color="info" onClick={this.toggle}> Arvostele</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Arvostele vessa</ModalHeader>
                    &nbsp;&nbsp;&nbsp;&nbsp;{this.props.marker.name}
                    <ModalBody>
                        <StarRating TakeStarsAndReview={this.TakeStarsAndReview} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.addReview}>Lisää arvostelu</Button>{' '}
                        <Button color="secondary" onClick={this.DeleteReview}>Poista arvostelu</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalAddReview;
