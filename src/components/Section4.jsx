import React, { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser';


const Section4 = () => {
    const form = useRef();
    const [overlayState, setOverlayState] = useState(false);

    const [scrollState, setScrollState] = useState(true);

    const pageStyle1 = "scroll";
    const pageStyle2 = "hidden";

    let page;

    useEffect(() => {
        page = document.getElementById('body');
        page.style.overflowY = scrollState ? pageStyle1 : pageStyle2;
    }, []);


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6ucm5ob', 'template_ydf1qk7', form.current, 'pAH7dHHUs7jqsNsdu')
            .then((result) => {
                // console.log(result.text);
                setOverlayState(true);
                setScrollState(false);
                setTimeout(() => {
                    setOverlayState(false);
                    setScrollState(true);
                }, 5000);
            }, (error) => {
                // console.log(error.text);
                alert("There was problem sending your message", error.text);
            });

        e.target.reset();
    };

    const overlayStyle1 = "block absolute z-10 flex justify-center items-center w-full phone:h-[150vh] tablet:h-full bg-black/[0.8]"
    const overlayStyle2 = "hidden w-full h-full bg-black/[0.8]"


    return (
        <>
            <div className={overlayState ? overlayStyle1 : overlayStyle2}>
                <div className='flex flex-col justify-center px-[5%] pt-[5%] w-[60%] phone:h-[30%] tablet:h-[60%] bg-stone-900'>
                    <div>
                        <h1 className='mb-[5%] text-white default-text font-[600] phone:text-[1.2rem] tablet:text-[3rem] leading-tight text-center'>MESSAGE SENT SUCCESSFULLY</h1>
                        <p className='text-white default-text font-[200] phone:text-[0.8rem] tablet:text-[1.5rem] mb-[5%] text-center'>We've recieved your message and will get back to you as soon as we're available. Thank you for your inquiry.</p>
                        <img className='mx-[40%] w-[20%] h-[20%]' src="/ui/mail-check.svg" alt="mail check" />
                    </div>
                </div>
            </div>


            <div className='relative flex pt-[10%] px-[4%] w-full phone:h-[150vh] tablet:h-screen bg-black'>
                <div data-aos="fade-right" data-aos-duration="1000" className='tablet:w-[350px] medium:w-[480px] h-fit'>
                    <h1 className='phone:text-center tablet:text-left mb-[5%] text-white default-text font-[600] text-[3rem] leading-tight'><span className='text-rose-600'>CONTACT</span> US</h1>
                    <p className='phone:text-center tablet:text-left text-white default-text font-[200] text-[1rem] mb-[5%]'>For any further inquiries relating Tapi and its specs or investment, either fill out this form or contact us directly at:</p>
                    <p className='phone:text-center tablet:text-left text-white default-text font-[200] text-[0.8rem]'>Gmail | Other Contact Info</p>
                </div>
                <div className='absolute phone:top-[35%] tablet:top-[10%] phone:right-[5%] tablet:right-[1%] pr-[8%] phone:w-[80%] tablet:w-[40%] h-fit'>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col' id='form'>
                        <label className='text-white default-text font-[200] text-[1rem] mb-[1%]'>Name</label>
                        <input required className='px-[1%] py-[1%]' type="text" name="user_name" id="name" placeholder="What's your name?" />
                        <br />
                        <br />
                        <label className='text-white default-text font-[200] text-[1rem] mb-[1%]'>Email</label>
                        <input required className='px-[1%] py-[1%]' type="email" name="user_email" id="mail" placeholder="Please enter your email address" />
                        <br />
                        <br />
                        <label className='text-white default-text font-[200] text-[1rem] mb-[1%]'>Message</label>
                        <textarea required className='px-[1%] py-[1%] mb-[5%]' name="user_message" id="msg" rows="10" placeholder="How can we help you? (max: 400 characters)" maxLength={400}></textarea>
                        <button className='py-[1%] bg-rose-600 text-white duration-500 hover:text-rose-600 hover:bg-white' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Section4