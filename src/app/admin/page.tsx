'use client';

import { useState, useEffect } from 'react';
import { FaUsers, FaUserPlus, FaChartLine, FaEnvelope } from 'react-icons/fa6';
import Link from 'next/link';

interface DashboardStats {
  totalUsers: number;
  newUsersToday: number;
  activeUsers: number;
  contactSubmissions: number;
}

const Page = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    newUsersToday: 0,
    activeUsers: 0,
    contactSubmissions: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch users data
        const usersResponse = await fetch('http://localhost:4000/api/users');
        const usersData = await usersResponse.json();
        
        // Fetch contacts data
        const contactsResponse = await fetch('http://localhost:4000/api/contacts');
        const contactsData = await contactsResponse.json();
        
        if (usersData.success) {
          // For demo purposes, we're using the total count
          // In a real app, you'd have separate endpoints for these stats
          setStats({
            totalUsers: usersData.count,
            newUsersToday: Math.floor(usersData.count * 0.1), // 10% of total for demo
            activeUsers: Math.floor(usersData.count * 0.7), // 70% of total for demo
            contactSubmissions: contactsData.success ? contactsData.count : 0
          });
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (isLoading) {
    return <div>Loading dashboard data...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-black">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Users Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <FaUsers className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Users</p>
              <p className="text-2xl font-semibold text-gray-800">{stats.totalUsers}</p>
            </div>
          </div>
        </div>
        
        {/* Contact Submissions Card 
        <Link href="/admin/contacts" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <FaEnvelope className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Contact Submissions</p>
              <p className="text-2xl font-semibold text-gray-800">{stats.contactSubmissions}</p>
            </div>
          </div>
        </Link> */}
        
        {/* Active Users Card 
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <FaChartLine className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Active Users</p>
              <p className="text-2xl font-semibold text-gray-800">{stats.activeUsers}</p>
            </div>
          </div>
        </div> */}
      </div>
     
     {/*}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <p className="text-gray-500">No recent activity to display.</p>
      </div> */}
    </div>
  );
};

export default Page; 