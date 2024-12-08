import Image from "next/image";
import Link from "next/link"
import {Header} from "../components/header";
import Footer from "../components/footer";
import ceremacs1 from "../images/ceremacs-1.png"
import ceremacs2 from "../images/ceremacs-2.png"
import ceremacs3 from "../images/ceremacs-3.png"
import ceremacs4 from "../images/ceremacs-4.png"


export default function Home(){
  return (
    <div>
  <Header/>
  <div className="page-continer w-full">
  

  <div className="new-ceramics p-6 md:p-12">    
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
  </div>

  <div className="new-ceramics p-6 md:p-12">    
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
  </div>

  <div className="new-ceramics p-6 md:p-12">    
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
  </div>

  
</div>


  <Footer/>

  </div>
  );
}