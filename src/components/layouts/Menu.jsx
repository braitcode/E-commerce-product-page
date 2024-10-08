import React, { useState } from 'react';
import cartIcon from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";
import deleteIcon from "../../assets/images/icon-delete.svg"
import menuIcon from "../../assets/images/icon-menu.svg"
import closeIcon from "../../assets/images/icon-close.svg"

const Menu = ({ cartItems, toggleCartDropdown, isCartOpen, handleDelete }) => {
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle the sidebar menu
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="w-full h-[100px] flex justify-center items-center">
        <div className="flex justify-between w-[85%] h-[60px]">
          {/* Sidebar toggle for mobile view */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleSidebar}>
              <img src={menuIcon} alt="Menu" className="h-[30px] w-[30px]" />
            </button>
          </div>
          <div className="hidden md:flex gap-16 items-center">
            <h1 className="font-bold text-[30px] font-kumbh">sneakers</h1>
            <ul className="flex gap-6">
              <li className="cursor-pointer text-[20px] text-Dark-grayish-blue font-kumbh">Collections</li>
              <li className="cursor-pointer text-[20px] text-Dark-grayish-blue font-kumbh">Men</li>
              <li className="cursor-pointer text-[20px] text-Dark-grayish-blue font-kumbh border-b-[3px] border-Orange">Women</li>
              <li className="cursor-pointer text-[20px] text-Dark-grayish-blue font-kumbh">About</li>
              <li className="cursor-pointer text-[20px] text-Dark-grayish-blue font-kumbh">Contact</li>
            </ul>
          </div>
          <div className="flex items-center gap-10 relative">
            <img
              src={cartIcon}
              alt="cart"
              className="h-[30px] w-[30px] cursor-pointer"
              onClick={toggleCartDropdown}
            />
            {cartItems.length > 0 && (
              <span className="absolute top-1 left-3 bg-red-600 text-white rounded-full px-2 text-xs">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
            <img
              src={avatar}
              alt="avatar"
              className="h-[60px] w-[60px] hover:border-[3px] cursor-pointer rounded-full border-Orange"
            />

            {isCartOpen && (
              <div className="absolute right-0 top-[100%] mt-5 w-[350px]  bg-white border shadow-lg p-4 z-10 rounded-lg">
                {cartItems.length === 0 ? (
                  <div className="">
                    <div className="flex flex-col gap-4 mb-4">
                          <p className='font-bold'>Cart</p>
                          <p className='border-[0.8px] border-Grayish-blue'></p>
                        </div>
                    <p className=" text-Dark-grayish-blue font-semibold flex justify-center items-center h-[100px]">Your cart is empty.</p>
                  </div>
                ) : (
                  <>
                    {cartItems.map((item, index) => (
                      <div className="">
                        <div className="flex flex-col gap-4 mb-4">
                          <p className='font-bold'>Cart</p>
                          <p className='border-[0.8px] border-Grayish-blue'></p>
                        </div>
                      <div key={index} className="flex justify-between items-center mb-4">
                        <img src={item.image} alt={item.name} className="w-[50px] h-[50px] rounded-lg" />
                        <div className="flex-1 ml-4">
                          <p className='text-[14px] text-Dark-grayish-blue font-semibold'>{item.name}</p>
                          <span className='flex gap-4'>
                          <p className='text-Dark-grayish-blue'>
                            ${item.price.toFixed(2)} x {item.quantity} 
                          </p>
                          <p className="font-bold">${(item.quantity * item.price).toFixed(2)}</p>
                          </span>
                        </div>
                        
                        <button
                          onClick={() => handleDelete(index)}
                          className="text-red-500 ml-4"
                        >
                          <img src={deleteIcon} alt="" />
                        </button>
                      </div>
                      </div>
                    ))}
                    {/* <div className="flex justify-between items-center">
                      <p>Total:</p>
                      <p className="font-bold">${cartTotal.toFixed(2)}</p>
                    </div> */}
                    <button className="bg-Orange rounded-lg text-white py-2 px-4 w-full mt-4">
                      Checkout
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="border border-Grayish-blue h-[1px] w-[85%]"></p>
      </div>
      {/* Sidebar for mobile view */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-20 ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <div className="relative h-full w-[250px] bg-white p-6 shadow-lg">
          <button onClick={toggleSidebar} className="absolute top-4 right-4">
            <img src={closeIcon} alt="close" className="h-[20px] w-[20px]" />
          </button>
          <ul className="flex flex-col gap-6 mt-10">
            <li className="cursor-pointer text-[20px] text-Dark-grayish-blue font-kumbh">Collections</li>
            <li className="cursor-pointer text-[20px] text-Dark-grayish-blue font-kumbh">Men</li>
            <li className="cursor-pointer text-[20px] text-Dark-grayish-blue font-kumbh border-b-[3px] border-Orange">Women</li>
            <li className="cursor-pointer text-[20px] text-Dark-grayish-blue font-kumbh">About</li>
            <li className="cursor-pointer text-[20px] text-Dark-grayish-blue font-kumbh">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
