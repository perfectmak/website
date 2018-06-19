import React from 'react';

interface CategoryProps {
  cat: string;
  showBorder?: boolean;
  dontPad?: boolean;
  onClick?: () => void;
}

function getColor(cat: string) {
  switch (cat) {
    case 'The Team':
      return '#3a4fdf';
    case 'Development':
      return '#47df5b';
    case 'Crash Courses':
      return '#b32deb';
    default:
      return 'black';
  }
}

export default ({ cat, showBorder, onClick, dontPad }: CategoryProps) => (
  <h3
    style={{
      borderLeft: `3px solid ${showBorder ? getColor(cat) : '#f6f6f6'}`,
      color: getColor(cat),
      cursor: 'pointer',
      margin: 0,
      padding: dontPad ? 0 : '2px 0px 2px 20px'
    }}
    onClick={onClick}
  >
    {cat}
  </h3>
);
