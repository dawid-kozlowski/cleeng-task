import styled from "styled-components";
import type { Subscription } from "../types/types";

interface SubscriptionCardProps {
  data: Subscription;
  onCancel: () => void;
}
// The task description said to display a list of ACTIVE subscriptions but the bonus task
// mentioned adding the ability to change the status to CANCELLED. Those slightly contradict
// themselves but I assume the bonus section overrides the basic requirements so I've added
// the disable button and therefore the list also displays the cancelled subs 😅.

function SubscriptionCard({ data, onCancel }: SubscriptionCardProps) {
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
    <View>
      {headers.map((field) => (
        <View innerContainer key={field.key}>
          <Text category>{field.key}</Text>
          <Text
            style={
              field.key === "Status"
                ? { color: statusColors[field.value] || "inherit" }
                : undefined
            }
          >
            {field.value}
          </Text>
        </View>
      ))}
      <Button
        onClick={onCancel}
        disabled={data.status === "canceled"}
        type="button"
      >
        Cancel
      </Button>
    </View>
  );
}
export default SubscriptionCard;

const Button = styled.button`
  cursor: pointer;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background-color: var(--background);
  font-size: medium;
  font-weight: 600;
  border: 1px solid var(--background);
  border-radius: 0.5rem;
 
  &:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

&:hover {
  border: 1px solid var(--accent);
}

&:active {
  background-color: var(--accent);
`;

const View = styled.div<{ innerContainer?: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  padding: ${(props) => (props.innerContainer ? "0.5rem" : "1rem")};
  background-color: var(--surface);
  border: ${(props) =>
    props.innerContainer ? "none" : "1px solid var(--accent)"};
  margin-bottom: ${(props) => (props.innerContainer ? "0" : "0.5rem")};

  ${(props) =>
    !props.innerContainer &&
    `
  &:hover {
    box-shadow: 0 0 1rem var(--accent);
  }
`}
`;

const Text = styled.p<{ category?: boolean }>`
  margin: 0;
  color: ${(props) => (props.category ? "var(--accent)" : "var(--text)")};
  font-size: ${(props) => (props.category ? "small" : "normal")};
`;
