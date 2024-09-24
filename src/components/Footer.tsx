import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6 px-20">
        <div className="container items-center mx-auto flex justify-between flex-col md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold">ParaSeek.</h3>
            <p>© 2024 ParaSeek. All rights reserved.</p>
          </div>
          <div className="flex flex-col items-center text-center md:flex-row">
            <Link href="#" className="md:mr-3 hover:underline">Privacy Policy</Link>
            <Link href="#" className="md:mr-3 hover:underline">Terms of Service</Link>
            <Link href="/contact" className="md:mr-3 hover:underline">Contact Us</Link>
          </div>
        </div>
      </footer>
    );
  }
  