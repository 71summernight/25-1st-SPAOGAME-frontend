import React from 'react';
import Orderproduct from './Orderproduct';
import '../../components/Orderbasket/Orderlists.scss';
import { BASE_URL } from '../../config';

class Orderlists extends React.Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
    };
  }

  componentDidMount() {
    fetch(`${BASE_URL}/orders/cart`, {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ cartList: data.res });
      });
  }

  render() {
    console.log(this.cartList);
    const { cartList } = this.state;
    return (
      <section className="order_lists">
        <form className="order_title">
          <h3>일반상품</h3>
        </form>
        <table className="order_table">
          <caption>일반배송</caption>
          <thead>
            <tr>
              <th scope="col">
                <input className="th_checkbox" type="checkbox" />
              </th>
              <th scope="col" className="th_img"></th>
              <th scope="col" className="th_details">
                상품정보
              </th>
              <th scope="col" className="th_quantity">
                수량
              </th>
              <th scope="col" calssName="th_amount">
                가격
              </th>
              <th scope="col" className="th_select">
                선택
              </th>
            </tr>
          </thead>
        </table>
        {cartList.map(item => (
          <tr key={item.id}>
            <Orderproduct cartItem={item} />
          </tr>
        ))}
      </section>
    );
  }
}

export default Orderlists;
