import { mockSubscriptions } from "../lib/mock-data";
import { useEffect, useState } from "react";
import type { Subscription } from "../types/types";

const useSubscriptions = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // If the data neeeded to be accessed by multiple comopnents without loading it in I would
  // use react context/zustand/tanstack Query here. Tanstack especially has some nice
  // loading and error props.

  // However in the current task scenario I don't see a valid reason to implement redux.

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
