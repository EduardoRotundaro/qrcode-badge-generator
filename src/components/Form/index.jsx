import React, {useState} from 'react';

import {generateQRCode} from '../../generators';
import {showErrorToast, showSuccessToast, showWarningToast} from '../../functions';
import {QRCODE_OPTIONS} from '../../constants';

export default () => {
    const [data, setData] = useState('');
    const [typeNumber, setTypeNumber] = useState('0');
    const [errorCorrectionLevel, setErrorCorrectionLevel] = useState('L');
    const [qrCodeSize, setQrCodeSize] = useState('2');
    const [confirmed, setConfirmed] = useState(false);

    const {ERROR_CORRECTION_LEVEL, SIZE, TYPE_NUMBER} = QRCODE_OPTIONS;

    const isValidData = () => !!data;

    function renderSelectOptions(arr=[]){
        return arr.map(({value, name}) => <option key={`opt_${value}`} value={value}>{name}</option> );
    }

    function generate(){
        setConfirmed(!confirmed);
        if(isValidData()){
            const result = generateQRCode(typeNumber, errorCorrectionLevel, data, qrCodeSize);
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
                        <select 
                            className="form-control" 
                            id="typeNumber"
                            value={typeNumber}
                            onChange={(e) => setTypeNumber(e.target.value)}
                        >
                            {renderSelectOptions(TYPE_NUMBER)}
                        </select>
                    </div>
                    <div className="col-12 col-lg-3 form-group">
                        <label htmlFor="errorCorrectionLevel">Error Correction Level</label>
                        <select 
                            className="form-control" 
                            id="errorCorrectionLevel"
                            value={errorCorrectionLevel}
                            onChange={(e) => setErrorCorrectionLevel(e.target.value)}
                        >
                            {renderSelectOptions(ERROR_CORRECTION_LEVEL)}
                        </select>
                    </div>
                    <div className="col-12 col-lg-3 form-group">
                        <label htmlFor="qrCodeSize">QRCode Size</label>
                        <select 
                            className="form-control" 
                            id="qrCodeSize"
                            value={qrCodeSize}
                            onChange={(e) => setQrCodeSize(e.target.value)}
                        >
                            {renderSelectOptions(SIZE)}
                        </select>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8 form-group">
                        <textarea 
                            className={`form-control${confirmed && !data? ' is-invalid' : ''}`}
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