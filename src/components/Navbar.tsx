import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavbarProps {
  sections: {
    id: string;
    name: string;
    icon: LucideIcon;
  }[];
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ sections, activeSection, setActiveSection }) => {
  return (
    <nav className="bg-zinc-900 border-b border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-green-500 text-xl font-bold">DownloadHub</h1>
            <div className="flex space-x-4">
              {sections.map(({ id, name, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveSection(id)}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${activeSection === id 
                      ? 'bg-green-500 text-white' 
                      : 'text-gray-300 hover:bg-zinc-800 hover:text-white'
                    }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;