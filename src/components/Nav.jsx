import NavFramer from '../framer/navigation/nav';
import { defaultVariants } from '../framer';
import { memo } from 'react';

const Nav = memo(({ scrollSection, ...props }) => {
  return (
    <NavFramer.Responsive
      variants={defaultVariants}
      className="!w-full !py-5"
      scrollSection={scrollSection}
      key={scrollSection ? 'Desktop - Scroll' : 'Desktop'}
      {...props}
    />
  );
});

export default Nav;
