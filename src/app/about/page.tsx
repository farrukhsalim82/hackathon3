import Image from "next/image";
import Link from "next/link"
import delivery from "../images/Delivery.png"
import check from "../images/Checkmark--outline.png"
import purchase from "../images/Purchase.png"
import sprout from "../images/Sprout.png"
import aboutimage from "../images/aboutimage.png"

import {Header} from "../components/header";
import Footer from "../components/footer";
export default function About(){
  return (
    <div>
  <Header/>

  <div className="about-container w-full">
  <div className="view flex flex-col md:flex-row p-12">
    <div className="view-left w-full md:w-[60%]">
      <h1 className="dark-primary text-[30px]">A brand built on the love of craftsmanship, quality, and outstanding customer service</h1>
    </div>
    <div className="view-right w-full md:w-[40%]">
      <div className="ceremacs-button flex justify-center items-center">
        <button className="con-bott mt-8 hover:bg-dark-primary active:scale-95">View Collection</button>
      </div>
    </div>
  </div>

  <div className="dandy flex flex-col md:flex-row">
    <div className="dandy-left w-full md:w-[50%]">
      <Image className="leftimage" src={aboutimage} alt="Dandy chair" />
    </div>
    <div className="dandy-right w-full md:w-[50%] p-12">
      <p className="dark-primary mb-8">A timeless design, with premium materials, featuring one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
      <div className="ceremacs-button flex justify-center items-center">
        <button className="con-bott mt-8 hover:bg-dark-primary active:scale-95">View More</button>
      </div>
    </div>
  </div>

  <div className="what-makes p-12">
    <div className="what-makes-top flex justify-center items-center">
      <h1 className="dark-primary text-[30px]">What makes our brand different</h1>
    </div>
    <div className="what-makes-bottom flex pt-10">
      <div className="what-makes-bottom-1 w-full sm:w-[25%]">
        <Image className="right" src={delivery} alt="Next day delivery" />
        <h1 className="dark-primary">Next day as standard</h1>
        <p className="dark-primary">Order before 3pm and get your order the next day as standard.</p>
      </div>
      <div className="what-makes-bottom-2 w-full sm:w-[25%]">
        <Image className="right" src={check} alt="Crafted by artisans" />
        <h1 className="dark-primary">Made by true artisans</h1>
        <p className="dark-primary">Handmade crafted goods with real passion from craftsmen.</p>
      </div>
      <div className="what-makes-bottom-3 w-full sm:w-[25%]">
        <Image className="right" src={purchase} alt="Affordable pricing" />
        <h1 className="dark-primary">Unbeatable prices</h1>
        <p className="dark-primary">For our material and quality, you won’t find better prices anywhere.</p>
      </div>
      <div className="what-makes-bottom-4 w-full sm:w-[25%]">
        <Image className="right" src={sprout} alt="Sustainable packaging" />
        <h1 className="dark-primary">Recycled Packaging</h1>
        <p className="dark-primary">We use 100% recycled packaging to ensure our footprint is manageable.</p>
      </div>
    </div>
  </div>

  <div className="join-the-club p-12">
    <div className="join-inner pt-20">
      <h1 className="flex justify-center items-center text-[30px] dark-primary">Join the club and get the benefits</h1>
      <p className="flex justify-center items-center mt-10">Sign up for our newsletter and receive exclusive offers on new releases, sales, pop-up stores, and more.</p>
      <div className="input flex justify-center items-center mt-10">
        <input className="sign" type="email" placeholder="your@email.com" />
        <button className="sign-up hover:bg-dark-primary active:scale-95">Sign up</button>
      </div>
    </div>
  </div>
</div>
  
  
  <Footer/>

  </div>
  );
}