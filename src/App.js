import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Authenticate from './pages/authenticate/authenticate.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {

  constructor() {
    super();

    this.state ={

      //Firebase Auth User
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {

    //Firebase Auth & Firestore Logic
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //Adding New User from Google SignIn to our Firestore DB
      //userAuth is obj returned by Firebase GoogleSignIn Auth Method
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        //Pulling user data from Firestore DB via snapshot and setting our state with it.
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
          this.setState({ currentUser: userAuth });
        }
    });
  }

  componentWillUnmount() {

    //Firebase Auth Logic To stop listening // On app close for addressing memory leaks
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route path="/shop" component={ShopPage} />
          <Route path="/auth" component={Authenticate} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}
export default App;
