// pages/index.tsx
import { FC } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

export default async function Page() {
    const users: User[] = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
      ];
    return <HomePage users={users} />;
}

interface HomePageProps {
    users: User[];
  }
  
  const HomePage: FC<HomePageProps> = ({ users }) => {
    return (
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">User List</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="mb-2 p-4 border rounded shadow">
              <p className="text-lg font-semibold">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };