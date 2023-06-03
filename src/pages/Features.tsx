import React, { FC } from 'react';

interface FeatureProps {
  title: string;
  description: string;
}

const Feature: FC<FeatureProps> = ({ title, description }) => (
  <div className="feature">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const Features: FC = () => {
  return (
    <div className="featureElements">
      <h1>Features</h1>
      <div className="featuresContainer">
      <div className="row1">
          <Feature
            title="Feature 1"
            description="This is the first feature description."
          />
          <Feature
            title="Feature 2"
            description="This is the second feature description."
          />
          <Feature
            title="Feature 3"
            description="This is the third feature description."
          />
        </div>
        <div className="row2">
          <Feature
            title="Feature 4"
            description="This is the fourth feature description."
          />
          <Feature
            title="Feature 5"
            description="This is the fifth feature description."
          />
          <Feature
            title="Feature 6"
            description="This is the sixth feature description."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
