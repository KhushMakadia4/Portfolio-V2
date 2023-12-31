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
import { useToast } from "./ui/use-toast"
import { useState } from "react"

const ContactForm = () => {
  const { toast } = useToast()
  const [loading, setLoading] = useState<boolean>(false)

  const formSchema = z.object({
    subject: z.string().min(1, "Subject is required"),
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email").min(1, "Email is required"),
    message: z.string().min(1, "Message is required"),
    lastName: z.string() // Honeypot
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      name: "",
      email: "",
      message: "",
      lastName: ""
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (values.lastName !== "") {
      window.close()
    } else {
      setLoading(true)
      const dataObj = {
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message
      }
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(dataObj),
        cache: "force-cache",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
        .then((res) => {
          if (!res.ok) {
            toast({
              title: "There was a server error sending the message!",
              description: "Please email me directly or try again later!",
              variant: "destructive"
            })
          } else {
            toast({
              title: "Message sent successfully!",
              variant: "success"
            })
          }
          setLoading(false)
        })
        .catch(() => {
          toast({
            title: "There was a client error sending the message!",
            description:
              "Please refresh your webpage or browser or email me directly!",
            variant: "destructive"
          })
          setLoading(false)
        })
    }
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
        <div className="hidden">
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => {
              return (
                <FormItem className="space-y-0">
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your last name here..."
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
        </div>
        <div className="pb-4">
          <Button type="submit" className="w-40 h-12">
            {loading ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                className="m-auto bg-none block"
                // style="margin: auto; background: none; display: block; shape-rendering: auto;"
                width="48"
                height="32"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
              >
                <circle
                  cx="50"
                  cy="50"
                  fill="none"
                  stroke="#F4F4E5"
                  strokeWidth="8"
                  r="28"
                  strokeDasharray="136.659280431156 47.553093477052"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    dur="1.0204081632653061s"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                  ></animateTransform>
                </circle>
              </svg>
            ) : (
              <>Send Message</>
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default ContactForm
