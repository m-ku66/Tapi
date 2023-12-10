import React from 'react'

const Section2 = () => {
    return (
        <div className='relative px-[4%] w-full h-fit bg-black'>
            {/* this will change on mobile */}
            <div className='w-full h-full'>
                <div data-aos="zoom-in" data-aos-duration="1000" className='absolute top-[20%] right-[5%] w-[30%] h-auto'>
                    <img src="/sphere.png" alt="sphere" />
                </div>

                <div className='pt-[10%] w-[60%] grid grid-cols-2 gap-y-10 gap-x-[15%]'>
                    <div data-aos="fade-right" data-aos-duration="1000" className='w-[350px] h-fit mb-[40%]'>
                        <h1 className='mb-[4%] text-white default-text font-[600] text-[1.7rem] leading-tight'><span className='text-rose-600'>DYNAMIC</span> OCTAVE MOVEMENT</h1>
                        <p className='text-white default-text font-[200] text-[1rem]'>Tapi’s patented technology uses movement to change octave. Intuitive muscle memory and visual movement similar to a piano.</p>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="1000" className='w-[350px] h-fit mb-[40%]'>
                        <h1 className='mb-[4%] text-white default-text font-[600] text-[1.7rem] leading-tight'><span className='text-rose-600'>PORTABLE</span> YET POWERFUL</h1>
                        <p className='text-white default-text font-[200] text-[1rem]'>Ideal for personal and educational purposes. From beginner to advanced player Tapi has you covered.</p>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="2000" className='w-[350px] h-fit mb-[40%]'>
                        <h1 className='mb-[4%] text-white default-text font-[600] text-[1.7rem] leading-tight'><span className='text-rose-600'>INNOVATIVE</span> TECHNOLOGY</h1>
                        <p className='text-white default-text font-[200] text-[1rem]'>The patented technology allows Tapi to remain functional despite its small size. Other manufacturers solve this problem by offering smaller scale keyboards or octave change methods that require an extra step handicapping musical flow.</p>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="3000" className='w-[350px] h-fit mb-[40%]'>
                        <h1 className='mb-[4%] text-white default-text font-[600] text-[1.7rem] leading-tight'><span className='text-rose-600'>RESPONSIVE</span> TO USER INPUT</h1>
                        <p className='text-white default-text font-[200] text-[1rem]'>Tapi responds in real time. No lag. Can record and play multiple tracks, sounds, beats.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2