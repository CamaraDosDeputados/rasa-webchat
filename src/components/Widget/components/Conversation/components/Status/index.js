import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import './style.scss';

const Status = ({
  text,
  profileAvatar
}) =>
  <div>
    {
      text && text != '' &&
      <div className="message status-text">
        <img src={profileAvatar} className="avatar" alt="profile" />
        <div className="response">
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
            <div className="typing">
              <div className="typing-bar"></div>
              <div className="typing-bar"></div>
              <div className="typing-bar"></div>
              <div className="typing-bar"></div>
            </div>
          </div>
        </div>
      </div>
    }
  </div>;

Status.propTypes = {
  text: PropTypes.string,
  profileAvatar: PropTypes.string,
};

export default Status;
