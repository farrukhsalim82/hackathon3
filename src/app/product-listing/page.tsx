import Image from "next/image";
import Link from "next/link"
import left from "../images/left.png"
import ceremacs1 from "../images/ceremacs-1.png"
import ceremacs2 from "../images/ceremacs-2.png"
import ceremacs3 from "../images/ceremacs-3.png"
import ceremacs4 from "../images/ceremacs-4.png"
import delivery from "../images/Delivery.png"
import check from "../images/Checkmark--outline.png"
import purchase from "../images/Purchase.png"
import sprout from "../images/Sprout.png"

import {Header} from "../components/header";
import Footer from "../components/footer";
export default function Product(){
  return (
    <div>
  <Header/>
  
  <div className="product-container w-full">

  {/* Product Section */}
  <div className="dandy flex flex-col md:flex-row">
    <div className="dandy-left w-full md:w-[50%]">
      <Image className="leftimage" src={left} alt="The Dandy Chair" />
    </div>
    <div className="dandy-right w-full md:w-[50%] p-6 md:p-12">
      <h1 className="dark-primary text-[24px] sm:text-[30px]">The Dandy Chair</h1>
      <p className="dark-primary text-[18px] sm:text-[20px] mb-8">£250</p>
      <h3 className="dark-primary text-[16px] sm:text-[18px] mb-8">Description</h3>
      <p className="dark-primary mb-8 text-[14px] sm:text-[16px]">
        A timeless design, with premium materials features as one of our most <br />
        popular and iconic pieces. The Dandy Chair is perfect for any stylish <br />
        living space with beech legs and lambskin leather upholstery.
      </p>
      <ul className="list-disc pl-5 text-[14px] sm:text-[16px]">
        <li>Premium material</li>
        <li>Handmade upholstery</li>
        <li>Quality timeless classic</li>
      </ul>
    </div>
  </div>

  {/* You May Also Like Section */}
  <div className="new-ceramics p-6 md:p-12">
    <div className="new-ceramics-top">
      <h1 className="text-[24px] sm:text-[30px] dark-primary">You may also like</h1>
    </div>
    <div className="new-ceramics-bottom grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-12 mt-6">
      <div className="new-ceramics-bottom-1 text-center">
        <Image className="ceremacs1" src={ceremacs1} alt="The Dandy Chair" />
        <p className="dark-primary">The Dandy Chair</p>
        <p className="dark-primary">£250</p>
      </div>
      <div className="new-ceramics-bottom-2 text-center">
        <Image className="ceremacs2" src={ceremacs2} alt="Rustic Vase Set" />
        <p className="dark-primary">Rustic Vase Set</p>
        <p className="dark-primary">£155</p>
      </div>
      <div className="new-ceramics-bottom-3 text-center">
        <Image className="ceremacs3" src={ceremacs3} alt="Silky Vase" />
        <p className="dark-primary">Silky Vase</p>
        <p className="dark-primary">£125</p>
      </div>
      <div className="new-ceramics-bottom-4 text-center">
        <Image className="ceremacs4" src={ceremacs4} alt="The Lucy Lamp" />
        <p className="dark-primary">The Lucy Lamp</p>
        <p className="dark-primary">£399</p>
      </div>
    </div>
    <div className="ceremacs-button flex justify-center items-center mt-8">
      <button className="con-bott mt-4 px-6 py-2 bg-black text-white rounded-md">View Collection</button>
    </div>
  </div>

  {/* What Makes Our Brand Different Section */}
  <div className="what-makes p-6 md:p-12">
    <div className="what-makes-top flex justify-center items-center">
      <h1 className="dark-primary text-[24px] sm:text-[30px]">What makes our brand different</h1>
    </div>
    <div className="what-makes-bottom grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-12 pt-10">
      <div className="what-makes-bottom-1 text-center">
        <Image className="right" src={delivery} alt="Next day delivery" />
        <h1 className="dark-primary">Next day as standard</h1>
        <p className="dark-primary">Order before 3pm and get your order<br /> the next day as standard</p>
      </div>
      <div className="what-makes-bottom-2 text-center">
        <Image className="right" src={check} alt="Made by true artisans" />
        <h1 className="dark-primary">Made by true artisans</h1>
        <p className="dark-primary">Handmade crafted goods with<br /> real passion from craftsmen</p>
      </div>
      <div className="what-makes-bottom-3 text-center">
        <Image className="right" src={purchase} alt="Unbeatable prices" />
        <h1 className="dark-primary">Unbeatable prices</h1>
        <p className="dark-primary">For our material and quality you<br /> won’t find better prices anywhere</p>
      </div>
      <div className="what-makes-bottom-4 text-center">
        <Image className="right" src={sprout} alt="Recycled Packaging" />
        <h1 className="dark-primary">Recycled Packaging</h1>
        <p className="dark-primary">We use 100% recycled packaging to<br /> ensure our footprint is manageable</p>
      </div>
    </div>
  </div>

  {/* Newsletter Sign-Up Section */}
  <div className="join-the-club p-6 md:p-12">
    <div className="join-inner text-center pt-20">
      <h1 className="text-[24px] sm:text-[30px] dark-primary">Join the club and get the benefits</h1>
      <p className="mt-6">Sign up for our newsletter and receive exclusive offers on new<br /> ranges, sales, pop-up stores, and more.</p>
      <div className="input flex justify-center items-center mt-6">
        <input className="sign p-3 border rounded-md text-sm sm:text-base" type="text" placeholder="your@email.com" />
        <button className="sign-up ml-4 px-6 py-2 bg-black text-white rounded-md">Sign up</button>
      </div>
    </div>
  </div>

</div>





  <Footer/>

  </div>
  );
}