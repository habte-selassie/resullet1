import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const channel = supabase.channel('public:notifications')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'notifications' }, payload => {
        setNotifications(prev => [payload.new, ...prev]);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map(notif => (
          <li key={notif.id}>
            {notif.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
