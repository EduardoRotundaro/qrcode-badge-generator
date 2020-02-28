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
                showSuccessToast('Awesome!');
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
                            <option value="">Auto Detect</option>
                            <option value="1">1</option>
                            <option value="40">40</option>
                        </select>
                    </div>
                    <div className="col-12 col-lg-3 form-group">
                        <label htmlFor="errorCorrectionLevel">Error Correction Level</label>
                        <select className="form-control" id="errorCorrectionLevel">
                            <option value="">Default</option>
                            <option value="L">Low (7%)</option>
                            <option value="M">Medium (15%)</option>
                            <option value="Q">Quartile (25%)</option>
                            <option value="H">High (30%)</option>
                        </select>
                    </div>
                    <div className="col-12 col-lg-3 form-group">
                        <label htmlFor="qrCodeSize">QRCode Size</label>
                        <select className="form-control" id="qrCodeSize">
                            <option value="2">32px</option>
                            <option value="3">40px</option>
                        </select>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8 form-group">
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