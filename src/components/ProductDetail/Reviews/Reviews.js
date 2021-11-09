import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Review from './Review';
import './Reviews.scss';

class Reviews extends Component {
  goToReviewInput = () => {
    this.props.history.push({
      pathname: '/review',
      state: { product_id: this.props.product_id },
    });
  };

  render() {
    return (
      <div>
        <div class="review_submit_wrapper">
          <button
            className="review_submit"
            name={this.props.product_id}
            onClick={this.goToReviewInput}
          >
            리뷰작성
          </button>
          <hr className="hr_bottom" />
        </div>
        {this.props.posting_info.map(item => (
          <Review
            key={item.posting_id}
            posting_id={item.posting_id}
            posting_writer={item.posting_writer}
            positing_title={item.posting_title}
            posting_content={item.posting_content}
            posting_image={item.posting_image}
            posting_date={item.posting_date}
            comment_info={item.comment_info}
          />
        ))}
      </div>
    );
  }
}

export default withRouter(Reviews);
