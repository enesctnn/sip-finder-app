'use client';

import React, { useEffect, useState } from 'react';
import styles from './FeedbackMessage.module.scss';

interface FeedbackMessageProps {
  message: string;
  success?: boolean;
  error?: boolean;
}

export const FeedbackMessage: React.FC<FeedbackMessageProps> = ({
  message,
  success,
  error,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <p
      className={`${success ? styles['success-message'] : ' '} ${
        error ? styles['error-message'] : ''
      }`}
    >
      {message}
    </p>
  );
};
