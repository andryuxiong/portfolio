import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function RouteFocus() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const target = hash === '#contact' ? document.getElementById('contact') : null;
    if (target) {
      target.scrollIntoView({ block: 'start' });
      target.focus({ preventScroll: true });
    } else {
      window.scrollTo(0, 0);
      document.getElementById('main-content')?.focus({ preventScroll: true });
    }
  }, [pathname, hash, key]);

  return null;
}
