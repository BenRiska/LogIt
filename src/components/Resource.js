import React from "react";

const Resource = (props) => {
  const { resource } = props;
  const link = resource.link.includes("http://")
    ? resource.link
    : `http://${resource.link}`;
  return (
    <li className="widget-link">
      <a href={link} rel="noopener noreferrer" target="_blank">
        {resource.name}
      </a>
    </li>
  );
};

export default Resource;
