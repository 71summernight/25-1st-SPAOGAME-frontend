import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Goods extends Component {
  render() {
    const { name, price, review_count, img_urls, id } = this.props.item;
    return (
      <Link to={`/products/${id}`}>
        <li className="Goods">
          <div className="image_wrapper">
            <img alt="상품 이미지" src={img_urls} />
          </div>
          <div className="description">
            <div className="name_heart_wrapper">
              <span className="subject_name">{name} </span>
              <span className="heart">
                <i className="far fa-heart" />
              </span>
            </div>
            <div className="subject_price">{price.toLocaleString('ko-KR')}</div>
            <div className="review_count">{`리뷰 ${review_count} 건`}</div>
          </div>
        </li>
      </Link>
    );
  }
}

export default withRouter(Goods);
