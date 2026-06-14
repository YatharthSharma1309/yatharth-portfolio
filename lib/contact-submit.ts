export type ContactPayload = {
  name: string;
  email: string;
  companyRole: string;
  message: string;
};

type ContactResult = {
  ok: boolean;
  delivery?: "email" | "local";
  error?: string;
};

export async function submitContactForm(payload: ContactPayload): Promise<ContactResult> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = (await response.json()) as {
    ok?: boolean;
    error?: string;
    delivery?: string;
  };

  if (!response.ok) {
    return { ok: false, error: result.error ?? "Something went wrong. Please try again." };
  }

  return {
    ok: true,
    delivery: (result.delivery as ContactResult["delivery"]) ?? "email",
  };
}
