import React from 'react';

import CategoryItemComponent from '../category-item/Category-item-component';

import './Directory-component.style.scss';


export const DirectoryComponent = ({categories}) => {
  return (
    <div className="directory-container">
    {categories.map((category) => {
      return (
      <CategoryItemComponent key={category.id} category={category}/>
      );
    })}
  </div>
  )
}

export default DirectoryComponent;