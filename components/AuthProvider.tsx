
import { useEffect, useState } from 'react';
import { getProviders, signIn } from 'next-auth/react';

const AuthProvider = () => {

    type Provider = {
        id: string,
        name: string,
        type: string,
        signInUrl: string,
        callbackUrl: string,
        signInUrlParams?: Record<string, string> | null
    }

    type Providers = Record<string, Provider>

    const [providers, setProviders] = useState<Providers | null>(null)

    useEffect(() => {
        const fetchProviders = async () => {
            const res: any = await getProviders();
            setProviders(res)
        }

        fetchProviders()
    }, [])

    console.log("Providers: ", providers)

    if (providers) {
        return <div>
            {Object.values(providers).map((provider: Provider, i) =>
                <button key={i}>{provider.id}</button>)}
        </div>
    }
};

