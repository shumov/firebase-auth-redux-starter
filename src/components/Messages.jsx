// @flow
import React from 'react';

const Messages = ({
  sendSuccessMessage,
  sendErrorMessage,
}: {
    sendSuccessMessage: Function,
    sendErrorMessage: Function,
  }) => (
    <div className="mw10 center ph3-ns">
      <h1 className="f2 lh-title mh3">Messages</h1>
      <div className="cf ph2-ns">
        add here messages list with controls
      </div>
    </div>
);

export default Messages;
