import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram,FaLinkedinIn } from 'react-icons/fa';

const SocialIcons = () => {

    
  return (
    <div className="fixed text-secondary sm:px-22  z-20 right-4 top-3/4 transform -translate-y-1/2 flex-col gap-4 items-center backdrop-blur-2xl p-4 hidden md:flex">
      <Link href="/">
        <FaFacebookF size={38} className='transition duration-300 hover:-translate-y-3 hover:text-primary my-0'/>
      </Link>
      <Link href="/">
        <FaTwitter size={38} className='transition duration-300 hover:-translate-y-3 hover:text-primary my-0'/>
      </Link>
      <Link href="/">
        <FaInstagram size={38} className='transition duration-300 hover:-translate-y-3 hover:text-primary my-0'/>
      </Link>
      <Link href="/">
        <FaLinkedinIn size={38} className='transition duration-300 hover:-translate-y-3 hover:text-primary my-0'/>
      </Link>

      <div class="h-10 lg:h-28 border-primary border-l-2 w-0">
      </div>
    </div>
  );
};

export default SocialIcons;