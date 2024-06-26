// components/JobCarousel.js
import React from 'react';
import Slider from 'react-slick';
import Card from './Card';

const JobCarousel = () => {
  const jobPositions = [
    { jobTitle: 'Software Engineer', description: 'Develop and maintain software solutions.', location: 'Montreal, QC' },
    { jobTitle: 'Data Scientist', description: 'Analyze and interpret complex data.', location: 'Laval, QC' },
    { jobTitle: 'Project Manager', description: 'Manage projects from start to finish.', location: 'Candiac, QC' },
    { jobTitle: 'Graphic Designer', description: 'Create visual content for various platforms.', location: 'Longueuil, QC' },
    { jobTitle: 'Marketing Specialist', description: 'Develop marketing strategies and campaigns.', location: 'Brossard, QC' },
    { jobTitle: 'General Worker', description: 'Assist in various manual tasks.', location: 'Dorval, QC' },
    { jobTitle: 'Cleaner', description: 'Maintain cleanliness of facilities.', location: 'Lachine, QC' },
    { jobTitle: 'Plumber', description: 'Install and repair plumbing systems.', location: 'Montreal, QC' },
    { jobTitle: 'Construction Worker', description: 'Perform tasks at construction sites.', location: 'Laval, QC' },
    { jobTitle: 'Electrician', description: 'Install and maintain electrical systems.', location: 'Candiac, QC' },
    { jobTitle: 'Air Conditioning Technician', description: 'Install and repair air conditioning systems.', location: 'Longueuil, QC' },
    { jobTitle: 'Heating Technician', description: 'Install and repair heating systems.', location: 'Brossard, QC' },
    { jobTitle: 'Housekeeper', description: 'Perform cleaning and maintenance tasks.', location: 'Dorval, QC' },
    { jobTitle: 'Cashier', description: 'Handle transactions at the cash register.', location: 'Lachine, QC' },
    { jobTitle: 'Cook', description: 'Prepare meals in a kitchen.', location: 'Montreal, QC' },
    { jobTitle: 'Dishwasher', description: 'Clean dishes and kitchen equipment.', location: 'Laval, QC' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="p-8">
     <h2 className="text-4xl font-extrabold text-center mb-8 text-color-white">Featured Jobs</h2>
      <Slider {...settings}>
        {jobPositions.map((job, index) => (
          <div key={index}>
            <Card jobTitle={job.jobTitle} description={job.description} location={job.location} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default JobCarousel;
