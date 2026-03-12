import { z } from "zod";

export const creditCardSchema = z.object({
  fromCardNumber: z.string().min(1, "Please select a card"),
  transactionType: z.enum(["card", "same_bank", "other_bank"]),
  beneficiaryName: z.string().min(1, "Name is required"),
  beneficiaryCardNumber: z.string().min(16, "Invalid card number"),
  bankName: z.string().optional(),
  amount: z.string().min(1, "Amount is required"),
  content: z.string().optional(),
  saveToDirectory: z.boolean(),
});

export type CreditCardFormData = z.infer<typeof creditCardSchema>;

export const confirmTransferSchema = creditCardSchema.extend({
  fromCardNumber: z.string().min(1, "Please select a card"),
  transactionType: z.enum(["card", "same_bank", "other_bank"]),
  beneficiaryName: z.string().min(1, "Name is required"),
  beneficiaryCardNumber: z.string().min(16, "Invalid card number"),
  bankName: z.string().optional(),
  amount: z.string().min(1, "Amount is required"),
  content: z.string().optional(),
  saveToDirectory: z.boolean(),
  otp: z.string().min(4, "OTP is required"),
});

export type ConfirmTransferFormData = z.infer<typeof confirmTransferSchema>;
