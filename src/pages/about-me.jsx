import React from 'react';
import ProfilePic from '../assets/images/profilepic.jpg';
import RowanOwl from '../assets/images/rowan.png';
import MITxPRO from '../assets/images/MIT xPRO.png';
import UPennBootcamp from '../assets/images/upennbootcamp.jpg';
import '../App.css';

function aboutMe() {

    return (
        <React.Fragment>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='card'>

                        <div className='card-body'>
                            <div className="row abstract-back ">
                                <img className='avatar' src={ProfilePic}/>
                            </div>
                        </div>

                        <div className='card-body'>
                            <div className="row">
                                <p className='p-about'>
                                    A computer programmer who knows multiple languages (such as English, Russian, and Spanish) and
                                    programming languages, such as Java, C++, JavaScript, HTML, and CSS (among other languages).
                                    Ever since I was a child, I always liked working with computers. 
                                    I started coding when I was 13 years old. 
                                    My favorite programming languages are:
                                    <li> HTML </li>
                                        <li> CSS </li>
                                        <li> Java </li>
                                        <li> C++ </li>
                                    Aside from coding, I like to play chess, travel, and draw.
                                </p>
                            </div>
                        </div>

                        <div className="modal-footer" />

                        <div className='card-body'>
                            <h2 className='.edu'>Education</h2>
                            <br />

                            <div className='grid-container-profile'>

                            <div className="grid-item">
                                    <div className='university'>Massachusetts Institute of Technology (through Emeritus/xPRO)</div>
                                    <div className='concentration'>MERN Stack Web Developer</div>
                                </div>

                                <div className='grid-item'>
                                    <a href='https://xpro.mit.edu/' target='_blank'><img className='university-logo' src={MITxPRO} /></a>
                                </div>

                                <div className="grid-item">
                                    <div className='university'>University of Pennsylvania (through edX)</div>
                                    <div className='concentration'>Full-Stack Web Developer</div>
                                </div>

                                <div className='grid-item'>
                                    <a href='https://bootcamp.sas.upenn.edu/' target='_blank'><img className='university-logo' src={UPennBootcamp} /></a>
                                </div>

                                <div className='grid-item'>
                                    <div className='university'>Rowan University, Glassboro, NJ</div>
                                    <div className='concentration'>B.A. in Computing and Informatics</div>
                                </div>

                                <div className='grid-item'>
                                    <a href='https://www.rowan.edu/' target='_blank'><img className='university-logo' src={RowanOwl} /></a>
                                </div>
                               
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </React.Fragment>
    );
};

export default aboutMe;