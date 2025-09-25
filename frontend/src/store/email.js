import { create } from "zustand";



export const useEmailStore = create((set, get) => ({
    emails: [],
    setEmails: (emails) => set({ emails }),
    createEmail: async(newEmail) => {
        if (!newEmail.email) {
            return { success: false, message: "Please enter a valid email" }
        }
        const existing = get().emails.find((e) => e.email.toLowercase() === newEmail.email.toLowercase());
        if (existing) {
            return { success: false, message: "You are already subscribed" }
        }

        try {
            const res = await fetch("/api/emails", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEmail)
            });
            const data = await res.json();

            if (!res.ok) {
                return { success: false, message: data.message || "Subscription failed" }
            }
            set((state) => ({ emails: [...state.emails, data.data] }));
            return { success: true, message: "Subscription successful" }
        } catch (error) {
            console.error("Error creating email:", error);
            return { success: false, message: "Network error, try again later" }
        }
    }
}))