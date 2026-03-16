import { z } from "zod";

export const saveOnlineSchema = z.object({
  fromCardNumber: z.string().min(1, "Please select an account"),
  duration: z.string().min(1, "Please choose a time deposit"),
  amount: z.string().refine((val) => Number(val) >= 1000, {
    message: "Amount must be at least $1000",
  }),
});

export type SaveOnlineFormData = z.infer<typeof saveOnlineSchema>;

export const confirmSaveSchema = saveOnlineSchema.extend({
  otp: z.string().min(4, "OTP is required"),
});

export type ConfirmSaveFormData = z.infer<typeof confirmSaveSchema>;
