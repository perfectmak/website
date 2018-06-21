import React from 'react';

interface CategoryProps {
  cat: string;
  onClick?: () => void;
}

export default ({ cat, onClick }: CategoryProps) => (
  <div
    style={{
      color: '#00E2C1',
      cursor: 'pointer',
      fontSize: '14px',
      lineHeight: '22px',
      margin: 0
    }}
    onClick={onClick}
  >
    {cat}
  </div>
);
