import React from 'react';

import {generateQRCode} from '../../generators';
import {showErrorToast, showSuccessToast, showWarningToast} from '../../functions';

export default () => {

    function isValidData(){
    }

    function generate(){
        if(isValidData()){
            const result = generateQRCode();
            if(result){
                document.getElementById('placeholder').innerHTML = result;
                showSuccessToast('Awesome! The QRCode was successfully created.');
            }
            else{
                showErrorToast('Oh, something went wrong! Please, try again.');
            }
        }
        else{
            showWarningToast('Invalid data!');
        }
    }

    return (
        <section>
            <div className="row"></div>
        </section>
    );
}