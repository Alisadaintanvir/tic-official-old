import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import {FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import initializeAuthentication from '../firebase/firebase.initialize';

initializeAuthentication();

const title = "Login";
const socialTitle = "Login With Social Media";
const btnText = "Submit Now";


const socialList = [
    {
        link: '#',
        iconName: 'icofont-facebook',
        className: 'facebook',
    },
    {
        link: '#',
        iconName: 'icofont-twitter',
        className: 'twitter',
    },
    {
        link: '#',
        iconName: 'icofont-linkedin',
        className: 'linkedin',
    },
    {
        link: '#',
        iconName: 'icofont-instagram',
        className: 'instagram',
    },
    {
        link: '#',
        iconName: 'icofont-pinterest',
        className: 'pinterest',
    },
]

const auth = getAuth();
const LoginPage = () => {
   const googleProvider = new GoogleAuthProvider();
   const facebookProvider = new FacebookAuthProvider();
   const handleGoogleSignIn = ()=>{
    signInWithPopup(auth, googleProvider)
    .then(result=>{
        const user = result.user;
        console.log(user)
    })

   }
   const handleFacebookLogin = ()=>{
    signInWithPopup(auth, facebookProvider)
    .then(result=>{
        const user = result.user;
        console.log(user)
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
    
        // ...
      });
    
}



    return (
        <Fragment>
            <Header />
            <PageHeader title={'Login Page'} curPage={'Login'} />
            <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <form className="account-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="User Name *"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password *"
                                />
                            </div>
                            <div className="form-group">
                                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                    <div className="checkgroup">
                                        <input type="checkbox" name="remember" id="remember" />
                                        <label htmlFor="remember">Remember Me</label>
                                    </div>
                                    <Link to="/forgetpass">Forget Password?</Link>
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <button className="d-block lab-btn"><span>{btnText}</span></button>
                            </div>
                        </form>
                        <div className="account-bottom">
                            <span className="d-block cate pt-10">Don’t Have any Account?  <Link to="/signup">Sign Up</Link></span>
                            <span className="or"><span>or</span></span>
                            <h5 className="subtitle">{socialTitle}</h5>
                            <ul className="lab-ul social-icons justify-content-center">
                                <li>
                                        <a href="#" className="pinterest" onClick={handleGoogleSignIn}><i className="icofont-google-plus"></i></a>
                                </li>
                                <li>
                                        <a href="#" className="facebook" onClick={handleFacebookLogin}><i className="icofont-facebook"></i></a>
                                </li>
                                {/* <li className=""><button onClick={handleGoogleSignIn}><i className="cofont-brand-google">Google</i></button></li> */}
                                {/* {socialList.map((val, i) => (
                                    <li key={i}>
                                        <a href={val.link} className={val.className}><i className={val.iconName}></i></a>
                                    </li>
                                ))} */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}
 
export default LoginPage;