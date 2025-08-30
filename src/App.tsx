'use client';

import './framer/styles.css';
import { lazy, Suspense } from 'react';

const NavFramerComponent = lazy(() =>
  import('./framer').then(module => ({ default: module.NavFramerComponent }))
);
const HeroFramerComponent = lazy(() =>
  import('./framer').then(module => ({ default: module.HeroFramerComponent }))
);
const PartnersFramerComponent = lazy(() =>
  import('./framer').then(module => ({
    default: module.PartnersFramerComponent,
  }))
);
const FeaturesFramerComponent = lazy(() =>
  import('./framer').then(module => ({
    default: module.FeaturesFramerComponent,
  }))
);
const BenefitsFramerComponent = lazy(() =>
  import('./framer').then(module => ({
    default: module.BenefitsFramerComponent,
  }))
);
const AppFramerComponent = lazy(() =>
  import('./framer').then(module => ({ default: module.AppFramerComponent }))
);
const OnboardingFramerComponent = lazy(() =>
  import('./framer').then(module => ({
    default: module.OnboardingFramerComponent,
  }))
);
const CaseStudiesFramerComponent = lazy(() =>
  import('./framer').then(module => ({
    default: module.CaseStudiesFramerComponent,
  }))
);
const CalculatorRoiFramerComponent = lazy(() =>
  import('./framer').then(module => ({
    default: module.CalculatorRoiFramerComponent,
  }))
);
const PricingFramerComponent = lazy(() =>
  import('./framer').then(module => ({
    default: module.PricingFramerComponent,
  }))
);
const TeamFramerComponent = lazy(() =>
  import('./framer').then(module => ({ default: module.TeamFramerComponent }))
);
const FaqFramerComponent = lazy(() =>
  import('./framer').then(module => ({ default: module.FaqFramerComponent }))
);
const FooterFramerComponent = lazy(() =>
  import('./framer').then(module => ({ default: module.FooterFramerComponent }))
);

export default function App() {
  return (
    <div className="flex flex-col items-center gap-3 bg-[rgb(240,_240,_240)]">
      <Suspense
        fallback={<div className="w-full h-16 bg-gray-200 animate-pulse"></div>}
      >
        <NavFramerComponent />
      </Suspense>
      <Suspense
        fallback={<div className="w-full h-96 bg-gray-200 animate-pulse"></div>}
      >
        <HeroFramerComponent />
      </Suspense>
      <Suspense
        fallback={<div className="w-full h-32 bg-gray-200 animate-pulse"></div>}
      >
        <PartnersFramerComponent />
      </Suspense>
      <Suspense
        fallback={<div className="w-full h-64 bg-gray-200 animate-pulse"></div>}
      >
        <FeaturesFramerComponent />
      </Suspense>
      <Suspense
        fallback={<div className="w-full h-64 bg-gray-200 animate-pulse"></div>}
      >
        <BenefitsFramerComponent />
      </Suspense>
      <Suspense
        fallback={<div className="w-full h-64 bg-gray-200 animate-pulse"></div>}
      >
        <AppFramerComponent />
      </Suspense>
      <Suspense
        fallback={<div className="w-full h-64 bg-gray-200 animate-pulse"></div>}
      >
        <OnboardingFramerComponent />
      </Suspense>
      <Suspense
        fallback={<div className="w-full h-64 bg-gray-200 animate-pulse"></div>}
      >
        <CaseStudiesFramerComponent />
      </Suspense>
      <Suspense
        fallback={<div className="w-full h-64 bg-gray-200 animate-pulse"></div>}
      >
        <CalculatorRoiFramerComponent />
      </Suspense>
      <Suspense
        fallback={<div className="w-full h-64 bg-gray-200 animate-pulse"></div>}
      >
        <PricingFramerComponent />
      </Suspense>
      <Suspense
        fallback={<div className="w-full h-64 bg-gray-200 animate-pulse"></div>}
      >
        <TeamFramerComponent />
      </Suspense>
      <Suspense
        fallback={<div className="w-full h-64 bg-gray-200 animate-pulse"></div>}
      >
        <FaqFramerComponent />
      </Suspense>
      <Suspense
        fallback={<div className="w-full h-32 bg-gray-200 animate-pulse"></div>}
      >
        <FooterFramerComponent />
      </Suspense>
    </div>
  );
}
