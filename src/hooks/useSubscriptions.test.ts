import { renderHook, act } from "@testing-library/react";
import { vi } from "vitest";
import useSubscriptions from "./useSubscriptions";
import { mockSubscriptions } from "../lib/mock-data";

describe("useSubscriptions", () => {
    afterEach(() => {
        vi.useRealTimers();
        vi.restoreAllMocks();
    });

    it("should return initial state", () => {
        const { result } = renderHook(() => useSubscriptions());

        expect(result.current.isLoading).toBe(true);
        expect(result.current.subscriptions).toEqual([]);
        expect(result.current.error).toBeNull();
    });

    it("should fetch subscriptions successfully", async () => {
        vi.useFakeTimers();
        const { result } = renderHook(() => useSubscriptions());

        // Fast-forward time
        await act(async () => {
            vi.advanceTimersByTime(1000);
        });

        expect(result.current.isLoading).toBe(false);
        expect(result.current.subscriptions).toEqual(mockSubscriptions);
        expect(result.current.error).toBeNull();
    });

    it("should update subscriptions when setSubscriptions is called", () => {
        const { result } = renderHook(() => useSubscriptions());

        const newSubscriptions = [
            {
                id: "TEST123",
                offerTitle: "Test Subscription",
                status: "active" as const,
                price: 9.99,
                currency: "USD",
                nextPaymentDate: "2025-12-01T10:00:00Z",
            },
        ];

        act(() => {
            result.current.setSubscriptions(newSubscriptions);
        });

        expect(result.current.subscriptions).toEqual(newSubscriptions);
    });
});
