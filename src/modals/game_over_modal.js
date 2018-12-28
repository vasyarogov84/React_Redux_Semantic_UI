import React, { Component } from 'react';
import { Header, Icon, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

 class GameOverModal extends Component {
    state = { modalOpen: true }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    render() {
        return (
            <Modal
                //trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                basic
                size='small'
            >
                <Header icon='hotjar' content='Position:' />
                <Modal.Content>
                    <h3>{`Best Result for ${this.props.user.first_name}: ${this.props.user.best_time/1000} seconds, after ${this.props.user.attempts} ${this.props.user.attempts === 1 ? 'attempt' : 'attempts' }`}</h3>
                </Modal.Content>
                <Modal.Actions>
                    <Link className="positive ui button" to="/"  onClick={this.handleClose}>
                        <Icon className='checkmark' /> New Player
                    </Link>
                    <Link className="positive ui button" to="/pregame" color='green' onClick={this.handleClose} >
                        <Icon className='checkmark' /> Play again
                    </Link>
                </Modal.Actions>
            </Modal>
        )
    }
}

function mapStatToProps(state) {
    //console.log('MODAL',state);
   return {
       user: state.users[state.users.length - 1]
   }
}

export default connect(mapStatToProps)(GameOverModal);