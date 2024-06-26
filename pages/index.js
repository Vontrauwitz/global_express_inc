// pages/index.js
import React from 'react';
import Layout from '@/components/Layout';
import Carousel from '@/components/Carousel';
import AboutUs from '@/components/AboutUs';
import GetStartedModal from '@/components/GetStartedModal';
import JobCarousel  from '@/components/JobCarousel';

const HomePage = () => {
  return (
    <Layout>
      <Carousel />
      <GetStartedModal />
      <JobCarousel />
      <AboutUs />
    </Layout>
  );
};

export default HomePage;