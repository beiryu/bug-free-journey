'use client';

import './framer/styles.css';
import { lazy, Suspense, useEffect, useState, useRef } from 'react';

// Импортируем Nav и Hero напрямую, без ленивой загрузки
import { NavFramerComponent, HeroFramerComponent } from './framer';

// Ленивая загрузка для остальных компонентов
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

// Компонент для ленивой загрузки по скроллу
interface LazyLoadProps {
  children: React.ReactNode;
  placeholder: React.ReactNode;
}

function LazyLoad({ children, placeholder }: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Когда элемент становится видимым, устанавливаем флаг
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Отключаем наблюдение после первой загрузки
          observer.disconnect();
        }
      },
      {
        // Загружаем компонент, когда он находится на расстоянии 300px от видимой области
        rootMargin: '300px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref}>
      {isVisible ? (
        <Suspense fallback={placeholder}>{children}</Suspense>
      ) : (
        placeholder
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="flex flex-col items-center gap-3 bg-[rgb(240,_240,_240)]">
      {/* Nav и Hero загружаются сразу без ленивой загрузки */}
      <NavFramerComponent />
      <HeroFramerComponent />

      {/* Остальные компоненты загружаются только при скролле */}
      <LazyLoad
        placeholder={
          <div className="w-full h-32 bg-gray-200 animate-pulse"></div>
        }
      >
        <PartnersFramerComponent />
      </LazyLoad>

      <LazyLoad
        placeholder={
          <div className="w-full h-64 bg-gray-200 animate-pulse"></div>
        }
      >
        <FeaturesFramerComponent />
      </LazyLoad>

      <LazyLoad
        placeholder={
          <div className="w-full h-64 bg-gray-200 animate-pulse"></div>
        }
      >
        <BenefitsFramerComponent />
      </LazyLoad>

      <LazyLoad
        placeholder={
          <div className="w-full h-64 bg-gray-200 animate-pulse"></div>
        }
      >
        <AppFramerComponent />
      </LazyLoad>

      <LazyLoad
        placeholder={
          <div className="w-full h-64 bg-gray-200 animate-pulse"></div>
        }
      >
        <OnboardingFramerComponent />
      </LazyLoad>

      <LazyLoad
        placeholder={
          <div className="w-full h-64 bg-gray-200 animate-pulse"></div>
        }
      >
        <CaseStudiesFramerComponent />
      </LazyLoad>

      <LazyLoad
        placeholder={
          <div className="w-full h-64 bg-gray-200 animate-pulse"></div>
        }
      >
        <CalculatorRoiFramerComponent />
      </LazyLoad>

      <LazyLoad
        placeholder={
          <div className="w-full h-64 bg-gray-200 animate-pulse"></div>
        }
      >
        <PricingFramerComponent />
      </LazyLoad>

      <LazyLoad
        placeholder={
          <div className="w-full h-64 bg-gray-200 animate-pulse"></div>
        }
      >
        <TeamFramerComponent />
      </LazyLoad>

      <LazyLoad
        placeholder={
          <div className="w-full h-64 bg-gray-200 animate-pulse"></div>
        }
      >
        <FaqFramerComponent />
      </LazyLoad>

      <LazyLoad
        placeholder={
          <div className="w-full h-32 bg-gray-200 animate-pulse"></div>
        }
      >
        <FooterFramerComponent />
      </LazyLoad>
    </div>
  );
}
