import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Messages from './components/Messages';
import Sender from './components/Sender';
import Status from './components/Status';
import './style.scss';

const Conversation = props =>
  <div className="conversation-container" role="dialog" aria-labelledby="dialog1Title">
    <Header
      title={props.title}
      subtitle={props.subtitle}
      toggleChat={props.toggleChat}
      showCloseButton={props.showCloseButton}
      connected={props.connected}
      connectingText={props.connectingText}
      closeImage={props.closeImage}
    />
    <Messages
      profileAvatar={props.profileAvatar}
      params={props.params}
      sendMessage={props.sendMessage}
    />
    <Status
      text={props.statusText}
      profileAvatar={props.profileAvatar}
    />
    <Sender
      sendMessage={props.sendMessage}
      disabledInput={props.disabledInput}
    />
  </div>;

Conversation.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  sendMessage: PropTypes.func,
  profileAvatar: PropTypes.string,
  toggleChat: PropTypes.func,
  showCloseButton: PropTypes.bool,
  disabledInput: PropTypes.bool,
  params: PropTypes.object,
  connected: PropTypes.bool,
  connectingText: PropTypes.string,
  statusText: PropTypes.string,
  closeImage: PropTypes.string

};

export default Conversation;
