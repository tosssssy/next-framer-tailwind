import type { InferGetStaticPropsType, NextPage } from 'next';
import React from 'react';
import ContentfulApi from '../utils/ContentfulApi';
import { Layout } from './../components/Layout';
import { FadeInLeft } from 'animations/FadeInLeft';
import { FadeInRight } from 'animations/FadeInRight';
import { FadeInUp } from 'animations/FadeInUp';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const News: NextPage<Props> = (props) => {
  const AllNews = props.AllNews;

  return (
    <Layout>
      <div className='h-[1000px] bg-green-50' />
      <FadeInUp>
        <div className='h-[100px] bg-red-50'></div>
      </FadeInUp>
      {console.log(AllNews)}
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

export default News;

export async function getStaticProps() {
  const AllNews = await ContentfulApi.getAllNews();

  return {
    props: {
      AllNews,
    },
  };
}
