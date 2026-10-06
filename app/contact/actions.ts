"use server";

export type ContactState = {
  ok: boolean;
  message: string;
  errors?: Partial<Record<"name" | "phone" | "address", string>>;
};

export async function requestInspection(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const address = String(formData.get("address") ?? "").trim();

  const errors: ContactState["errors"] = {};
  if (!name) errors.name = "Please enter your name.";
  if (phone.replace(/\D/g, "").length < 10) errors.phone = "Please enter a valid phone number.";
  if (!address) errors.address = "Please enter the property address.";
  if (Object.keys(errors).length) {
    return { ok: false, message: "Please fix the highlighted fields.", errors };
  }

  // TODO: deliver the lead (email service, CRM, etc.). Logged for now.
  console.log("Inspection request", {
    name,
    phone,
    address,
    email: formData.get("email"),
    service: formData.get("service"),
    message: formData.get("message"),
  });

  return { ok: true, message: `Thanks, ${name.split(" ")[0]}! We'll call you shortly to schedule your inspection.` };
}
