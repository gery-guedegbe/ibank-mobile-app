import { SaveOnlineFormData } from "@/schemas/save-online.schema";
import { create } from "zustand";

interface SaveState {
  saveData: SaveOnlineFormData | null;
  setSaveData: (data: SaveOnlineFormData) => void;
  clearSaveData: () => void;
}

export const useSaveStore = create<SaveState>((set) => ({
  saveData: null,
  setSaveData: (data) => set({ saveData: data }),
  clearSaveData: () => set({ saveData: null }),
}));
