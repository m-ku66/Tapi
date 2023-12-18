import React, { useState, useEffect } from 'react'
import { RxDotFilled } from 'react-icons/rx';


const Section1 = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [overlayState, setOverlayState] = useState(false);

    const [scrollState, setScrollState] = useState(true);

    const pageStyle1 = "scroll";
    const pageStyle2 = "hidden";

    let page;

    useEffect(() => {
        page = document.getElementById('body');
        page.style.overflowY = scrollState ? pageStyle1 : pageStyle2;
    });

    const overlayStyle1 = "block absolute z-[50] flex justify-center items-center w-full h-full bg-black/[0.8]"
    const overlayStyle2 = "hidden w-full h-full bg-black/[0.8]"


    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    const slides = [
        {
            url: '/gallery/1.png'
        },
        {
            url: '/gallery/2.png'
        },
        {
            url: '/gallery/3.png'
        },
    ];

    const playVideo = () => {
        setOverlayState(true);
        setScrollState(false);
    }

    const closeVideo = () => {
        setOverlayState(false);
        setScrollState(true);
    }

    const galleryStyle = "phone:hidden large:flex  w-full h-full justify-end items-center bg-transparent";
    const navLinkStyle = "phone:hidden tablet:hidden medium:flex absolute top-[3%] medium:right-[20%] large:right-[13%]";

    const heroText = "phone:text-center tablet:text-left phone:mb-[15%] tablet:mb-[4%] text-white default-text font-[700] phone:text-[2.5rem] tablet:text-[3rem] medium:text-[4rem] leading-tight";
    return (
        <>
            <div className={overlayState ? overlayStyle1 : overlayStyle2}>
                <div className='relative flex flex-col justify-center w-fit h-[80%] phone:bg-transparent tablet:bg-stone-900'>
                    <video className='w-full h-full' controls src={overlayState ? "/videos/promo.mp4" : ""}></video>
                    <p onClick={() => closeVideo()} className='phone:text-white tablet:text-black px-[1%] pb-[0.2%] outline outline-2 outline-white/[0.2] cursor-pointer duration-500 phone:font-[100] tablet:font-[500] text-[1.5rem] absolute z-[55] top-[3%] right-[3%] hover:text-rose-600'>X</p>
                </div>
            </div>

            <div className='relative phone:px-[2%] tablet:px-[4%] w-full h-screen bg-black'>
                <div className='flex w-full'>
                    <div className='absolute phone:left-[10%] tablet:left-[4%] top-[3%] w-[37px] h-[22px]'>
                        <img className='cursor-pointer' src="/logo.png" alt="logo" />
                    </div>

                    <div className={navLinkStyle}>
                        <p className='nav cursor-pointer select-none font-[200] default-text text-white mr-[50%]'>Home</p>
                        <p className='nav cursor-pointer select-none font-[200] default-text text-white mr-[50%]'>About</p>
                        <p className='nav cursor-pointer select-none font-[200] default-text text-white mr-[50%]'>Contact</p>
                    </div>
                </div>

                {/* this has to change on mobile view */}
                <div className='phone:absolute phone:left-[6%] phone:top-[25%] tablet:static'>
                    <div className='phone:flex phone:flex-col phone:justify-center z-[20] absolute top-[25%] w-fit h-fit pr-[1%] phone:pl-[3%] tablet:pl-[0%]'>
                        <h1 data-aos="fade-up" data-aos-duration="2000" className={heroText}>
                            <span className='text-rose-600'>REVOLUTIONIZE</span><br></br>THE WAY YOU<br></br><span className='text-rose-600'>PLAY</span>
                        </h1>

                        <p data-aos="fade-up" data-aos-duration="3000" className='phone:text-center phone:font-[100] phone:text-[1rem] tablet:text-left phone:mb-[10%] tablet:mb-[5%] phone:w-[95%] tablet:w-[46%] text-white default-text tablet:font-[200] text-[1.1rem]'>
                            Carry the musical power of a full-sized
                            piano in your backpack with the power
                            of Tapi
                        </p>

                        <div data-aos="fade-up" data-aos-duration="3000" className='phone:flex-col phone:items-center tablet:flex-row flex align-center'>
                            <div onClick={() => playVideo()} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className='cursor-pointer phone:mb-[10%] phone:mr-[0%] tablet:mb-[0%] tablet:mr-[5%] flex w-fit h-full hover-btn bg-rose-600'>
                                <p className='font-[400]'>Watch Demo Video&nbsp;&nbsp;</p>
                                <img src={isHovered ? "/ui/vid-logo-w.svg" : "/ui/vid-logo.svg"} alt="video-logo" />
                            </div>

                            <div className='cursor-pointer flex w-fit h-full hover-btn outline outline-[1px] outline-rose-600 hover:outline-[white]'>
                                <p className='font-[400] text-rose-600'>Learn More</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* this as well */}
                <div className={galleryStyle}>
                    <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-[70%] h-full bg-center bg-cover duration-500"></div>

                    <div className="absolute bottom-[3%] right-[45%] flex py-2">
                        {slides.map((slide, slideIndex) => (
                            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="z-[20] text-2xl cursor-pointer">
                                <RxDotFilled style={slideIndex === currentIndex ? { color: "#FA465B" } : { color: "grey" }} />
                            </div>
                        ))}
                    </div>
                </div>

            </div >
        </>
    )
}

export default Section1