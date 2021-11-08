import { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

export const FadeInUp: FC = ({ children }) => {
  const { ref, inView } = useInView({
    rootMargin: '-50px',
  });

  return (
    <div ref={ref}>
      {inView && <div className='animate__animated animate__fadeInUp'>{children}</div>}
    </div>
  );
};
