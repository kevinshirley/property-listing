import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

export function ContactForm({ propertyId }: { propertyId: string }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const { toast } = useToast();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://primary-production-a84a.up.railway.app/webhook/property-information-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNumber,
          propertyId,
        }),
      });

      if (response.ok) {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');

        toast({
          title: "Message sent!",
          description: "The real estate agent will contact you soon.",
        });
      } else {
        throw new Error("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.log({ error: error.message })
    } finally {
      // setIsSubmitting(false);
      console.log('Turn off loading here');
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <Input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <Input
          type="number"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
}