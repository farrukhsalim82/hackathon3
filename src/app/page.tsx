import Image from "next/image";
import Link from "next/link"
import {Header} from "./components/header";
import Footer from "./components/footer";
import delivery from "../app/images/Delivery.png"
import check from "../app/images/Checkmark--outline.png"
import purchase from "../app/images/Purchase.png"
import sprout from "../app/images/Sprout.png"
import ceremacs1 from "../app/images/ceremacs-1.png"
import ceremacs2 from "../app/images/ceremacs-2.png"
import ceremacs3 from "../app/images/ceremacs-3.png"
import ceremacs4 from "../app/images/ceremacs-4.png"
import popular1 from "../app/images/popular1.png"
import popular3 from "../app/images/popular3.png"
import sofa from "../app/images/sofaimage.png"
import right from "../app/images/rightimage.png"


export default function Home(){
  return (
    <div>
  <Header/>
  <div className="page-continer w-full">
  <div className="header-container-bottom w-full flex flex-col md:flex-row p-8 md:p-12">
    <div className="header-container-bottom-left w-full md:w-[60%] p-6 md:p-10">
      <p className="text-white text-[30px] md:text-[40px]">The furniture brand for the <br /> future, with timeless designs</p>
      <button className="con-bott mt-8 mb-8 md:mb-48">View More</button>
      <p className="text-white text-base md:text-lg">A new era in eco friendly furniture with Avelon, the French luxury retail brand<br /> with nice fonts, tasteful colors and a beautiful way to display things digitally<br /> using modern web technologies.</p>
    </div>
    <div className="header-container-bottom-right w-full md:w-[40%]">
      <Image className="right w-full" src={right} alt="/" />
    </div>
  </div>

  <div className="what-makes p-6 md:p-12">
    <div className="what-makes-top flex justify-center items-center">
      <h1 className="dark-primary text-[28px] md:text-[30px]">What makes our brand different</h1>
    </div>
    <div className="what-makes-bottom flex flex-wrap justify-between pt-10">
      <div className="what-makes-bottom-1 w-full sm:w-[48%] md:w-[23%] mb-8 sm:mb-0">
        <Image className="right" src={delivery} alt="/" />
        <h1 className="dark-primary text-lg">Next day as standard</h1>
        <p className="dark-primary">Order before 3pm and get your order<br /> the next day as standard</p>
      </div>
      <div className="what-makes-bottom-2 w-full sm:w-[48%] md:w-[23%] mb-8 sm:mb-0">
        <Image className="right" src={check} alt="/" />
        <h1 className="dark-primary text-lg">Made by true artisans</h1>
        <p className="dark-primary">Handmade crafted goods with<br /> real passion craftsmen</p>
      </div>
      <div className="what-makes-bottom-3 w-full sm:w-[48%] md:w-[23%] mb-8 sm:mb-0">
        <Image className="right" src={purchase} alt="/" />
        <h1 className="dark-primary text-lg">Unbeatable prices</h1>
        <p className="dark-primary">For our material and quality you<br /> won't find better prices anywhere</p>
      </div>
      <div className="what-makes-bottom-4 w-full sm:w-[48%] md:w-[23%]">
        <Image className="right" src={sprout} alt="/" />
        <h1 className="dark-primary text-lg">Recycled Packaging</h1>
        <p className="dark-primary">We use 100% recycled packaging to<br /> ensure our footprint is manageable</p>
      </div>
    </div>
  </div>

  <div className="new-ceramics p-6 md:p-12">
    <div className="new-ceramics-top">
      <h1 className="text-[28px] md:text-[30px] dark-primary">New ceramics</h1>
    </div>
    <div className="new-ceramics-bottom flex flex-wrap justify-between mt-8">
      <div className="new-ceramics-bottom-1 w-full sm:w-[48%] md:w-[23%] mb-8 sm:mb-0">
        <Image className="ceremacs1" src={ceremacs1} alt="/" />
        <p className="dark-primary">The Dandy Chair</p>
        <p className="dark-primary">£ 250</p>
      </div>
      <div className="new-ceramics-bottom-2 w-full sm:w-[48%] md:w-[23%] mb-8 sm:mb-0">
        <Image className="ceremacs2" src={ceremacs2} alt="/" />
        <p className="dark-primary">Rustic Vase Set</p>
        <p className="dark-primary">£ 155</p>
      </div>
      <div className="new-ceramics-bottom-3 w-full sm:w-[48%] md:w-[23%] mb-8 sm:mb-0">
        <Image className="ceremacs3" src={ceremacs3} alt="/" />
        <p className="dark-primary">Silky Vase</p>
        <p className="dark-primary">£ 125</p>
      </div>
      <div className="new-ceramics-bottom-4 w-full sm:w-[48%] md:w-[23%]">
        <Image className="ceremacs4" src={ceremacs4} alt="/" />
        <p className="dark-primary">The Lucy Lamp</p>
        <p className="dark-primary">£ 399</p>
      </div>
    </div>
    <div className="ceremacs-button flex justify-center items-center mt-8">
      <button className="con-bott">View Collection</button>
    </div>
  </div>

  <div className="popular-products p-6 md:p-12">
    <div className="popular-products-top">
      <h1 className="text-[28px] md:text-[30px] dark-primary">Our popular products</h1>
    </div>
    <div className="popular-products-bottom flex flex-wrap justify-between mt-8">
      <div className="popular-products-bottom-1 w-full sm:w-[48%] md:w-[50%] mb-8 sm:mb-0">
        <Image className="popular1" src={popular1} alt="/" />
        <p className="dark-primary">The Poplar suede sofa</p>
        <p className="dark-primary">£ 980</p>
      </div>
      <div className="popular-products-bottom-2 w-full sm:w-[48%] md:w-[25%] mb-8 sm:mb-0">
        <Image className="ceremacs1" src={ceremacs1} alt="/" />
        <p className="dark-primary">The Dandy Chair</p>
        <p className="dark-primary">£ 250</p>
      </div>
      <div className="popular-products-bottom-3 w-full sm:w-[48%] md:w-[25%]">
        <Image className="popular3" src={popular3} alt="/" />
        <p className="dark-primary">The Dandy Chair</p>
        <p className="dark-primary">£ 250</p>
      </div>
    </div>
    <div className="ceremacs-button flex justify-center items-center mt-8">
      <button className="con-bott">View Collection</button>
    </div>
  </div>

  <div className="join-the-club p-6 md:p-12">
    <div className="join-inner pt-20">
      <h1 className="flex justify-center items-center text-[28px] md:text-[30px] dark-primary">Join the club and get the benefits</h1>
      <p className="flex justify-center items-center mt-10 text-base md:text-lg">Sign up for our newsletter and receive exclusive offers on new<br /> brands, sales, pop-up stores, and more</p>
      <div className="input flex justify-center items-center mt-10">
        <input className="sign" type="text" placeholder="your@email.com" />
        <button className="sign-up ml-4">Sign up</button>
      </div>
    </div>
  </div>

  <div className="from-a-studio flex flex-col md:flex-row p-6 md:p-12">
    <div className="from-a-studio-left w-full md:w-[50%]">
      <h1 className="text-[28px] md:text-[30px] dark-primary">From a studio in London to a global brand <br /> with over 400 outlets</h1>
      <p className="dark-primary mt-8">When we started Avion, the idea was simple. Make high-quality furniture<br /> affordable and available for the mass market.</p>
      <p className="dark-primary mt-8">Handmade, and lovingly crafted furniture and homeware is what we live,<br /> breathe and design so our Chelsea boutique became the hotbed for the<br /> London interior design community.</p>
      <button className="mt-12 con-bott">Get in touch</button>
    </div>
    <div className="from-a-studio-right w-full md:w-[50%] mt-8 md:mt-0">
      <Image className="sofa" src={sofa} alt="/" />
    </div>
  </div>
</div>


  <Footer/>

  </div>
  );
}