import type { NextPage } from 'next';
import React, { useState } from 'react';
import { FadeInLeft } from 'animations/FadeInLeft';
import { FadeInRight } from 'animations/FadeInRight';
import { FadeInUp } from 'animations/FadeInUp';

const Home: NextPage = () => {
  return (
    <>
      <div className='h-[1000px] bg-green-50' />
      <FadeInUp>
        <div className='h-[100px] bg-red-50'></div>
      </FadeInUp>
      <FadeInLeft>
        <div className='h-[100px] bg-red-50'></div>
      </FadeInLeft>
      <FadeInRight>
        <div className='h-[100px] bg-red-50'></div>
      </FadeInRight>
      <div className='h-[1000px] bg-green-50' />
    </>
  );
};

export default Home;
