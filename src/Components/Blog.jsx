

const Blog = () => {
    const blogs = [
        { id: 1, title: "Creating Streamlined Safeguarding Processes with OneRen", image: "/src/assets/icons/blog1.png" },
        { id: 2, title: "What are your safeguarding responsibilities and how can you manage them?", image: "/src/assets/icons/blog2.png" },
        { id: 3, title: "Revamping the Membership Model with Triathlon Australia", image: "/src/assets/icons/blog3.png" },
    ]
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='testimonial'>
            <div className='text-center md:w-1/2 mx-auto'>
                <h2 className='text-4xl text-neutralDGray font-semibold mb-4'>
                    Caring is the new marketing</h2>
                <p className='md:w-3/4 text-sm text-neutralGray mb-8 mx-auto'>
                    The Nextcent blog is the best place to read about the latest membership insights,
                    trends and more. See whos joining the community,
                    read about how our community are increasing their membership income and lots more </p>
            </div>

            <div className='grid lg:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-8 items-center justify-between'>
                {
                    blogs.map(blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer '>
                        <img src={blog.image} alt="" className='hover:scale-95 transition-all duration-300' />
                        <div className='text-center px-0 py-8 bg-white shadow-lg rounded-md md:w-3/4 
                        mx-auto absolute left-0 right-0 -bottom-16'>
                            <h3 className=' text-neutralGray font-semibold' >{blog.title}</h3>
                            <div className='flex items-center justify-center gap-8'>
                                <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Read More<svg
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    height="1em"
                                    width="1em"
                                    className='inline-block ml-2'>
                                    <path
                                        fillRule="evenodd"
                                        d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z" />
                                </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>

        </div>
    )
}

export default Blog
