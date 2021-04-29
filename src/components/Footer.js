import React from 'react';

function Footer(props) {
  return (
    <footer className="site-footer">
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <a href="https://linkedin.com/in/tiffany-mollica" className="btn btn-social-icon btn-linkedin"><span className="fa fa-linkedin"></span></a>
                    <a href="https://github.com/tiffany-m" className="btn btn-social-icon btn-github"><span className="fa fa-github"></span></a>
                </div>
                <div className="col-sm">
                    <strong>Contact:</strong><br/>
                    <a role="button" href="tel:+8675309"><i className="fa fa-phone"></i> 867-5309</a> | {' '}
                    <a role="button" href="mailto:info@edibledelights.com"><i className="fa fa-envelope"></i> tiffmollica@gmail.com</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;