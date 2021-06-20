import React from 'react';
import style from './style.module.scss';
import { Typography, Rate, Button } from 'antd';

const { Title } = Typography;

export default ({ item }) => {
  return (
    <div className={style.card}>
      <div className={style.cardLeft}>
        <img src={item.img} alt={item.name} />
      </div>

      <div className={style.cardRight}>
        <Title level={4} className="mb-0">
          {item.name}
        </Title>
        <div>
          <Rate
            className={style.rating}
            allowHalf
            disabled
            defaultValue={item.rating}
          />
          <span className="fw-normal mx-1">{item.reviewComment}</span>
          <span>({item.reviews})</span>
        </div>
        <div className="fs-2">
          <span>$$$$</span>
          <span className="mx-1 ">{item.type}</span>
          <span>{item.place}</span>
        </div>
        <div className="mt-1">
          {item.times.map((time, index) => (
            <Button type="primary" className="mr-1 mb-1" key={index}>
              {time}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
