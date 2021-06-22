import React, { useState } from 'react';
import moment from 'moment';
import { SearchOutlined } from '@ant-design/icons';
import { DatePicker, TimePicker, Select, Input, Button, Row, Col } from 'antd';
import { listPeople } from 'constants/index';
import style from './style.module.scss';

const { Option } = Select;

export default ({ onClick }) => {
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
    <Row gutter={[8, 8]} justify="center" align="middle" className="w-100">
      <Col
        xl={{ span: 16 }}
        lg={{ span: 16 }}
        md={{ span: 16 }}
        xs={{ span: 24 }}
      >
        <Row gutter={[8, 8]} justify="center">
          <Col
            xl={{ span: 4 }}
            lg={{ span: 8 }}
            md={{ span: 8 }}
            xs={{ span: 20 }}
          >
            <DatePicker
              className="w-100"
              value={date}
              size="large"
              onChange={onChangeDate}
            />
          </Col>
          <Col
            xl={{ span: 4 }}
            lg={{ span: 8 }}
            md={{ span: 8 }}
            xs={{ span: 20 }}
          >
            <TimePicker
              className="w-100"
              value={time}
              size="large"
              onChange={onChangeTime}
              minuteStep={30}
              format={formatTime}
              showNow={false}
            />
          </Col>
          <Col
            xl={{ span: 4 }}
            lg={{ span: 8 }}
            md={{ span: 8 }}
            xs={{ span: 20 }}
          >
            <Select
              defaultValue={people}
              size="large"
              onChange={onChangePeople}
              className="w-100"
            >
              {listPeople.map((people, index) => (
                <Option key={index} value={people.value}>
                  {people.label}
                </Option>
              ))}
            </Select>
          </Col>
          <Col
            xl={{ span: 9 }}
            lg={{ span: 16 }}
            md={{ span: 16 }}
            xs={{ span: 20 }}
          >
            <Input
              className="w-100"
              size="large"
              placeholder="Location, Restaurant, or Cuisine"
              prefix={<SearchOutlined />}
            />
          </Col>

          <Col
            xl={{ span: 3 }}
            lg={{ span: 8 }}
            md={{ span: 8 }}
            xs={{ span: 20 }}
          >
            <Button block size="large" type="primary" onClick={onClick}>
              Let’s go
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
