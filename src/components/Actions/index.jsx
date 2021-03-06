import React from 'react';

import {downloadAsJPEG, downloadAsPNG} from '../../generators';
import {showSuccessToast, showErrorToast, showWarningToast} from '../../functions';

export default () => {

    const getNode = () => document.getElementById('placeholder');

    async function download(format){
        let result = null;
        if(format==='png')
            result = await downloadAsPNG(getNode());
        else 
            result = await downloadAsJPEG(getNode());
        
        if(result)
            showSuccessToast('Yes! The file was successfully generated.');
        else if(result===false)
            showWarningToast('Your browser does not support this resource. Try another extension!');
        else
            showErrorToast('Oh, something went wrong! Please, try again.');
    }

    return (
        <section>
            <div className="actions">
                <div className="actions__item">
                    <button type="button" className="actions__button" onClick={() => download('png')}>
                        <i className="fa fa-download"></i>&nbsp;Download as PNG
                    </button>
                </div>
                <div className="actions__item">
                    <button type="button" className="actions__button" onClick={() => download('jpeg')}>
                        <i className="fa fa-download"></i>&nbsp;Download as JPEG
                    </button>
                </div>
            </div>
        </section>
    );
}