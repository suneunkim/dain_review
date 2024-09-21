interface Props {
  deskTop?: boolean
}

const LikeButton = ({ deskTop }: Props) => {
  return (
    <>
      {deskTop ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_6224_46209)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.0812 4.41486C14.774 4.14063 15.515 4 16.2623 4C17.0096 4 17.7506 4.14063 18.4433 4.41486C19.1361 4.68912 19.7684 5.09221 20.303 5.60324C20.8378 6.11404 21.2646 6.72297 21.5567 7.39653C21.8489 8.07034 22 8.79428 22 9.52656C22 10.2588 21.8489 10.9828 21.5567 11.6566C21.2646 12.3302 20.8377 12.9392 20.3028 13.45L12.6906 20.723C12.3041 21.0923 11.6955 21.0923 11.309 20.723L3.6967 13.45C2.61607 12.4176 2 11.0073 2 9.52656C2 8.04585 2.61607 6.63554 3.6967 5.60307C4.77577 4.57209 6.22997 4.00044 7.73725 4.00044C9.24452 4.00044 10.6987 4.57209 11.7778 5.60307L11.9998 5.81515L12.2216 5.60324C12.2215 5.60329 12.2216 5.60318 12.2216 5.60324C12.7561 5.09229 13.3886 4.68909 14.0812 4.41486ZM16.2623 6C15.7653 6 15.2742 6.0936 14.8174 6.27444C14.3607 6.45526 13.9486 6.71917 13.6035 7.04898L12.6906 7.92125C12.3041 8.29053 11.6955 8.29053 11.309 7.92125L10.3962 7.04914C9.69844 6.3825 8.74276 6.00044 7.73725 6.00044C6.73173 6.00044 5.77606 6.3825 5.07832 7.04914C4.38213 7.7143 4 8.60646 4 9.52656C4 10.4466 4.38213 11.3388 5.07832 12.004L11.9998 18.6169L18.9212 12.004C19.2663 11.6744 19.5377 11.2854 19.7218 10.8608C19.9059 10.4364 20 9.98311 20 9.52656C20 9.07 19.9059 8.61675 19.7218 8.19228C19.5377 7.76769 19.2665 7.37887 18.9214 7.04931C18.5764 6.7195 18.1639 6.45526 17.7072 6.27444C17.2503 6.0936 16.7592 6 16.2623 6Z"
              fill="#A9ABB1"
            />
          </g>
          <defs>
            <clipPath id="clip0_6224_46209">
              <rect
                width="24"
                height="24"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <button
          className="aspect-square flex h-[46px] items-center justify-center rounded-md bg-gray-5"
          type="button">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.4268 5.15002C17.235 4.83008 18.0995 4.66602 18.9714 4.66602C19.8433 4.66602 20.7078 4.83008 21.5159 5.15002C22.3242 5.46999 23.0618 5.94027 23.6855 6.53646C24.3095 7.13239 24.8074 7.84282 25.1482 8.62863C25.4891 9.41475 25.6654 10.2593 25.6654 11.1137C25.6654 11.968 25.4891 12.8126 25.1482 13.5987C24.8074 14.3846 24.3094 15.0951 23.6853 15.6911L14.8044 24.1762C14.3534 24.6071 13.6434 24.6071 13.1925 24.1762L4.31151 15.6911C3.05078 14.4865 2.33203 12.8412 2.33203 11.1137C2.33203 9.38617 3.05078 7.74081 4.31151 6.53627C5.57043 5.33345 7.267 4.66653 9.02549 4.66653C10.784 4.66653 12.4805 5.33345 13.7395 6.53627L13.9984 6.78369L14.2572 6.53646C14.2571 6.53652 14.2573 6.53639 14.2572 6.53646C14.8809 5.94036 15.6187 5.46995 16.4268 5.15002ZM18.9714 6.99935C18.3916 6.99935 17.8186 7.10855 17.2857 7.31953C16.7528 7.53049 16.272 7.83838 15.8695 8.22316L14.8044 9.2408C14.3534 9.67164 13.6434 9.67164 13.1925 9.2408L12.1276 8.22335C11.3135 7.4456 10.1986 6.99986 9.02549 6.99986C7.85238 6.99986 6.73743 7.4456 5.9234 8.22335C5.11119 8.99937 4.66536 10.0402 4.66536 11.1137C4.66536 12.1871 5.11119 13.228 5.9234 14.004L13.9984 21.7191L22.0735 14.004C22.4761 13.6195 22.7927 13.1657 23.0075 12.6703C23.2223 12.1751 23.332 11.6463 23.332 11.1137C23.332 10.581 23.2223 10.0522 23.0075 9.55701C22.7927 9.06165 22.4763 8.60804 22.0737 8.22354C21.6711 7.83876 21.1899 7.53049 20.657 7.31953C20.1241 7.10855 19.5512 6.99935 18.9714 6.99935Z"
              fill="#8E8F98"
            />
          </svg>
        </button>
      )}
    </>
  )
}

export default LikeButton
