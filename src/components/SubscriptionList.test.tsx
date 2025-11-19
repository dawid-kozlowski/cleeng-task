import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import SubscriptionList from "./SubscriptionList";
import useSubscriptions from "../hooks/useSubscriptions";
import type { Subscription } from "../types/types";

// Mock the useSubscriptions hook
vi.mock("../hooks/useSubscriptions", () => ({
    default: vi.fn(),
}));

const mockUseSubscriptions = useSubscriptions as unknown as ReturnType<typeof vi.fn>;

const mockSubscriptionsData: Subscription[] = [
    {
        id: "1",
        offerTitle: "Premium Plan",
        status: "active",
        price: 10,
        currency: "USD",
        nextPaymentDate: "2023-12-01",
    },
    {
        id: "2",
        offerTitle: "Basic Plan",
        status: "active",
        price: 5,
        currency: "USD",
        nextPaymentDate: "2023-12-15",
    },
];

describe("SubscriptionList", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders loading state", () => {
        mockUseSubscriptions.mockReturnValue({
            subscriptions: [],
            isLoading: true,
            error: null,
            setSubscriptions: vi.fn(),
        });

        render(<SubscriptionList />);
        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it("renders error state", () => {
        const errorMessage = "Failed to fetch";
        mockUseSubscriptions.mockReturnValue({
            subscriptions: [],
            isLoading: false,
            error: errorMessage,
            setSubscriptions: vi.fn(),
        });

        render(<SubscriptionList />);
        expect(screen.getByText(`An error has occured: ${errorMessage}`)).toBeInTheDocument();
    });

    it("renders empty state", () => {
        mockUseSubscriptions.mockReturnValue({
            subscriptions: [],
            isLoading: false,
            error: null,
            setSubscriptions: vi.fn(),
        });

        render(<SubscriptionList />);
        expect(screen.getByText("No active subscriptions.")).toBeInTheDocument();
    });

    it("renders list of subscriptions", () => {
        mockUseSubscriptions.mockReturnValue({
            subscriptions: mockSubscriptionsData,
            isLoading: false,
            error: null,
            setSubscriptions: vi.fn(),
        });

        render(<SubscriptionList />);
        expect(screen.getByText("Premium Plan")).toBeInTheDocument();
        expect(screen.getByText("Basic Plan")).toBeInTheDocument();
    });

    it("calls setSubscriptions when cancel button is clicked", () => {
        const setSubscriptionsMock = vi.fn();
        mockUseSubscriptions.mockReturnValue({
            subscriptions: mockSubscriptionsData,
            isLoading: false,
            error: null,
            setSubscriptions: setSubscriptionsMock,
        });

        render(<SubscriptionList />);

        const cancelButtons = screen.getAllByRole("button", { name: /cancel/i });
        fireEvent.click(cancelButtons[0]);

        expect(setSubscriptionsMock).toHaveBeenCalled();
    });
});
