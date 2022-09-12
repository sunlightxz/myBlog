import React from 'react'

export default function About() {
  return (
    <div className=" flex flex-col justify-center items-center mt-16">
      <div className="bg-red-100 w-full absolute top-20  h-80">
        <h1 className='text-6xl text-center italic mt-6'>About Us</h1>
      </div>
     <div className="mt-36 z-10 container flex flex-col justify-center items-center">
     <img className='object-cover w-3/5 h-3/6 rounded-md' src="https://64.media.tumblr.com/569c9d5a602b5c113606738397a2d7d4/d7b20efb620f7626-2a/s1280x1920/f3527dfe7246290ffdbe7d070b6dc77b9b7ad44d.jpg" alt="" />
      <p className=' px-64 mt-20 singlePostDesc'>
            Mailchimp to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature.
      </p>
      <p className=' px-64 mt-3 mb-9 '>
            Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.  The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
      </p>
     </div>
    </div>
  );
};