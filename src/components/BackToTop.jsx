import React, {useState, useEffect} from 'react';
import './css/backtotop.css';

function BackToTop() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
        return () => {
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY);
            });
        };
    }, [scroll]);

    const backToTop = () => {
        window.scrollTo(0,0);
    };

    return (
    <a href="/" onClick={backToTop} className={`${scroll > 100 ? 'active' : undefined } back-to-top d-flex align-items-center justify-content-center`}>
        <i className="bi bi-arrow-up-short"></i>
    </a>
  )
}

export default BackToTop
