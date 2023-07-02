"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import { getProviders, signIn } from 'next-auth/react';

const AuthProvider = () => {
    type Provider = {
        id: string;
        name: string;
        type: string;
        signInUrl: string;
        callbackUrl: string;
        signInUrlParams: Record<string, string> | null;
    }

    type Providers = Record<string, Provider>;

    const [providers, setProviders] = useState<Providers | null>(null);


    useEffect(() => {
        const fetchProviders = async () => {
            const res: any = await getProviders();
            console.log(res);

            setProviders(res);
        }
        fetchProviders();
    }, [])

    if (providers) {
        return (
            <div>
                {Object.values(providers).map((provider: Provider, i) => (
                    <button key={i}>{provider.id}</button>
                ))}
            </div>
        )
    }
};

export default AuthProvider;