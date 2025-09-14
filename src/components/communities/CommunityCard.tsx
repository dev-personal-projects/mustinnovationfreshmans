'use client';

import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { Community } from '@/types/community';

interface CommunityCardProps {
  community: Community;
}

export function CommunityCard({ community }: CommunityCardProps) {
  const handleJoinClick = () => {
    window.open(community.whatsappLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden">
      <CardContent className="p-0">
        {/* Gradient Header */}
        <div className={`h-20 bg-gradient-to-r ${community.color} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative h-full flex items-center justify-center">
            <span className="text-3xl">{community.icon}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-yellow-400 group-hover:to-pink-600 group-hover:bg-clip-text transition-all">
            {community.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
            {community.description}
          </p>
          
          {/* Join Button */}
          <button
            onClick={handleJoinClick}
            className="w-full bg-gradient-to-r from-blue-600 via-yellow-400 to-pink-600 text-white font-medium py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 group"
          >
            <span>Join WhatsApp Group</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}