import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <br></br>
            Connect with me: 
            <span style={{ margin: '0 10px' }}></span>
            <a href="https://github.com/bradleytroll" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            <span style={{ margin: '0 10px' }}></span>
            <a href="https://www.linkedin.com/in/bradleytroll/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            <span style={{ margin: '0 10px' }}></span>
            <a href="https://twitter.com/bradleytroll" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
            <br></br>
            <br></br>
        </footer>
    );
};

export default Footer;