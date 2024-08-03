

const Services = () => {
  const services = [
    { id: 1, title: "Membership Organizations", description: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/icons/services-1.png" },
    { id: 2, title: "National Associations", description: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/icons/services-2.png" },
    { id: 3, title: "Clubs And Groups", description: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/icons/services-3.png" },
  ]
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
      <div className='text-center my-8'>
        <h2 className='text-4xl text-neutralDGray font-semibold mb-2'>Our Clients</h2>
        <p className='text-neutralGray'>We have been working with some Fortune 500+ clients</p>
        <div className='my-12 flex flex-wrap justify-evenly items-center gap-8'>
          <img src="/src/assets/icons/Logo-1.png" alt="" />
          <img src="/src/assets/icons/Logo-2.png" alt="" />
          <img src="/src/assets/icons/Logo-3.png" alt="" />
          <img src="/src/assets/icons/Logo-4.png" alt="" />
          <img src="/src/assets/icons/Logo-5.png" alt="" />
          <img src="/src/assets/icons/Logo-6.png" alt="" />
          <img src="/src/assets/icons/Logo-7.png" alt="" />
        </div>
      </div>
      <div className='mt-20 md:w-1/2 mx-auto text-center '>
        <h2 className='text-4xl text-neutralDGray font-semibold mb-3'>Manage your entire community in a single system</h2>
        <p className='text-neutralGray'>Who is Nextcent suitable for?</p>
      </div>
      <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:2-11/12 mx-auto gap-12'>
        {
          services.map(service =>
            <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 
            hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
              <div>
                <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-t1-3xl rounded-br-3xl'>
                  <img src={service.image} alt="" className='-ml-5' /></div>
                <h4 className='text-2xl font-bold text-neutralDGray mb-2 px-2'>{service.title}</h4>
                <p className='text-sm text-neutralGray' >{service.description}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Services
