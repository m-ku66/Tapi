import React from 'react'

const Section3 = () => {
    return (
        <div className='relative flex phone:flex-col tablet:flex-row px-[4%] w-full h-screen bg-black'>
            <div className='phone:hidden tablet:flex phone:w-[100%] tablet:w-[50%] h-full items-center'>
                <img src="/about.png" alt="product" />
            </div>

            <div className='flex phone:w-[100%] tablet:w-[50%] h-full items-center phone:pl-[0%] tablet:pl-[5%]'>
                <div data-aos="fade-left" data-aos-duration="1000" className='w-[480px] h-fit phone:mb-[5%] tablet:mb-[40%]'>
                    <h1 className='phone:text-center tablet:text-left mb-[5%] text-white default-text font-[600] text-[3rem] leading-tight'><span className='text-rose-600'>EASILY</span> USE TAPI ACROSS DAWS</h1>
                    <p className='phone:text-center tablet:text-left text-white default-text font-[200] text-[1rem]'>Use any and all of your favorite DAWS with Tapi on your preferred platform ex desktop, laptop, tablet or phone.</p>
                </div>
            </div>

            <div className='phone:flex tablet:hidden phone:w-[100%] tablet:w-[50%] h-full items-center'>
                <img src="/about.png" alt="product" />
            </div>
        </div>
    )
}

export default Section3