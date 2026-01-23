'use client';

import type { ErrorProps } from '../utils/interfaces-data';
import { useEffect } from 'react';
import ErrorPage from '../components/ErrorPage';


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