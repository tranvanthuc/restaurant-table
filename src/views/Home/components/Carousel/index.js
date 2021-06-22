import React from 'react';
import { Button, Carousel, Card, Rate, Typography } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { listCarousel } from 'constants/index';
import style from './style.module.scss';
import './style.scss';
import clsx from 'clsx';

const { Text } = Typography;

const Arrow = ({ currentSlide, slideCount, onClick, icon, ...props }) => {
  return (
    <Button
      type="default"
      shape="circle"
      icon={icon}
      onClick={onClick}
      {...props}
    />
  );
};

const settings = {
  nextArrow: <Arrow icon={<ArrowRightOutlined />} />,
  prevArrow: <Arrow icon={<ArrowLeftOutlined />} />,
  speed: 500,
  slidesToScroll: 1,
  variableWidth: true,
};

export default ({ title }) => {
  return (
    <div className="homepage">
      <div className="border-bottom py-2 my-3 d-flex justify-space-between align-center">
        <div className="h2">{title}</div>
        <a href="#" color="primary" className={clsx(style.viewAll, 'fw-bold')}>
          View all
        </a>
      </div>
      <Carousel dots={false} arrows {...settings}>
        {listCarousel.map((item, index) => (
          <div key={index}>
            <Card
              hoverable
              className={style.card}
              cover={<img alt="example" src={item.img} />}
            >
              <div className="h3">{item.title}</div>
              <Rate
                className={style.rating}
                allowHalf
                disabled
                defaultValue={item.rating}
              />
              <Text className="ml-2" strong>{`${item.reviews} reviews`}</Text>
              <div className="mt-1">{`${item.type} - ${item.place}`}</div>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
