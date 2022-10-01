function App() {
  return (
    <section className='bg-base-light flex flex-col overflow-hidden'>
      <div className='flex flex-col py-16 md:py-20 gap-3 lg:gap-5 xl:gap-9 items-center'>
        <div className='text-6xl xl:text-8xl font-canela text-black font-light px-12 '>
          Gifting{' '}
          <span className='block lg:inline-block ml-16 md:ml-28 lg:ml-3'>
            Elevated
          </span>
        </div>
        <div className='flex flex-start w-full mt-10 md:mt-12 mb-16 md:mb-20 lg:mb-24 lg:max-w-5xl'>
          <div className='bg-gray-500 w-1/4 md:w-1/5 h-32 md:h-48 lg:h-60 overflow-hidden rounded -translate-x-2 xl:-translate-x-8 translate-y-4 relative'></div>
          <div className='bg-gray-300 w-1/4 md:w-1/5 h-32 md:h-48 lg:h-60 overflow-hidden rounded translate-x-8 -translate-y-6'></div>
          <div className='bg-gray-500 w-1/4 md:w-1/5 h-32 md:h-48 lg:h-60 overflow-hidden rounded translate-x-2 translate-y-10'></div>
          <div className='bg-gray-300 w-1/4 md:w-1/5 h-32 md:h-48 lg:h-60 rounded overflow-hidden'></div>
          <div className='bg-gray-500 w-1/4 md:w-1/5 h-32 md:h-48 lg:h-60 hidden md:block overflow-hidden rounded translate-x-7 -translate-y-7'></div>
        </div>
        <div className='text-lg md:text-2xl xl:text-3xl font-engravers leading-tight px-12 md:px-28 xl:max-w-3xl lg:mb-2 text-center'>
          Curated collections of boutique gifts at scale, to meet your needs.
        </div>
      </div>
      <div className='bg-zinc-900 flex justify-center '>
        <div className='flex flex-col md:flex-row p-12 gap-12 xl:p-0 xl:py-24 lg:max-w-5xl lg:mx-auto'>
          <div className='border border-gray-400 hidden xl:block'></div>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-3'>
              <div className='rounded-full w-7 h-7 lg:w-8 lg:h-8 font-canela text-black bg-white flex justify-center items-center'>
                <div className='lg:mt-1'>1</div>
              </div>
              <div className='text-white font-canela text-2xl xl:text-4xl'>
                Inquire
              </div>
            </div>
            <div className='text-gray-400 xl:text-lg font-engravers leading-tight'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className='border border-gray-400'></div>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-3'>
              <div className='rounded-full w-7 h-7 lg:w-8 lg:h-8 font-canela text-black bg-white flex justify-center items-center'>
                <div className='lg:mt-1'>2</div>
              </div>
              <div className='text-white font-canela text-2xl xl:text-4xl'>
                Shop
              </div>
            </div>
            <div className='text-gray-400 xl:text-lg font-engravers leading-tight'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className='border border-gray-400'></div>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-3'>
              <div className='rounded-full w-7 h-7 lg:w-8 lg:h-8 font-canela text-black bg-white flex justify-center items-center'>
                <div className='lg:mt-1'>3</div>
              </div>
              <div className='text-white font-canela text-2xl xl:text-4xl'>
                Give
              </div>
            </div>
            <div className='text-gray-400 leading-tight xl:text-lg font-engravers'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
