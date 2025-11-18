import { mockSubscriptions } from "../lib/mock-data";
import { useEffect, useState } from "react";
import type { Subscription } from "../types/types";

const useSubscriptions = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSubscriptions(mockSubscriptions);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { subscriptions, setSubscriptions, isLoading, error };
};

export default useSubscriptions;
