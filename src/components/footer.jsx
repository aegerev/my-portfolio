import React from 'react';
import '../footer.css';

function Footer() {
    return (
        <div className="footer" id="footer">
            <div className='img-link'>
                <a href="https://github.com/upennbootcamp23" target="_blank"><img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon"/></a>
            </div>
            <p className='footer-info'>
                &copy; 2024 Alexander Egerev  |  <a href="https://github.com/upennbootcamp23/my-portfolio/blob/main/src/assets/Egerev_Alexander_Resume2023.docx.pdf" className="link">Download The Resume Here</a>  |  <a href="https://coolors.co/palette/f7e03b-f5b338-ec2020-00ab4e-1a8549">The Official Color Palette</a>  |  made with <img id="react-icon" src="https://img.icons8.com/color/48/000000/react-native.png" alt="React"/>
            </p>

        </div>
    )
}

export default Footer;