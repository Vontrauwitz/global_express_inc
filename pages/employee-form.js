// pages/employee-form.js

import Layout from '@/components/Layout';
import { useState } from 'react';

const EmployeeFormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    desiredJob: '',
    languages: '',
    skills: '',
    workExperience: '',
    gender: '',
    dateOfBirth: '',
    curriculumVitae: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here
    console.log('Form submitted:', formData);
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-dark-blue">ALRIGHT, LET'S DO THIS!</h2>
            <p className="mt-2 text-center text-sm text-blue-gray">Please fill out this form so that we can get the right job for you!</p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="py-2">
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-gray placeholder-blue-gray text-dark-blue rounded-t-md focus:outline-none focus:ring-dark-blue focus:border-dark-blue focus:z-10 sm:text-sm"
                />
              </div>
              <div className="py-2">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-gray placeholder-blue-gray text-dark-blue focus:outline-none focus:ring-dark-blue focus:border-dark-blue focus:z-10 sm:text-sm"
                />
              </div>
              <div className="py-2">
                <label htmlFor="phoneNumber" className="sr-only">Phone Number</label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  required
                  placeholder="Enter a valid phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-gray placeholder-blue-gray text-dark-blue focus:outline-none focus:ring-dark-blue focus:border-dark-blue focus:z-10 sm:text-sm"
                />
              </div>
              <div className="py-2">
                <label htmlFor="address" className="sr-only">Address</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  required
                  placeholder="Enter your Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-gray placeholder-blue-gray text-dark-blue focus:outline-none focus:ring-dark-blue focus:border-dark-blue focus:z-10 sm:text-sm"
                />
              </div>
              <div className="py-2">
                <label htmlFor="desiredJob" className="sr-only">Desired Job</label>
                <input
                  id="desiredJob"
                  name="desiredJob"
                  type="text"
                  required
                  placeholder="Indicate the position needed"
                  value={formData.desiredJob}
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-gray placeholder-blue-gray text-dark-blue focus:outline-none focus:ring-dark-blue focus:border-dark-blue focus:z-10 sm:text-sm"
                />
              </div>
              <div className="py-2">
                <label htmlFor="languages" className="sr-only">Languages</label>
                <input
                  id="languages"
                  name="languages"
                  type="text"
                  required
                  placeholder="Please specify languages"
                  value={formData.languages}
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-gray placeholder-blue-gray text-dark-blue focus:outline-none focus:ring-dark-blue focus:border-dark-blue focus:z-10 sm:text-sm"
                />
              </div>
              <div className="py-2">
                <label htmlFor="skills" className="sr-only">Skills</label>
                <textarea
                  id="skills"
                  name="skills"
                  required
                  placeholder="Please detail your skills and abilities"
                  value={formData.skills}
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-gray placeholder-blue-gray text-dark-blue focus:outline-none focus:ring-dark-blue focus:border-dark-blue focus:z-10 sm:text-sm"
                />
              </div>
              <div className="py-2">
                <label htmlFor="workExperience" className="sr-only">Work Experience</label>
                <textarea
                  id="workExperience"
                  name="workExperience"
                  required
                  placeholder="Please detail your work experience"
                  value={formData.workExperience}
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-gray placeholder-blue-gray text-dark-blue focus:outline-none focus:ring-dark-blue focus:border-dark-blue focus:z-10 sm:text-sm"
                />
              </div>
              <div className="py-2">
                <label htmlFor="gender" className="sr-only">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  required
                  value={formData.gender}
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-gray placeholder-blue-gray text-dark-blue focus:outline-none focus:ring-dark-blue focus:border-dark-blue focus:z-10 sm:text-sm"
                >
                  <option value="" disabled>Choose one option</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="py-2">
                <label htmlFor="dateOfBirth" className="sr-only">Date of Birth</label>
                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  required
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-gray placeholder-blue-gray text-dark-blue focus:outline-none focus:ring-dark-blue focus:border-dark-blue focus:z-10 sm:text-sm"
                />
              </div>
              <div className="py-2">
                <label htmlFor="curriculumVitae" className="sr-only">Curriculum Vitae</label>
                <input
                  id="curriculumVitae"
                  name="curriculumVitae"
                  type="file"
                  required
                  onChange={handleFileChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-gray placeholder-blue-gray text-dark-blue focus:outline-none focus:ring-dark-blue focus:border-dark-blue focus:z-10 sm:text-sm"
                  accept=".pdf"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-dark-blue hover:bg-blue-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-blue"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default EmployeeFormPage;
