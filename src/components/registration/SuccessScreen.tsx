import { CheckCircle2, Users, RotateCcw } from 'lucide-react';
import Link from 'next/link';

interface SuccessScreenProps {
  name: string;
  onReset: () => void;
}

export function SuccessScreen({ name, onReset }: SuccessScreenProps) {
  return (
    <div className="text-center py-4">
      <div className="mb-6">
        <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Welcome to the Club, {name}!
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          Your registration has been successfully submitted. You'll receive a confirmation email shortly.
        </p>
      </div>

      <div className="space-y-3">
        {/* Join Communities Button */}
        <Link 
          href="/communities"
          className="w-full bg-gradient-to-r from-blue-600 via-yellow-400 to-pink-600 text-white font-medium py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 group"
        >
          <Users className="w-4 h-4" />
          <span>Join Our Communities</span>
        </Link>

        {/* Register Another Person */}
        <button
          onClick={onReset}
          className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-3 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Register Another Person</span>
        </button>
      </div>
    </div>
  );
}