import React from 'react';

import logo from '../../images/logo.png';

export default () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <img className="header__logo" src={logo} alt="QRCode Generator"/>
                    </div>
                    <div className="header__title col-12">
                        <span>QRCODE GENERATOR</span>
                    </div>
                </div>
            </div>
        </header>
    );
}