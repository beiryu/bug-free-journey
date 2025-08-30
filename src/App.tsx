'use client';

import './framer/styles.css';

// import NavFramerComponent from './framer/navigation/nav';
import HeroFramerComponent from './framer/hero';
import PartnersFramerComponent from './framer/partners';
import FeaturesFramerComponent from './framer/features';
import BenefitsFramerComponent from './framer/benefits';
import AppFramerComponent from './framer/app';
import OnboardingFramerComponent from './framer/onboarding';
import CaseStudiesFramerComponent from './framer/case-studies';
import CalculatorRoiFramerComponent from './framer/calculator-roi';

export default function App() {
  return (
    <div className="flex flex-col items-center gap-3 bg-[rgb(240,_240,_240)]">
      <HeroFramerComponent.Responsive
        className="!w-full"
        variants={{
          base: 'Phone',
          md: 'Tablet',
          xl: 'Desktop',
        }}
      />
      <PartnersFramerComponent.Responsive
        className="!w-full"
        variants={{
          base: 'Phone',
          md: 'Tablet',
          xl: 'Desktop',
        }}
      />
      <FeaturesFramerComponent.Responsive
        className="!w-full"
        variants={{
          base: 'Phone',
          md: 'Tablet',
          xl: 'Desktop',
        }}
      />
      <BenefitsFramerComponent.Responsive
        className="!w-full"
        variants={{
          base: 'Phone',
          md: 'Tablet',
          xl: 'Desktop',
        }}
      />
      <AppFramerComponent.Responsive
        className="!w-full"
        variants={{
          base: 'Phone',
          md: 'Tablet',
          xl: 'Desktop',
        }}
      />
      <OnboardingFramerComponent.Responsive
        className="!w-full"
        variants={{
          base: 'Phone',
          md: 'Tablet',
          xl: 'Desktop',
        }}
      />
      <CaseStudiesFramerComponent.Responsive
        className="!w-full"
        variants={{
          base: 'Phone',
          md: 'Tablet',
          xl: 'Desktop',
        }}
      />
      <CalculatorRoiFramerComponent.Responsive
        className="!w-full"
        variants={{
          base: 'Phone',
          md: 'Tablet',
          xl: 'Desktop',
        }}
      />
    </div>
  );
}
