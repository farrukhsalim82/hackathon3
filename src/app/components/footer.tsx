import Image from "next/image";

import Link from "next/link"
export default function Footer(){
    return(
        
      <div className="footer p-6 sm:p-12 space-y-6 sm:space-x-4 sm:space-y-0">
      <div className="footer-top flex flex-col sm:flex-row border-b-2 pb-6 space-y-6 sm:space-y-0 sm:space-x-6">
        <div className="footer-top1 w-full sm:w-[17%]">
          <h1 className="text-xl font-semibold">Menu</h1>
          <ul className="space-y-4 mt-4">
            <Link href="/new-arrivals" className="link">
              <li>New arrivals</li>
            </Link>
            <Link href="/best-sellers" className="link">
              <li>Best sellers</li>
            </Link>
            <Link href="/recently-viewed" className="link">
              <li>Recently viewed</li>
            </Link>
            <Link href="/popular-this-week" className="link">
              <li>Popular this week</li>
            </Link>
            <Link href="/all-products" className="link">
              <li>All products</li>
            </Link>
          </ul>
        </div>
        <div className="footer-top2 w-full sm:w-[17%]">
          <h1 className="text-xl font-semibold">Categories</h1>
          <ul className="space-y-4 mt-4">
            <Link href="/all-products" className="link">
              <li>Crockery</li>
            </Link>
            <Link href="/all-products" className="link">
              <li>Furniture</li>
            </Link>
            <Link href="/all-products" className="link">
              <li>Homeware</li>
            </Link>
            <Link href="/all-products" className="link">
              <li>Plant pots</li>
            </Link>
            <Link href="/all-products" className="link">
              <li>Chairs</li>
            </Link>
          </ul>
        </div>
        <div className="footer-top3 w-full sm:w-[17%]">
          <h1 className="text-xl font-semibold">Our company</h1>
          <ul className="space-y-4 mt-4">
            <Link href="/about" className="link">
              <li>About us</li>
            </Link>
            <Link href="/vacancies" className="link">
              <li>Vacancies</li>
            </Link>
            <Link href="/contact-us" className="link">
              <li>Contact us</li>
            </Link>
            <Link href="/privacy-policy" className="link">
              <li>Privacy</li>
            </Link>
            <Link href="/return-policy" className="link">
              <li>Return policy</li>
            </Link>
          </ul>
        </div>
        <div className="footer-top4 w-full sm:w-[49%]">
          <h1 className="text-xl font-semibold">Join our mailing list</h1>
          <div className="input flex mt-4">
            <input
              className="sign2 w-full sm:w-auto p-2 border rounded-md"
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
            />
            <button
              className="sign-up2 bg-blue-500 text-white p-2 rounded-md ml-2"
              aria-label="Sign up for newsletter"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    
      <div className="footer-bottom mt-7 text-center sm:text-left">
        <p>Copyright 2022 Avion LTD</p>
      </div>
    </div>
    );
}