import  { useState } from 'react';
import { 
  Shield, 
  Mail, 
  Lock, 
  Key, 
  Fingerprint, 
  Network, 
  Building2,
} from 'lucide-react';

const HeritageLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isResetMode, setIsResetMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#0066FF]/5 blur-[120px]" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] rounded-full bg-[#FF6B35]/5 blur-[100px]" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(#0066FF 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}
        />
      </div>

      <main className="w-full max-w-[440px] flex flex-col gap-10 relative z-10">
        {/* Brand Identity Section */}
        <header className="flex flex-col items-center text-center gap-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white border border-[#CED4DA] shadow-sm mb-2">
            <Building2 className="w-8 h-8 text-[#0066FF]" />
          </div>
          <div className="space-y-1">
            <h1 className="font-serif text-4xl font-medium tracking-tight text-[#0066FF]">
              Heritage Archive
            </h1>
            <p className="text-sm uppercase tracking-[0.2em] text-[#868E96] font-mono">
              Administrative Access
            </p>
          </div>
        </header>

        {/* Login Container */}
        <section className="bg-white rounded-xl border border-[#CED4DA] shadow-xl p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-[#343A40]" htmlFor="email">
                Department Email
              </label>
              <div className="relative group">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#F1F3F5] border-b border-[#CED4DA] py-4 px-3 text-base outline-none focus:border-[#0066FF] transition-all placeholder:text-[#ADB5BD]"
                  placeholder="official@heritage.gov"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#868E96] group-focus-within:text-[#0066FF] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-end">
                <label className="text-xs font-semibold uppercase tracking-wide text-[#343A40]" htmlFor="password">
                  {isResetMode ? 'Reset Credentials' : 'Password'}
                </label>
                <button
                  type="button"
                  onClick={() => setIsResetMode(!isResetMode)}
                  className="text-[10px] font-semibold uppercase text-[#0066FF] hover:underline"
                >
                  {isResetMode ? 'Back to Login' : 'Reset Credentials'}
                </button>
              </div>
              <div className="relative group">
                <input
                  id="password"
                  type={isResetMode ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#F1F3F5] border-b border-[#CED4DA] py-4 px-3 text-base outline-none focus:border-[#0066FF] transition-all placeholder:text-[#ADB5BD]"
                  placeholder={isResetMode ? 'Enter new credentials' : '••••••••'}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#868E96] group-focus-within:text-[#0066FF] transition-colors">
                  {isResetMode ? <Key className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col gap-4">
              {/* Standard Login Action */}
              <button
                type="submit"
                className="w-full py-4 bg-[#0066FF] text-white font-semibold uppercase tracking-widest rounded-lg hover:bg-[#0052CC] active:scale-[0.98] transition-all shadow-md"
              >
                {isResetMode ? 'Reset Credentials' : 'Standard Login'}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4 py-2">
                <div className="h-[1px] flex-1 bg-[#CED4DA]/30" />
                <span className="text-[10px] font-semibold uppercase text-[#868E96] tracking-tighter">
                  or authorize via
                </span>
                <div className="h-[1px] flex-1 bg-[#CED4DA]/30" />
              </div>

              {/* Govt SSO Action */}
              <button
                type="button"
                className="w-full py-4 bg-transparent border border-[#CED4DA] text-[#0066FF] font-semibold uppercase tracking-widest rounded-lg hover:bg-[#F1F3F5] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <Fingerprint className="w-5 h-5" />
                Login via Govt SSO
              </button>
            </div>
          </form>
        </section>

        {/* Support/Security Footer */}
        <footer className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 opacity-60">
              <Shield className="w-3.5 h-3.5 text-[#868E96]" />
              <span className="text-[12px] font-mono uppercase text-[#868E96]">Secure 256-bit AES</span>
            </div>
            <div className="flex items-center gap-2 opacity-60">
              <Network className="w-3.5 h-3.5 text-[#868E96]" />
              <span className="text-[12px] font-mono uppercase text-[#868E96]">Gov Network Only</span>
            </div>
          </div>
          <div className="w-full pt-6 border-t border-[#CED4DA]/20 flex justify-between items-center">
            <p className="text-[10px] font-mono uppercase text-[#868E96]">Archive ID: HA-9921-X</p>
            <div className="flex gap-4">
              <button className="text-[10px] font-mono uppercase text-[#868E96] hover:text-[#0066FF] transition-colors">
                Help Desk
              </button>
              <button className="text-[10px] font-mono uppercase text-[#868E96] hover:text-[#0066FF] transition-colors">
                Legal
              </button>
            </div>
          </div>
        </footer>
      </main>

      {/* Network Only Indicator */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-50">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        <span className="text-[10px] font-mono uppercase text-[#868E96]">Restricted Access — Authorized Personnel Only</span>
      </div>
    </div>
  );
};

export default HeritageLogin;