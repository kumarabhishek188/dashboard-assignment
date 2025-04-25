import { FiHome, FiClipboard, FiUpload, FiStar, FiLayers, FiTarget, FiDollarSign, FiSettings, FiLogOut } from 'react-icons/fi';

const items = [
  { label: 'Home', icon: FiHome },
  { label: 'Stages & Checklist', icon: FiClipboard },
  { label: 'Upload Docs', icon: FiUpload },
  { label: 'Preferred Vendors', icon: FiStar },
  { label: 'Tech Stack', icon: FiLayers },
  { label: 'Targets', icon: FiTarget },
  { label: 'Zee Sales Targets', icon: FiDollarSign },
  { label: 'MAI Settings', icon: FiSettings }
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gradient-to-b from-blue-800 to-blue-900 text-gray-100 flex flex-col justify-between">
      <nav className="mt-8 space-y-2">
        {items.map(({ label, icon: Icon }) => (
          <a key={label} href="#" className="flex items-center px-6 py-3 hover:bg-blue-700 transition">
            <Icon className="mr-3" />
            <span>{label}</span>
          </a>
        ))}
      </nav>
      <div className="px-6 pb-6">
        <button className="flex items-center w-full text-left p-3 hover:bg-blue-700 rounded">
          <FiLogOut className="mr-3" />
          Logout
        </button>
      </div>
    </aside>
  );
}