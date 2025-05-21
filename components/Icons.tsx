// components/CreditIcon.tsx
import React from 'react';

export const CreditIcon = ({ className = 'w-6 h-6 text-white' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <g transform="translate(-1.5 4)">
      <rect fill="transparent" width="24" height="24" transform="translate(1.5 -4)" />
      <g transform="translate(1.5 -4.001)">
        <path
          fill="currentColor"
          d="M12,24A12,12,0,0,1,3.515,3.516,12,12,0,0,1,20.485,20.487,11.922,11.922,0,0,1,12,24ZM10.453,9.746v8.837a1.162,1.162,0,0,0,1.161,1.161h.775a1.162,1.162,0,0,0,1.161-1.161V9.746l3.5,3.652a1.159,1.159,0,0,0,1.659.021l.527-.533a1.161,1.161,0,0,0,.342-.827,1.142,1.142,0,0,0-.342-.812L12.823,4.825a1.159,1.159,0,0,0-1.64,0L4.757,11.247a1.155,1.155,0,0,0-.342.824,1.142,1.142,0,0,0,.342.815l.527.533a1.166,1.166,0,0,0,.823.339,1.151,1.151,0,0,0,.842-.36l3.5-3.65Z"
        />
      </g>
    </g>
  </svg>
);


export const HomeIcon = ({ className = 'w-6 h-6 text-white hover:text-red-500 transition-colors duration-300' }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
  >
    <g transform="translate(-2 4)">
      <rect fill="transparent" width={24} height={24} transform="translate(2 -4)" />
      <g transform="translate(2 -4)">
        <path
          fill="currentColor"
          d="M23.5,14.772c0,.067,0,.133-.069.133a.149.149,0,0,1-.138-.133c-.207-.266-10.675-11.323-11.157-11.723-.207-.2-.275-.133-.482.067C11.588,3.182.707,14.639.569,14.838c-.069.067-.138.067-.138-.067a10.912,10.912,0,0,1-.413-3.663A10.341,10.341,0,0,1,1.533,6.046,11.451,11.451,0,0,1,9.384.318,11.829,11.829,0,0,1,20.61,3.582a10.907,10.907,0,0,1,3.237,6.261,8.818,8.818,0,0,1,.138,1.932A15.1,15.1,0,0,1,23.5,14.772Z"
        />
        <path
          fill="currentColor"
          d="M.08,9.109c-.069-.067-.138-.133,0-.266S8.275.25,8.482.05c.069-.067.138-.067.138,0,.275.333,8.2,8.726,8.4,8.859.069.067.069.133-.069.133a9.34,9.34,0,0,1-1.515,1.266,11.776,11.776,0,0,1-5.923,2.131,6.121,6.121,0,0,1-1.1.067A11.907,11.907,0,0,1,.08,9.109Z"
          transform="translate(3.451 10.925)"
        />
      </g>
    </g>
  </svg>
);

export const PaymentsIcon = ({ className = 'w-6 h-6 text-white hover:text-blue-500 transition-colors duration-300',}: {className?: string;}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24.25"
    className={className}
    fill="none"
  >
    <g transform="translate(-2 4.125)">
      <rect
        fill="transparent"
        width={24}
        height={24}
        transform="translate(2 -4)"
      />
      <g transform="translate(-21.169 -14)">
        <path
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.25"
          d="M35.169,10A11.837,11.837,0,0,0,23.5,22,11.838,11.838,0,0,0,35.167,34a11.33,11.33,0,0,0,6.651-2.2c.5-.473.811-.529.811-1.041l.007-.1a1.075,1.075,0,0,0-1.06-1.09,1.026,1.026,0,0,0-.764.343,9.322,9.322,0,0,1-5.633,1.9,9.7,9.7,0,0,1-9.563-9.833,9.567,9.567,0,1,1,19.127,0,10.009,10.009,0,0,1-.921,4.19,9.724,9.724,0,0,0-.49,1.185l-.007.1a1.078,1.078,0,0,0,1.063,1.092,1.054,1.054,0,0,0,1-.776l0,0A12.189,12.189,0,0,0,46.836,22,11.835,11.835,0,0,0,35.169,10ZM28.653,20.7a1.045,1.045,0,0,0,.3.676,1.026,1.026,0,0,0,.676.3h0a.791.791,0,0,0,.108,0l10.8,0a1.033,1.033,0,1,0,0-2.067l-8.437.012,1.222-1.234a1,1,0,0,0-1.413-1.413l-2.956,2.983a.988.988,0,0,0-.289.632l-.007,0a.654.654,0,0,0,0,.11ZM36.9,27.591a1,1,0,0,0,1.416,0l2.958-2.978a1,1,0,0,0,.289-.629l.007,0s0-.073,0-.108h0a1.039,1.039,0,0,0-.3-.673,1.05,1.05,0,0,0-.676-.3h0a.791.791,0,0,0-.108,0l-10.8,0a1.031,1.031,0,1,0,0,2.062l8.439-.012-1.222,1.237A.987.987,0,0,0,36.9,27.591Z"
        />
      </g>
    </g>
  </svg>
);


export const SettingsIcon = ({ className = "w-6 h-6 text-current" }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.01a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.01a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.01a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
    />
  </svg>
);

export const CardIcon = ({ className = "w-6 h-6 text-white" }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <rect width="24" height="24" fill="transparent" />
    <g transform="translate(-2.5 4)">
      <g transform="translate(2.5 -91.333)">
        <g transform="translate(0 98.333)">
          <path
            fill="currentColor"
            d="M23.5,213.333H.5a.474.474,0,0,0-.5.5v7.053a2.485,2.485,0,0,0,2.5,2.519h19a2.485,2.485,0,0,0,2.5-2.519v-7.053A.474.474,0,0,0,23.5,213.333Zm-20,4.03h4a.5.5,0,0,1,0,1.008h-4a.5.5,0,0,1,0-1.008Zm7,3.023h-7a.5.5,0,0,1,0-1.008h7a.5.5,0,0,1,0,1.008Zm8.5,0a1.68,1.68,0,0,1-1-.3,1.68,1.68,0,0,1-1,.3,2.015,2.015,0,0,1,0-4.03,1.68,1.68,0,0,1,1,.3,1.68,1.68,0,0,1,1-.3,2.015,2.015,0,0,1,0,4.03Z"
            transform="translate(0 -213.333)"
          />
        </g>
        <g transform="translate(0 90.333)">
          <path
            fill="currentColor"
            d="M21.5,85.333H2.5c-1.4,0-2.5,1.378-2.5,3.132v1.253c0,.376.2.626.5.626h23c.3,0,.5-.251.5-.626V88.465C24,86.711,22.9,85.333,21.5,85.333Z"
            transform="translate(0 -85.333)"
          />
        </g>
      </g>
    </g>
  </svg>
);
