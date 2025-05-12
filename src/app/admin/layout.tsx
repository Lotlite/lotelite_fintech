'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { RiHome2Line, RiUserLine, RiMailLine } from 'react-icons/ri';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/users/me', {
          credentials: 'include', // Important for session cookies
        });
        const data = await response.json();
        
        if (data.success && data.user.isAdmin) {
          setUser(data.user);
          setIsLoggedIn(true);
        } else {
          // Not an admin or not logged in
          router.push('/login');
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        router.push('/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg h-screen fixed">
          <div className="p-4">
            <h2 className="text-2xl font-bold text-blue-600">Admin Panel</h2>
          </div>
          <nav className="mt-4">
            <Link
              href="/admin"
              className={`flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 ${
                pathname === '/admin' ? 'bg-blue-50 border-r-4 border-blue-600' : ''
              }`}
            >
              <RiHome2Line className="w-5 h-5 mr-2" />
              Dashboard
            </Link>
            <Link
              href="/admin/users"
              className={`flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 ${
                pathname === '/admin/users' ? 'bg-blue-50 border-r-4 border-blue-600' : ''
              }`}
            >
              <RiUserLine className="w-5 h-5 mr-2" />
              Users
            </Link>
            <Link
              href="/admin/applications"
              className={`flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 ${
                pathname === '/admin/applications' ? 'bg-blue-50 border-r-4 border-blue-600' : ''
              }`}
            >
              <RiMailLine className="w-5 h-5 mr-2" />
              Applications
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout; 