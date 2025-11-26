import React from 'react';
import { useAppLogic } from './hooks/useAppLogic';
import About from './pages/about';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedPosts from './components/FeaturedPosts';
import Categories from './components/Categories';
import Team from './components/Team';
import Benefits from './components/Benefits';
import Stats from './components/Stats';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import BackgroundElements from './components/BackgroundElements';

export default function VortigoBlog() {
  const { loading, progress, scrollY, isVisible } = useAppLogic();

  if (loading) {
    return <LoadingScreen progress={progress} />;
  }

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <BackgroundElements scrollY={scrollY} />
      <Navbar />
      <Hero isVisible={isVisible} />
      <FeaturedPosts />
      <Categories />
      <About />
      <Team /> 
      <Benefits />
      <Stats />
      <Newsletter />
      <Footer />
    </div>
  );
}

