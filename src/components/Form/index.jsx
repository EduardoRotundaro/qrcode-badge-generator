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
            <form>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-2 form-group">
                        <label htmlFor="typeNumber">Type Number</label>
                        <select className="form-control" id="typeNumber">
                            <option>1</option>
                        </select>
                    </div>
                    <div className="col-12 col-lg-4 form-group">
                        <label htmlFor="errorCorrectionLevel">Error Correction Level</label>
                        <select className="form-control" id="errorCorrectionLevel">
                            <option>1</option>
                        </select>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6 form-group">
                        <label htmlFor="qrCodeData">QRCode Data</label>
                        <textarea className="form-control" id="qrCodeData" rows="3"></textarea>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-3">
                        <button className="btn btn-primary btn-block"><i className="fa fa-lg fa-qrcode"></i>&nbsp;MAKE</button>
                    </div>
                </div>
            </form>
        </section>
    );
}