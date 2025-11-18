import styles from "./SubscriptionList.module.css";
import SubscriptionCard from "./SubscriptionCard";
import useSubscriptions from "../hooks/useSubscriptions";

function SubscriptionList() {
  const { subscriptions, isLoading, error, setSubscriptions } =
    useSubscriptions();

  const handleCancel = (id: string) => {
    setSubscriptions((prev) =>
      prev.map((subscription) =>
        subscription.id === id
          ? { ...subscription, status: "canceled" }
          : subscription
      )
    );
  };

  return (
    <>
      <div className={styles.container}>
        <>
          {isLoading && <p className={styles.message}>Loading...</p>}
          {!isLoading && subscriptions?.length === 0 && (
            <p>No active subscriptions.</p>
          )}
          {error && <p>An error has occured: {error ?? "Unknown error"}</p>}
        </>
        {subscriptions.map((subscription) => (
          <SubscriptionCard
            key={subscription.id}
            data={subscription}
            onCancel={() => handleCancel(subscription.id)}
          />
        ))}
      </div>
    </>
  );
}

export default SubscriptionList;
