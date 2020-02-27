import React, {useState} from 'react';

import {generateQRCode} from '../../generators';
import {showErrorToast, showSuccessToast, showWarningToast} from '../../functions';

export default () => {
    const [data, setData] = useState('');

    const isValidData = () => !!data;

    function generate(){
        if(isValidData()){
            const result = generateQRCode(undefined, undefined, data);
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
                        <textarea 
                            className="form-control"
                            placeholder="Enter your data here"
                            id="qrCodeData" 
                            rows="3" 
                            value={data}
                            onChange={(e)=> setData(e.target.value)}
                        >
                        </textarea>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-3">
                        <button type="button" className="btn btn-primary btn-block" onClick={generate}>
                            <i className="fa fa-lg fa-qrcode"></i>&nbsp;MAKE
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
}