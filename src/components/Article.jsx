// Article.js
import React from 'react';

const Article = () => {
  return (
    <div className="flex-1">
      <h1 className="text-2xl font-bold mb-2">
        ගොවීන්ට හෙක්ටයාරයක් සඳහා රුපියල් ලක්ෂයක පූර්ණ වන්දියක් ලබාදීමට රජය බැඳලා ඉන්නවා - නාමල් කරුණාරත්න
      </h1>
      
      <div className="flex items-center space-x-2 text-gray-500 mb-4">
        <span className="text-sm">පෙ.ව. 12 පෙ.ව. 11:57</span>
      </div>

      {/* Social Share Buttons */}
      <div className="flex space-x-3 mb-6">
        <button className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
          <span className="text-white text-sm">f</span>
        </button>
        <button className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-sm">w</span>
        </button>
        <button className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center">
          <span className="text-white text-sm">t</span>
        </button>
      </div>

      {/* Article Text */}
      <div className="prose max-w-none">
        <p className="text-base leading-relaxed text-gray-700 whitespace-pre-line">
          ගොවීන්ට සිදු වූ වගා හානිය වෙනුවෙන් හෙක්ටයාරයක් සඳහා රුපියල් ලක්ෂයක පූර්ණ වන්දි මුදලක් ලබාදීමට ආණ්ඩුව පියවර ගන්නා බව නාමල් කරුණාරත්න පවසනවා.
          {/* Additional content here... */}
        </p>
      </div>
    </div>
  );
};

export default Article;
