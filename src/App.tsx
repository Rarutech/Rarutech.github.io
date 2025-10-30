import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageSkeleton from './components/PageSkeleton';
import { Suspense } from 'react';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Suspense fallback={<PageSkeleton />}> 
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}


