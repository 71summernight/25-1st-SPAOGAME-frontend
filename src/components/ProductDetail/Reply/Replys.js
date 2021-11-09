import React, { Component } from 'react';
import Reply from './Reply';
import ReplyInput from './ReplyInput';
import './Replys.scss';

class Replys extends Component {
  render() {
    return (
      <>
        <div className="replys_wrapper">
          {this.props.replys.map(reply => (
            <Reply
              key={reply.comment_id}
              reply={reply}
              comment_content={reply.comment_content}
              comment_writer={reply.comment_writer}
              onDelete={this.props.onDelete}
              conmment_id={reply.comment_id}
            />
          ))}
        </div>
        <ReplyInput
          onAdd={this.props.onAdd}
          hadleAddByEnter={this.props.hadleAddByEnter}
          posting_id={this.props.posting_id}
          comment_info={this.props.comment_info}
        />
      </>
    );
  }
}

export default Replys;
