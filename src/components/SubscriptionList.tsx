import SubscriptionCard from "./SubscriptionCard";
import styles from "./SubscriptionList.module.css";
import { mockSubscriptions } from "../lib/mock-data";

function SubscriptionList() {
  return (
    <>
      <div className={styles.container}>
        {mockSubscriptions.map((subscriber) => (
          <SubscriptionCard key={subscriber.id} data={subscriber} />
        ))}
      </div>
    </>
  );
}

export default SubscriptionList;
