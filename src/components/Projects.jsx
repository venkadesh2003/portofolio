import websiteImg1 from '../assets/codeignitor.png';
import websiteImg2 from '../assets/react.png';

export default function Projects() {

    const config = {
        projects: [
            {
                image: websiteImg1,
                description: 'Jewels Airport Transfers – Maintained and enhanced the CodeIgniter 3 backend and frontend modules, developed REST APIs, and ensured smooth booking operations.',
                link: 'https://www.jat-uk.com/'
            },
            {
                image: websiteImg2,
                description: 'Jewels Airport Transfers Portal – Developed React.js components to display booking and customer data, integrated APIs, and improved user interface responsiveness.',
                link: 'https://www.portal.jat-uk.com/'
            },
        ]
    }

    return (
        <section className="flex flex-col py-20 px-5 justify-center bg-custom-light text-white" id='projects'>
            <div className="w-full">
                <div className="flex flex-col px-10 py-5 mb-4 items-center text-center">
                    <h1 className='font-sora text-3xl border-b-2 mb-5 w-[150px] font-bold'>Projects</h1>
                    <p className='font-karla max-w-2xl'>
                        Here are some of the professional projects I have worked on, showcasing my skills in both backend and frontend development.
                    </p>
                </div>

            </div>
            <div className="w-full">
                <div className='flex flex-col md:flex-row px-10 gap-5 justify-center'>
                    {config.projects.map((project) => (
                        <div className='relative' key={project.link}>
                            <img className='h-[200px] w-[500px] object-cover' src={project.image} alt="Project Preview" />
                            <div className='project-desc'>
                                <p className='font-karla text-center px-5 py-5'>{project.description}</p>
                                <div className='flex justify-center'>
                                    <a className='btn' target='_blank' rel="noopener noreferrer" href={project.link}>View Project</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
