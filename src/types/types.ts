export const SUBSCRIPTION_STATUS = {
  ACTIVE: "active",
  PAUSED: "paused",
  CANCELED: "canceled",
} as const;

export type SubscriptionStatus =
  (typeof SUBSCRIPTION_STATUS)[keyof typeof SUBSCRIPTION_STATUS];

export type Subscription = {
  id: string;
  offerTitle: string;
  status: SubscriptionStatus;
  price: number;
  currency: string;
  nextPaymentDate: string;
};
