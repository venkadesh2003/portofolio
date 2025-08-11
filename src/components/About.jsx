import AboutImg from '../assets/about.png';

export default function About() {

    const config = {
        line1: "Hi, my name is Venkadesh M. I am a Full-Stack Web Developer specializing in CodeIgniter 3, PHP, MySQL, React.js, and Tailwind CSS."
    }

    return (
        <section className='flex flex-col md:flex-row bg-custom-dark px-5' id='about'>
            <div className='py-5 md:w-1/2'>
                <img src={AboutImg} alt="" />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='font-sora text-3xl border-b-2 mb-5 w-[170px] font-bold'>About Me</h1>
                    <p className='font-karla pb-5'>{config.line1}</p>
                </div>
            </div>
        </section>
    )
}