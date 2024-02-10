"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useGSAP(() => {
    gsap.fromTo(
      ".move",
      {
        y: -100,
      },
      {
        y: 800,
        duration: 4,
        ease: "none",
        repeat: -1,
        yoyo: true,
        yoyoEase: "bounce.out",
      }
    );
  }, []);
  useEffect(() => {
  console.log(name, message);

}, [name, message])

  return (
    <main className="w-[100%] lg:w-[80%] flex justify-end">
      <div className="overflow-hidden h-[100%] 2xl:-left-[32rem] absolute top-0 -z-50 w-fit">
        <h1 className="move font-archivo text-black opacity-[0.07] text-9xl relative -left-20 2xl:-left-60 overflow-y-hidden -rotate-90 whitespace-nowrap">
          Contact.Contact.Contact.{" "}
        </h1>
      </div>
      <section className="w-[90%] mx-auto 2xl:pt-[12%] 2xl:w-[70%] lg:w-[75%] pt-16 lg:pt-20 mb-20 lg:mr-0">

        <h1 className="text-4xl text-center lg:text-left lg:text-6xl mb-2 overflow-y-hidden font-robotoCondensed  font-semibold">
          Contact.
        </h1>
        <p className="text-lg mt-7 lg:text-xl w-[100%]">
          Send me an email at <b>zahrapicho@gmail.com</b>
        </p>
        <p className="mt-7 font-light text-xl">Name</p>
        <input
          type="text"
          value={name}
          className="w-[100%] lg:w-[75%] border border-gray-600 rounded-sm p-2 outline-none bg-transparent"
          onChange={(e) => setName(e.target.value)}
        />
        <p className="mt-7 font-light text-xl">Message</p>
        <textarea
          cols={22}
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-[100%] lg:w-[75%] border border-gray-600 rounded-sm p-2 outline-none bg-transparent"></textarea>
        <Link
          target="_blank"
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=zahrapicho@gmail.com&su=Let's%20Connect%20:%20${name}&body=${message}`}
          className="block mx-auto lg:ml-0 bg-[#000000] opacity-70 text-white py-2 px-8 text-md mt-5 rounded-sm w-fit"
          >
          Send
        </Link>
      </section>
    </main>
  );
}
