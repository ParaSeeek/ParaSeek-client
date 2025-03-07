"use client";
import Jobcard from '@/components/jobs/Jobcard'
import Loader from '@/components/Loader';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RootState } from '@/store/store'
import { employmentTypes, jobTypes, locations, skills } from '@/store/suggestions';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Page = () => {
  const jobs = useSelector((state: RootState) => state.jobs)
  const companies = useSelector((state: RootState) => state.companies)
  const [jobType, setJobType] = useState("All Jobs");
  const [employmentType, setEmploymentType] = useState("All Employment Types");
  const [location, setLocation] = useState("All Locations")
  const [skill, setSkill] = useState("All Skills")
  const [company, setCompany] = useState("All Companies")

  if (jobs.length == 0) {
    return (
      <section className='bg-background/70 px-[5%] py-16 grid grid-cols-1 place-items-start'>
        <h1 className='text-2xl font-semibold'>Uh oh! No Jobs found!</h1>
      </section>
    )
  }
  return (
    <div className='min-h-screen pt-16 pb-8 px-2 sm:px-6'>
      <div className='w-full z-20 px-4 py-4 flex justify-between items-center'>
        <Link className='md:block hidden cursor-pointer hover:-translate-x-2' href="/"><ArrowLeft /></Link>
        <div className='flex items-center gap-3 md:mr-16 justify-center md:justify-end w-full flex-wrap'>
          <Select
            value={jobType}
            onValueChange={(value) => setJobType(value)}
          >
            <SelectTrigger className="w-fit disabled:cursor-default flex gap-1">
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='All Jobs'>All Jobs</SelectItem>
              {
                jobTypes.map((item, index) => (
                  <SelectItem key={index} value={item}><div className='flex items-center gap-2'>{item}</div>
                  </SelectItem>
                ))
              }
            </SelectContent>
          </Select>
          <Select
            value={employmentType}
            onValueChange={(value) => setEmploymentType(value)}
          >
            <SelectTrigger className="w-fit disabled:cursor-default flex gap-1">
              <SelectValue placeholder="Employment Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='All Employment Types'>All Employment Types</SelectItem>
              {
                employmentTypes.map((item, index) => (
                  <SelectItem key={index} value={item}><div className='flex items-center gap-2'>{item}</div>
                  </SelectItem>
                ))
              }
            </SelectContent>
          </Select>
          <Select
            value={location}
            onValueChange={(value) => setLocation(value)}
          >
            <SelectTrigger className="w-fit disabled:cursor-default flex gap-1">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='All Locations'>All Locations</SelectItem>
              {
                locations.map((item, index) => (
                  <SelectItem key={index} value={item}><div className='flex items-center gap-2'>{item}</div>
                  </SelectItem>
                ))
              }
            </SelectContent>
          </Select>
          <Select
            value={skill}
            onValueChange={(value) => setSkill(value)}
          >
            <SelectTrigger className="w-fit disabled:cursor-default flex gap-1">
              <SelectValue placeholder="Skills" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='All Skills'>All Skills</SelectItem>
              {
                skills.map((item, index) => (
                  <SelectItem key={index} value={item}><div className='flex items-center gap-2'>{item}</div>
                  </SelectItem>
                ))
              }
            </SelectContent>
          </Select>
          {
            companies.length > 0 && companies[0].companyName != "" &&
            <Select
              value={company}
              onValueChange={(value) => setCompany(value)}
            >
              <SelectTrigger className="w-fit disabled:cursor-default flex gap-1">
                <SelectValue placeholder="Company" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='All Companies'>All Companies</SelectItem>
                {
                  companies.map((item, index) => (
                    <SelectItem key={index} value={item.companyName}><div className='flex items-center gap-2'>{item.companyName}</div>
                    </SelectItem>
                  ))
                }
              </SelectContent>
            </Select>
          }
        </div>
      </div>
      <div className='gap-3 grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 w-fit mx-auto'>

        {jobs[0].title == "" && <Loader />}
        {jobs[0].title != "" && jobs.map((job, index) => {
          return <Jobcard id={job._id} title={job.title} companyName={job.companyName} workHours={job.workHours} salaryRange={job.salaryRange} employmentType={job.employmentType} location={job.location} key={index} />
        })}
      </div>
    </div>
  )
}

export default Page
