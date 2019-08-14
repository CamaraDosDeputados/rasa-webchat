import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

import close from 'assets/clear-button.svg';
import './style.scss';

const Status = ({
  text
}) =>
  <div>
        {
        text && text != '' &&
        <div className="status-text">
            <div className="message-text">
                <ReactMarkdown
                  className={'markdown'}
                  escapeHtml={false}
                  source={text}
                  linkTarget={(url) => {
                    if (!url.startsWith('mailto') && !url.startsWith('javascript')) return '_blank';
                    return undefined;
                  }}
                  transformLinkUri={null}
                />
            </div>
        </div>
        }
  </div>;

Status.propTypes = {
  text: PropTypes.string
};

export default Status;
