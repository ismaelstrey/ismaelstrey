import React from "react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Contact() {
  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 md:gap-8 lg:p-12">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Contact Me
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Want to get in touch? Send me a message.
        </p>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label className="text-lg" htmlFor="name">
            Name
          </Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div className="grid gap-2">
          <Label className="text-lg" htmlFor="email">
            Email
          </Label>
          <Input id="email" placeholder="Enter your email" type="email" />
        </div>
        <div className="grid gap-2">
          <Label className="text-lg" htmlFor="message">
            Message
          </Label>
          <Textarea
            className="min-h-[150px] resize-y"
            id="message"
            placeholder="Enter your message"
          />
        </div>
        <Button size="lg">Submit</Button>
      </div>
    </div>
  );
}
