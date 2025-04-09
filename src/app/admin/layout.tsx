'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { FaUsers as FaUsersIcon, FaHome as FaHomeIcon } from 'react-icons/fa';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check if user is logged in and is an admin
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setIsLoggedIn(true);
      
      // Check if user is admin (you can add this field to your user model)
      if (!userData.isAdmin) {
        router.push('/');
      }
    } else {
      router.push('/login');
    }
  }, [router]);

  if (!isLoggedIn) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-blue-600">Admin Panel</h1>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link 
                href="/admin" 
                className={`flex items-center p-2 rounded-md ${pathname === '/admin' ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                <FaHomeIcon className="mr-3" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                href="/admin/users" 
                className={`flex items-center p-2 rounded-md ${pathname === '/admin/users' ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                <FaUsersIcon className="mr-3" />
                All Users
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="px-4 py-3">
            <h2 className="text-lg font-medium text-gray-800">
              {pathname === '/admin' ? 'Dashboard' : 
               pathname === '/admin/users' ? 'All Users' : 'Admin Panel'}
            </h2>
          </div>
        </header>
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout; 