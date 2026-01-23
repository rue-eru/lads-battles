'use client'

import { notFound } from 'next/navigation';
import { useEffect } from 'react';

export default function CatchAll() {

    useEffect(() => {
        notFound();
    }, []);

    return null;
    
}