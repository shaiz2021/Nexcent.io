

const Newsletter = () => {
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
            <div className='flex items-center justify-center lg:w-2/5 mx-auto'>
                <div className='text-center '>
                    <h2 className='lg:text-5xl text-3xl text-neutral-800 font-semibold mb-4 leading-snug'>
                        Pallentesque suscipit fringilla libero eu.
                    </h2>
                    <div>
                        <button className='btn-primary'>Get a Demo <svg
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            className='inline-block ml-2'>
                            <path
                                fillRule="evenodd"
                                d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z" />
                        </svg> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
