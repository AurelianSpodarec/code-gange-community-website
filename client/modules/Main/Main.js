import React from 'react';
import { connect } from 'react-redux';

// Import Style
// import styles from './App.css';
// import styles from './Main.css';

// Import Assets
// import image1 from './assets/images/01.jpg';
// import image2 from './assets/images/02.jpg';
// import image3 from './assets/images/03.jpg';

// Import Components
import Helmet from 'react-helmet';
// import DevTools from './components/DevTools';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';

// Import Actions
// import { toggleAddPost } from './AppActions';
// import { switchLanguage } from '../../modules/Intl/IntlActions';

export function Main() {
  return (
    <div>
      <Helmet
        title="Code Gange"
        titleTemplate="%s - Community"
        meta={[
          { charset: 'utf-8' },
          {
            'http-equiv': 'X-UA-Compatible',
            content: 'IE=edge',
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
        ]}
      />

      <div className="overlay"></div>

      <div className="masthead">
        <div className="masthead-bg"></div>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12 my-auto">
              <div className="masthead-content text-white py-5 py-md-0">
                <h1 className="mb-3">Coming Soon!</h1>
                <p className="mb-5">We're working hard to finish the development of this site. Our target launch date is
                  <strong>January 2019</strong>! Sign up for updates using the form below!</p>
                <div className="input-group input-group-newsletter">
                  <input type="email" className="form-control" placeholder="Enter email..." aria-label="Enter email..." aria-describedby="basic-addon" />
                  <div className="input-group-append">
                    <button className="btn btn-secondary" type="button">Notify Me!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="social-icons">
        <ul className="list-unstyled text-center mb-0">
          <li className="list-unstyled-item">
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="list-unstyled-item">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li className="list-unstyled-item">
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(Main);
