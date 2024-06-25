import React, { useState } from 'react';

const FormComponentEmp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    jobTitle: '',
    workerProfile: '',
    skills: '',
    contractType: '',
    contractStartDate: '',
    startTime: '',
    address: '',
    specialRequest: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-light-gray flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-dark-blue">ALRIGHT, LET'S DO THIS!</h2>
          <p className="mt-2 text-center text-sm text-blue-gray">Please fill out this form so that we can get that special worker that you need!</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="py-2">
              <label htmlFor="name" className="sr-only">Your name or the name of your company</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name or the name of your company"
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
              <label htmlFor="jobTitle" className="sr-only">Job Title</label>
              <input
                id="jobTitle"
                name="jobTitle"
                type="text"
                required
                placeholder="Indicate the position needed"
                value={formData.jobTitle}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-gray placeholder-blue-gray text-dark-blue focus:outline-none focus:ring-dark-blue focus:border-dark-blue focus:z-10 sm:text-sm"
              />
            </div>
            <div className="py-2">
              <label htmlFor="workerProfile" className="sr-only">Profile of the desired worker</label>
              <textarea
                id="workerProfile"
                name="workerProfile"
                required
                placeholder="Skills and abilities required"
                value={formData.workerProfile}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-gray placeholder-blue-gray text-dark-blue focus:outline-none focus:ring-dark-blue focus:border-dark-blue focus:z-10 sm:text-sm"
              />
            </div>
            <div className="py-2">
              <label htmlFor="contractType" className="sr-only">Contract Type</label>
              <select
                id="contractType"
                name="contractType"
                required
                value={formData.contractType}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-gray placeholder-blue-gray text-dark-blue focus:outline-none focus:ring-dark-blue focus:border-dark-blue focus:z-10 sm:text-sm"
              >
                <option value="" disabled>Choose one option</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
              </select>
            </div>
            <div className="py-2">
              <label htmlFor="contractStartDate" className="sr-only">Contract start date</label>
              <input
                id="contractStartDate"
                name="contractStartDate"
                type="date"
                required
                value={formData.contractStartDate}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-gray placeholder-blue-gray text-dark-blue focus:outline-none focus:ring-dark-blue focus:border-dark-blue focus:z-10 sm:text-sm"
              />
            </div>
            <div className="py-2">
              <label htmlFor="startTime" className="sr-only">Start time</label>
              <input
                id="startTime"
                name="startTime"
                type="time"
                required
                value={formData.startTime}
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
                placeholder="Enter a valid Address"
                value={formData.address}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-gray placeholder-blue-gray text-dark-blue focus:outline-none focus:ring-dark-blue focus:border-dark-blue focus:z-10 sm:text-sm"
              />
            </div>
            <div className="py-2">
              <label htmlFor="specialRequest" className="sr-only">Special Request</label>
              <textarea
                id="specialRequest"
                name="specialRequest"
                required
                placeholder="Please detail any special request you might have"
                value={formData.specialRequest}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-gray placeholder-blue-gray text-dark-blue focus:outline-none focus:ring-dark-blue focus:border-dark-blue focus:z-10 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-dark-blue hover:bg-blue-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-gray"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponentEmp;
