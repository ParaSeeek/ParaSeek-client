"use client";
import React from 'react'
import Link from 'next/link';
import ProfileCard from '@/components/account/ProfileCard';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Page = () => {
  const userData = useSelector((state: RootState) => state.user.data)
  return (
    <div className='max-w-[1640px] mx-auto'>
      <ProfileCard />
      <Link href="/account/profile">
        <div
          className="w-4/5 p-6 my-4 mx-auto bg-card font-bold cursor-pointer hover:bg-accent shadow-lg rounded-lg overflow-hidden"
        >
          Edit Profile
        </div>
      </Link>
      {userData.role === process.env.JOBSEEKER_ID && <Link href="/account/qualifications">
        <div
          className="w-4/5 p-6 my-4 mx-auto bg-card font-bold cursor-pointer hover:bg-accent shadow-lg rounded-lg overflow-hidden"
        >
          Qualifications
        </div>
      </Link>}
      {userData.role === process.env.JOBSEEKER_ID && <Link href="/account/job-preferences">
        <div
          className="w-4/5 p-6 my-4 mx-auto bg-card font-bold cursor-pointer hover:bg-accent shadow-lg rounded-lg overflow-hidden"
        >
          Job Preferences
        </div>
      </Link>}
      {userData.role === process.env.JOBSEEKER_ID && <Link href="/resume-wizard">
        <div
          className="w-4/5 p-6 my-4 mx-auto bg-card font-bold cursor-pointer hover:bg-accent shadow-lg rounded-lg overflow-hidden"
        >
          Resume Wizard
        </div>
      </Link>}
    </div>
  )
}

export default Page
