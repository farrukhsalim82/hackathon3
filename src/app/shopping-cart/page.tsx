import Image from "next/image";
import Link from "next/link"
import {Header} from "../components/header";
import Footer from "../components/footer";
import cart1 from "../images/cart1.png"
import cart2 from "../images/cart2.png"


export default function Home(){
  return (
    <div>
  <Header/>
  
  
  <div className="cart-container p-12">
  <div className="cart-container-top">
    <h1 className="text-dark-primary text-2xl md:text-3xl">Your shopping cart</h1>
  </div>
  <div className="cart-container-middle-top flex flex-wrap">
    {/* Product 1 */}
    <div className="cart-container-middle-top1 w-full md:w-2/5 p-4">
      <h3 className="text-dark-primary">Product</h3>
      <div className="prod flex">
        <div className="prod-left w-1/2">
          <Image className="ceramics-img" src={cart1} alt="Greystone Vase" />
        </div>
        <div className="prod-right w-1/2 pl-4">
          <h1 className="text-dark-primary text-xl">Greystone Vase</h1>
          <p className="text-dark-primary text-sm">A timeless ceramic vase with <br /> a tri-color grey glaze</p>
          <p className="text-dark-primary text-lg">£ 85</p>
        </div>
      </div>
    </div>
    {/* Quantity */}
    <div className="cart-container-middle-top2 w-full md:w-1/3 p-4">
      <h3 className="text-dark-primary">Quantity</h3>
      <p className="text-dark-primary">1</p>
    </div>
    {/* Total */}
    <div className="cart-container-middle-top3 w-full md:w-1/3 p-4">
      <h3 className="text-dark-primary">Total</h3>
      <p className="text-dark-primary">£ 85</p>
    </div>
  </div>
  <div className="cart-container-middle-top flex flex-wrap">
    {/* Product 2 */}
    <div className="cart-container-middle-top1 w-full md:w-2/5 p-4">
      <h3 className="text-dark-primary">Product</h3>
      <div className="prod flex">
        <div className="prod-left w-1/2">
          <Image className="ceramics-img" src={cart2} alt="Greystone Vase" />
        </div>
        <div className="prod-right w-1/2 pl-4">
          <h1 className="text-dark-primary text-xl">Greystone Vase</h1>
          <p className="text-dark-primary text-sm">A timeless ceramic vase with <br /> a tri-color grey glaze</p>
          <p className="text-dark-primary text-lg">£ 85</p>
        </div>
      </div>
    </div>
    {/* Quantity */}
    <div className="cart-container-middle-top2 w-full md:w-1/3 p-4">
      <p className="text-dark-primary">1</p>
    </div>
    {/* Total */}
    <div className="cart-container-middle-top3 w-full md:w-1/3 p-4">
      <p className="text-dark-primary">£ 85</p>
    </div>
  </div>
  <div className="cart-container-bottom mt-6">
    {/* Optionally, you can add the checkout or other buttons here */}
  </div>
</div>

  <Footer/>

  </div>
  );
}