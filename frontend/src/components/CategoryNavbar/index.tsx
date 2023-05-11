import React, { useState } from 'react';
import './_index.scss';

import downArrow from './../../assets/icon/down-arrow.svg';
import rightArrow from './../../assets/icon/right-arrow.svg';

interface IProps {
  category: string;
  subCategories?: string[];
}

const index = ({ category, subCategories }: IProps) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="category-navbar flex-column">
      <div
        className="category-title-showMore"
        onClick={() => setShowMore(!showMore)}
      >
        <p className={`category-title ${showMore && 'gray-color'}`}>
          {category}
        </p>
        {showMore ? (
          <img src={downArrow} alt="see less" />
        ) : (
          <img src={rightArrow} alt="see more" />
        )}
      </div>
      {showMore && subCategories && (
        <div className="category-sub-categories flex-column">
          {
            subCategories.map((ele, index) => {
              return (
                <p className="sub-category-title" key={index}>
                  {ele}
                </p>
              );
            })}
        </div>
      ) }
    </div>
  );
};

export default index;
