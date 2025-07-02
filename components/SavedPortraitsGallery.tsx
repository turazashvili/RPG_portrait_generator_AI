import React from 'react';
import type { SavedPortrait } from '../types';

interface SavedPortraitsGalleryProps {
  portraits: SavedPortrait[];
  onView: (portrait: SavedPortrait) => void;
  onDownload: (imageUrl: string, name: string) => void;
  onDelete: (id: number) => void;
}

const SavedPortraitsGallery: React.FC<SavedPortraitsGalleryProps> = ({ portraits, onView, onDownload, onDelete }) => {
  if (portraits.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-amber-300 mb-4 border-b border-gray-700 pb-3">My Saved Portraits</h2>
      <div className="relative">
        <div className="flex space-x-6 overflow-x-auto pb-4 -mx-6 px-6">
          {portraits.map((portrait) => (
            <div 
              key={portrait.id} 
              className="group flex-shrink-0 w-64 bg-gray-800/50 rounded-lg shadow-lg border border-gray-700 overflow-hidden transition-all duration-300 hover:border-purple-400/50 hover:shadow-purple-900/50 flex flex-col"
            >
              <div className="relative">
                <img 
                  src={portrait.imageUrl} 
                  alt={`Portrait of ${portrait.profile.name}`} 
                  className="w-full h-48 object-cover object-center"
                />
                <div 
                  className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  onClick={() => onView(portrait)}
                >
                  <span className="text-white text-lg font-bold border-2 border-white/50 rounded-full px-4 py-2">View</span>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex-grow mb-4">
                   <h3 className="text-lg font-bold truncate text-gray-200" title={portrait.profile.name}>
                    {portrait.profile.name}
                  </h3>
                  <p className="text-sm text-gray-400 truncate">{portrait.profile.race} {portrait.profile.characterClass}</p>
                </div>
                <div className="flex justify-between items-center space-x-2">
                  <button 
                    onClick={() => onDownload(portrait.imageUrl, portrait.profile.name)}
                    className="text-sm py-1 px-3 bg-gray-700 hover:bg-green-600/80 rounded transition-colors text-gray-300 hover:text-white w-full flex-1"
                    aria-label={`Download portrait of ${portrait.profile.name}`}
                  >
                    Download
                  </button>
                  <button 
                    onClick={() => onDelete(portrait.id)}
                    className="p-2 bg-gray-700 hover:bg-red-600/80 rounded transition-colors text-gray-300 hover:text-white"
                    aria-label={`Delete portrait of ${portrait.profile.name}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SavedPortraitsGallery;
