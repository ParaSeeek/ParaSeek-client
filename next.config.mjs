/** @type {import('next').NextConfig} */
const nextConfig = {
    // output:"export",
    env: {
        JOBSEEKER_ID: process.env.JOBSEEKER_ID,
        EMPLOYER_ID: process.env.EMPLOYER_ID,
        SERVER_URL: process.env.SERVER_URL,
        SERVER_URL2: process.env.SERVER_URL2,
    }
};

export default nextConfig;
