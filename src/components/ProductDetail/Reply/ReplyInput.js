import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { BASE_URL } from '../../../config';

import './ReplyInput.scss';

class Reply extends PureComponent {
  inputRef = React.createRef();
  onSubmit = event => {
    event.preventDefault();
    const replyInput = this.inputRef.current.value;
    replyInput && this.props.onAdd(replyInput);
    this.inputRef.current.value = '';
  };

  reviewInput = () => {
    fetch(`${BASE_URL}/postings/comments`, {
      headers: { Authorization: localStorage.getItem('token') },
      method: 'POST',
      body: JSON.stringify({
        comment_content: this.inputRef.current.value,
        posting_id: this.props.posting_id,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'USER_NOTEXIST') {
          alert('댓글이 정상적으로 등록 되지 않았습니다.');
        } else {
          this.props.history.push(`${this.props.location.pathname}`);
        }
      });
  };

  render() {
    return (
      <form className="reply_submit" onSubmit={this.onSubmit}>
        <span className="reply_wrapper">
          <input className="reply" ref={this.inputRef} />
          <button
            className="reply_btn"
            onKeyPress={this.props.handleAddByEnter}
            onClick={this.reviewInput}
          >
            댓글작성
          </button>
        </span>
      </form>
    );
  }
}

export default withRouter(Reply);
