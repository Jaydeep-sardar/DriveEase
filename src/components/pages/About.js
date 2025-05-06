import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>DriveEase</strong>, your premier destination for car rentals.
        We are committed to providing exceptional service and a wide range of vehicles
        to meet all your transportation needs.
      </p>
      <h2>Our Mission</h2>
      <p>
        At DriveEase, our mission is to ensure that our customers have a seamless and enjoyable
        car rental experience. We strive to offer:
      </p>
      <ul>
        <li>Quality vehicles at competitive prices</li>
        <li>Excellent customer service</li>
        <li>Flexible rental options</li>
        <li>Convenient booking process</li>
      </ul>
      <h2>Contact Us</h2>
      <p>
        Have questions? We're here to help! Contact us at{' '}
        <a href="mailto:info@driveease.com">info@driveease.com</a>
      </p>
    </div>
  );
};

export default About;