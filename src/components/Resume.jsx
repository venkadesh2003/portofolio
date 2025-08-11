import ResumeImg from '../assets/resume.jpg';
import MyResume from '../assets/venkadesh.pdf';


export default function Resume() {

    
    return (
        <section className='flex flex-col md:flex-row bg-custom-dark px-5' id='resume'>
            <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
                <img className='w-[300px]' src={ResumeImg} alt="" />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='font-sora text-3xl border-b-2 mb-5 w-[140px] font-bold'>Resume</h1>
                    <p className='font-karla pb-5'>You can View My Resume <a className='btn'  href={MyResume} 
                            download="Venkadesh-Resume.pdf">Download</a></p>
                    </div>
            </div>
        </section>
    )
}