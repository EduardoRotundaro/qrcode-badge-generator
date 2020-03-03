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
            <form className="form">
                <div className="form__row">
                    <div className="form__item col-12 col-lg-2">
                        <label htmlFor="typeNumber">Type Number</label>
                        <select  
                            id="typeNumber"
                            value={typeNumber}
                            onChange={(e) => setTypeNumber(e.target.value)}
                        >
                            {renderSelectOptions(TYPE_NUMBER)}
                        </select>
                    </div>
                    <div className="form__item col-12 col-lg-3">
                        <label htmlFor="errorCorrectionLevel">Error Correction Level</label>
                        <select 
                            id="errorCorrectionLevel"
                            value={errorCorrectionLevel}
                            onChange={(e) => setErrorCorrectionLevel(e.target.value)}
                        >
                            {renderSelectOptions(ERROR_CORRECTION_LEVEL)}
                        </select>
                    </div>
                    <div className="form__item col-12 col-lg-3">
                        <label htmlFor="qrCodeSize">QRCode Size</label>
                        <select 
                            id="qrCodeSize"
                            value={qrCodeSize}
                            onChange={(e) => setQrCodeSize(e.target.value)}
                        >
                            {renderSelectOptions(SIZE)}
                        </select>
                    </div>
                </div>
                <div className="form__row">
                    <div className="form__item col-12 col-lg-8">
                        <textarea 
                            className={confirmed && !data? ' is-invalid' : ''}
                            placeholder="Enter your data here"
                            id="qrCodeData" 
                            rows="3" 
                            value={data}
                            onChange={(e)=> setData(e.target.value)}
                        >
                        </textarea>
                    </div>
                </div>
                <div className="form__row">
                    <div className="col-12 col-lg-3">
                        <button type="button" className="form__submit" onClick={generate}><i></i>&nbsp;MAKE</button>
                    </div>
                </div>
            </form>
        </section>
    );
}