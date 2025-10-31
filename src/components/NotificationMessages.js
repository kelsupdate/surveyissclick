import React, { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { showWelcomeMessages } from '../state';
import { Box, Typography } from '@mui/joy';

const messages = [
  {
    type: 'Withdrawal',
    message: '2547XX***782 has withdrawn Ksh 12,500. New balance: Ksh 500. Ref: TX12500EF.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 12,500 has been successfully sent to 2547XX***901. Ref: TX12500EF. Fee: Ksh 25.',
    color: 'success'
  },
  {
    type: 'Withdrawal',
    message: '2547XX***782 has withdrawn Ksh 4,500. New balance: Ksh 180. Ref: TX7824AB.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 4,500 has been successfully sent to 2547XX***901. Ref: TX7824AB. Fee: Ksh 25.',
    color: 'success'
  },
  {
    type: 'Withdrawal',
    message: '2547XX***782 has withdrawn Ksh 8,000. New balance: Ksh 320. Ref: TX8000AB.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 8,000 has been successfully sent to 2547XX***901. Ref: TX8000AB. Fee: Ksh 25.',
    color: 'success'
  },
  {
    type: 'Withdrawal',
    message: '2547XX***345 has withdrawn Ksh 3,000. New balance: Ksh 220. Ref: TX3456CD.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 3,000 has been successfully sent to 2547XX***678. Ref: TX3456CD. Fee: Ksh 15.',
    color: 'success'
  },
  {
    type: 'Withdrawal',
    message: '2547XX***901 has withdrawn Ksh 2,500. New balance: Ksh 130. Ref: TX9018EF.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 2,500 has been successfully sent to 2547XX***234. Ref: TX9018EF. Fee: Ksh 20.',
    color: 'success'
  },
  {
    type: 'Withdrawal',
    message: '2547XX***567 has withdrawn Ksh 2,000. New balance: Ksh 250. Ref: TX5670GH.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 2,000 has been successfully sent to 2547XX***890. Ref: TX5670GH. Fee: Ksh 10.',
    color: 'success'
  },
  {
    type: 'Withdrawal',
    message: '2547XX***123 has withdrawn Ksh 4,500. New balance: Ksh 150. Ref: TX1232IJ.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 4,500 has been successfully sent to 2547XX***456. Ref: TX1232IJ. Fee: Ksh 25.',
    color: 'success'
  },
  {
    type: 'Withdrawal',
    message: '2547XX***789 has withdrawn Ksh 3,000. New balance: Ksh 190. Ref: TX7894KL.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 3,000 has been successfully sent to 2547XX***012. Ref: TX7894KL. Fee: Ksh 15.',
    color: 'success'
  },
  {
    type: 'Withdrawal',
    message: '2547XX***234 has withdrawn Ksh 2,500. New balance: Ksh 210. Ref: TX2346MN.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 2,500 has been successfully sent to 2547XX***567. Ref: TX2346MN. Fee: Ksh 20.',
    color: 'success'
  },
  {
    type: 'Withdrawal',
    message: '2547XX***890 has withdrawn Ksh 2,000. New balance: Ksh 120. Ref: TX8908OP.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 2,000 has been successfully sent to 2547XX***123. Ref: TX8908OP. Fee: Ksh 10.',
    color: 'success'
  },
  {
    type: 'Withdrawal',
    message: '2547XX***456 has withdrawn Ksh 4,500. New balance: Ksh 240. Ref: TX4560QR.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 4,500 has been successfully sent to 2547XX***789. Ref: TX4560QR. Fee: Ksh 25.',
    color: 'success'
  },
  {
    type: 'Withdrawal',
    message: '2547XX***782 has withdrawn Ksh 10,000. New balance: Ksh 400. Ref: TX10000CD.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 10,000 has been successfully sent to 2547XX***901. Ref: TX10000CD. Fee: Ksh 25.',
    color: 'success'
  },
  {
    type: 'Withdrawal',
    message: '2547XX***782 has withdrawn Ksh 15,000. New balance: Ksh 600. Ref: TX15000GH.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 15,000 has been successfully sent to 2547XX***901. Ref: TX15000GH. Fee: Ksh 25.',
    color: 'success'
  },
  {
    type: 'Withdrawal',
    message: '2547XX***012 has withdrawn Ksh 3,000. New balance: Ksh 170. Ref: TX0122ST.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 3,000 has been successfully sent to 2547XX***345. Ref: TX0122ST. Fee: Ksh 15.',
    color: 'success'
  }
];

export default function NotificationMessages() {
  const [showMessages] = useAtom(showWelcomeMessages);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!showMessages) return;

    // Delay before showing first message
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
    }, 3000);

    return () => clearTimeout(initialDelay);
  }, [showMessages]);

  useEffect(() => {
    if (!isVisible || !showMessages) return;

    const cycleMessages = () => {
      // Stay for 3 seconds
      setTimeout(() => {
        // Start fade out
        setIsAnimating(false);

        // After 1.5s fade out, pause for 3s without message
        setTimeout(() => {
          // After 3s pause, change message and start fade in
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
          setIsAnimating(true);

          // After 3s display, cycle again
          setTimeout(cycleMessages, 3000);
        }, 4500); // 1.5s fade + 3s pause
      }, 3000);
    };

    cycleMessages();

    return () => {
      // Cleanup timeouts on unmount or dependency change
    };
  }, [isVisible, showMessages]);

  if (!showMessages || !isVisible) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '80px', // Below navbar
        right: '20px',
        zIndex: 1000,
        maxWidth: '300px',
        minWidth: '250px',
      }}
    >
      <Box
        sx={{
          background: messages[currentMessageIndex].color === 'warning'
            ? 'linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)'
            : 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
          color: 'white',
          padding: '12px 16px',
          borderRadius: '8px',
          boxShadow: messages[currentMessageIndex].color === 'warning'
            ? '0 4px 15px rgba(229, 46, 113, 0.4)'
            : '0 4px 15px rgba(40, 167, 69, 0.4)',
          fontSize: '0.875rem', // Small font
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          transform: isAnimating ? 'translateX(0)' : 'translateX(100%)',
          opacity: isAnimating ? 1 : 0,
          transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
        }}
      >
        <Typography
          sx={{
            fontSize: 'inherit',
            fontWeight: 500,
            lineHeight: 1.4,
          }}
        >
          {messages[currentMessageIndex].message}
        </Typography>
      </Box>
    </Box>
  );
}
