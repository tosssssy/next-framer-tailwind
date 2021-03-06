import type { NextPage } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';
import { Layout } from './../components/Layout';
import { FadeInLeft } from 'animations/FadeInLeft';
import { FadeInRight } from 'animations/FadeInRight';
import { FadeInUp } from 'animations/FadeInUp';

const Home: NextPage = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Home;
