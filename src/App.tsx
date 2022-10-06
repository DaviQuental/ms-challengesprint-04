import React, { useEffect } from 'react';
import { useEmailContext,useEmailQuery } from './common';

export const App: React.FC = () => {
  const { emails, isLoading, isEmpty } = useEmailQuery()

  if (isLoading) return <div>Loading.....</div>
  if (isEmpty) return <div>There's no email here 😥</div>

  return (
    <div>
      {emails.map(({ id, subject }) => (
        <div key={id}>
          <p>{id}</p>
          <p>{subject}</p>
        </div>
      ))}
    </div>
  );
}
