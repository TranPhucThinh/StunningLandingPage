import Logo from '@/assets/logosaas.png'
import X from '@/assets/social-x.svg'
import Instagram from '@/assets/social-insta.svg'
import Linkedin from '@/assets/social-linkedin.svg'
import Pinterest from '@/assets/social-pin.svg'
import Youtube from '@/assets/social-youtube.svg'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="bg-black py-10">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center text-[#BCBCBC] text-sm">
          <div className="inline-flex relative before:content-[''] before:absolute before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)]">
            <Image src={Logo} height={40} alt="SassLogo" className="relative" />
          </div>
          <nav className="flex flex-col md:flex-row gap-6">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Pricing</a>
            <a href="#">Help</a>
            <a href="#">Careers</a>
          </nav>
          <div className="flex gap-4 justify-center">
            <X className=" h-6 w-6" />
            <Instagram className=" h-6 w-6" />
            <Linkedin className=" h-6 w-6" />
            <Pinterest className=" h-6 w-6" />
            <Youtube className=" h-6 w-6" />
          </div>
          <p>© 2024 Your Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
