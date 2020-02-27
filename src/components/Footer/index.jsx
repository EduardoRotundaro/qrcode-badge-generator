import React from 'react';

import {APP_VERSION, GITHUB_REPOSITORY} from '../../constants';

export default () => {
    return (
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-5">
                        <p>Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Quem num gosta di mim que vai caçá sua <a href="https://github.com/florinpop17/app-ideas" target="_blank" rel="noopener noreferrer">turmis</a>! Casamentiss faiz malandris se pirulitá.</p>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div className="col-6 col-lg-12">
                            <a href={GITHUB_REPOSITORY} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-lg mr-2"><i className="fa fa-github"></i>&nbsp;Github</a>
                        </div>
                        <div className="col-6 col-lg-12 mt-2">
                            <span className="footer--version">v&nbsp;{APP_VERSION}</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}