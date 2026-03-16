import { z } from "zod";

export const mobilePrepaidSchema = z.object({
  fromCardNumber: z.string().min(1, "Please select an account"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  beneficiaryName: z.string().min(1, "Name is required"),
  amount: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Amount must be a positive number",
  }),
  otp: z.string().optional(),
});

export type mobilePrepaidData = z.infer<typeof mobilePrepaidSchema>;
