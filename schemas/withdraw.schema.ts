import { z } from "zod";

export const withdrawSchema = z.object({
  fromCardNumber: z.string().min(1, "Please select an account"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  amount: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Amount must be a positive number",
  }),
});

export type WithdrawFormData = z.infer<typeof withdrawSchema>;
