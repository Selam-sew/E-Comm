import React from 'react'
import facebook from  '../../public/admin/footer/facebook.svg'
import instagram from  '../../public/admin/footer/instagram.svg'
import Twitter from  '../../public/admin/footer/twitter.svg'
export default function Footer() {
  return (
    <footer className='bg-black text-center text-white px-5 md:px-[7rem] mt-5 pt-10 gap-4 flex-col sm:flex-row justify-between  flex pb-10'>
     <p>&copy; 2024 Tech Haven. All Right Reserved.</p>

      <div className='flex justify-center gap-10'>
          <img src={facebook} alt="" />
      <img src={instagram} alt="" />
      <img src={Twitter} alt="" />
      </div>
    
    </footer>
  )
}
