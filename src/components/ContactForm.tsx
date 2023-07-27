"use client"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"

const ContactForm = () => {
  const formSchema = z.object({
    subject: z.string().min(1, "Subject is required"),
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email").min(1, "Email is required"),
    message: z.string().min(1, "Message is required")
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      name: "",
      email: "",
      message: ""
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-6">
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => {
            return (
              <FormItem className="space-y-0">
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter subject here..."
                    {...field}
                    className="h-10 bg-zinc-200 shadow border focus:border-zinc-800"
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )
          }}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem className="space-y-0">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your name here..."
                    {...field}
                    className="h-10 bg-zinc-200 shadow border focus:border-zinc-800"
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )
          }}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            return (
              <FormItem className="space-y-0">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email here..."
                    {...field}
                    className="h-10 bg-zinc-200 shadow border focus:border-zinc-800"
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )
          }}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => {
            return (
              <FormItem className="space-y-0">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter your message here..."
                    {...field}
                    className="bg-zinc-200 shadow border focus:border-zinc-800"
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )
          }}
        />
        <div className="pb-4">
          <Button type="submit" className="w-40 h-12">
            Send Message
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default ContactForm
