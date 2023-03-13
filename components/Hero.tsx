import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';



export const Hero = () => {
  return (
    <section className='relative h-screen flex items-center justify-center'>
        <div className='hidden fixed bottom-8 left-10 md:flex flex-col items-center gap-8 text-[24px]'>
            <span className='h-[60px] w-[2px] bg-main-reverse' />
            <Link href='#'>
                <BsGithub />
            </Link>
            <Link href='#'>
                <BsLinkedin />
            </Link>
            <span className='h-[60px] w-[2px] bg-main-reverse' />
        </div>
        <header>
            <h5>Hi there, I am</h5>
            <h1 className='text-[3em] font-semibold font-monserrat'>Daniel Sánchez</h1>
            <p >A Web Developer who is passionate about the new tech tendencies, <br/> creation of beautiful web projects and bring ideas to life.</p>
        </header>
    </section>
  )
}
