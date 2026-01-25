'use client';

import type { ErrorProps } from '../utils/interfaces-data';
import { useEffect } from 'react';
import ErrorPage from '../components/ErrorPage';

// to test it throw that in any server component it will trigger error on refresh
// throw new Error('Testing 500 error!');

export default function Error({error, reset}: ErrorProps) {

  useEffect(() => {
        console.error(error)
  }, [error])
 
  return (
    <div>
      <ErrorPage code={500} onRetry={reset}/>
    </div>
  );
}