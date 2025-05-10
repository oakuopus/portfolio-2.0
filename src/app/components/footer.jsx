"use client"
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { IconContext } from "react-icons";
import Link from "next/link";
import { useState } from "react";

export default function Footer(){

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
    
            const resData = await res.json();
    
            if (res.ok && resData.success) {
                alert('Email sent!');
                setForm({ name: '', email: '', message: '' });
            } else {
                console.error('Email send failed:', resData);
                alert(`Failed to send email: ${resData.message || 'Unknown error'}`);
            }
        } catch (err) {
            console.error('Unexpected error:', err);
            alert('Something went wrong.');
        }
    };
    

    return(
        <>  
            <footer className="h-[40vh] text-white bg-black w-full mb-0">
                <div className="w-full h-[14vh] m-auto flex ">
                    <div className="w-[16vw] m-auto h-[14vh] bg-black">
                        <div className="h-[7vh] w-full"></div>
                        <div className="h-[7vh] w-full border-t border-t-white border-t-2"></div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="w-[50vw] h-[14vh] bg-white flex flex-nowrap">
                            <div className="text-black h-full w-[20vw] p-2 box-border flex flex-col">
                                <input
                                    className="w-full bg-black text-white mb-2 m-auto text-center border-black border-2"
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={form.name}
                                    onChange={handleChange}
                                />
                                <input
                                    className="w-full bg-black text-white m-auto text-center border-black border-2"
                                    type="text"
                                    name="email"
                                    placeholder="you@gmail.com"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="text-black h-full w-[25vw] m-auto p-2 box-border flex">
                                <textarea
                                    className="w-full m-auto h-[12vh] text-center border-black border-2 bg-black text-white overflow-hidded break-words"
                                    name="message"
                                    placeholder="Your message"
                                    value={form.message}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-[10vw] h-[14vh] bg-white flex">
                                <button type="submit" className="bg-green-600 hover:bg-green-700 px-2 cursor-pointer m-auto flex text-white text-[2vw]">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="w-[16vw] m-auto h-[14vh] bg-black">
                        <div className="h-[7vh] w-full"></div>
                        <div className="h-[7vh] w-full border-t border-t-white border-t-2"></div>
                    </div>
                </div>
                <div className="w-full mt-[1vh] h-[20vh]">
                    <div className="flex h-[14vh]">
                        <div className="w-[50vw] m-auto">
                            <p className="text-[2vw] text-white">
                                Oliver Kuopus
                            </p>
                            <div>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae harum quaerat culpa incidunt quibusdam! Soluta deleniti ut voluptas aspernatur quibusdam?
                            </div>
                        </div>
                        <div className="w-[30vw] m-auto">
                            <span className="text-white text-[1.2vw] ml-[5vw]">
                                All Right Reserved © Oliver Kuopus 2025
                            </span>
                        </div>
                    </div>
                    <div className="w-[30vw] h-[6vh] mt-[3vh] m-auto border-b border-b-white border-b-2 mb-[1vh]">
                        <div className="w-[25vw] h-[6vh] m-auto mb-[1vh] flex justify-between">
                            <Link target="__blank" href={"https://www.linkedin.com/"}>
                                <FaLinkedinIn size={40} className=""/>
                            </Link>
                            <Link target="__blank" href={"https://github.com/oakuopus"}>
                                <FaGithub  size={40}/>
                            </Link>
                            <Link target="__blank"  href={"https://www.google.com/"}>
                                <FaWpforms size={40}/> 
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}