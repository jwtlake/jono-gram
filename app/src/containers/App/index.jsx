import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BrowsePage from 'containers/BrowsePage';
import FeedPage from 'containers/FeedPage';
import LoginPage from 'containers/LoginPage';
import ProfilePage from 'containers/ProfilePage';
import UploadPage from 'containers/UploadPage';
import Header from 'components/Header';
import Footer from 'components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={LoginPage} />
          <Route path="/feed" component={FeedPage} />
          <Route path="/browser" component={BrowsePage} />
          <Route path="/upload" component={UploadPage} />
          <Route path="/profile" component={ProfilePage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
