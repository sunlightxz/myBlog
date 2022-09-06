import React from 'react'

export default function SinglePost() {
  return (
    <div className='SingleP'>
       <div className="singlePost-wraper p-12">
            <img className='w-full h-80 object-cover rounded-lg' src="https://64.media.tumblr.com/468ba50c182b73dede6f27ffb3e00984/tumblr_p79ecaj3J31rkgff0o1_1280.jpg" alt="" />
            <h2 className="m-3 text-2xl text-center font-medium font ">
                Lorem, ipsum dolor
                <div className="float-right">
                    <i className="mr-4 text-green-600 text-xl fa-regular fa-pen-to-square"></i>
                    <i className="mr-1 text-red-600 text-xl fa-solid fa-trash"></i>
                </div>
            </h2>
            <div className="flex justify-between mt-1 mb-5">
                <p className='text-yellow-600 font-light'>Author : <span className='font-medium'>Amine</span> </p>
                <span className='text-yellow-600 font-light'>1 day ago</span>
            </div>
            <p className='singlePostDesc text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores nihil quo tenetur reiciendis quis eligendi corrupti omnis iusto,
                dolorem numquam, sequi eum, velit iure natus magnam quisquam similique cumque earum?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores nihil quo tenetur reiciendis quis eligendi corrupti omnis iusto,
                dolorem numquam, sequi eum, velit iure natus magnam quisquam similique cumque earum?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores nihil quo tenetur reiciendis quis eligendi corrupti omnis iusto,
                dolorem numquam, sequi eum, velit iure natus magnam quisquam similique cumque earum?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores nihil quo tenetur reiciendis quis eligendi corrupti omnis iusto,
                dolorem numquam, sequi eum, velit iure natus magnam quisquam similique cumque earum?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores nihil quo tenetur reiciendis quis eligendi corrupti omnis iusto,
                dolorem numquam, sequi eum, velit iure natus magnam quisquam similique cumque earum?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores nihil quo tenetur reiciendis quis eligendi corrupti omnis iusto,
                dolorem numquam, sequi eum, velit iure natus magnam quisquam similique cumque earum?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores nihil quo tenetur reiciendis quis eligendi corrupti omnis iusto,
            </p>
       </div>
    </div>
  )
}
