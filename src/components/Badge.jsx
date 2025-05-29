import React from 'react';
import CircleBadge from '../assets/badge.svg'

const Badge = ({
  topText,
  bottomText,
  iconClass,
  className = ''
}) => {
  const rText = 31;
  const center = 50;

  return (
    <div
      className={`relative inline-block w-[6.25rem] h-[6.25rem] ${className}`}
    >
      <img src={CircleBadge} alt="circle" className="w-full h-full block" />

      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <defs>
          <path
            id="textTop"
            d={`M ${center - rText},${center}
                a ${rText},${rText} 0 0,1 ${2 * rText},0`}
          />
          <path
            id="textBottom"
            d={`M ${center - 41},${48}
                a ${41},${41} 0 0,0 ${2 * 41},0`}
          />
        </defs>

        <text fontSize="13" fill="#ffffff">
          <textPath href="#textTop" startOffset="50%" textAnchor="middle">
            {topText}
          </textPath>
        </text>

        <text fontSize="13" fill="#ffffff" style={{ letterSpacing: '1.5px' }}>
          <textPath
            href="#textBottom"
            startOffset="50%"
            textAnchor="middle"
          >
            {bottomText}
          </textPath>
        </text>
      </svg>

      <i
        className={`${iconClass} text-white text-3xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      />
    </div>
  );
};

export default Badge;