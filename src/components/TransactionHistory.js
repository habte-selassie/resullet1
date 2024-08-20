import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

export default function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const { data, error } = await supabase
          .from('transactions')
          .select('*')
          .order('date', { ascending: false });

        if (error) throw error;
        setTransactions(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTransactions();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map(tx => (
          <li key={tx.id}>
            {tx.date}: {tx.amount} {tx.currency}
          </li>
        ))}
      </ul>
    </div>
  );
}
