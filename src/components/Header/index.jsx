import React from 'react';

import logo from '../../images/logo.png';

export default () => {
    return (
        <header>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <img src={logo} alt="QRCode Generator"/>
                    </div>
                    <div className="col-12 text-center">
                        <span className="header--title">QRCODE GENERATOR</span>
                    </div>
                </div>
            </div>
        </header>
    );
}