'use client'

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"
import Image from 'next/image'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  src: string | null
  alt: string
}

export default function ImageModal({ isOpen, onClose, src, alt }: ImageModalProps) {
  if (!src) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] w-auto p-0 bg-transparent border-0">
        <DialogTitle className="sr-only">
          {alt}
        </DialogTitle>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 hover:bg-black/70 transition-colors"
        >
          <X className="h-5 w-5 text-white" />
          <span className="sr-only">Close</span>
        </button>
        <div className="relative h-[80vh] w-[90vw]">
          <Image
            src={src}
            alt={alt}
            fill
            quality={100}
            className="object-contain"
            sizes="90vw"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}