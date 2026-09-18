import React from 'react';

export default function Toast({ toasts, onDismiss }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toasts">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast ${toast.type === 'success' ? 'toast-ok' : 'toast-err'}`}
          onClick={() => onDismiss(toast.id)}
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {toast.type === 'success' ? (
              <polyline points="20 6 9 17 4 12" />
            ) : (
              <>
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </>
            )}
          </svg>
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
