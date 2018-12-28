import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../styles/pregame.css';

class Pregame extends Component {

    renderUsers = (props) => {
        return this.props.users.map((user, i) => {
            return (

                <Table.Row
                    key={i}
                    style={{ backgroundColor: (i === this.props.users.length - 1) ? 'lightgreen' : 'white' }}>
                    <Table.Cell>{user.first_name} {user.last_name}</Table.Cell>
                    <Table.Cell>{user.attempts ? user.attempts : 0}</Table.Cell>
                    <Table.Cell>{user.best_time}</Table.Cell>
                </Table.Row>

            );
        })
    }

    render() {
        console.log(this.props);
        return (
            <div className="ui container">
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Attempts</Table.HeaderCell>
                            <Table.HeaderCell>Best Result</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.renderUsers()}
                    </Table.Body>
                </Table>
                <Link className="ui primary button" to="/game">Start Game</Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Pregame);
