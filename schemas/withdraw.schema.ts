import { z } from "zod";

export const withdrawSchema = z.object({
  fromCardNumber: z.string().min(1, "Please select an account"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  // beneficiaryName: z.string().min(1, "Name is required").optional(),
  amount: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Amount must be a positive number",
  }),
  // otp: z.string().min(4, "OTP is required").optional(),
});

export type WithdrawFormData = z.infer<typeof withdrawSchema>;
