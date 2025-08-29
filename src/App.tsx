// import './framer/styles.css'

import NavFramerComponent from './framer/navigation/nav'
import HeroFramerComponent from './framer/hero'
import PartnersFramerComponent from './framer/section/partners'
import FeaturesFramerComponent from './framer/features'
import ComparisonFramerComponent from './framer/comparison'
import ComparisonTagsFramerComponent from './framer/comparison-tags'
import OnboardingFramerComponent from './framer/onboarding'

export default function App() {
  return (
    <>
    <div className='flex flex-col items-center gap-3 bg-[rgb(240,_240,_240)]'>
      <NavFramerComponent.Responsive/>
    </div> 
    <div className='flex flex-col items-center gap-3 bg-[rgb(240,_240,_240)]'>
      <HeroFramerComponent.Responsive/>
    </div> 
    <div className='flex flex-col items-center gap-3 bg-[rgb(240,_240,_240)]'>
      <PartnersFramerComponent.Responsive/>
    </div>
    <div className='flex flex-col items-center gap-3 bg-[rgb(240,_240,_240)]'>
      <FeaturesFramerComponent.Responsive/>
    </div>
     <div className='flex flex-col items-center gap-3 bg-[rgb(240,_240,_240)]'>
      <ComparisonFramerComponent.Responsive/>
    </div>
    <div className='flex flex-col items-center gap-3 bg-[rgb(240,_240,_240)]'>
      <ComparisonTagsFramerComponent.Responsive/>
    </div>
    <div className='flex flex-col items-center gap-3 bg-[rgb(240,_240,_240)]'>
      <OnboardingFramerComponent.Responsive/>
    </div>
    </>
  );
};