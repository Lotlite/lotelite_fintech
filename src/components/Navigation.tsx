'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navigation = () => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        // Check if user is logged in
        const checkAuth = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/users/me', {
                    credentials: 'include', // Important for session cookies
                });
                const data = await response.json();
                
                if (data.success) {
                    setUser(data.user);
                    setIsLoggedIn(true);
                } else {
                    // Clear any stale data
                    localStorage.removeItem('user');
                    setUser(null);
                    setIsLoggedIn(false);
                }
            } catch (error) {
                console.error('Auth check failed:', error);
                // Clear any stale data
                localStorage.removeItem('user');
                setUser(null);
                setIsLoggedIn(false);
            }
        };

        checkAuth();
    }, []);

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/users/logout', {
                method: 'POST',
                credentials: 'include', // Important for session cookies
            });
            
            if (response.ok) {
                localStorage.removeItem('user');
                setIsLoggedIn(false);
                setUser(null);
                router.push('/');
            }
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="text-xl font-bold text-blue-600">
                                LotliteFintech
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center">
                        {isLoggedIn ? (
                            <div className="flex items-center space-x-4">
                                <span className="text-gray-700">Welcome, {user?.name}</span>
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link
                                    href="/login"
                                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/signup"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation; 