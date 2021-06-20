import React from 'react';
import style from './style.module.scss';
import SearchHeader from 'assets/images/search-header.png';
import ImageTable01 from 'assets/images/table01.png';
import ImageTable02 from 'assets/images/table02.png';
import ImageTable03 from 'assets/images/table03.png';

import { Row, Col, Button, Descriptions, Table } from 'antd';

const { Column, ColumnGroup } = Table;

const data = [
  {
    key: 1,
    itemName: 'Tea',
    price: 12,
    quantity: 2,
    specialRequest: 'Strong tea',
  },
  {
    key: 2,
    itemName: 'Coffee',
    price: 15,
    quantity: 3,
    specialRequest: 'Sugar medium',
  },
  {
    key: 3,
    itemName: 'Total Price: $69',
  },
];

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  if (index === 2) {
    obj.props.colSpan = 0;
  }
  return obj;
};
const renderQuantity = (value, row, index) => {
  const obj = {
    children: (
      <div>
        <Button size="small">-</Button>
        <span className="px-1">{value}</span>
        <Button size="small">+</Button>
      </div>
    ),
    props: {},
  };
  if (index === 2) {
    obj.props.colSpan = 0;
  }
  return obj;
};

const renderTotalPrice = (text, row, index) => {
  if (index < 2) {
    return <a>{text}</a>;
  }
  return {
    children: <a>{text}</a>,
    props: {
      colSpan: 4,
    },
  };
};

export default () => {
  return (
    <div className="containre">
      <div
        className={style.header}
        style={{ backgroundImage: `url(${SearchHeader})` }}
      >
        <h1 className="mb-0 text-white font-size">Dining Table</h1>
      </div>

      <Row justify="center" className="mt-4">
        <Col span={14}>
          <Descriptions title="" layout="vertical" bordered>
            <Descriptions.Item label="Restaurants Details" span={1}>
              A quality and relaxing rural country pub.
            </Descriptions.Item>
            <Descriptions.Item label="Order Details" span={1}>
              26-05-2021
              <br />
              08:30 AM
              <br />1 Person
            </Descriptions.Item>
          </Descriptions>

          <Row justify="space-between" className="mt-4">
            <Col span={8}>
              <div>
                <img
                  className={style['image-table']}
                  src={ImageTable02}
                  alt="table02"
                ></img>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <img
                  className={style['image-table']}
                  src={ImageTable01}
                  alt="table01"
                ></img>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <img
                  className={style['image-table']}
                  src={ImageTable03}
                  alt="table03"
                ></img>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <img
                  className={style['image-table']}
                  src={ImageTable02}
                  alt="table02"
                ></img>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <img
                  className={style['image-table']}
                  src={ImageTable01}
                  alt="table01"
                ></img>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <img
                  className={style['image-table']}
                  src={ImageTable03}
                  alt="table03"
                ></img>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={8} className="pl-2">
          <Table dataSource={data} pagination={false} bordered>
            <ColumnGroup title="Menu: All day">
              <Column
                title="Item Name"
                dataIndex="itemName"
                key="itemName"
                render={renderTotalPrice}
              />
              <Column
                title="Price"
                dataIndex="price"
                key="price"
                render={renderContent}
              />
              <Column
                title="Quantity"
                dataIndex="quantity"
                key="quantity"
                render={renderQuantity}
              />
              <Column
                title="Special Request"
                dataIndex="specialRequest"
                key="specialRequest"
                render={renderContent}
              />
            </ColumnGroup>
          </Table>
          <div className="mt-4">
            <div className="d-flex">
              <div
                className={`${style['seat']} ${style['seat-reserved']}`}
              ></div>
              <div className="ml-1">Reserved</div>
            </div>
            <div className="d-flex mt-2">
              <div
                className={`${style['seat']}`}
              ></div>
              <div className="ml-1">Available</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
