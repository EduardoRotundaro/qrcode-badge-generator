import React from 'react';

import Form from '../Form';
import Placeholder from '../Placeholder';
import Actions from '../Actions';

export default () => {
    return (
        <main className="main">
            <div className="main__content">
                <Form/>
                <Placeholder/>
                <Actions/>
            </div>
        </main>
    );
}