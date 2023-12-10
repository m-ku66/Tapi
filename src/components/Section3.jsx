import React from 'react'

const Section3 = () => {
    return (
        <div className='relative flex px-[4%] w-full h-screen bg-black'>
            <div className='flex w-[50%] h-full items-center'>
                <img src="/about.png" alt="product" />
            </div>
            <div className='flex w-[50%] h-full items-center pl-[5%]'>
                <div data-aos="fade-left" data-aos-duration="1000" className='w-[480px] h-fit mb-[40%]'>
                    <h1 className='mb-[5%] text-white default-text font-[600] text-[3rem] leading-tight'><span className='text-rose-600'>EASILY</span> USE TAPI ACROSS DAWS</h1>
                    <p className='text-white default-text font-[200] text-[1rem]'>Use any and all of your favorite DAWS with Tapi on your preferred platform ex desktop, laptop, tablet or phone.</p>
                </div>
            </div>
        </div>
    )
}

export default Section3