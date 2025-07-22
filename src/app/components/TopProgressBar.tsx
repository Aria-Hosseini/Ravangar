'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';


let timeout: NodeJS.Timeout;

NProgress.configure({ showSpinner: false });

export default function TopProgressBar() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      NProgress.done();
    }, 500); 
    return () => {
      NProgress.done();
    };
  }, [pathname]);

  return null;
}
