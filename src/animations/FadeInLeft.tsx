import { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

export const FadeInLeft: FC = ({ children }) => {
  const { ref, inView } = useInView({
    rootMargin: '-50px',
  });

  return (
    <div ref={ref}>
      {inView && <div className='animate__animated animate__fadeInLeft'>{children}</div>}
    </div>
  );
};
