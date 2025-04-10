"use client";

import { UserCircleIcon } from 'lucide-react';
import React from 'react';

const User = () => {
  return (
    <button
      className="flex items-center justify-center w-14 h-14 rounded-full bg-transparent hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={() => console.log('User button clicked')}
      aria-label="User menu"
    >
      <UserCircleIcon className="w-10 h-10 text-white" />
    </button>
  );
};

export default User;