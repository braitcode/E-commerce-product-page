import React from 'react'
import bigshoe from "../assets/images/image-product-1.jpg"
import shoe1 from "../assets/images/image-product-1.jpg"
import shoe2 from "../assets/images/image-product-2.jpg"
import shoe3 from "../assets/images/image-product-3.jpg"
import shoe4 from "../assets/images/image-product-4.jpg"
import cart from "../assets/images/icon-cart.svg"
import { useState } from 'react'
import closeIcon from "../assets/images/icon-close.svg"
import prevIcon from "../assets/images/icon-previous.svg"
import nextIcon from "../assets/images/icon-next.svg"
import Menu from './layouts/Menu'


const DetailPage = () => {
    const [count, setCount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrrentIndex] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Array of images to display
    const images = [shoe1, shoe2, shoe3, shoe4];

  // Function to handle decreasing the count
  const handleDecrease = () => {
    setCount(prevCount => Math.max(0, prevCount - 1));
  };

  // Function to handle increasing the count
  const handleIncrease = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Open modal with the clicked image
  const handleImageClick = (index) => {
    setCurrrentIndex(index);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // handle next image
  const handleNext =() => {
    setCurrrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  };

  // handle previous image
  const handlePrevious = () => {
    setCurrrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Toggle cart dropdown
  const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);

  const handleAddToCart = () => {
    if (count > 0) {
        const newItem = {
            name: 'Fall Limited Edition Sneakers',
            price: 125.00,
            quantity: count,
            image: shoe1, // thumbnail
        };

        const existingItem = cartItems.find((item) => item.name === newItem.name);
        if (existingItem) {
            setCartItems(
                cartItems.map((item) =>
                    item.name === newItem.name ? { ...item, quantity: item.quantity + count } : item
                )
            );
        } else {
            setCartItems([...cartItems, newItem]);
        }

        setCount(0); // Reset count after adding
    }
};
    // Delete item from cart
    const handleDelete = (index) => setCartItems(cartItems.filter((_, i) => i !== index));


    return (
        <>
        <Menu
        cartItems={cartItems}
        toggleCartDropdown={toggleCartDropdown}
        isCartOpen={isCartOpen}
        handleDelete={handleDelete}
        />
            <div className="flex justify-center">
                <div className="w-[85%] xl:h-[90vh] flex justify-center items-center mt-4 xl:mt-0">
                    <div className="w-[90%] h-[800px] xl:flex items-center gap-[10%]">
                        <div className="flex flex-col gap-[40px] xl:w-[45%]">
                            <div className="">
                                <img src={bigshoe} alt="" className='xl:w-[600px] xl:h-[600px] rounded-xl ' />
                            </div>
                            <div className="flex gap-[18px] ">
                                {images.map((image, index) => (
                                    <img 
                                    key={index}
                                    src={image} 
                                    alt=""
                                    className={`xl:w-[130px] xl:h-[130px] w-[70px] h-[70px] rounded-xl hover:bg-gray-200 hover:opacity-75 transition cursor-pointer ${currentIndex === index ? 'border-[3px] border-Orange' : ''}`}
                                    onClick={() => handleImageClick(index)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="xl:w-[45%] flex flex-col gap-10">
                            <div className="flex flex-col gap-4">

                                <p className='text-Grayish-blue mt-4 xl:mt-0 font-semibold'>SNEAKER COMPANY</p>
                                <h1 className='xl:text-[40px] text-[20px] font-bold w-[400px] leading-10'>Fall Limited Edition Sneakers</h1>
                            </div>
                            <div className="flex flex-col gap-5">
                                <p className='xl:text-[25px] text-[20px] text-Dark-grayish-blue'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                                <span className='flex gap-4 items-center'>
                                    <p className='text-[30px] font-bold'>$125.00</p>
                                    <p className='bg-black w-[50px] h-[30px] text-white flex justify-center rounded-md items-center'>50%</p>
                                </span>
                                <p className='font-semibold'>$250.00</p>
                            </div>
                            <div className="flex gap-6">
                                <div className="bg-Grayish-blue w-[200px] h-[50px] flex justify-between items-center p-4 rounded-xl">
                                    <button onClick={handleDecrease}>

                                    <p className='text-Orange text-[20px] font-bold'>-</p>
                                    </button>
                                    <p className='text-[20px] font-bold'>{count}</p>
                                    <button onClick={handleIncrease}>

                                    <p className='text-Orange text-[20px] font-bold'>+</p>
                                    </button>
                                </div>
                                <button 
                                onClick={handleAddToCart}
                                className='bg-Orange hover:bg-Pale-orange w-[300px] h-[50px] flex justify-center items-center gap-4 mb-4 xl:mb-0 rounded-xl font-bold'>
                                    
                                        <img src={cart} alt=""/>
                                    
                                    Add to Cart
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Popup */}
            {isModalOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="relative w-[80%] max-w-[600px]">
                        <img src={images[currentIndex]} alt="" className="w-full h-full rounded-xl" />

                        {/* Close button */}
                        <button onClick={closeModal} className="absolute top-4 right-4 bg-white p-2 rounded-full">
                            <img src={closeIcon} alt="close" className="w-4 h-4" />
                        </button>

                        {/* Previous button */}
                        <button onClick={handlePrevious} className="absolute xl:top-[40%] top-[35%] left-1 bg-white p-3 rounded-full">
                            <img src={prevIcon} alt="previous" className="w-3 h-4" />
                        </button>

                        {/* Next button */}
                        <button onClick={handleNext} className="absolute xl:top-[40%] top-[35%] right-1 bg-white p-3 rounded-full">
                            <img src={nextIcon} alt="next" className="w-3 h-4 " />
                        </button>

                        {/* Thumbnail images below the modal */}
                        <div className="flex justify-center gap-4 mt-4">
                            {images.map((image, index) => (
                                <img
                                key={index} 
                                src={image} 
                                alt=""
                                className={`xl:w-[90px] xl:h-[90px] w-[70px] h-[75px] rounded-lg cursor-pointer ${currentIndex === index ? 'border-Orange border-[3px]' : ''}`} 
                                onClick={() => setCurrrentIndex(index)}
                                />
                            ))}
                        </div>
                        
                    </div>
                </div>
            )}
        </>
    )
}

export default DetailPage