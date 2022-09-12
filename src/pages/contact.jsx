import React from 'react'

export default function Contact() {
  return (
    <div className="flex justify-center items-center h-screen mx-auto bg-gray-100">
        <form action="#" className='w-full md:w-3/4 lg:w-3/6 p-4 mt-8'>
            <div className="p-3">
                <input type="text" required placeholder='Name' className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"/>
            </div>
            <div className="p-3">
                <input type="email" required placeholder='Email' className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"/>
            </div>
            <div className="p-3">
                <input type="number" required placeholder='Mobile Number' className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" />
            </div>
            <div className="p-3">
                <textarea class="resize-none border rounded-md block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-56" placeholder="Message" required=""></textarea>
            </div>
            <div class="p-3 pt-4">
                <button class="w-full bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded text-2xl">
                     Send
                </button>
            </div>
        </form>
    </div>
  )
}
