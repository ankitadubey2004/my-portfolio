import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-primary text-white py-7 mt-12 flex flex-col lg:flex-row items-center justify-between lg:px-10 bottom-0 w-full">
       <Link href={'/'} >
        <Image src="/logo-w.png" alt="Logo" width={220} height={50} className="" />
       </Link>
      <div className="max-w-5xl flex flex-col items-center justify-between px-4">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Abhinandan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
