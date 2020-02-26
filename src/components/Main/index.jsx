import React from 'react';

import Form from '../Form';
import Placeholder from '../Placeholder';
import Actions from '../Actions';

export default () => {
    return (
        <main>
            <div className="container-fluid">
                <Form/>
                <Placeholder/>
                <Actions/>
            </div>
        </main>
    );
}