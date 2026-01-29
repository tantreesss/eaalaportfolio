import { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';
import { Standards } from './Standards';
import { LoginModal } from './LoginModal';

export function ProtectedStandards() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockoutTime, setLockoutTime] = useState(0);
  const [lockoutLevel, setLockoutLevel] = useState(0);

  // Check if user is already logged in (stored in session)
  useEffect(() => {
    const loggedIn = sessionStorage.getItem('standards_authenticated');
    if (loggedIn === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Countdown timer for lockout
  useEffect(() => {
    if (lockoutTime > 0) {
      const timer = setTimeout(() => {
        setLockoutTime(lockoutTime - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (lockoutTime === 0 && isLocked) {
      setIsLocked(false);
      setFailedAttempts(0);
    }
  }, [lockoutTime, isLocked]);

  const handleLogin = (username: string, password: string) => {
    if (username === 'admin' && password === '26Eaal@') {
      setIsAuthenticated(true);
      sessionStorage.setItem('standards_authenticated', 'true');
      setShowLoginModal(false);
      setError(null);
      setFailedAttempts(0);
      setIsLocked(false);
      setLockoutTime(0);
      setLockoutLevel(0);
    } else {
      const newFailedAttempts = failedAttempts + 1;
      setFailedAttempts(newFailedAttempts);
      setError('Invalid username or password');

      // Lock after every 5 failed attempts
      if (newFailedAttempts % 5 === 0) {
        const newLockoutLevel = lockoutLevel + 1;
        setLockoutLevel(newLockoutLevel);
        
        // Calculate lockout duration: 30 seconds + 30 seconds for each level, max 300 seconds (5 minutes)
        const lockoutDuration = Math.min(30 * newLockoutLevel, 300);
        
        setIsLocked(true);
        setLockoutTime(lockoutDuration);
        setError(null);
      }
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('standards_authenticated');
  };

  if (isAuthenticated) {
    return (
      <>
        <Standards />
        <div className="fixed bottom-4 right-4 z-40">
          <button
            onClick={handleLogout}
            className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors shadow-lg"
          >
            Logout from Standards
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <section id="standards" className="py-24 px-4 md:px-8 bg-gray-50 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <Lock className="w-16 h-16 mx-auto mb-6 text-gray-400" />
          <h2 className="text-5xl md:text-6xl mb-4">Standards</h2>
          <div className="w-24 h-px bg-black mb-8 mx-auto"></div>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            This section contains restricted content. Please login to access our standards and guidelines.
          </p>
          <button
            onClick={() => setShowLoginModal(true)}
            className="inline-block px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors"
          >
            Login to Access
          </button>
        </div>
      </section>

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => {
          setShowLoginModal(false);
          setError(null);
        }}
        onLogin={handleLogin}
        error={error}
        isLocked={isLocked}
        lockoutTime={lockoutTime}
      />
    </>
  );
}