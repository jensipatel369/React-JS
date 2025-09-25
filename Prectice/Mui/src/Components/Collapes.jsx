import React from 'react';
import { Collapse } from 'antd';

const text = `A flower is the reproductive structure of a flowering plant (angiosperm). Often brightly colored and fragrant, its main biological function is to produce seeds for new plant growth by facilitating the union of male and female gametes. A typical flower is composed of four main whorls (or rings) of parts, although not all flowers have every part. A flower, also known as a blossom, is the colorful reproductive part of a flowering plant (angiosperm) that produces seeds and fruit.`;

const itemsNest = [
  {
    key: '1',
    label: 'Rose',
    children: (
      <p style={{ backgroundColor: '#d9ddc2', padding: '10px', margin: 0 }}>
        {text}
      </p>
    ),
  },
];

const items = [
  {
    key: '1',
    label: 'Flower',
    children: (
      <Collapse
        defaultActiveKey="1"
        items={itemsNest}
        style={{
          backgroundColor: '#d9ddc2',
          padding: '5px',
          border: 'none',
          boxShadow: 'none',
        }}
      />
    ),
  },
  {
    key: '2',
    label: 'Lotus',
    children: (
      <p style={{ backgroundColor: '#d9ddc2', padding: '10px', margin: 0 }}>
        {text}
      </p>
    ),
  },
  {
    key: '3',
    label: 'Lavender',
    children: (
      <p style={{ backgroundColor: '#d9ddc2', padding: '10px', margin: 0 }}>
        {text}
      </p>
    ),
  },
];

export default function Collapes() {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div
      style={{
        margin : '15px',
        border : '5px solid #b0b689',
        padding: '15px',
        borderRadius : '15px'
      }}
    >
      <Collapse
        onChange={onChange}
        items={items}
        style={{
          backgroundColor: '#d9ddc2',
          padding: '10px',
          border: 'none',
          boxShadow: 'none',
        }}
      />
    </div>
  );
}
