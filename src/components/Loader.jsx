import { Html } from '@react-three/drei';
import React from 'react';

const Loader = () => {
  return (
    <Html center>
      <div className="flex items-center justify-center w-full h-full">
        <div
          className="w-16 h-16 border-t-2 border-b-2 border-indigo-600 rounded-full animate-spin"
          style={{
            borderTopColor: '#6a0dad', // Deep purple top border
            borderBottomColor: '#4b0082', // Indigo bottom border
            borderWidth: '4px',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-indigo-600 rounded-full animate-bounce"></div>
          </div>
        </div>
        <p className="mt-4 text-indigo-600">Loading...</p>
      </div>
    </Html>
  );
};

export default Loader;
