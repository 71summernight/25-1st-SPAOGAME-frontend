import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Replys from '../Reply/Replys';
import './Review.scss';

class Review extends Component {
  constructor() {
    super();
    this.state = {
      replys: [],
      replyInput: '',
      posting_id: '',
      writer: '',
    };
  }

  componentDidMount() {
    this.setState({
      replys: this.props.comment_info,
    });
  }

  handleDelete = reply => {
    const replys = this.state.replys.filter(
      item => item.comment_id !== reply.comment_id
    );
    this.setState({ replys });
  };

  handleAdd = replyInput => {
    if (replyInput.trim() === '') {
      return;
    }
    const replys = [
      ...this.state.replys,
      {
        comment_id: Date.now(),
        comment_content: replyInput,
        comment_writer: '김현진',
      },
    ];
    this.setState({ replys });
  };

  handleAddByEnter = e => {
    if (e.key === 'Enter') {
      this.handleAdd();
    }
  };

  render() {
    const {
      posting_image,
      posting_content,
      posting_writer,
      posting_date,
      posting_id,
    } = this.props;
    return (
      <>
        <div className="review_wrapper">
          <div className="review_left">
            {posting_image.map(item => (
              <img
                className="review_photo"
                alt="후기사진"
                src={item}
                id={posting_id}
              />
            ))}
            <div className="review_content">{posting_content}</div>

            <Replys
              replys={this.state.replys}
              onDelete={this.handleDelete}
              onAdd={this.handleAdd}
              handleAddByEnter={this.handleAddByEnter}
              posting_id={posting_id}
              comment_info={this.props.comment_info}
            />
          </div>

          <div className="review_right">
            <ul>
              <li>
                <div className="posting_title">작성자</div>
                <div className="posting_content">{posting_writer}</div>
              </li>
              <hr />
              <li>
                <div className="posting_title">작성일</div>
                <div className="posting_content">{posting_date}</div>
                <hr />
              </li>
            </ul>
          </div>
        </div>
        <hr className="insteadOfHr"></hr>
      </>
    );
  }
}

export default withRouter(Review);
