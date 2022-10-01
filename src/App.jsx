function App() {
  return (
    <section className='bg-base-light flex flex-col overflow-hidden'>
      <div className='flex flex-col py-16 md:py-20 gap-3 lg:gap-5 xl:gap-7 items-center'>
        <div className='text-6xl md:text-7xl xl:text-8xl font-canela text-black font-light px-12 '>
          Gifting{' '}
          <span className='block md:inline-block ml-16 md:ml-3'>Elevated</span>
        </div>
        <div className='flex flex-start w-full mt-10 md:mt-12 mb-16 md:mb-20 lg:mb-24 lg:max-w-5xl'>
          <div
            className='bg-gray-500 w-1/4 md:w-1/5 h-32 md:h-48 lg:h-60 overflow-hidden rounded -translate-x-2 xl:-translate-x-8 translate-y-4 relative drop-shadow-2xl'
            style={{
              backgroundImage: `url('https://res.cloudinary.com/designadg/image/upload/v1664598716/goldfinch/LMB_9725_jho5u4.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          ></div>
          <div
            className='bg-gray-300 w-1/4 md:w-1/5 h-32 md:h-48 lg:h-60 overflow-hidden rounded translate-x-8 -translate-y-6 drop-shadow-2xl'
            style={{
              backgroundImage: `url('https://res.cloudinary.com/designadg/image/upload/v1664598717/goldfinch/LMB_9843_dogmt9.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          ></div>
          <div
            className='bg-gray-500 w-1/4 md:w-1/5 h-32 md:h-48 lg:h-60 overflow-hidden rounded translate-x-2 translate-y-10 drop-shadow-2xl relative z-50'
            style={{
              backgroundImage: `url('https://res.cloudinary.com/designadg/image/upload/v1664598716/goldfinch/LMB_9715_ldb2dc.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          ></div>
          <div
            className='bg-gray-300 w-1/4 md:w-1/5 h-32 md:h-48 lg:h-60 rounded overflow-hidden drop-shadow-2xl'
            style={{
              backgroundImage: `url('https://res.cloudinary.com/designadg/image/upload/v1664598716/goldfinch/LMB_9751_o1dstu.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          ></div>
          <div
            className='bg-gray-500 w-1/4 md:w-1/5 h-32 md:h-48 lg:h-60 hidden md:block overflow-hidden rounded translate-x-7 -translate-y-7 drop-shadow-2xl'
            style={{
              backgroundImage: `url('https://res.cloudinary.com/designadg/image/upload/v1664598716/goldfinch/LMB_9721_naidmq.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          ></div>
        </div>
        <div className='text-lg md:text-2xl xl:text-3xl font-engravers leading-tight px-12 md:px-28 lg:max-w-3xl lg:mb-2 text-center'>
          Curated collections of boutique gifts at scale, to meet your needs.
        </div>
      </div>
      <div className='bg-zinc-900 flex justify-center '>
        <div className='flex flex-col md:flex-row p-12 gap-8 xl:p-0 xl:py-12 lg:max-w-4xl lg:mx-auto xl:mx-auto'>
          <div className='border border-gray-400 hidden xl:block'></div>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-3'>
              <div className='rounded-full w-7 h-7 font-canela text-black bg-white flex justify-center items-center'>
                <div className='lg:mt-1'>1</div>
              </div>
              <div className='text-white font-canela text-2xl xl:text-3xl'>
                Inquire
              </div>
            </div>
            <div className='text-gray-400 xl:text-lg font-canela xl:leading-tight'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className='border border-gray-400'></div>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-3'>
              <div className='rounded-full w-7 h-7 font-canela text-black bg-white flex justify-center items-center'>
                <div className='lg:mt-1'>2</div>
              </div>
              <div className='text-white font-canela text-2xl xl:text-3xl'>
                Shop
              </div>
            </div>
            <div className='text-gray-400 xl:text-lg font-canela xl:leading-tight'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className='border border-gray-400'></div>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-3'>
              <div className='rounded-full w-7 h-7 font-canela text-black bg-white flex justify-center items-center'>
                <div className='lg:mt-1'>3</div>
              </div>
              <div className='text-white font-canela text-2xl xl:text-3xl'>
                Give
              </div>
            </div>
            <div className='text-gray-400 xl:text-lg font-canela xl:leading-tight'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
