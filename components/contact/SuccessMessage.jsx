import React from 'react';
import { MdCheck } from 'react-icons/md';
import Button from '@/components/ui/Button';

const SuccessMessage = ({ onSendAnother }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8 bg-green-500/10 border border-green-500/20 rounded-lg">
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
        <MdCheck className="text-2xl text-white" />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold text-green-400 mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-white/80">
          Thank you for reaching out. I'll get back to you within 24 hours.
        </p>
      </div>
      <Button
        variant="outlined"
        onClick={onSendAnother}
        className="mt-4"
      >
        Send Another Message
      </Button>
    </div>
  );
};

export default SuccessMessage;
