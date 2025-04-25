import DashboardContent from '../components/DashboardContent';
import { FiCheckCircle, FiArrowUpRight, FiSend } from 'react-icons/fi';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* Left Side */}
      <div className="lg:col-span-1 flex flex-col space-y-6">
        {/* Account Progress */}
        <DashboardContent title="Account Progress">
          {/* Donut Chart */}
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-53">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" strokeWidth="10" stroke="#e5e7eb" fill="none" />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  strokeWidth="10"
                  stroke="#3b82f6"
                  strokeDasharray="282.6"
                  strokeDashoffset="42.39"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-800">
                85%
              </div>
            </div>
          </div>

          <div className="border-t my-4" />

          {/* Steps Completed & Remaining */}
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Steps Completed</h3>
              <ul className="space-y-2">
                {['Profile Setup', 'Initial Training', 'Legal Documents'].map((step) => (
                  <li key={step} className="flex items-center justify-between">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-gray-300 rounded-full mr-2" />
                      {step}
                    </span>
                    <FiCheckCircle className="text-green-500" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Steps Remaining</h3>
              <ul className="space-y-2">
                {['Financial Integration', 'Final Review'].map((step) => (
                  <li key={step} className="flex items-center justify-between">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-gray-300 rounded-full mr-2" />
                      {step}
                    </span>
                    <FiCheckCircle className="text-green-300" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </DashboardContent>

        {/* Pending Questions */}
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Pending Questions</h2>
            <span className="bg-blue-200 text-blue-800 text-xs font-bold px-2 py-1 rounded-full">02</span>
          </div>

          {/* Question 1 */}
          <div className="flex gap-4 items-start">
            <div className="relative">
              <Image src="/avatar.jpg" alt="Phoenix Baker" width={40} height={40} className="rounded-full" />
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border-2 border-white" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">Phoenix Baker</h4>
                <span className="text-xs text-gray-400">5min ago</span>
              </div>
              <div className="text-xs text-gray-500">@phoenix</div>
              <p className="text-sm mt-1 text-gray-700">What are the requirements for opening a new store?</p>
            </div>
          </div>

          {/* Question 2 */}
          <div className="flex gap-4 items-start">
            <div className="relative">
              <Image src="/avatar.jpg" alt="Koray Okumus" width={40} height={40} className="rounded-full" />
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border-2 border-white" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">Koray Okumus</h4>
                <span className="text-xs text-gray-400">4hr ago</span>
              </div>
              <div className="text-xs text-gray-500">@koray</div>
              <p className="text-sm mt-1 text-gray-700">How do I manage inventory effectively?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="lg:col-span-2 space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DashboardContent title="Total Franchisees Onboard">
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl font-bold">14</div>
              <div className="flex items-center bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                <FiArrowUpRight className="mr-1" /> 7.4%
              </div>
            </div>
            <div className="flex -space-x-3 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image src="/avatar.jpg" alt="Avatar" width={32} height={32} />
                </div>
              ))}
              <div className="w-8 h-8 flex items-center justify-center text-xs bg-gray-100 rounded-full border-2 border-white">+7</div>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-blue-500 rounded" />
              <div className="h-2 bg-blue-400 rounded" />
              <div className="h-2 bg-blue-300 rounded" />
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" /> Stage 1 (Initial Inquiry)
                  </span>
                  <span className="font-bold">02</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full" /> Stage 2 (Document Submission)
                  </span>
                  <span className="font-bold">07</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-300 rounded-full" /> Stage 3 (Training)
                  </span>
                  <span className="font-bold">05</span>
                </div>
              </div>
            </div>
          </DashboardContent>

          <DashboardContent title="Key Insights & Feedback">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="text-3xl font-bold">10%</div>
              <div className="text-gray-500">Sales Growth</div>
              <button className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">Top Performer</button>
            </div>
            <div className="border-t my-4" />
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-2 h-2 bg-gray-400 rounded-full" /> Franchisees are requesting more detailed training materials.
            </div>
          </DashboardContent>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DashboardContent title="Financial Wellbeing">
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl font-bold">20</div>
              <div className="flex items-center bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                <FiArrowUpRight className="mr-1" /> 2.1%
              </div>
            </div>
            <div className="text-gray-500 text-sm mb-6">Total Franchisees</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-xs text-gray-500 mb-1">Target</div>
                <div className="font-bold">$500,000</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-xs text-gray-500 mb-1">Current</div>
                <div className="font-bold">$450,000</div>
              </div>
            </div>
          </DashboardContent>

          <DashboardContent title="Prospect Leads">
            <div className="space-y-4">
              {['Wade Warren', 'Ava Wright', 'Cody Fisher'].map((name) => (
                <div key={name} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Image src="/avatar.jpg" alt={name} width={32} height={32} className="rounded-full" />
                    <div className="text-sm font-medium">{name}</div>
                  </div>
                  <div className="text-xs text-gray-500">Stage: Initial Inquiry</div>
                </div>
              ))}
            </div>
          </DashboardContent>
        </div>

        {/* Chat Assistant */}
        <div className="bg-white rounded-lg shadow-sm p-10 text-center">
          <div className="bg-blue-100 p-4 rounded-full mb-6 inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v10l-4-4H7a2 2 0 01-2-2V8a2 2 0 012-2h2" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Welcome to the AI Chat Assistant</h2>
          <div className="relative w-full max-w-md mx-auto mt-6">
            <input
              type="text"
              placeholder="Ask your question here.."
              className="w-full border border-gray-300 rounded-full py-3 pl-6 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500">
              <FiSend size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
