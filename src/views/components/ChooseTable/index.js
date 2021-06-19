import React, { useState } from 'react';
import moment from 'moment';
import { SearchOutlined } from '@ant-design/icons';
import { DatePicker, TimePicker, Select, Input, Button } from 'antd';
import { listPeople } from 'constants/index';

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
      <Button size="large" type="primary" onClick={onClick}>
        Let’s go
      </Button>
    </div>
  );
};
