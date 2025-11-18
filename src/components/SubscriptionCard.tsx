import styles from "./SubscriptionCard.module.css";

interface SubscriptionCardProps {
  data: {
    id: string;
    offerTitle: string;
    status: string;
    price: number;
    currency: string;
    nextPaymentDate: string;
  };
}

function SubscriptionCard({ data }: SubscriptionCardProps) {
  const date = new Date(data.nextPaymentDate);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formatted = date.toLocaleDateString("en-US", options);

  const headers = [
    { key: "Offer title", value: data.offerTitle },
    { key: "Status", value: data.status },
    { key: "Price", value: `$${data.price}` },
    { key: "Due", value: formatted },
  ];

  const statusColors: Record<string, string> = {
    active: "limegreen",
    paused: "gold",
    canceled: "crimson",
  };

  return (
    <div className={styles.container}>
      {headers.map((field) => (
        <div className={styles.innerContainer}>
          <p className={styles.category}>{field.key}</p>
          <p
            key={field.key}
            style={
              field.key === "Status"
                ? { color: statusColors[field.value] || "inherit" }
                : undefined
            }
          >
            {field.value}
          </p>
        </div>
      ))}

      <button
        disabled={data.status === "canceled"}
        className={styles.cancelButton}
        type="button"
      >
        Cancel
      </button>
    </div>
  );
}

export default SubscriptionCard;
