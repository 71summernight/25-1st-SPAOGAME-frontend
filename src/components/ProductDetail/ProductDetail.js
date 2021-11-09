import React, { Component } from 'react';
import Product from './ProductsDetail/Product';
import Options from './Options/Options';
import Reviews from './Reviews/Reviews';

import './ProductDetail.scss';
import './Reviews/Review.scss';
import { BASE_URL } from '../../config';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      goods_detail: [],
      category: [],
      filterdFunction: [],
      content_writer: '',
    };
  }

  componentDidMount() {
    fetch(`${BASE_URL}/products/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          goods_detail: data.goods_detail,
        });
      });
  }

  handleDelete = reply => {
    const replys = this.state.replys.filter(item => item.id !== reply.id);
    this.setState({ replys });
  };

  handleModal = e => {
    this.setState({
      isReviewInputPopup: !this.state.isReviewInputPopup,
    });
  };

  render() {
    const { goods_detail } = this.state;

    return (
      <div className="ProductDetail">
        <main onClick={e => e.stopPropagation()}>
          <div className="product_detail_left">
            {this.state.goods_detail.map(item => (
              <Product
                key={item.product_id}
                goods={goods_detail}
                image={item.image_list}
                description={item.description}
                colors={item.colors}
                size={item.size}
              />
            ))}
          </div>
          <div className="product_detail_right">
            {this.state.goods_detail.map(item => (
              <Options
                key={item.product_id}
                goods_detail={goods_detail}
                price={item.price}
                name={item.name}
                colors={item.colors}
                size={item.size}
                product_id={item.product_id}
              />
            ))}
          </div>
        </main>

        <div className="bottom_wrapper">
          {this.state.goods_detail.map(item => (
            <Reviews
              key={item.product_id}
              posting_info={item.posting_info}
              comment_info={item.comment_info}
              product_id={item.product_id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductDetail;
