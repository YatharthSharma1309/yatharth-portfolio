export type ContactPayload = {
  name: string;
  email: string;
  companyRole: string;
  message: string;
};

type ContactResult = {
  ok: boolean;
  delivery?: "email" | "web3forms" | "local";
  error?: string;
};

/** True when built for static GitHub Pages (no /api routes). */
export const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

export async function submitContactForm(payload: ContactPayload): Promise<ContactResult> {
  const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
  const useWeb3Forms = Boolean(web3Key && isStaticExport);

  if (useWeb3Forms && web3Key) {
    const body = new FormData();
    body.append("access_key", web3Key);
    body.append("name", payload.name);
    body.append("email", payload.email);
    body.append(
      "subject",
      payload.companyRole
        ? `Portfolio inquiry — ${payload.name} (${payload.companyRole})`
        : `Portfolio inquiry — ${payload.name}`,
    );
    body.append(
      "message",
      [payload.companyRole ? `Company / Role: ${payload.companyRole}` : null, "", payload.message]
        .filter(Boolean)
        .join("\n"),
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body,
    });

    const result = (await response.json()) as { success?: boolean; message?: string };
    if (!response.ok || !result.success) {
      return {
        ok: false,
        error: result.message ?? "Could not send your message. Please use the email link below.",
      };
    }

    return { ok: true, delivery: "web3forms" };
  }

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
