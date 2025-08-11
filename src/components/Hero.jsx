import heroImg from '../assets/hero.png';
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";


export default function Hero() {

    const config = {
        subtitle:'Im a Full Stack Web Developer',
        social:{
            github: 'https://github.com/venkadesh2003',
            linkedin: 'https://www.linkedin.com/in/m-venkadesh-92640927b',
        }
    }

    return (
        <section className='flex flex-col md:flex-row px-5 py-32 bg-custom-light justify-center'>
            <div className='md:w-1/2 flex flex-col'>
                <h1 className='font-sriracha text-white text-6xl'>Hi ,<br />Im Venkadesh
                    <p className='text-2xl'>{config.subtitle}</p>
                </h1>

                <div className='flex py-10 text-white'>
                    <a target='_blank' href={config.social.github} className='pr-5 hover:text-blue-400'><AiOutlineGithub size={40} /></a>
                    <a target='_blank' href={config.social.linkedin} className='pr-5 hover:text-blue-400'><AiOutlineLinkedin size={40} /></a>
                </div>
            </div>
            <img className='md:w-1/3' src={heroImg} alt="" />
        </section>
    )
}