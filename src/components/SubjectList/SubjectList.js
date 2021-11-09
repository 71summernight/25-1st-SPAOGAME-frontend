import React, { Component } from 'react';

import GoodsList from './Goods/GoodList';
import Filters from './Filter/Filters';
import CategoryFilter from './Filter/CategoryFilter';
import PageBtn from '../PageBtn/PageBtn';
import './SubjectList.scss';
import { BASE_URL } from '../../config';

const LIMIT = 15;

class SubjectList extends Component {
  constructor() {
    super();
    this.state = {
      goods: [],
      category: [],
      filterdFunction: [],
      nonfilterd: [],
      offset: 0,
      standard: 0,
      order_id: 0,
    };
  }

  componentDidMount() {
    fetch(`${BASE_URL}/products/women/outer?offset=0&limit=${LIMIT}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          goods: data.goods,
          filterdFunction: data.goods,
          nonfilterd: data.goods,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.offset !== this.state.offset ||
      prevState.order_id !== this.state.order_id
    ) {
      fetch(
        `${BASE_URL}/products/women/outer?offset=${this.state.offset}&limit=${LIMIT}&order_id=${this.state.order_id}`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({
            goods: data.goods,
            filterdFunction: data.goods,
            nonfilterd: data.goods,
          });
        });
    }
  }

  sortByPrice = () => {
    this.setState({ order_id: 1 });
  };

  sortByPriceDesc = () => {
    this.setState({ order_id: 2 });
  };

  sortByName = () => {
    this.setState({ order_id: 3 });
  };

  sortByNew = () => {
    this.setState({ order_id: 0 });
  };

  colorSort = e => {
    const targetColor = e.target.getAttribute('name');
    const sortByColor = [...this.state.filterdFunction].filter(item =>
      item.colors.includes(targetColor)
    );
    this.setState({ goods: sortByColor });
  };

  colorRevert = e => {
    this.setState({ goods: this.state.nonfilterd });
  };

  pageBtn = e => {
    window.scrollTo(0, 0);

    this.setState({
      limit: 15 * e.target.name,
      offset: 15 * (e.target.name - 1),
    });
  };

  render() {
    const { goods, filterdFunction } = this.state;
    return (
      <div className="subject_list">
        <nav />
        <main>
          <Filters
            goods={goods}
            colorSort={this.colorSort}
            FILTER={FILTER}
            filterdFunction={filterdFunction}
            colorRevert={this.colorRevert}
          />

          <div className="main_mid">
            <h1>아우터</h1>
            <div className="category_filter_wrapper">
              <div className="category_filter">
                {CATEGORY.map(item => (
                  <CategoryFilter key={item.id} category={item} />
                ))}
              </div>

              <button className="item_count"> 8 items</button>
              <button className="sort">
                상품정렬 &nbsp;<i className="fas fa-chevron-down"></i>
                <ul className="dropbox">
                  <li className="dropbox_item" onClick={this.sortByNew}>
                    신상품
                  </li>
                  <li
                    className="dropbox_item"
                    name="name"
                    onClick={this.sortByName}
                  >
                    상품명
                  </li>
                  <li
                    className="dropbox_item"
                    name="price"
                    onClick={this.sortByPrice}
                  >
                    높은가격순
                  </li>
                  <li
                    className="dropbox_item"
                    name="price"
                    onClick={this.sortByPriceDesc}
                  >
                    낮은가격순
                  </li>
                </ul>
              </button>
            </div>

            <ul className="subjects">
              <GoodsList goods={goods} />
            </ul>
            <PageBtn pageBtn={this.pageBtn} />
          </div>

          <div className="main_right"></div>
        </main>
        <footer />
      </div>
    );
  }
}
const FILTER = [
  { color: 'black', material: '린넨' },
  { color: 'yellow', material: '쿨테크' },
  { color: 'orange', material: '데님' },
  { color: 'red', material: '폴리스' },
  { color: 'blue', material: '코튼' },
  { color: 'white', material: '패딩' },
  { color: 'green', material: '고어텍스' },
  { color: 'gray', material: '시어서커' },
  { color: 'pink', material: '레더' },
  { color: 'purple', material: '치노' },
  { color: 'brown', material: '코듀로이' },
  { color: '#A99477', material: '페이크퍼' },
];

const CATEGORY = [
  {
    id: 1,
    name: 'NEW',
  },
  {
    id: 2,
    name: 'BEST',
  },
  {
    id: 3,
    name: '아우터',
  },
  {
    id: 4,
    name: '상의',
  },
  {
    id: 5,
    name: '하의',
  },
  {
    id: 6,
    name: '원피스',
  },
  {
    id: 7,
    name: '가방',
  },
  {
    id: 8,
    name: '신발',
  },
  {
    id: 9,
    name: 'ACC',
  },
  {
    id: 10,
    name: '이너웨어',
  },
  {
    id: 11,
    name: '홈웨어/잠옷',
  },
  {
    id: 12,
    name: '스포츠웨어',
  },
];

export default SubjectList;
