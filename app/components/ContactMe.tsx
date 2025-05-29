"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactMe() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted form:", form);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl">Contact Me</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Input
              placeholder="Your Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Textarea
              placeholder="Your Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
            />
            <Button type="submit" className="w-full">Send</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
