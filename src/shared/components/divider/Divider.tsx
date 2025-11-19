export default function Divider() {
  return (
    <div className='flex w-full items-center justify-center'>
      <svg
        width='344'
        height='12'
        viewBox='0 0 344 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
      >
        <ellipse
          cx='172.5'
          cy='6'
          rx='70.5'
          ry='6'
          fill='url(#paint0_radial_3534_10085)'
        />
        <rect
          y='5'
          width='343'
          height='1'
          fill='url(#paint1_linear_3534_10085)'
        />
        <defs>
          <radialGradient
            id='paint0_radial_3534_10085'
            cx='0'
            cy='0'
            r='1'
            gradientUnits='userSpaceOnUse'
            gradientTransform='translate(172.5 6) scale(70.5 6)'
          >
            <stop stopColor='#660AD9' />
            <stop offset='1' stopColor='#131313' />
          </radialGradient>
          <linearGradient
            id='paint1_linear_3534_10085'
            x1='0'
            y1='5.5'
            x2='343'
            y2='5.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#131313' />
            <stop offset='0.5' stopColor='#DEB5FC' />
            <stop offset='1' stopColor='#131313' />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
