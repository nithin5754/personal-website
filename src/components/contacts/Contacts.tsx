"use client"
import { useState } from "react"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../ui/dialog"
import { Copy, Check, Mail } from "lucide-react"

const ContactsDiaLogBox = () => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText("nithinjoji0756@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const openGmail = () => {
    const mailtoLink = `mailto:nithinjoji0756@gmail.com`
    const gmailLink = `https://mail.google.com/mail/?view=cm&to=nithinjoji0756@gmail.com`
    window.open(gmailLink, "_blank")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Contact me</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
          <DialogDescription>Feel free to reach out 👇</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col space-y-1">
            <p className="text-sm text-muted-foreground">Name</p>
            <p className="text-lg font-medium">Nithin Joji</p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-sm text-muted-foreground">Email</p>
            <div className="flex items-center justify-between bg-muted px-3 py-2 rounded-md">
              <span className="text-sm">nithinjoji0756@gmail.com</span>
              <Button variant="ghost" size="icon" onClick={handleCopy}>
                {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </div>
          <Button variant="secondary" className="mt-2 w-full" onClick={openGmail}>
            <Mail className="w-4 h-4 mr-2" /> Email via Gmail
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ContactsDiaLogBox
