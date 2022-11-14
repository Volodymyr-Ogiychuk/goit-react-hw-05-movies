import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import s from './SuspenseLoading.module.css'

export function SuspenseLoading () {
  return (
    <div>
      <header className={s.header}>
        <nav className={s.menu}>
          <NavLink className={s.menuItem} to="/">Home</NavLink>
          <NavLink className={s.menuItem} to="movies">Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}