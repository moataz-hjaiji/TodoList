import React from 'react';
import './_index.scss';
import CategoryRestNavbar from './../CategoryNavbar';

const index = () => {
  return (
    <div className="rest-navbar flex-column">
      <h1 className="rest-navbar-title">Projects</h1>
      <CategoryRestNavbar category={'test'} />
      <CategoryRestNavbar
        subCategories={[
          'all Projects',
          'design system',
          'User flow',
          'Ux research',
        ]}
        category={'projects'}
      />
      <CategoryRestNavbar
        subCategories={['all Tasks', 'to do', 'in progress', 'done']}
        category={'tasks'}
      />
      <CategoryRestNavbar category={'reminders'} />
      <CategoryRestNavbar category={'messengers'} />
    </div>
  );
};

export default index;
