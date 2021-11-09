import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { BASE_URL } from '../../../config';

import './Reply.scss';

class Reply extends Component {
  constructor() {
    super();
    this.state = {
      comment_id: '',
    };
  }

  componentDidMount() {
    this.setState({
      comment_id: this.props.reply.comment_id,
    });
  }
  replyDelete = () => {
    this.props.onDelete(this.props.reply);

    fetch(`${BASE_URL}/postings/comments/${this.state.comment_id}`, {
      headers: { Authorization: localStorage.getItem('token') },
      method: 'delete',
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'INVALID_USER') {
          alert('비밀번호가 올바르지 않습니다!');
        } else {
          alert('댓글 작성이 완료되었습니다.');
          this.props.history.push(`${this.props.location.pathname}`);
        }
      });
  };

  render() {
    const { comment_content, comment_writer } = this.props;
    return (
      <div className="replys">
        <div className="reply_left">
          <span className="owner-id">
            <b>{comment_writer}</b>
          </span>
          <span className="owner_content">{comment_content}</span>
        </div>

        <button className="delete_btn" onClick={this.replyDelete}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    );
  }
}

export default withRouter(Reply);
