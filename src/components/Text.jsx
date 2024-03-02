import React from 'react';

function Text({ text, size, padding, textAlign, wSpacing }) {
    return (
        <p className={`font-goldman text-white uppercase ${size} ${padding} ${textAlign} ${wSpacing}`}>{text}</p>
    );
}

export default Text;