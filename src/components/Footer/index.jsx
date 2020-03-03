import React from 'react';

import {APP_VERSION, GITHUB_REPOSITORY, FOOTER_DESCRIPTION} from '../../constants';

export default () => {
    const {APP_IDEAS_LINK, PART_1, PART_2, PROFILE_LINK, APP_IDEAS, PROFILE} = FOOTER_DESCRIPTION;
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="col-12 col-lg-8">
                        <p className="footer__description">
                            {PART_1}
                            <a href={APP_IDEAS_LINK} target="_blank" rel="noopener noreferrer">{APP_IDEAS}</a>
                            {PART_2}
                            <a href={PROFILE_LINK} target="_blank" rel="noopener noreferrer">{PROFILE}</a>
                            <br></br>
                            <span className="footer__version">v&nbsp;{APP_VERSION}</span>
                        </p>
                    </div>
                </div>
                <div className="footer__row">
                    <div className="col-12 col-lg-2 mb-2">
                        <a href={GITHUB_REPOSITORY} target="_blank" rel="noopener noreferrer" className="footer__github-link"><i className="fa fa-github"></i>&nbsp;Github</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}