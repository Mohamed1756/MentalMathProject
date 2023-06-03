import React from "react";
import "./AboutPage.css";

const AboutPage: React.FC = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <section>
        <p>
          Welcome to our mental math app! We're passionate about making math learning engaging and accessible for everyone.
        </p>
        <p>
          Our mission is to provide a fun and interactive platform that helps users of all ages develop their mental math skills and boost their confidence in mathematics.
        </p>
        <p>
          With our app, you can embark on personalized learning paths tailored to your strengths, weaknesses, and goals. Challenge yourself with timed mental calculation exercises, refine your estimation skills through interactive games, and engage in friendly math competitions with friends and other users.
        </p>
        <p>
          Our team of experienced educators and developers has carefully crafted this app to deliver an immersive learning experience that combines educational value with an enjoyable interface.
        </p>
        <p>
          Join us on this exciting journey of learning and improvement. Start sharpening your mental math skills today and unlock your full potential in mathematics!
        </p>
      </section>
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          We value your feedback, questions, and suggestions. Feel free to reach out to us at <a href="mailto:contact@yourapp.com">contact@yourapp.com</a> or fill out the contact form below. We'd love to hear from you!
        </p>
      </section>
      <form className="newsletter-form">
        <h3>Subscribe to Our Newsletter</h3>
        <input type="email" placeholder="Your email address" />
        <button type="submit">Subscribe</button>
      </form>
      <p className="thank-you">Thank you for choosing our mental math app.</p>
    </div>
  );
};

export default AboutPage;
