import NavFramer from './navigation/nav';
import FooterFramer from './navigation/footer';

import HeroFramer from './hero';
import PartnersFramer from './partners';
import FeaturesFramer from './features';
import BenefitsFramer from './benefits';
import AppFramer from './app';
import OnboardingFramer from './onboarding';
import CaseStudiesFramer from './case-studies';
import CalculatorRoiFramer from './calculator-roi';
import PricingFramer from './pricing';
import TeamFramer from './team';
import FaqFramer from './faq';

const defaultVariants = {
  base: 'Phone',
  md: 'Tablet',
  xl: 'Desktop',
};

function withDefaults(Component, defaultClassName = '') {
  return function WrappedComponent(props) {
    return (
      <Component.Responsive
        variants={defaultVariants}
        className={defaultClassName}
        {...props}
      />
    );
  };
}

export const NavFramerComponent = withDefaults(NavFramer, '!w-full !py-5 bg-[#f0f0f0]');
export const HeroFramerComponent = withDefaults(HeroFramer, '!w-full');
export const PartnersFramerComponent = withDefaults(PartnersFramer, '!w-full');
export const FeaturesFramerComponent = withDefaults(FeaturesFramer, '!w-full');
export const BenefitsFramerComponent = withDefaults(BenefitsFramer, '!w-full');
export const AppFramerComponent = withDefaults(AppFramer, '!w-full');
export const OnboardingFramerComponent = withDefaults(OnboardingFramer, '!w-full');
export const CaseStudiesFramerComponent = withDefaults(CaseStudiesFramer, '!w-full');
export const CalculatorRoiFramerComponent = withDefaults(CalculatorRoiFramer, '!w-full');
export const PricingFramerComponent = withDefaults(PricingFramer, '!w-full');
export const TeamFramerComponent = withDefaults(TeamFramer, '!w-full');
export const FaqFramerComponent = withDefaults(FaqFramer, '!w-full');
export const FooterFramerComponent = withDefaults(FooterFramer, '!w-full');
