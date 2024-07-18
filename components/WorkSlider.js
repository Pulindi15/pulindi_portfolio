// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/{basePath}/thumb1.png',
        },
        {
          title: 'title',
          path: '/{basePath}/thumb2.png',
          url : 'https://pulindi15.github.io/Artifical_Intelligence_Website/'
        },
        
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/{basePath}/thumb3.png',
          url : 'https://www.brandssarthi.com/'
        },
      ],
    },
  ],
};

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


//import required module
import {  Pagination } from "swiper";

//import icons
import {BsArrowRight} from 'react-icons/bs'

//next Image
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable:true
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4'>
              {slide.images.map((image, index)=>{
                return (
                  <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                    <div className='flex items-center justify-center relative overflow-hidden mt-20'>
                      <a href={image.url} target='_blank' rel='noopener noreferrer' className='flex items-center justify-center relative overflow-hidden mt-20'>
                        {/* {Image} */}
                        <Image src={image.path} width={500} height={300} alt='' />
                        {/* {overlay gradient} */}
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#C08552] to-[#F3E9DC] opacity-0 group-hover:opacity-80 transition-all duration-700'>
                        </div>
                        {/* {title} */}
                        <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                          <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                            {/* {title part-1} */}
                            <div className='dealy-100'>LIVE</div>
                            {/* {title part-2} */}
                            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                            {/* {icons} */}
                            <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default WorkSlider;
