import React from 'react';
import { Button, Carousel, Card, Rate, Typography } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import CarouselImg1 from 'assets/images/carousel1.jpeg';
import CarouselImg2 from 'assets/images/carousel2.jpeg';
import CarouselImg3 from 'assets/images/carousel3.jpeg';
import CarouselImg4 from 'assets/images/carousel4.jpeg';
import CarouselImg5 from 'assets/images/carousel5.jpeg';
import CarouselImg6 from 'assets/images/carousel6.jpeg';
import style from './style.module.scss';

const { Title, Text } = Typography;

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
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 870,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const listCarousel = [
  {
    img: CarouselImg1,
    title: 'The Grand Buffet',
    rating: 5,
    reviews: 20,
    place: 'Wan chai',
    type: 'International',
  },
  {
    img: CarouselImg2,
    title: 'Pica pica',
    rating: 5,
    reviews: 204,
    place: 'Ha Noi',
    type: 'Chinese',
  },
  {
    img: CarouselImg3,
    title: 'Aqua',
    rating: 4,
    reviews: 402,
    place: 'Ho Chi Minh',
    type: 'French',
  },
  {
    img: CarouselImg4,
    title: 'Rice Pistro',
    rating: 3.5,
    reviews: 102,
    place: 'Da Nang',
    type: 'International',
  },
  {
    img: CarouselImg5,
    title: '3 Spoons',
    rating: 4.5,
    reviews: 205,
    place: 'Can Tho',
    type: 'International',
  },
  {
    img: CarouselImg6,
    title: 'High Land',
    rating: 5,
    reviews: 405,
    place: 'Phu Quoc',
    type: 'International',
  },
];

export default ({ title }) => {
  return (
    <div>
      <div className="border-bottom py-2 my-3 d-flex justify-space-between align-center">
        <Title className="mb-0" level={3}>
          {title}
        </Title>
        <a href="#" color="primary" className="fw-bold">
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
              <Title className="mb-0" level={4}>
                {item.title}
              </Title>
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
