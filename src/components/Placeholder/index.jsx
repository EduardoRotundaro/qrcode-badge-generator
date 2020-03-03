import React from 'react';

import {generateQRCode} from '../../generators';

export default () => {

    const defaultBadge = generateQRCode(2, 'L', 'React is awesome', 2);

    return (
        <section className="placeholder">
            <div className="row justify-content-center mt-4 mb-4">
                <div className="col-auto border">
                    <div className="placeholder__qrcode">
                        <div id="placeholder" 
                            dangerouslySetInnerHTML={{__html: defaultBadge}}
                        >
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}