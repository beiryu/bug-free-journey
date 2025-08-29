import './framer/styles.css'

import { Suspense, lazy, useEffect, useState } from 'react';

// Импортируем компоненты верхней части страницы напрямую
import NavFramerComponent from './framer/navigation/nav'
import HeroFramerComponent from './framer/hero'

// Создаем обертки для компонентов с ленивой загрузкой
const LazyPartnersFramerComponent = lazy(() => import('./framer/section/partners'));
const LazyFeaturesFramerComponent = lazy(() => import('./framer/features'));
const LazyComparisonFramerComponent = lazy(() => import('./framer/comparison'));
const LazyComparisonTagsFramerComponent = lazy(() => import('./framer/comparison-tags'));
const LazyOnboardingFramerComponent = lazy(() => import('./framer/onboarding'));
const LazyCaseStudiesFramerComponent = lazy(() => import('./framer/case-studies'));
const LazyTeamFramerComponent = lazy(() => import('./framer/section/team'));
const LazyFooterFramerComponent = lazy(() => import('./framer/navigation/footer'));

// Создаем компоненты-обертки, которые будут рендерить .Responsive вариант
const PartnersFramerComponent = {
  Responsive: function ResponsivePartners() {
    return (
      <Suspense fallback={<div className="w-full h-80 bg-gray-100 animate-pulse rounded-xl" />}>
        <LazyPartnersFramerComponent />
      </Suspense>
    );
  }
};

const FeaturesFramerComponent = {
  Responsive: function ResponsiveFeatures() {
    return (
      <Suspense fallback={<div className="w-full h-96 bg-gray-100 animate-pulse rounded-xl" />}>
        <LazyFeaturesFramerComponent />
      </Suspense>
    );
  }
};

const ComparisonFramerComponent = {
  Responsive: function ResponsiveComparison() {
    return (
      <Suspense fallback={<div className="w-full h-96 bg-gray-100 animate-pulse rounded-xl" />}>
        <LazyComparisonFramerComponent />
      </Suspense>
    );
  }
};

const ComparisonTagsFramerComponent = {
  Responsive: function ResponsiveComparisonTags() {
    return (
      <Suspense fallback={<div className="w-full h-80 bg-gray-100 animate-pulse rounded-xl" />}>
        <LazyComparisonTagsFramerComponent />
      </Suspense>
    );
  }
};

const OnboardingFramerComponent = {
  Responsive: function ResponsiveOnboarding() {
    return (
      <Suspense fallback={<div className="w-full h-96 bg-gray-100 animate-pulse rounded-xl" />}>
        <LazyOnboardingFramerComponent />
      </Suspense>
    );
  }
};

const CaseStudiesFramerComponent = {
  Responsive: function ResponsiveCaseStudies() {
    return (
      <Suspense fallback={<div className="w-full h-96 bg-gray-100 animate-pulse rounded-xl" />}>
        <LazyCaseStudiesFramerComponent />
      </Suspense>
    );
  }
};

const TeamFramerComponent = {
  Responsive: function ResponsiveTeam() {
    return (
      <Suspense fallback={<div className="w-full h-96 bg-gray-100 animate-pulse rounded-xl" />}>
        <LazyTeamFramerComponent />
      </Suspense>
    );
  }
};

const FooterFramerComponent = {
  Responsive: function ResponsiveFooter() {
    return (
      <Suspense fallback={<div className="w-full h-96 bg-gray-100 animate-pulse rounded-xl" />}>
        <LazyFooterFramerComponent />
      </Suspense>
    );
  }
};

// Компонент для ленивой загрузки при попадании в область видимости
const LazyLoadComponent = ({
  children,
  id,
  height = 'h-64'
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
        <div className={`w-full ${height} bg-gray-100 animate-pulse rounded-xl`} />
      )}
    </div>
  );
};

export default function App() {
  return (
    <>
    {/* Компоненты верхней части страницы загружаются сразу */}
    <div className='flex flex-col items-center gap-3 bg-[rgb(240,_240,_240)]'>
      <NavFramerComponent.Responsive/>
    </div> 
    <div className='flex flex-col items-center gap-3 bg-[rgb(240,_240,_240)]'>
      <HeroFramerComponent.Responsive/>
    </div> 
    
    {/* Компоненты нижней части страницы загружаются лениво */}
    <LazyLoadComponent id="partners-section" height="h-80">
      <div className='flex flex-col items-center gap-3 bg-[rgb(240,_240,_240)]'>
        <PartnersFramerComponent.Responsive/>
      </div>
    </LazyLoadComponent>
    
    <LazyLoadComponent id="features-section" height="h-96">
      <div className='flex flex-col items-center gap-3 bg-[rgb(240,_240,_240)]'>
        <FeaturesFramerComponent.Responsive/>
      </div>
    </LazyLoadComponent>
    
    <LazyLoadComponent id="comparison-section" height="h-96">
      <div className='flex flex-col items-center gap-3 bg-[rgb(240,_240,_240)]'>
        <ComparisonFramerComponent.Responsive/>
      </div>
    </LazyLoadComponent>
    
    <LazyLoadComponent id="comparison-tags-section" height="h-80">
      <div className='flex flex-col items-center gap-3 bg-[rgb(240,_240,_240)]'>
        <ComparisonTagsFramerComponent.Responsive/>
      </div>
    </LazyLoadComponent>
    
    <LazyLoadComponent id="onboarding-section" height="h-96">
      <div className='flex flex-col items-center gap-3 bg-[rgb(240,_240,_240)]'>
        <OnboardingFramerComponent.Responsive/>
      </div>
    </LazyLoadComponent>

    <LazyLoadComponent id="case-studies-section" height="h-96">
      <div className='flex flex-col items-center gap-3 bg-[rgb(240,_240,_240)]'>
        <CaseStudiesFramerComponent.Responsive/>
      </div>
    </LazyLoadComponent>

    <LazyLoadComponent id="case-studies-section" height="h-96">
      <div className='flex flex-col items-center gap-3 bg-[rgb(240,_240,_240)]'>
        <TeamFramerComponent.Responsive/>
      </div>
    </LazyLoadComponent>

    <LazyLoadComponent id="case-studies-section" height="h-96">
      <div className='flex flex-col items-center gap-3 bg-[rgb(240,_240,_240)]'>
        <FooterFramerComponent.Responsive/>
      </div>
    </LazyLoadComponent>
    </>
  );
}