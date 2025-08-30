'use client';

import './framer/styles.css';

import { Suspense, lazy, useEffect, useState } from 'react';

// import NavFramerComponent from './framer/navigation/nav';
import HeroFramerComponent from './framer/hero';
import PartnersFramerComponent from './framer/partners';
import FeaturesFramerComponent from './framer/features';
import BenefitsFramerComponent from './framer/benefits';
import AppFramerComponent from './framer/app';
import OnboardingFramerComponent from './framer/onboarding';
import CaseStudiesFramerComponent from './framer/case-studies';
import CalculatorRoiFramerComponent from './framer/calculator-roi';

// const LazyFooterFramerComponent = lazy(
//   () => import('./framer/navigation/footer')
// );

// const FooterFramerComponent = {
//   Responsive: function ResponsiveFooter() {
//     return (
//       <Suspense
//         fallback={
//           <div className="w-full h-96 bg-gray-100 animate-pulse rounded-xl" />
//         }
//       >
//         <LazyFooterFramerComponent />
//       </Suspense>
//     );
//   },
// };

const LazyLoadComponent = ({
  children,
  id,
  height = 'h-64',
}: {
  children: React.ReactNode;
  id: string;
  height?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    const currentElement = document.getElementById(id);
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.disconnect();
      }
    };
  }, [id]);

  return (
    <div id={id} className={`w-full ${!isVisible ? height : ''}`}>
      {isVisible ? (
        children
      ) : (
        <div
          className={`w-full ${height} bg-gray-100 animate-pulse rounded-xl`}
        />
      )}
    </div>
  );
};

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
