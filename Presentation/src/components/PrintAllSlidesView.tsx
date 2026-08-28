import React from 'react';
import { Slide1Title } from './slides/Slide1Title';
import { Slide2Introduction } from './slides/Slide2Introduction';
import { Slide3ProblemStatement } from './slides/Slide3ProblemStatement';
import { Slide4Objectives } from './slides/Slide4Objectives';
import { Slide5Technologies } from './slides/Slide5Technologies';
import { Slide6Architecture } from './slides/Slide6Architecture';
import { Slide7KeyFeatures } from './slides/Slide7KeyFeatures';
import { Slide8ProjectDemo } from './slides/Slide8ProjectDemo';
import { Slide9ChallengesSolutions } from './slides/Slide9ChallengesSolutions';
import { Slide10Conclusion } from './slides/Slide10Conclusion';

export const PrintAllSlidesView: React.FC = () => {
  return (
    <div className="hidden print:block bg-neutral-950 text-white w-full">
      <div className="print-page w-screen h-screen flex flex-col justify-center"><Slide1Title /></div>
      <div className="print-page w-screen h-screen flex flex-col justify-center"><Slide2Introduction /></div>
      <div className="print-page w-screen h-screen flex flex-col justify-center"><Slide3ProblemStatement /></div>
      <div className="print-page w-screen h-screen flex flex-col justify-center"><Slide4Objectives /></div>
      <div className="print-page w-screen h-screen flex flex-col justify-center"><Slide5Technologies /></div>
      <div className="print-page w-screen h-screen flex flex-col justify-center"><Slide6Architecture /></div>
      <div className="print-page w-screen h-screen flex flex-col justify-center"><Slide7KeyFeatures /></div>
      <div className="print-page w-screen h-screen flex flex-col justify-center"><Slide8ProjectDemo /></div>
      <div className="print-page w-screen h-screen flex flex-col justify-center"><Slide9ChallengesSolutions /></div>
      <div className="print-page w-screen h-screen flex flex-col justify-center"><Slide10Conclusion /></div>
    </div>
  );
};
