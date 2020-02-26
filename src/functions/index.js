import React from 'react';
import {toast} from 'react-toastify';

import {EMOJI} from '../constants';

const Content = ({message, icon}) => (
    <div>
        <span dangerouslySetInnerHTML={{__html: icon}}></span>&nbsp;{message}
    </div>
);

export const showDefaultToast = function(message, icon=EMOJI.STAR){
    toast(
        <Content message={message} icon={icon}/>,
        {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 6000,
            pauseOnHover: true,
            closeOnClick: true
        }
    );
}

export const showSuccessToast = function(message, icon=EMOJI.CHECK){
    toast.success(
        <Content message={message} icon={icon}/>,
        {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 6000,
            pauseOnHover: true,
            closeOnClick: true
        }
    );
}

export const showInfoToast = function(message, icon=EMOJI.LIGHT_BULB){
    toast.info(
        <Content message={message} icon={icon}/>,
        {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 6000,
            pauseOnHover: true,
            closeOnClick: true
        }
    );
}

export const showWarningToast = function(message, icon=EMOJI.FLAG){
    toast.warn(
        <Content message={message} icon={icon}/>,
        {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 6000,
            pauseOnHover: true,
            closeOnClick: true
        }
    );
}

export const showErrorToast = function(message, icon=EMOJI.SIREN){
    toast.error(
        <Content message={message} icon={icon}/>,
        {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 6000,
            pauseOnHover: true,
            closeOnClick: true
        }
    );
}