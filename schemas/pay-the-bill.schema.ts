import { z } from "zod";

export const electricBillSchema = z.object({
  fromCardNumber: z.string().min(1, "Please select a card"),
  otp: z.string().min(4, "OTP is required"),
});

export type ElectricBillFormData = z.infer<typeof electricBillSchema>;
