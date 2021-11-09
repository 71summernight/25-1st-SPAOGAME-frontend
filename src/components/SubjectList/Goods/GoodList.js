import React, { Component } from 'react';
import Goods from './Goods';
import './Goods.scss';
import './GoodsList.scss';

class GoodList extends Component {
  render() {
    const { goods } = this.props;

    return (
      <>
        {goods.map(item => {
          const { name, price, review_count, img_urls } = item;
          return (
            <Goods
              key={name}
              item={item}
              name={name}
              price={price}
              count={review_count}
              image={img_urls}
            />
          );
        })}
        {goods.length % 3 === 2 ? <div className="buffer" /> : <></>}
      </>
    );
  }
}

export default GoodList;
