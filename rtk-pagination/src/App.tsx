import { useState, useEffect } from 'react';

interface User {
  id: number;
  username: string;
}

const a = [1, 'hi'] as const;

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {}, []);
  return <div>App</div>;
}
