import React from 'react';
import { connect } from 'react-redux';

// Import Style
// import styles from './App.scss';
import styles from './Main.scss';

// Import Assets
import logo from './assets/images/logo.png';
import image1 from './assets/images/1.jpg';
import image2 from './assets/images/2.jpg';
import image5 from './assets/images/5.jpg';
import image6 from './assets/images/6.jpg';
import image7 from './assets/images/7.jpg';
import image8 from './assets/images/8.jpg';
import image9 from './assets/images/9.jpg';
import image10 from './assets/images/10.jpg';
import image11 from './assets/images/11.jpg';
import image12 from './assets/images/12.jpg';
import image13 from './assets/images/13.jpg';
import image14 from './assets/images/14.jpg';

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

      <nav className="navbar navbar-default navbar-static-top text-center" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <img src={logo} className="hidden-xs" alt="" />
              <h3 className="visible-xs">Korona</h3>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                            <a className="page-scroll" href="index.html">Home</a>
                        </li>
              <li>
                            <a className="page-scroll" href="single.html">About</a>
                        </li>
                        <li>
                            <a className="page-scroll" href="archive.html">Staff</a>
                        </li>
                        <li>
                            <a className="page-scroll" href="contact.html">Contact Us</a>
                        </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <header>
          <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
      
          <ol className="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          </ol>
          
          <div className="carousel-inner">
              <div className="item active">
                <img src={image1} alt="First slide" />
                        
                        <div className="header-text">
                            <div className="col-md-12 text-center">
                                <h2>Welcome to Us !</h2>
                                <br />
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                                <br />
                            </div>
                        </div>
              </div>
              <div className="item">
                <img src={image2} alt="Second slide" />
                
                        <div className="header-text">
                            <div className="col-md-12 text-center">
                                <h2>Sed diam nonumy eirmod tempor invidunt</h2>
                                <br />
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                                <br />
                            </div>
                        </div>
              </div>
          </div>
          
          <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left"></span>
          </a>
          <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right"></span>
          </a>
        </div>
      </header>
    
      <a id='backTop'>Back To Top</a>

      <div id="page-content" className="index-page">
      
        <section className="box-content box-1 text-center">
          <div className="no-gutter">
            <div className="col-sm-4 bg-1">
              <div className="box-text">
                <div className="heading">
                  <h2>Text Heading</h2>
                </div>
                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque quod maxime placeat facere possimus nihil impedit quo minus id quod maxime placeat facere possimus ptio cumque quod maxime ibero tempore, cum soluta nobis.</p>
                <a className="btn btn-1">Learn More</a>
              </div>
            </div>
            <div className="col-sm-4 bg-2">
              <div className="box-text">
                <div className="heading">
                  <h2>Text Heading</h2>
                </div>
                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque quod maxime placeat facere possimus nihil impedit quo minus id quod maxime placeat facere possimus ptio cumque quod maxime ibero tempore, cum soluta nobis.</p>
                <a className="btn btn-1">Learn More</a>
              </div>
            </div>
            <div className="col-sm-4 bg-3">
              <div className="box-text">
                <div className="heading">
                  <h2>Text Heading</h2>
                </div>
                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque quod maxime placeat facere possimus nihil impedit quo minus id quod maxime placeat facere possimus ptio cumque quod maxime ibero tempore, cum soluta nobis.</p>
                <a className="btn btn-1">Learn More</a>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </section>
      
        <section className="box-content box-2 box-bg-white">
          <div className="no-gutter">
            <div className="col-sm-6 fix-right">
              <div className="box-image">
                <img className="media__image" src={image14} />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="box-text">
                <div className="heading">
                  <h2>About</h2>
                  <span>SED NONUMY <br />UT LABORE ALIQUYAM</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in.</p>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </section>
        
        <section className="box-content box-3">
          <div className="no-gutter">
            <div className="col-lg-4 col-sm-6">
              <a href="#" className="portfolio-box">
                <img src={image5} className="img-responsive" alt="" />
                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a href="#" className="portfolio-box">
                <img src={image6} className="img-responsive" alt="" />
                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a href="#" className="portfolio-box">
                <img src={image7} className="img-responsive" alt="" />
                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a href="#" className="portfolio-box">
                <img src={image8} className="img-responsive" alt="" />
                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a href="#" className="portfolio-box">
                <img src={image9} className="img-responsive" alt="" />
                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a href="#" className="portfolio-box">
                <img src={image10} className="img-responsive" alt="" />
                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="clear"></div>
        </section>

        <section className="box-content box-4 box-bg-black">
          <div className="no-gutter">
            <div className="col-sm-6">
              <div className="box-image">
                <img className="media__image " src={image13} />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="box-text">
                <div className="heading">
                  <h2>welcome</h2>
                  <span>EUM IRIURE DOLOR <br />IN HENDRERIT DUIS</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in.</p>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </section>
        
        <section className="box-content box-5">
          <div className="no-gutter">
            <div className="col-sm-6 bg-3">
              <div className="box-text">
                <div className="heading">
                  <h2>Sign Up</h2>
                  <span>Get subscriber only insights & news <br />delivered by John Doe</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores...</p>
                <form name="form1" method="post" action="" >
                  <div className="row">
                    <div className="col-md-8">
                      <div className="form-group">
                        <input type="email" className="form-control input-lg" name="email" id="email" placeholder="Enter Your Email" required="required" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <button type="submit" className="btn btn-letter" name="btnSubcribe" id="btnSubcribe">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-sm-6 bg-0">
              <div className="box-text">
                <div className="heading">
                  <h2>Contact</h2>
                </div>
                <p><i className="fa fa-map-marker"></i> My Company Glasgow D04 89GR</p>
                <p><i className="fa fa-phone"></i> 800-2345-6789</p>
                <p><i className="fa fa-phone"></i> 800-2345-6789</p>
                <p><i className="fa fa-envelope-o"></i> info@demolink.org</p>
                <p><i className="fa fa-clock-o"></i> 7 Days a week from 9:00 am to 7:00 pm</p>
                <ul className="list-inline social-link">
                  <li><a href=""><i className="fa fa-facebook"></i></a></li>
                  <li><a href=""><i className="fa fa-twitter"></i></a></li>
                  <li><a href=""><i className="fa fa-google-plus"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </section>
        
      </div>

      <footer>
        <div className="wrap-footer">
          <div className="no-gutter">
            <div className="col-md-6">
              <div className="box-text">
                <div className="footer-heading">
                  <h2>Text Heading</h2>
                </div>
                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                <p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.</p>
                <br />
                <p>Copyright @ Korona - Designed by <a href="https://www.Zerotheme.com">Zerotheme</a></p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box-text">
                <h5>Financial Planning</h5>
                <ul className="quick-link list-group">
                  <li><a href="#">Investment Management</a></li>
                  <li><a href="#">Retirement Planning</a></li>
                  <li><a href="#">Long Term Care</a></li>
                  <li><a href="#">Estate Planning</a></li>
                  <li><a href="#">Social Security</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box-text">
                <h5>Investment Help</h5>
                <ul className="quick-link list-group">
                  <li><a href="#">Wealth Management</a></li>
                  <li><a href="#">Retirement & College Savings</a></li>
                  <li><a href="#">Business Owners</a></li>
                  <li><a href="#">Insurance & Annuities</a></li>
                  <li><a href="#">Cash & Credit</a></li>
                  <li><a href="#">Stocks, Bonds & Mutual Funds</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
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
