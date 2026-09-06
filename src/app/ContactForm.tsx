"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Възникна грешка при изпращането.");
      }

      form.reset();
      setStatus("success");
      setMessage("Запитването е изпратено успешно. Ще се свържем с вас.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Възникна грешка при изпращането."
      );
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Име"
        autoComplete="name"
        required
      />

      <input
        name="phone"
        type="tel"
        placeholder="Телефон"
        autoComplete="tel"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Имейл"
        autoComplete="email"
        required
      />

      <textarea
        name="message"
        placeholder="Разкажете ни накратко за проекта"
        required
      />

      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Изпращане..." : "Изпрати запитване"}
      </button>

      {message && (
        <p
          className={`form-status ${
            status === "success" ? "form-success" : "form-error"
          }`}
          role="status"
        >
          {message}
        </p>
      )}
    </form>
  );
}
