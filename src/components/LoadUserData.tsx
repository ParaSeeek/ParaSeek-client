"use client";
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { login, toggleLoading } from "@/slices/userSlice";
import { getCookie } from 'cookies-next';
import { setQualifications } from '@/slices/qualificationSlice';
import { setJobs } from '@/slices/jobSlice';
import { setPreferences } from '@/slices/preferencesSlice';
import { setCompanies } from '@/slices/companySlice';

const LoadUserData = () => {
  const userLog = useSelector((state: RootState) => state.user.isLoggedIn)
  const dispatch = useDispatch();
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setToken(localStorage.getItem("accessToken"))
    }
  }, []);
  const [loaded, setLoaded] = useState(false)
  async function loadUser() {
    try {
      dispatch(toggleLoading(true));
      const res = await fetch(`${process.env.SERVER_URL}/api/v1/user/me`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const dataRes = await res.json();
      if (dataRes.success) {
        dispatch(login(dataRes.data));
        dispatch(setQualifications(dataRes.data.qualification))
        dispatch(setPreferences(dataRes.data.jobPreferences))
      } else {
        localStorage.removeItem('accessToken');
        console.error(dataRes.message)
      }
    } catch (error: any) {
      localStorage.removeItem('accessToken');
      console.error(error.message);
    } finally {
      dispatch(toggleLoading(false));
    }
  }
  useEffect(() => {
    if (!loaded && token) {
      loadUser();
      setLoaded(true);
    }
  }, [userLog, token])


  const loadJobs = async () => {
    try {
      const res = await fetch(`${process.env.SERVER_URL}/api/v1/job/get-jobs`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const dataRes = await res.json();
      if (dataRes.success) {
        dispatch(setJobs(dataRes.data))
      } else {
        console.error(dataRes.message)
      }
    } catch (error: any) {
      console.error(error);
    }
  }

  const loadCompanies = async () => {
    try {
      const res = await fetch(`${process.env.SERVER_URL}/api/v1/company/get-all-company`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const dataRes = await res.json();
      if (dataRes.success) {
        dispatch(setCompanies(dataRes.data))
      } else {
        console.error(dataRes.message)
      }
    } catch (error: any) {
      console.error(error);
    }
  }
  useEffect(() => {
    loadJobs();
    loadCompanies();
  },[])
  return (
    <div></div>
  )
}
export default LoadUserData;