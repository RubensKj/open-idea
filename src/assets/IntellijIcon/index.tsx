import React from 'react';

import { IconType } from '../icon';

const IntellijIcon: React.FC<IconType> = ({ size }) => {
  return (
    <svg
      version="1.1"
      x="0px" y="0px"
      viewBox="0 0 48 48"
      width={size}
      height={size}>
      <path fill="#F57C00" d="M14.125 35.188l-9.687-7.625 4.812-8.938L23.062 24z"></path>
      <path fill="#1E88E5" d="M44 14.688l-.75 23.125L27.875 44l-9.25-6 13.5-14z"></path>
      <path fill="#2962FF" d="M44 14.688L31.812 29.063 26.25 11l5.313-6.375z"></path>
      <path fill="#AB47BC" d="M34.688 19.625L23.25 37.188 7.25 43l2.563-9 3.312-11.125z"></path>
      <path fill="#E91E63" d="M13.125 22.875L4 19.813 9.813 4l12.5 1.5 12.375 14.125z"></path>
      <path fill="#000001" d="M11 11h25v25H11z"></path>
      <path fill="#FFF" d="M14 31.5h9V33h-9z"></path>
      <path fill="#FFF" d="M20.5 15.875V14h-5v1.875H17v6.5h-1.5v1.875h5v-1.875h-1.341v-6.5z"></path>
      <path d="M25.375 24.5c-1.875 0-2.871-1.098-3.25-1.548l1.411-1.605c.255.282.964 1.028 1.839 1.028 1.125 0 1.375-1.125 1.375-1.75V14H29v6.625c0 .624 0 1.625-.75 2.625-.525.7-1.75 1.25-2.875 1.25z" fill="#FFF"></path>
    </svg>
  );
}

export default IntellijIcon;