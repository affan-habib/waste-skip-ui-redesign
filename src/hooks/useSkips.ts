import { useState, useEffect } from 'react';
import Skip from '@/types/skip';
import { toast } from 'sonner';

const API_URL = process.env.API_URL || 'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft';

async function fetchSkips(): Promise<Skip[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

function useSkips(): [Skip[], boolean, string | null] {
  const [skipData, setSkipData] = useState<Skip[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSkips = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchSkips();
        setSkipData(data);
      } catch (e: unknown) {
        const errorMessage = (e as Error).message;
        setError(errorMessage);
        toast.error('Failed to fetch skips', {
          description: errorMessage,
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadSkips();
  }, []);

  return [skipData, isLoading, error];
}

export default useSkips;