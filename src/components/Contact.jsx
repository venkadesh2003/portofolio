export default function Contact() {
    return (
        <section className='flex flex-col bg-custom-light px-5 py-32' id='contact'>
            <div className='flex flex-col items-center text-white text-center'>
                <h1 className='font-sora text-3xl border-b-2 mb-5 w-[140px] font-bold'>Contact</h1>
                <p className='font-karla pb-5'>
                    If you’d like to discuss a project or job opportunity, feel free to reach out.
                </p>
                <p className='font-karla py-2'>
                    <span className='font-bold'>Email :</span>
                    <a href="mailto:venkadesh2003@gmail.com" className="hover:underline ml-2">
                        venkadesh2003@gmail.com
                    </a>
                </p>
                <p className='font-karla py-2'>
                    <span className='font-bold'>Phone :</span>
                    <a href="tel:+918754838433" className="hover:underline ml-2">
                        +91 8754838433
                    </a>
                </p>
            </div>
        </section>
    )
}
