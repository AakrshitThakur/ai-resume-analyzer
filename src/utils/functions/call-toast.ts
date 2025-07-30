"use client";
import { toast } from "sonner";
export default function callToast(msg: string, status: number) {
  const variant = status >= 200 && status < 300 ? toast.success : toast.error;

  variant(msg, { description: `Status: ${status}` });
}
