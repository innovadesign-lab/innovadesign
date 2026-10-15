"use client";

import { useState } from "react";
import { STUDIO } from "@/modules/cores/site/src/config/site";

interface ContactFormProps {
  labels: {
    name: string;
    email: string;
    message: string;
    submit: string;
    hint: string;
  };
}

export function ContactForm({ labels }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Innova Design — ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${STUDIO.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-2 text-small text-ink">
        {labels.name}
        <input
          required
          name="name"
          autoComplete="name"
          className="input"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label className="grid gap-2 text-small text-ink">
        {labels.email}
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          className="input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label className="grid gap-2 text-small text-ink">
        {labels.message}
        <textarea
          required
          name="message"
          rows={6}
          className="input resize-y"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>
      <p className="text-small text-ink-muted">{labels.hint}</p>
      <button type="submit" className="btn btn-primary w-fit">
        {labels.submit}
      </button>
    </form>
  );
}
