import React, { useState } from 'react';
import style from './style.module.scss';
import './style.scss';
import BgHeader from 'assets/images/bg-header.jpeg';
import BgFooter from 'assets/images/bg-footer.jpeg';
import {
  Typography,
  DatePicker,
  TimePicker,
  Select,
  Input,
  Button,
  Tabs,
  Row,
  Col,
} from 'antd';
import moment from 'moment';
import { SearchOutlined } from '@ant-design/icons';
import Carousel from './components/Carousel';
import LocationDirectionSvg from 'assets/images/location-direction.svg';
import { listPeople, places } from 'constants/index';

const { Title, Text } = Typography;
const { Option } = Select;
const { TabPane } = Tabs;

export default () => {
  const formatTime = 'HH:mm';
  const [date, setDate] = useState(moment());
  const [time, setTime] = React.useState(moment('00:00', formatTime));
  const [people, setPeople] = React.useState(1);

  function onChangeDate(date, dateString) {
    setDate(date);
    console.log(date, dateString);
  }

  function onChangeTime(time, timeString) {
    setTime(time);
    console.log(time, timeString);
  }

  function onChangePeople(value) {
    console.log(`selected ${value}`);
    setPeople(value);
  }

  return (
    <div>
      <div
        className={style.topContent}
        style={{ backgroundImage: `url(${BgHeader})` }}
      >
        <div className={style.overlayBg}>
          <Title style={{ color: 'white' }}>
            Find your table for any occasion
          </Title>
          <div className="d-flex align-center">
            <DatePicker value={date} size="large" onChange={onChangeDate} />
            <TimePicker
              value={time}
              size="large"
              onChange={onChangeTime}
              minuteStep={30}
              format={formatTime}
              showNow={false}
            />
            <Select
              defaultValue={people}
              size="large"
              style={{ width: 120 }}
              onChange={onChangePeople}
            >
              {listPeople.map((people, index) => (
                <Option key={index} value={people.value}>
                  {people.label}
                </Option>
              ))}
            </Select>

            <Input
              style={{ width: 300 }}
              className="mx-2"
              size="large"
              placeholder="Location, Restaurant, or Cuisine"
              prefix={<SearchOutlined />}
            />
            <Button size="large" type="primary">
              Let’s go
            </Button>
          </div>
        </div>
        {/* top */}
        <div className={style.content}>
          <p className="border-bottom py-2">
            It looks like you're in North Central Coast. Not correct?{' '}
            <img src={LocationDirectionSvg} />{' '}
            <a href="#" color="primary">
              Get current location
            </a>
          </p>
          <Carousel title="Recently viewed" />
          <Carousel title="Popular restaurants in North Central Coast" />
          <Carousel title="Top Cuisines near North Central Coast" />

          {/* tabs */}
          <Title className="mt-6 mb-1" level={3}>
            Explore OpenTable
          </Title>
          <Tabs>
            <TabPane tab="National cities/regions" key="1">
              <Row gutter={16}>
                {places.map((place, index) => (
                  <Col
                    key={index}
                    className="gutter-row mt-3 fw-normal "
                    span={6}
                  >
                    <div>{place.label}</div>
                  </Col>
                ))}
              </Row>
            </TabPane>
            <TabPane tab="International cities/regions" key="2">
              <Row gutter={16}>
                {places.map((place, index) => (
                  <Col
                    key={index}
                    className="gutter-row mt-3 fw-normal "
                    span={6}
                  >
                    <div>{place.label}</div>
                  </Col>
                ))}
              </Row>
            </TabPane>
            <TabPane tab="Nearby" key="3">
              <div className="fw-bold">Restaurants nearby</div>
            </TabPane>
          </Tabs>
          {/* end tabs */}
          {/* bg-footer */}
          <div
            className={style.footerBg}
            style={{ backgroundImage: `url(${BgFooter})` }}
          >
            <Title level={3} style={{ color: 'white' }}>
              Restaurateurs Join Us
            </Title>
            <Text className="fw-normal text-white text-center">
              Join the more than 50,000 restaurants which fill seats and manage
              reservations with OpenTable.
            </Text>
            <Button size="large" type="primary" className="px-7 mt-4">
              Learn more
            </Button>
          </div>
          {/* end bg-footer */}
          <div className="my-2 text-center fw-normal">
            Favorite restaurant not yet on OpenTable?{' '}
            <span className="text-primary">Suggest a restaurant.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
