import qrcode from 'qrcode-generator';
import domtoimage from 'dom-to-image';
import {saveAs} from 'file-saver';

export const generateQRCode = function(typeNumber=4, errorCorrectionLevel='L', data){
    try{
        let qrcd = qrcode(typeNumber, errorCorrectionLevel);
        qrcd.addData(data);
        qrcd.make();
        let tst = qrcd.createImgTag(); 
        return tst;
    }
    catch(err){
        return null;
    }
}

export const generatePNGImage = async function(node){
    try {
        const dataUrl = await domtoimage.toPng(node);
        let img = new Image();
        img.src = dataUrl;
        return img;
    } catch (error) {
        return null;
    }
}

export const generateJPEGImage = async function(node){
    try {
        const dataUrl = await domtoimage.toJpeg(node);
        let img = new Image();
        img.src = dataUrl;
        return img;
    } catch (error) {
        return null;
    }
}

export const downloadAsPNG = async function(node){
    try {
        const isFileSaverSupported  = !!new Blob();
        if(!isFileSaverSupported) return false;

        const blob = await domtoimage.toBlob(node);
        saveAs(blob, 'qrcode.png');
        return true;
    } catch (error) {
        return null;
    }
}

export const downloadAsJPEG = async function(node){
    try {
        const dataUrl = await domtoimage.toJpeg(node, { quality: 0.95 });
        let link = document.createElement('a');
        link.download = 'qrcode.jpeg';
        link.href = dataUrl;
        link.click();
        return true;
    } catch (error) {
        return null;
    }
}
