"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_1ir8snj",
        "template_swvdrtc",
        form.current,
        "fBEZc75RJ0DcwENuy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="py-[100px]">
      <div className="mb-[45px] lg:mb-[60px] w-full">
        <h2 className="font-semibold text-[24px] font-poppins line w-fit mx-auto pt-1 relative">
          Let's get in Tounch.
        </h2>
      </div>

      <form
        className="max-w-[600px] mx-auto flex flex-col gap-2"
        onSubmit={sendEmail}
        ref={form}
      >
        <div className="flex flex-col md:flex-row justify-between gap-3">
          <div className="flex flex-col space-x-1 w-full">
            <label className="text-[12px] mb-1">Your name</label>
            <input
              type="text"
              className="border-b-2 border-slate-400 bg-slate-100 focus:border-slate-600 outline-none px-2 py-1 text-[14px]"
              name="user_name"
              required
            />
          </div>
          <div className="flex flex-col space-x-1 w-full">
            <label className="text-[12px] mb-1">Your email</label>
            <input
              type="email"
              className="border-b-2 border-slate-400 bg-slate-100 focus:border-slate-600 outline-none px-2 py-1 text-[14px]"
              name="user_email"
              required
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-[12px] mb-1">Leave a message</label>
          <textarea
            className="border-b-2 border-slate-400 bg-slate-100 focus:border-slate-600 outline-none resize-none overflow-y-auto py-1 px-2 text-[14px]"
            cols={5}
            rows={4}
            name="message"
            required
          ></textarea>
        </div>
        <button type="submit" className="form-button">
          <span>Submit</span>
        </button>
      </form>
    </section>
  );
};
