import { mobilePrepaidData } from "@/schemas/mobile-prepaid.schema";
import { create } from "zustand";

interface MobilePrepaidState {
  mobilePrepaidData: Partial<mobilePrepaidData> | null;
  setMobilePrepaidData: (data: mobilePrepaidData) => void;
  clearMobilePrepaidData: () => void;
}

export const useMobilePrepaidStore = create<MobilePrepaidState>((set) => ({
  mobilePrepaidData: null,
  setMobilePrepaidData: (data) => set({ mobilePrepaidData: data }),
  clearMobilePrepaidData: () => set({ mobilePrepaidData: null }),
}));
