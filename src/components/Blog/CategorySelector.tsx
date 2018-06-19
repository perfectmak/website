import React from 'react';
import Category from '@components/Blog/Category';

interface CategorySelectorProps {
  selectedCat: string;
  categories: string[];
  onSelectCat: (cat: string) => void;
}

export default ({
  selectedCat,
  categories,
  onSelectCat
}: CategorySelectorProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {categories.map((cat, i) => (
        <Category
          key={`cat#${i}`}
          cat={cat}
          showBorder={selectedCat && selectedCat === cat}
          onClick={() => (selectedCat === cat ? null : onSelectCat(cat))}
        />
      ))}
    </div>
  );
};
