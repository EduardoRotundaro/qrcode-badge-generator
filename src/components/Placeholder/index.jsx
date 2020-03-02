import React from 'react';

import {generateQRCode} from '../../generators';

export default () => {

    const defaultBadge = generateQRCode(2, 'L', 'React is awesome', 2);

    return (
        <section>
            <div className="row justify-content-center mt-4 mb-4">
                <div className="col-12 col-lg-4 mt-4 mb-4">
                    <div className="row justify-content-center">
                        <div className="col-auto border">
                            <div className="qrcode">
                                <div 
                                    id="placeholder" 
                                    dangerouslySetInnerHTML={{__html: defaultBadge}}
                                >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}