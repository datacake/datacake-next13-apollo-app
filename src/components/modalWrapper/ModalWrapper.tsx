'use client';

import * as React from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

const Modal = ({ children, classnames }: React.PropsWithChildren & { classnames?: string }) => {
  const [ mounted, setMounted ] = React.useState(false);
  const portalNode = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    portalNode.current = document.getElementById('portal');
  }, []);

  return mounted ? (
    portalNode.current && createPortal(
      <div className={ twMerge('bg-gray-800 opacity-50 z-100 min-h-[100vh] min-w-[100vw] fixed top-0 left-0 z-[100] ', classnames) }>
        { children }
      </div>,
      portalNode.current,
    )
  ) : null;
};

export default Modal;
