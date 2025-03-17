"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface Option {
  label: string
  value: string
}

interface CustomSelectProps {
  value: string
  onValueChange: (value: string) => void
  options: Option[]
  placeholder?: string
  className?: string
  id?: string
  defaultValue?: string
}

export function CustomSelect({
  value,
  onValueChange,
  options,
  placeholder = "Select...",
  className,
  id,
  defaultValue,
}: CustomSelectProps) {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      defaultValue={defaultValue}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
} 