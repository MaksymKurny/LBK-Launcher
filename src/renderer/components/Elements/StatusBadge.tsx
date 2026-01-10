import React from 'react';

interface StatusBadgeProps {
  status: React.ReactNode;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => (
  <span
    className={
      className + status === 'completed'
        ? 'text-green-400'
        : status === 'in-progress'
          ? 'text-accent'
          : ''
    }
  >
    {status === 'completed'
      ? 'Завершено'
      : status === 'in-progress'
        ? 'Ранній доступ'
        : status === 'planned'
          ? 'Заплановано'
          : status}
  </span>
);
