import React, { Component } from 'react';

class GoogleAuth extends Component {
    state = {
        first_name: '',
        last_name: '',
        isSignedIn: null
    }
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId: '135244684637-6irrdc7qkt7ufpf9tdpev5inifaqjnal.apps.googleusercontent.com',
                    scope: 'email'
                }).then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    if (this.auth.isSignedIn.get()) {
                        let { ofa, wea } = this.auth.currentUser.get().w3;
                        this.setState(() => ({
                            first_name: ofa,
                            last_name: wea,
                            isSignedIn: true
                        }));
                    }
                })
        })
    }
    googleAuth = async () => {
        if (this.state.isSignedIn) {
            this.props.redirect(this.state); 
        } else {
           await this.auth.signIn();
            let { ofa: first_name, wea: last_name } = this.auth.currentUser.get().w3;
            this.props.redirect({first_name, last_name}, () => 
                this.auth.signOut()
            );
        }
    }


    render() {
        return (
            <button onClick={this.googleAuth} className="ui red google button">
                <i className="google icon" />
                Sign In with Google
            </button>
        )
    }
}

export default GoogleAuth;
