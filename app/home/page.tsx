import { getTags, getPublishedPosts } from '@/lib/notion';
import { Metadata } from 'next';

interface HomeProps {
  searchParams: Promise<{ tag?: string; sort?: string }>;
}

export const metadata: Metadata = {
  title: '홈',
  description: '프론트엔드 개발자 아이노의 블로그입니다. 개발 지식과 경험을 공유합니다.',
  alternates: {
    canonical: '/',
  },
};

export default async function Home({ searchParams }: HomeProps) {
  return (
    <>
      <section className="section section01 home">inocode</section>
      <section className="section section02 about">inocode</section>
      <section className="section section03 skills">inocode</section>
      <section className="section section04 experience">inocode</section>
      <section className="section section05 blog">inocode</section>
      <section className="section section06 contact">inocode</section>
    </>
  );
}
