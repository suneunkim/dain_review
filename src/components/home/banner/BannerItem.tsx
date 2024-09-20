interface BannerItemProps {
  description: string
  titleMobile: string
  titleDesktop?: string
  buttonText: string
  imgSrc: string
  imgAlt: string
  imgClassName?: string
}

const BannerItem = ({
  description,
  titleMobile,
  titleDesktop,
  buttonText,
  imgSrc,
  imgAlt,
  imgClassName
}: BannerItemProps) => {
  return (
    <div className="flex h-[220px] justify-center px-5 sm:gap-[27px] lg:h-[592px] lg:gap-0 lg:px-0">
      <section className="flex h-[144px] w-[155px] flex-col sm:w-[240px] lg:w-[465px]">
        <p className="mt-[43px] text-caption-3 text-gray-0 lg:mt-[152px] lg:text-body-2">
          {description}
        </p>
        <h3 className="mt-[8px] text-body-1 font-[700] text-white lg:mt-[16px] lg:text-display-2">
          <p className="">{titleMobile}</p>
        </h3>
        <button className="mt-[16px] max-w-fit rounded-br-md rounded-tl-md border border-opacity-90 bg-[#FFFFFF1A] px-[8px] py-[7px] opacity-90 lg:mt-[58px] lg:h-full lg:rounded-br-2xl lg:rounded-tl-2xl lg:px-[24px] lg:py-[16px]">
          <div className="flex items-center gap-1 lg:gap-2">
            <p className="z-10 text-caption-3 text-gray-0 lg:text-body-1">
              {buttonText}
            </p>
            <svg
              className="lg:size-3"
              width="5"
              height="8"
              viewBox="0 0 5 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.183058 0.167368C0.427136 -0.0557892 0.822864 -0.0557892 1.06694 0.167368L4.81694 3.59594C5.06102 3.8191 5.06102 4.1809 4.81694 4.40406L1.06694 7.83263C0.822864 8.05579 0.427136 8.05579 0.183058 7.83263C-0.0610194 7.60948 -0.0610194 7.24767 0.183058 7.02451L3.49112 4L0.183058 0.97549C-0.0610194 0.752333 -0.0610194 0.390524 0.183058 0.167368Z"
                fill="white"
              />
            </svg>
          </div>
        </button>
      </section>

      <article className="mt-auto">
        <img
          className="h-[199.5px] w-[176px] lg:h-[521px] lg:min-w-[489px]"
          src={imgSrc}
          alt={imgAlt}
        />
      </article>
    </div>
  )
}

export default BannerItem
