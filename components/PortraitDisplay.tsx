import React from 'react';

interface PortraitDisplayProps {
  image: string | null;
  isLoading: boolean;
  error: string | null;
}

const LoadingSpinner: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full text-center">
    <svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <p className="mt-4 text-lg text-gray-300">The mages are weaving your portrait...</p>
    <p className="text-sm text-gray-500">This may take a moment.</p>
  </div>
);

const InitialState: React.FC = () => (
    <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 p-8">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <h3 className="text-xl font-semibold text-gray-400">Your Portrait Awaits</h3>
      <p className="mt-2 max-w-sm">
        Fill in your character's details to bring them to life. Generated portraits will be saved in a gallery below.
      </p>
    </div>
);


const PortraitDisplay: React.FC<PortraitDisplayProps> = ({ image, isLoading, error }) => {
  return (
    <div className="bg-gray-800/50 w-full aspect-square rounded-lg shadow-lg border border-gray-700 flex items-center justify-center p-4">
      {isLoading && <LoadingSpinner />}
      {error && !isLoading && (
        <div className="text-center text-red-400 p-4">
          <h3 className="text-xl font-bold">Generation Failed</h3>
          <p className="mt-2 text-red-300">{error}</p>
        </div>
      )}
      {!isLoading && !error && image && (
        <img
          src={image}
          alt="Generated character portrait"
          className="object-contain w-full h-full rounded-md"
        />
      )}
      {!isLoading && !error && !image && <InitialState />}
    </div>
  );
};

export default PortraitDisplay;
