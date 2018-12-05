import React, { Component } from 'react';
import axios from 'axios';

//Routing
import { withRouter } from 'react-router';

//Firebase
import { auth, googleProvider } from '../../firebase';

//Reducer
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/reducer';

//Style
import './Login.css';

//Images
import googleIcon from '../../images/google-icon.svg';

class Login extends Component {
    state = {
        email: '',
        password: '',
        user: {}
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    googleLogin = async () => {
        let googleInfo = await auth.signInWithPopup(googleProvider);
        let user = googleInfo.user;
        let nameArr = user.displayName.split(' ');
        await this.setState({
            user: {
                first_name: nameArr[0],
                last_name: nameArr[1],
                email: user.email,
                profile_pic: user.photoURL,
                auth_id: user.uid
            }
        })
        await console.log(this.state.user);
        await this.props.history.push('/dashboard');
    }

    signInWithEmail = async () => {
        let emailInfo = await auth.signInWithEmailAndPassword(this.state.email, this.state.password);
            let user =  emailInfo.user;
            console.log(user);
            await this.setState({
                user: {
                    first_name: '',
                    last_name: '',
                    email: user.email,
                    profile_pic: user.photoURL,
                    auth_id: user.uid
                }
            });
            return this.state.user;
    }

    createUserWithEmail = async () => {
        let newAccount = await auth.createUserWithEmailAndPassword(this.state.email, this.state.password);
        let user = newAccount.user;
        await this.setState({
            user: {
                first_name: '',
                last_name: '',
                email: user.email,
                profile_pic: user.photoURL,
                auth_id: user.uid
            }
        });
        return this.state.user;
    }

    emailSignIn = () => {
        // let user = await this.signInWithEmail();
        // if (!user) {
        //     return this.createUserWithEmail();
        // }
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(res => {
                let user = res.user;
                this.setState({
                    user: {
                        first_name: '',
                        last_name: '',
                        email: user.email,
                        profile_pic: user.photoURL,
                        auth_id: user.uid
                    }
                });
            })
            .catch(() => {
                auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
                    .then(res => {
                        let user = res.user;
                        this.setState({
                            user: {
                                first_name: '',
                                last_name: '',
                                email: user.email,
                                profile_pic: user.photoURL,
                                auth_id: user.uid
                            }
                        });
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
        return this.state.user;
    }

    render() {
        return (
            <main className='login__display-container'>
                <div className='login__login-container'>
                    <div className='login__email-login'>
                        <h3 className='login__email-login-header'>Sign In</h3>
                        <input 
                            className='login__input'
                            placeholder='Email'
                            onChange={(event) => this.handleChange(event)}
                            name='email'
                        />
                        <input 
                            className='login__input'
                            type='password' 
                            placeholder='Password'
                            onChange={(event) => this.handleChange(event)}
                            name='password'
                        />
                        <button
                            className='login__email-login-button'
                            onClick={this.emailSignIn}>Sign In</button>
                    </div>
                </div>
                <button 
                    className='login__google-button'
                    onClick={this.googleLogin}>
                    <div className='login__google-icon-container'>
                        <img className='login__google-icon'src={googleIcon} alt=''/>    
                    </div>
                    <div className='login__google-button-divider'></div>
                    <div className='login__google-button-text'>Sign in with Google</div>
                </button>
                
            </main>
        )
    }
}

export default withRouter(connect(null, {})(Login));