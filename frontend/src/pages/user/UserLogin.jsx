import  { useState } from 'react';
import { Shield, Mail, Lock, Key, Fingerprint, Network, Archive, HelpCircle, AlertCircle } from 'lucide-react';

const UserLogin = () => {
  const [email, setEmail] = useState('official@heritage.gov');
  const [password, setPassword] = useState('');
  const [resetMode, setResetMode] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      
      <div className="relative z-10 w-full max-w-md">
        {/* Header Shield Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#0066FF]/20 p-4 rounded-full backdrop-blur-sm border border-[#0066FF]/30">
            <Shield className="w-12 h-12 text-[#0066FF]" />
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden">
          {/* Top Bar */}
          <div className="bg-[#0066FF]/40 px-6 py-4 border-b border-gray-700">
            <h1 className="text-2xl font-serif font-bold text-[#F8F9FA] text-center tracking-wide">
              Heritage Archive
            </h1>
            <p className="text-xs text-[#0066FF]/70 text-center uppercase tracking-wider mt-1">
              Administrative Access
            </p>
          </div>

          {/* Form Body */}
          <div className="p-6 space-y-5">
            {/* Department Email Field */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" />
                Department Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-800/80 border border-gray-600 rounded-lg px-4 py-2.5 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
                  placeholder="official@heritage.gov"
                />
              </div>
            </div>

            {/* Password / Reset Credentials */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                {resetMode ? <Key className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
                {resetMode ? 'Reset Credentials' : 'Password'}
              </label>
              <div className="relative">
                <input
                  type={resetMode ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-800/80 border border-gray-600 rounded-lg px-4 py-2.5 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
                  placeholder={resetMode ? 'Enter reset token / new credentials' : '················'}
                />
              </div>
              <button
                onClick={() => setResetMode(!resetMode)}
                className="text-xs text-[#0066FF]/70 hover:text-[#0066FF] mt-1.5 transition-colors"
              >
                {resetMode ? '← Back to standard login' : 'Forgot or reset credentials?'}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold py-2.5 rounded-lg transition-all duration-200 shadow-lg shadow-[#0066FF]/20">
                {resetMode ? 'Reset Credentials' : 'Standard Login'}
              </button>
              
              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-gray-700"></div>
                <span className="flex-shrink mx-4 text-xs text-gray-500 uppercase tracking-wider">or authorize via</span>
                <div className="flex-grow border-t border-gray-700"></div>
              </div>

              <button className="w-full flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-gray-200 font-medium py-2.5 rounded-lg transition-all duration-200">
                <Fingerprint className="w-4 h-4 text-[#0066FF]" />
                Login via Govt SSO
              </button>
            </div>

            {/* Security Badges */}
            <div className="mt-4 pt-3 border-t border-gray-800/60">
              <div className="flex flex-wrap justify-center gap-4 text-xs">
                <div className="flex items-center gap-1.5 text-emerald-400/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Secure 256-Bit AES
                </div>
                <div className="flex items-center gap-1.5 text-blue-400/80">
                  <Network className="w-3 h-3" />
                  GOV Network Only
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-900/60 px-6 py-3 border-t border-gray-800 flex justify-between items-center text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Archive className="w-3 h-3" />
              <span>ARC ID: HA-9921-X</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="hover:text-gray-300 transition flex items-center gap-1">
                <HelpCircle className="w-3 h-3" />
                Help Desk
              </button>
              <button className="hover:text-gray-300 transition flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                Legal
              </button>
            </div>
          </div>
        </div>

        {/* Network Only Overlay Hint */}
        <div className="text-center mt-5 text-xs text-gray-500/70 flex justify-center items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500/60 animate-pulse" />
          Restricted Access — Authorized Personnel Only
        </div>
      </div>
    </div>
  );
};

export default UserLogin;