import Image from "next/image";

import Link from "next/link"
import avicon from "../images/Avion.png"

import search from "../images/Search.png"
import shopping from "../images/shopping.png"
import user from "../images/user.png"


export function Header(){
return (

  <div className="header-container w-full">
  {/* Top Header Section */}
  <div className="header-container-top flex px-6 flex-col md:flex-row">
    {/* Left section: Search Icon */}
    <div className="header-container-top-left w-full md:w-[20%] pt-14 flex justify-center md:justify-start">
      <Image className="search" src={search} alt="Search Icon" />
    </div>
    
    {/* Middle section: Logo */}
    <div className="header-container-top-middle w-full md:w-[60%] flex justify-center items-center pt-4 md:pt-14">
      <Image className="avion" src={avicon} alt="Brand Logo" />
    </div>
    
    {/* Right section: Shopping Cart and User Icon */}
    <div className="header-container-top-right w-full md:w-[20%] flex justify-center md:justify-end pt-4 md:pt-14">
      <Image className="shopping" src={shopping} alt="Shopping Cart" />
      <Image className="user ml-4" src={user} alt="User Icon" />
    </div>
  </div>

  {/* Middle Header Section: Navigation Links */}
  <div className="header-container-middle pt-6">
    <ul className="links flex flex-wrap gap-8 justify-center items-center">
      <Link href={"/all-products"} className="link">
        <li>Plants Pots</li>
      </Link>
      <Link href={"/all-products"} className="link">
        <li>Ceramics</li>
      </Link>
      <Link href={"/all-products"} className="link">
        <li>Tables</li>
      </Link>
      <Link href={"/all-products"} className="link">
        <li>Chairs</li>
      </Link>
      <Link href={"/all-products"} className="link">
        <li>Crockery</li>
      </Link>
      <Link href={"/all-products"} className="link">
        <li>Tableware</li>
      </Link>
      <Link href={"/all-products"} className="link">
        <li>Cutlery</li>
      </Link>
    </ul>
  </div>
</div>

)
}