import React from "react";

const Resource = (props) => {
  const { resource } = props;
  return (
    <li className="widget-link">
      <a href={resource.link} rel="noopener noreferrer" target="_blank">
        {resource.name}
      </a>
    </li>
  );
};

export default Resource;
