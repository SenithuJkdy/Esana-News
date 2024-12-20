// Article.js
import React from 'react';

const Article = () => {
  return (
    <div className="flex-1">
      <h1 className="text-2xl font-bold mb-2">
        ගොවීන්ට හෙක්ටයාරයක් සඳහා රුපියල් ලක්ෂයක පූර්ණ වන්දියක් ලබාදීමට රජය බැඳලා ඉන්නවා - නාමල් කරුණාරත්
      </h1>
      
      <div className="flex items-center space-x-2 text-gray-500 mb-4">
        <img src="https://www.helakuru.lk/assets/images/module_images/esena/timer.svg" alt="" />
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
        ආණ්ඩුවේ පළමු නිර්මාණය බවට පත්වූයේ හාල් සහ පොල් මිලදී ගැනීමට පෝලිමක් නිර්මාණය කිරීම බව සමගි ජන බලවේගයේ පාර්ලිමේන්තු මන්ත්‍රී ගයන්ත කරුණාතිලක පවසනවා.

ඒ අනුව වත්මන් ආණ්ඩුව හාල් සහ පොල් මිල හරහා සාමාන්‍ය මිනිසුන් ආහාරයට ගන්නා පොල් සම්බෝලය සහ බත සුඛෝපභෝගී ආහාරයක් බවට පත්කර ඇති බවයි අද (16) පැවති මාධ්‍ය හමුවකට එක්වෙමින් ඔහු සඳහන් කළේ.

මේ සෑම දෙයක් හරහාම පෙන්නුම් කරන්නේ රජයට පවතින ගැටලු කළමණාකරනය කිරීමේ නොහැකියාව බවයි පාර්ලිමේන්තු මන්ත්‍රී ගයන්ත කරුණාතිලක වැඩිදුරටත් ප්‍රකාශ කළේ.
          {/* Additional content here... */}
        </p>
      </div>
    </div>
  );
};

export default Article;
