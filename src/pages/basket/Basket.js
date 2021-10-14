import React from 'react';
import '../basket/Basket.scss';
import Orderlists from './Orderlists';

class Basket extends React.Component {
  render() {
    return (
      <main className="basket_container">
        <section className="basket_contents">
          <div className="basket_header">
            <ol>
              <li>
                <button className="basket_home_button">Home</button>
              </li>
              <li className="basket_location"> > 장바구니</li>
            </ol>
          </div>
          <div className="basket_title">
            <h2>장바구니</h2>
          </div>
          <div className="product_basket">
            <div className="product_basket_title">
              <p className="right_setence">
                장바구니에 담긴 상품은 30일동안 보관됩니다.
              </p>
            </div>
            <table className="vacant_basket">
              <thead>
                <td>장바구니가 비어있습니다.</td>
              </thead>
            </table>
            <div className="delivery_wrapper">
              <div className="delivery_title">배송방법</div>
              <div className="basket_delivery">
                <ul>
                  <li>
                    <a href="!">택배</a>
                  </li>
                  <li>
                    <a href="!">매장픽업</a>
                  </li>
                </ul>
              </div>
            </div>
            <section className="basket_amount">
              <div className="total_amount">
                <tbody className="basket_flex">
                  <tr>
                    <td className="total_fee">
                      <p>총 상품금액</p>
                      <p>
                        <strong>0</strong>
                      </p>
                    </td>
                    <p>
                      <strong>+</strong>
                    </p>
                    <td className="shipping_fee">
                      <p>총 배송비</p>
                      <p className="calculate_fees">0</p>
                    </td>
                    <p className="calculate_fees">=</p>
                    <td className="reservation_fee">
                      <p>결재예정금액</p>
                      <p className="calculate_fees">0</p>
                    </td>
                  </tr>
                </tbody>
              </div>
            </section>
            <div className="basket_order_button">
              <button className="order_select_item">선택상품주문</button>
              <button className="continue_shopping">쇼핑계속하기</button>
              <button className="order_all_items">전제상품주문</button>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Basket;
