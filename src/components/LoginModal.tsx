import { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (username: string, password: string) => void;
  error: string | null;
  isLocked: boolean;
  lockoutTime: number;
}

export function LoginModal({ isOpen, onClose, onLogin, error, isLocked, lockoutTime }: LoginModalProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLocked) {
      onLogin(username, password);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl mb-2">Login</h2>
        <p className="text-gray-600 mb-8">Access Standards Section</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
              required
              disabled={isLocked}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-12 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                required
                disabled={isLocked}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
                disabled={isLocked}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {isLocked && (
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3">
              Too many failed attempts. Please wait {lockoutTime} seconds before trying again.
            </div>
          )}

          {error && !isLocked && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={isLocked}
          >
            {isLocked ? `Locked (${lockoutTime}s)` : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}