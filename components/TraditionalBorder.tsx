
import React from 'react';

const TraditionalBorder: React.FC<{ color?: string }> = ({ color = '#800000' }) => {
  return (
    <div className="absolute inset-0 pointer-events-none p-4 md:p-8 opacity-40">
      <div className="w-full h-full border-4 border-double" style={{ borderColor: color }}>
        <div className="absolute -top-2 -left-2 w-12 h-12 border-t-8 border-l-8 rounded-tl-xl" style={{ borderColor: color }}></div>
        <div className="absolute -top-2 -right-2 w-12 h-12 border-t-8 border-r-8 rounded-tr-xl" style={{ borderColor: color }}></div>
        <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-8 border-l-8 rounded-bl-xl" style={{ borderColor: color }}></div>
        <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-8 border-r-8 rounded-br-xl" style={{ borderColor: color }}></div>
      </div>
    </div>
  );
};

export default TraditionalBorder;
