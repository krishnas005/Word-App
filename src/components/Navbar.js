import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md mb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a 
              href="/" 
              className="text-xl font-semibold text-gray-800 dark:text-white"
            >
              Word-App
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {/* <button
              onClick={toggleMode}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {mode === 'light' ? (
                <>
                  <Moon size={20} />
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun size={20} />
                  <span>Light Mode</span>
                </>
              )}
            </button> */}
          </div> 
        </div>
      </div>
    </nav>
  );
};


export default Navbar;