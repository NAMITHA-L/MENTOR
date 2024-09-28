import React from 'react';
import { ClipboardCheck, FileBadge } from 'lucide-react';

export const TopIconsAndCaption = () => (
  <div className="relative">
    {/* Left Icon */}
    <div className="absolute top-0 left-0 p-4 hidden sm:block">
      <ClipboardCheck className="w-24 h-24 text-[#071952]" />
    </div>

    {/* Right Icon */}
    <div className="absolute top-0 right-0 p-4 hidden sm:block">
      <FileBadge className="w-24 h-24 text-[#071952]" />
    </div>

    {/* Center Caption */}
    <div className="text-center mb-12 mt-16">
      <p className="text-2xl font-bold text-[#071952] mb-2">
        Empower your students with new challenges!
      </p>
      <p className="text-lg font-medium text-[#088395] mb-8">
        Upload assignments and quizzes to foster their learning and growth
      </p>
    </div>
  </div>
);
