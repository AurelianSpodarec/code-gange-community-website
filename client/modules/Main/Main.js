import React from 'react';
import { connect } from 'react-redux';

// Import Style
// import styles from './App.css';
// import styles from './Main.css';

// Import Assets
import image1 from './assets/images/01.jpg';
import image2 from './assets/images/02.jpg';
import image3 from './assets/images/03.jpg';

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

      {/* <!-- Navigation --> */}
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">Start Bootstrap</a>
          <button
            className="navbar-toggler" type="button"
            data-toggle="collapse" data-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Sign Up</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Log In</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="masthead text-center text-white">
        <div className="masthead-content">
          <div className="container">
            <h1 className="masthead-heading mb-0">One Page Wonder</h1>
            <h2 className="masthead-subheading mb-0">Will Rock Your SocksOff</h2>
            <a href="#" className="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a>
          </div>
        </div>

        <div className="bg-circle-1 bg-circle"></div>
        <div className="bg-circle-2 bg-circle"></div>
        <div className="bg-circle-3 bg-circle"></div>
        <div className="bg-circle-4 bg-circle"></div>
      </header>

      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img className="img-fluid rounded-circle" src={image1} alt="" />
              </div>
            </div>

            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">For those about to rock...</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quod aliquid, mollitia odio veniam sit iste esse assumenda ametaperiam exercitationem,
                  ea animi blanditiis recusandae! Ratione voluptatummolestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="p-5">
                <img className="img-fluid rounded-circle" src={image2} alt="" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-5">
                <h2 className="display-4">We salute you!</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quod aliquid, mollitia odio veniam sit iste esse assumenda ametaperiam exercitationem,
                  ea animi blanditiis recusandae! Ratione voluptatummolestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img className="img-fluid rounded-circle" src={image3} alt="" />
              </div>
            </div>

            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">Let there be rock!</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quod aliquid, mollitia odio veniam sit iste esse assumenda ametaperiam exercitationem,
                  ea animi blanditiis recusandae! Ratione voluptatummolestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer className="py-5 bg-black">
        <div className="container">
          <p className="m-0 text-center text-white small">Copyright &copy; Your Website 2018</p>
        </div>
        {/* <!-- /.container --> */}
      </footer>
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
