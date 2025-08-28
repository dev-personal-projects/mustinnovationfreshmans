import { RegistrationForm } from "@/components/registration/RegistrationForm";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      {/* Header */}
      <header className="py-4 sm:py-6 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo and Title */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-yellow-400 to-pink-600 rounded-lg blur-lg opacity-75"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-lg p-2 sm:p-3">
                  <Image
                    src="/assets/icon/mustic-logo.png"
                    alt="Mustic Logo"
                    width={32}
                    height={32}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-gray-100">
                  Meru University
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Science Innovators Club
                </p>
              </div>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-4 sm:py-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-yellow-400 to-pink-600 bg-clip-text text-transparent">
            Join the Innovation Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">
            Register to become a member of the Science Innovators Club
          </p>
        </div>

        <RegistrationForm />
      </main>

      {/* Footer */}
      <footer className="text-center py-4 sm:py-6 text-gray-600 dark:text-gray-400">
        <p className="text-xs sm:text-sm">
          &copy; 2025 Meru University Science Innovators Club
        </p>
      </footer>
    </div>
  );
}
