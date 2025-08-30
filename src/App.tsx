'use client';

import './framer/styles.css';
import { lazy, Suspense, useEffect, useState, useRef, createRef } from 'react';

// Импортируем Nav и Hero напрямую, без ленивой загрузки
import Nav from './components/Nav';
import Hero from './components/Hero';

// Ленивая загрузка для остальных компонентов
const PartnersFramerComponent = lazy(() => import('./components/Partners'));
const FeaturesFramerComponent = lazy(() => import('./components/Features'));
const BenefitsFramerComponent = lazy(() => import('./components/Benefits'));
const AppFramerComponent = lazy(() => import('./components/App'));
const OnboardingFramerComponent = lazy(() => import('./components/Onboarding'));
const CaseStudiesFramerComponent = lazy(
  () => import('./components/CaseStudies')
);
const CalculatorRoiFramerComponent = lazy(
  () => import('./components/CalculatorRoi')
);
const PricingFramerComponent = lazy(() => import('./components/Pricing'));
const TeamFramerComponent = lazy(() => import('./components/Team'));
const FaqFramerComponent = lazy(() => import('./components/Faq'));
const FooterFramerComponent = lazy(() => import('./components/Footer'));

// Компонент для ленивой загрузки по скроллу
interface LazyLoadProps {
  children: React.ReactNode;
  placeholder: React.ReactNode;
  id?: string;
}

function LazyLoad({ children, placeholder, id }: LazyLoadProps) {
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
    <div ref={ref} className="w-full" id={id}>
      {isVisible ? (
        <Suspense fallback={placeholder}>{children}</Suspense>
      ) : (
        placeholder
      )}
    </div>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [shouldShowScrollSection, setShouldShowScrollSection] = useState(false);
  const navScrollSectionRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newIsScrolled = scrollPosition > 40;
      setIsScrolled(newIsScrolled);

      if (newIsScrolled) {
        setShouldShowScrollSection(true);
      } else if (scrollPosition <= 0) {
        setShouldShowScrollSection(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-3 bg-[rgb(240,_240,_240)]">
      <div className={`w-full fixed top-0 z-50`}>
        <Nav
          scrollSection={
            shouldShowScrollSection ? navScrollSectionRef : undefined
          }
        />
      </div>
      <div ref={navScrollSectionRef}>
        <Hero />
      </div>

      {/* Остальные компоненты загружаются только при скролле */}
      <LazyLoad
        placeholder={
          <div className="w-full h-32 bg-[#f0f0f0] animate-pulse"></div>
        }
      >
        <PartnersFramerComponent />
      </LazyLoad>

      <LazyLoad
        placeholder={
          <div className="w-full h-64 bg-[#f0f0f0] animate-pulse"></div>
        }
        id="features"
      >
        <FeaturesFramerComponent />
      </LazyLoad>

      <LazyLoad
        placeholder={
          <div className="w-full h-64 bg-[#f0f0f0] animate-pulse"></div>
        }
      >
        <BenefitsFramerComponent />
      </LazyLoad>

      <LazyLoad
        placeholder={
          <div className="w-full h-64 bg-[#f0f0f0] animate-pulse"></div>
        }
      >
        <AppFramerComponent />
      </LazyLoad>

      <LazyLoad
        placeholder={
          <div className="w-full h-64 bg-[#f0f0f0] animate-pulse"></div>
        }
        id="onboarding"
      >
        <OnboardingFramerComponent />
      </LazyLoad>

      <LazyLoad
        placeholder={
          <div className="w-full h-64 bg-[#f0f0f0] animate-pulse"></div>
        }
      >
        <CaseStudiesFramerComponent />
      </LazyLoad>

      <LazyLoad
        placeholder={
          <div className="w-full h-64 bg-[#f0f0f0] animate-pulse"></div>
        }
        id="calculator"
      >
        <CalculatorRoiFramerComponent />
      </LazyLoad>

      <LazyLoad
        placeholder={
          <div className="w-full h-64 bg-[#f0f0f0] animate-pulse"></div>
        }
      >
        <PricingFramerComponent />
      </LazyLoad>

      <LazyLoad
        placeholder={
          <div className="w-full h-64 bg-[#f0f0f0] animate-pulse"></div>
        }
      >
        <TeamFramerComponent />
      </LazyLoad>

      <LazyLoad
        placeholder={
          <div className="w-full h-64 bg-[#f0f0f0] animate-pulse"></div>
        }
        id="faq"
      >
        <FaqFramerComponent />
      </LazyLoad>

      <LazyLoad
        placeholder={
          <div className="w-full h-32 bg-[#f0f0f0] animate-pulse"></div>
        }
      >
        <FooterFramerComponent />
      </LazyLoad>
    </div>
  );
}
