"use client";

import React, { createContext, useContext, useState } from "react";

export function HeroUIProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function Avatar({ src, size = "md", className = "", name }: any) {
  const dim = size === "sm" ? "w-8 h-8" : size === "lg" ? "w-14 h-14" : "w-10 h-10";
  return (
    <img
      src={src || "https://placehold.co/80x80"}
      alt={name || "avatar"}
      className={`${dim} rounded-full object-cover bg-default-200 ${className}`}
    />
  );
}

export function Badge({ children, content, isInvisible, classNames }: any) {
  return (
    <div className="relative inline-flex">
      {children}
      {!isInvisible && content !== undefined && (
        <span className={`absolute -right-1 -bottom-1 min-w-4 h-4 px-1 text-[10px] rounded-full bg-primary text-white flex items-center justify-center ${classNames?.badge || ""}`}>
          {content}
        </span>
      )}
    </div>
  );
}

export function Button({ children, className = "", onPress, onClick, isIconOnly, variant, color }: any) {
  const base = variant === "flat" ? "bg-default-100" : variant === "light" ? "bg-transparent" : color === "primary" ? "bg-primary text-white" : "bg-default-200";
  return (
    <button onClick={onClick || onPress} className={`${base} rounded-lg px-3 py-2 text-sm hover:opacity-90 ${isIconOnly ? "inline-flex items-center justify-center p-2" : ""} ${className}`}>
      {children}
    </button>
  );
}

export function Input({ startContent, classNames, ...props }: any) {
  return (
    <div className={`flex items-center gap-2 rounded-lg px-3 py-2 ${classNames?.inputWrapper || "bg-default-100"}`}>
      {startContent}
      <input {...props} value={props.value ?? ""} onChange={(e) => props.onValueChange?.(e.target.value)} className="bg-transparent outline-none w-full text-sm" />
    </div>
  );
}

export function Textarea({ classNames, ...props }: any) {
  return (
    <div className={`rounded-lg ${classNames?.inputWrapper || "bg-default-100"}`}>
      <textarea {...props} value={props.value ?? ""} onChange={(e) => props.onValueChange?.(e.target.value)} className={`w-full bg-transparent outline-none p-3 ${classNames?.input || ""}`} />
    </div>
  );
}

export function ScrollShadow({ children, className = "", style }: any) {
  return <div className={className} style={style}>{children}</div>;
}

export function Tooltip({ children }: any) { return <>{children}</>; }
export function Divider({ className = "" }: any) { return <hr className={`border-default-200 ${className}`} />; }
export function Chip({ children, className = "" }: any) { return <span className={`inline-flex px-2 py-0.5 rounded-full bg-default-200 text-xs ${className}`}>{children}</span>; }

export function useDisclosure() {
  const [isOpen, setOpen] = useState(false);
  return { isOpen, onOpen: () => setOpen(true), onOpenChange: (next: boolean) => setOpen(next) };
}

export function Modal({ children, isOpen }: any) { return isOpen ? <div className="fixed inset-0 z-40 bg-black/40 flex items-center justify-center">{children}</div> : null; }
export function ModalContent({ children }: any) { return <div className="bg-default-100 rounded-xl w-full max-w-xl p-2">{typeof children === "function" ? children(() => {}) : children}</div>; }
export function ModalHeader({ children, className = "" }: any) { return <div className={className}>{children}</div>; }
export function ModalBody({ children }: any) { return <div>{children}</div>; }
export function ModalFooter({ children }: any) { return <div className="flex justify-end gap-2 mt-4">{children}</div>; }

const TabsContext = createContext<any>(null);
export function Tabs({ children, selectedKey, onSelectionChange }: any) {
  return <TabsContext.Provider value={{ selectedKey, onSelectionChange }}>{children}</TabsContext.Provider>;
}
export function Tab({ title, key: tabKey }: any) {
  const ctx = useContext(TabsContext);
  const active = ctx?.selectedKey === tabKey;
  return <button onClick={() => ctx?.onSelectionChange?.(tabKey)} className={`mr-2 ${active ? "text-primary" : "text-default-400"}`}>{title}</button>;
}

export function Switch({ isSelected, onValueChange, defaultSelected }: any) {
  const [internal, setInternal] = useState(!!defaultSelected);
  const checked = isSelected ?? internal;
  return <input type="checkbox" checked={checked} onChange={(e) => { setInternal(e.target.checked); onValueChange?.(e.target.checked); }} />;
}

export function Popover({ children }: any) { return <>{children}</>; }
export function PopoverTrigger({ children }: any) { return <>{children}</>; }
export function PopoverContent({ children }: any) { return <div>{children}</div>; }

export function User({ children }: any) { return <div>{children}</div>; }
export function Skeleton({ className = "" }: any) { return <div className={`animate-pulse bg-default-200 ${className}`} />; }

export function Dropdown({ children }: any) { return <>{children}</>; }
export function DropdownTrigger({ children }: any) { return <>{children}</>; }
export function DropdownMenu({ children }: any) { return <>{children}</>; }
export function DropdownItem({ children, className = "" }: any) { return <div className={className}>{children}</div>; }
export function DropdownSection({ children }: any) { return <div>{children}</div>; }
