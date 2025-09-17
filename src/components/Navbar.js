import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
      <nav className="bg-stone-950 text-white flex flex-col px-30 fixed top-0 left-0 w-full">
        <Image src="/images/logo.jpg" alt="sqi_logo" width={100} height={20} />
        <ul className="flex justify-end items-center mt-[-50] space-x-5 text-white  relative">
          <li className="relative group">
            <Link href="" className="text-white ">About</Link>
            <ul className='absolute border-t-blue-800 border-3 left-0 w-40 bg-gray-500 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-3 transition-all duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto'>
            <li>
              <Link href='' className="block px-4 py-2 hover:text-stone-200 text-white">Our Story</Link>
            </li>
            <li>
              <Link href='' className="block px-4 py-2 hover:text-stone-200 text-white">Our Team</Link>
            </li>
            <li>
              <Link href='' className="block px-4 py-2 hover:text-stone-200 text-white">Campus Info</Link>
            </li>
          </ul>
          </li> 
          <li className="relative group">
            <Link href="" className='text-white '>Programmes</Link>
            <ul className='absolute border-t-blue-800 border-3 left-0 w-40 bg-gray-500 text-white rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto'>
            <li>
              <Link href='' className='block px-4 py-2 hover:text-stone-200 text-white'>National Diploma</Link>
            </li>
            <li>
              <Link href='' className='block px-4 py-2 hover:text-stone-200 text-white'>National Innovation Diploma</Link>
            </li>
            <li>
              <Link href='' className='block px-4 py-2 hover:text-stone-200 text-white'>Professional Diploma Program</Link>
            </li>
            <li>
              <Link href='' className='block px-4 py-2 hover:text-stone-200 text-white'>Executive Professional Certificate</Link>
            </li>
            <li>
              <Link href='' className='block px-4 py-2 hover:text-stone-200 text-white'>Programme</Link>
            </li>
          </ul>
          </li>
          <li className="relative group">
            <Link href="" className='text-white '>Admissions</Link>
            <ul className='absolute border-t-blue-800 border-3 left-0 w-40 bg-gray-500 text-white rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto'>
            <li>
              <Link href='' className='block px-4 py-2 hover:text-stone-200 text-white'>Apply for a Programme</Link>
            </li>
            <li>
              <Link href='' className='block px-4 py-2 hover:text-stone-200 text-white'>Mode of Study</Link>
            </li>
            <li>
              <Link href='' className='block px-4 py-2 hover:text-stone-200 text-white'>Tuition</Link>
            </li>
            <li>
              <Link href='' className='block px-4 py-2 hover:text-stone-200 text-white'>Frequently Asked Question</Link>
            </li>
          </ul>
          </li>
          <li className="relative group">
            <Link href="" className='text-white '>E-Portal</Link>
            <ul className='absolute border-t-blue-800 border-3 left-0 w-40 bg-gray-500 text-white rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto'>
            <li>
              <Link href='' className='block px-4 py-2 hover:text-stone-200 text-white'>Student</Link>
            </li>
            <li>
              <Link href='' className='block px-4 py-2 hover:text-stone-200 text-white'>Staff</Link>
            </li>
          </ul>
          </li>
          <li className="text-white ">
            <Link href="">Scholarship</Link>
          </li>
          <li className="text-white ">
            <Link href="">News</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
