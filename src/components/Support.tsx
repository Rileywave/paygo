
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SupportProps {
  onBack: () => void;
}

const Support: React.FC<SupportProps> = ({ onBack }) => {
  const handleLiveChat = () => {
    window.open('https://t.me/Redpaycustomerservice', '_blank');
  };

  const handleWhatsAppSupport = () => {
    window.open('https://wa.me/2347043531108', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center space-x-4">
          <button onClick={onBack}>
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Support</h1>
        </div>
      </div>

      <div className="p-6 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">How can we help you?</h2>
        </div>

        <div className="space-y-6">
          {/* Live Chat */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-blue-700 text-2xl">💬</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Telegram Live Chat</h3>
                <p className="text-gray-600">Chat with our support team directly in the app</p>
              </div>
            </div>
            <Button 
              onClick={handleLiveChat}
              className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-xl mb-4"
            >
              💬 Start Live Chat
            </Button>
            <p className="text-gray-600 text-sm">
              Our support agents are available to assist you with any questions or issues.
            </p>
          </div>

          {/* WhatsApp Support */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-green-600 text-2xl">💬</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Chat on WhatsApp</h3>
                <p className="text-gray-600">Chat with our support team on WhatsApp for quick assistance</p>
              </div>
            </div>
            <Button 
              onClick={handleWhatsAppSupport}
              className="w-full h-14 bg-green-500 hover:bg-green-600 text-white text-lg font-medium rounded-xl mb-4"
            >
              💬 Chat on WhatsApp
            </Button>
            <p className="text-gray-600 text-sm">
            
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-2">Financial Services</p>
          <p className="text-gray-600">PayGo © 2023. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
