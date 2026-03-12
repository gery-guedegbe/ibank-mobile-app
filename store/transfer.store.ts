import { CreditCardFormData } from "@/schemas/transfer.schema";
import { create } from "zustand";

interface TransferState {
  transferData: Partial<CreditCardFormData> | null;
  setTransferData: (data: CreditCardFormData) => void;
  clearTransferData: () => void;
}

export const useTransferStore = create<TransferState>((set) => ({
  transferData: null,
  setTransferData: (data) => set({ transferData: data }),
  clearTransferData: () => set({ transferData: null }),
}));
