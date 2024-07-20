import React from 'react';
import "./css/footer.css";

function Footer() {
  return (
    <footer className="footer" id="footer">
        <div className="copyright">
            &copy; Copyright{' '}
            <strong>
                <span>Sameer</span>
            </strong>
            . All Rights Reserved
        </div>
        <div className="credits">
            Designed By <a href="/">Sameer</a>
        </div>
    </footer>
  )
}

export default Footer;