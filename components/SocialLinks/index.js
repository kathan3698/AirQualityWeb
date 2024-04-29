import React from "react";

function SocialLink({ link, image, title }) {
  return (
    <a href={link} target="_blank">
      <img
        src={image}
        className="w-7 h-7 object-cover rounded-full object-top mr-2"
        title={title}
      />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex">
      <SocialLink
        link="https://github.com/kathan3698/AirQualityWeb"
        image="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        title="View on GitHub"
      />

      <SocialLink
        link="https://github.com/kathan3698"
        image="https://avatars.githubusercontent.com/u/168336068?v=4"
        title="Developer"
      />
    </div>
  );
}

export default SocialLinks;
