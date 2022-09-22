import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Authenticate from './pages/authenticate/authenticate.component';
import CheckOut from './pages/checkout/checkout.component';

import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import { FlagshipProvider } from "@flagship.io/react-sdk";
import mixpanel from 'mixpanel-browser';



class App extends React.Component {
  unsubscribeFromAuth = null;
  
  
  componentDidMount() {
      
    //Axios

    //From Redux
    const {setCurrentUser} = this.props;

    //Firebase Auth & Firestore Logic
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //Adding New User from Google SignIn to our Firestore DB
      //userAuth is obj returned by Firebase GoogleSignIn Auth Method
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        //Pulling user data from Firestore DB via snapshot and setting our state with it.
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()            
          });
        });
      } else {
          setCurrentUser(userAuth);
        }
    });
  }

  componentWillUnmount() {

    //Firebase Auth Logic To stop listening // On app close for addressing memory leaks
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <FlagshipProvider
        envId="c966skjgh76g2nhhr4hg"
        apiKey="oGCDggUYvhGqgGBYmLsKXyhJQAjTjoGEKgumHrjc"
        visitorData={{
          id: null,
          context: {
            // some context
          }
        }}
        //********************[ Flagship Method to Implement Mixpanel ]********************
        onUserExposure={({ flagData, visitorData }) => {
          mixpanel.track('Init New Flagship Visitor', {
            distinct_id: visitorData.visitorId,
            experimentId: flagData.metadata.campaignId,
            key: flagData.key,
            value: flagData.value,
            anonymousId: visitorData.anonymousId,
            baseUrl: window.location.origin,
            visitorId: visitorData.visitorId,
            variationID: flagData.metadata.variationId,
            ...flagData.metadata
          })}
    }
    
    >
        <Header />
        <Switch>
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route 
            exact 
            path="/auth" 
            render={() => 
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <Authenticate />
              )
            }
          />
          <Route path="/" component={HomePage} />
        </Switch>
      </FlagshipProvider>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);