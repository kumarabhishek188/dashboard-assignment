import { FiSettings } from 'react-icons/fi';

export default function Navbar() {
  return (
    <header className="flex justify-end items-center h-16 px-6 bg-white border-b">
      <button className="mr-4 hover:text-gray-600">
        <FiSettings size={20} />
      </button>
      <img
        src="/avatar.jpg"
        alt="Profile"
        className="w-8 h-8 rounded-full object-cover"
      />
    </header>
  );
}