import styled from "styled-components";
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
      <View>
        <>
          {isLoading && <Text>Loading...</Text>}
          {!isLoading && subscriptions?.length === 0 && (
            <p>No active subscriptions.</p>
          )}
          {error && (
            <Text>An error has occured: {error ?? "Unknown error"}</Text>
          )}
        </>
        {subscriptions.map((subscription) => (
          <SubscriptionCard
            key={subscription.id}
            data={subscription}
            onCancel={() => handleCancel(subscription.id)}
          />
        ))}
      </View>
    </>
  );
}

export default SubscriptionList;

const View = styled.div`
  margin: 2rem 0;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const Text = styled.p`
  grid-column: 1 / -1;
  font-size: 1.5rem;
  justify-self: center;
  text-shadow: 0 0 1rem var(--accent);
`;
