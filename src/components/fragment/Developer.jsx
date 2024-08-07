import React from 'react';
import '../assets/scss/Developer.scss';
import { IconButton } from "@material-ui/core";
import AvatarImage2 from "../assets/img/avatar.jpg";
import AvatarImage1 from "../assets/img/avatar1.jpg";
import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";

const Developer = () => {
  return (
    <div className={"Developer"}>
      <h3 className={"Developer-head"}>Meet the developers</h3>
      <div className="Developer-profile">
        {/* Developer 1 */}
        <div className="Developer-profileCard">
          <img src={AvatarImage2} alt="Profile 1" />
          <div className={"Card-details"}>
            <h3>Sai Sriram Reddy</h3>
            <p>Full Stack developer</p>
            <p>Competitive Coder</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="Developer-profileDetails">
          <p>Connect with us on social media!</p>
          <div className="Card-btn">
            <IconButton target={"_blank"} href={"https://www.facebook.com/saisriram.sriram.7"} title={"sriram"}>
              <Facebook />
            </IconButton>
            <IconButton target={"_blank"} href={"https://twitter.com/"} title={"sriram"}>
              <Twitter />
            </IconButton>
            <IconButton target={"_blank"} href={"https://www.linkedin.com/in/pottennagari-sai-sriram-reddy-2aa83b242/"} title={"sriram"}>
              <LinkedIn />
            </IconButton>
            <IconButton target={"_blank"} href={"https://www.instagram.com/saisriram_reddy/"} title={"saisriram_reddy"}>
              <Instagram />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developer;
