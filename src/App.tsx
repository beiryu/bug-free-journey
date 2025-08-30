'use client';

import './framer/styles.css';

import NavFramerComponent from './framer/navigation/nav';
import HeroFramerComponent from './framer/hero';
import PartnersFramerComponent from './framer/partners';
import FeaturesFramerComponent from './framer/features';
import BenefitsFramerComponent from './framer/benefits';
import AppFramerComponent from './framer/app';
import OnboardingFramerComponent from './framer/onboarding';
import CaseStudiesFramerComponent from './framer/case-studies';
import CalculatorRoiFramerComponent from './framer/calculator-roi';
import PricingFramerComponent from './framer/pricing';
import TeamFramerComponent from './framer/team';
import FaqFramerComponent from './framer/faq';
import FooterFramerComponent from './framer/navigation/footer';

export default function App() {
  return (
    <div className="flex flex-col items-center gap-3 bg-[rgb(240,_240,_240)]">
      <NavFramerComponent.Responsive
        className="!w-full !py-5 bg-[#f0f0f0]"
        variants={{
          base: 'Phone',
          md: 'Tablet',
          xl: 'Desktop',
        }}
      />
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
      <PricingFramerComponent.Responsive
        className="!w-full"
        variants={{
          base: 'Phone',
          md: 'Tablet',
          xl: 'Desktop',
        }}
      />
      <TeamFramerComponent.Responsive
        className="!w-full"
        variants={{
          base: 'Phone',
          md: 'Tablet',
          xl: 'Desktop',
        }}
      />
      <FaqFramerComponent.Responsive
        className="!w-full"
        variants={{
          base: 'Phone',
          md: 'Tablet',
          xl: 'Desktop',
        }}
      />
      <FooterFramerComponent.Responsive
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
