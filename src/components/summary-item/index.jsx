import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
  status: 'text-sm font-medium mt-1',
};

const SummaryItem = ({
  name,
  description,
  status = false,
  link = false,
  internal = false,
}) => {
  let linkContent;

  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-[#990000]' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>

      <p className={classes.description}>{description}</p>

      {status && (
        <p className={classes.status} style={{ color: '#990000' }}>
          {status}
        </p>
      )}
    </div>
  );
};

export default SummaryItem;