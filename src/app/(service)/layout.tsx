import React from 'react';
import style from './layout.module.css';
import Sidebar from '@/app/_component/Sidebar';

type Props = { children: React.ReactNode };

export default function MainLayout({ children }: Props) {
  return (
    <div className={style.container}>
      <div className={style.sidebarWrapper}>
        <Sidebar />
      </div>
      <div className={style.mainWrapper}>
        <section>
          {children}
        </section>
      </div>
    </div>
  );
}
