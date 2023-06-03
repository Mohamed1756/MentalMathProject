import React from "react";
import "./PricingPage.css";

const PricingPage: React.FC = () => {
  return (
    <div>
      <h1>Pricing</h1>
      <section>
        <h2>Free Plan</h2>
        <ul>
          <li>Daily Mental Challenges</li>
          <li>Multiplayer Challenges</li>
          <li>Access to 1 Premium Challenge per week</li>
          <li>Basic Arithmetic Challenges</li>
        </ul>
      </section>
      <section>
        <h2>Paid Plan</h2>
        <ul>
          <li>AI-Powered Personalized Learning Paths</li>
          <li>Exclusive Access to Premium Content</li>
          <li>Advanced Arithmetic Challenges with Different Operators</li>
          <li>More Conquests and Challenges</li>
          <li>Advanced Progress Insight and Tracking</li>
          <li>Priority Customer Support</li>
          <li>No Ads</li>
        </ul>
      </section>
    </div>
  );
};

export default PricingPage;
