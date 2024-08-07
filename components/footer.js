import Link from 'next/link'
import Image from 'next/image'

import OurOffice from './our-office'

export default function Footer() {
  return(
    <footer className='w-full bg_LightGray'>
      <div className='container mx-auto px-6 py-8 lg:py-16'>
        <div className='flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 justify-center items-center'>
          <Link href="/" className='w-full lg:w-6/12'>
            <Image src="/images/logo_with_text.svg" alt="" width={0} height={0} style={{ width: '278px', height: 'auto' }} className='w-12/12 md:w-auto' />
          </Link>
          <div className='w-full lg:w-6/12'>
            <div className='flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 justify-center'>
              <div><OurOffice /></div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer_line py-2 text-center bg_green'>Copyright © 2024 Titan Air Blowers</div>
    </footer>
  )
}