import React from 'react';
import Card from '../Card';
import { listTables } from 'constants/index';

export default () => {
  return (
    <div>
      {listTables.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};
