"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Avatar,
  Badge,
  Button,
  Input,
  ScrollShadow,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Tooltip,
  Divider,
  Chip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Tabs,
  Tab,
  Textarea,
  Switch,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@heroui/react";

const SearchIcon = ({ size = 20, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const SendIcon = ({ size = 20, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

const PhoneIcon = ({ size = 20, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const VideoIcon = ({ size = 20, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);

const EmojiIcon = ({ size = 20, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);

const AttachIcon = ({ size = 20, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
  </svg>
);

const MoreVertIcon = ({ size = 20, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <circle cx="12" cy="5" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="12" cy="19" r="1.5" />
  </svg>
);

const MicIcon = ({ size = 20, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

const SettingsIcon = ({ size = 20, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const MoonIcon = ({ size = 18, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const SunIcon = ({ size = 18, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const PinIcon = ({ size = 16, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="12" y1="17" x2="12" y2="22" />
    <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
  </svg>
);

const ImageIcon = ({ size = 20, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

const CheckIcon = ({ size = 16, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const DoubleCheckIcon = ({ size = 16, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 6L7 17l-5-5" />
    <path d="M22 6L11 17" />
  </svg>
);

const HashIcon = ({ size = 16, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="4" y1="9" x2="20" y2="9" />
    <line x1="4" y1="15" x2="20" y2="15" />
    <line x1="10" y1="3" x2="8" y2="21" />
    <line x1="16" y1="3" x2="14" y2="21" />
  </svg>
);

const PlusIcon = ({ size = 20, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const MenuIcon = ({ size = 20, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const ArrowLeftIcon = ({ size = 20, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const ReplyIcon = ({ size = 16, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="9 17 4 12 9 7" />
    <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
  </svg>
);

const StarIcon = ({ size = 16, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

interface Message {
  id: string;
  text: string;
  sender: "me" | "other";
  time: string;
  status?: "sent" | "delivered" | "read";
  replyTo?: string;
  image?: string;
  reactions?: string[];
}

interface Contact {
  id: string;
  name: string;
  avatar: string;
  status: "online" | "offline" | "away" | "busy";
  lastMessage: string;
  lastTime: string;
  unread: number;
  pinned?: boolean;
  typing?: boolean;
  isGroup?: boolean;
  members?: number;
}

const contacts: Contact[] = [
  { id: "1", name: "Sarah Chen", avatar: "https://i.pravatar.cc/150?u=sarah", status: "online", lastMessage: "That sounds great! Let me check...", lastTime: "2m", unread: 3, pinned: true },
  { id: "2", name: "Alex Rivera", avatar: "https://i.pravatar.cc/150?u=alex", status: "online", lastMessage: "I'll send the files tonight 📎", lastTime: "15m", unread: 1, typing: true },
  { id: "3", name: "Design Team", avatar: "https://i.pravatar.cc/150?u=team1", status: "online", lastMessage: "Jake: New mockups are ready!", lastTime: "1h", unread: 12, isGroup: true, members: 8 },
  { id: "4", name: "Emma Watson", avatar: "https://i.pravatar.cc/150?u=emma", status: "away", lastMessage: "See you tomorrow at the meeting", lastTime: "3h", unread: 0 },
  { id: "5", name: "Dev Squad", avatar: "https://i.pravatar.cc/150?u=team2", status: "online", lastMessage: "Tom: PR merged successfully ✅", lastTime: "5h", unread: 0, isGroup: true, members: 15, pinned: true },
  { id: "6", name: "Michael Park", avatar: "https://i.pravatar.cc/150?u=michael", status: "offline", lastMessage: "Thanks for the help!", lastTime: "1d", unread: 0 },
  { id: "7", name: "Lisa Zhang", avatar: "https://i.pravatar.cc/150?u=lisa", status: "busy", lastMessage: "Can we reschedule?", lastTime: "1d", unread: 0 },
  { id: "8", name: "James Wilson", avatar: "https://i.pravatar.cc/150?u=james", status: "offline", lastMessage: "Happy birthday! 🎂", lastTime: "3d", unread: 0 },
  { id: "9", name: "Startup Hub", avatar: "https://i.pravatar.cc/150?u=team3", status: "online", lastMessage: "Anna: Pitch deck updated", lastTime: "5d", unread: 0, isGroup: true, members: 32 },
];

const initialMessages: Message[] = [
  { id: "1", text: "Hey! How's the project going? 👋", sender: "other", time: "10:30 AM" },
  { id: "2", text: "It's going really well! Just finished the new feature implementation.", sender: "me", time: "10:32 AM", status: "read" },
  { id: "3", text: "That's awesome! Can you show me a demo?", sender: "other", time: "10:33 AM" },
  { id: "4", text: "Sure! I'll set up a call this afternoon. The UI turned out beautiful with HeroUI components 🎨", sender: "me", time: "10:35 AM", status: "read" },
  { id: "5", text: "Perfect! I've been hearing great things about HeroUI v3. The new design system looks incredible.", sender: "other", time: "10:36 AM" },
  { id: "6", text: "Yeah, the component library is super clean. Dark mode support out of the box, great animations, and the API is really intuitive.", sender: "me", time: "10:38 AM", status: "read" },
  { id: "7", text: "That sounds great! Let me check my calendar for the afternoon slot. Maybe we can also discuss the deployment timeline?", sender: "other", time: "10:40 AM" },
];

const emojiList = ["😀", "😂", "❤️", "🔥", "👍", "👎", "😍", "🤔", "😮", "🎉", "✨", "💯", "🚀", "💪", "🙌", "👏", "😎", "🤩", "😇", "🥳", "💜", "💙", "💚", "🧡"];

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 px-4 mb-3 message-appear">
      <Avatar src="https://i.pravatar.cc/150?u=sarah" size="sm" className="mb-1" />
      <div className="bg-default-100 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
        <span className="typing-dot w-2 h-2 rounded-full bg-default-400 inline-block" />
        <span className="typing-dot w-2 h-2 rounded-full bg-default-400 inline-block" />
        <span className="typing-dot w-2 h-2 rounded-full bg-default-400 inline-block" />
      </div>
    </div>
  );
}

function MessageBubble({ message, onReaction }: { message: Message; onReaction: (id: string, emoji: string) => void }) {
  const isMe = message.sender === "me";

  return (
    <div className={`flex items-end gap-2 px-4 mb-1 message-appear ${isMe ? "flex-row-reverse" : ""}`}>
      {!isMe && (
        <Tooltip content="Sarah Chen" placement="right" delay={500}>
          <Avatar src="https://i.pravatar.cc/150?u=sarah" size="sm" className="mb-1 flex-shrink-0" />
        </Tooltip>
      )}

      <div className={`group relative max-w-[70%] ${isMe ? "items-end" : "items-start"}`}>
        <Dropdown>
          <DropdownTrigger>
            <div
              className={`
                px-4 py-2.5 cursor-pointer transition-all duration-200
                ${isMe
                  ? "bg-primary text-primary-foreground rounded-2xl rounded-br-sm hover:opacity-90"
                  : "bg-default-100 text-foreground rounded-2xl rounded-bl-sm hover:bg-default-200"
                }
              `}
            >
              {message.replyTo && (
                <div className={`text-xs mb-1.5 pb-1.5 border-b ${isMe ? "border-primary-200/30" : "border-default-300"} opacity-70`}>
                  ↩ {message.replyTo}
                </div>
              )}
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
              <div className={`flex items-center gap-1 mt-1 ${isMe ? "justify-end" : ""}`}>
                <span className={`text-[10px] ${isMe ? "text-primary-200" : "text-default-400"}`}>
                  {message.time}
                </span>
                {isMe && message.status && (
                  <span className={message.status === "read" ? "text-blue-300" : "text-primary-200"}>
                    {message.status === "read" ? <DoubleCheckIcon size={13} /> : <CheckIcon size={13} />}
                  </span>
                )}
              </div>
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Message actions" variant="faded">
            <DropdownItem key="reply" startContent={<ReplyIcon />}>Reply</DropdownItem>
            <DropdownItem key="star" startContent={<StarIcon />}>Star Message</DropdownItem>
            <DropdownItem key="copy" startContent={<HashIcon />}>Copy Text</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger" startContent={<PlusIcon />}>
              Delete
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {message.reactions && message.reactions.length > 0 && (
          <div className={`flex gap-0.5 mt-0.5 ${isMe ? "justify-end" : "justify-start"}`}>
            {message.reactions.map((r, i) => (
              <span key={i} className="text-xs bg-default-100 rounded-full px-1.5 py-0.5 border border-default-200">
                {r}
              </span>
            ))}
          </div>
        )}

        <Popover placement={isMe ? "left" : "right"}>
          <PopoverTrigger>
            <button className={`
              absolute top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity
              w-7 h-7 rounded-full bg-default-100 border border-default-200
              flex items-center justify-center text-xs hover:scale-110 active:scale-95
              ${isMe ? "-left-9" : "-right-9"}
            `}>
              😊
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex gap-1 p-1">
              {["❤️", "😂", "👍", "😮", "🔥", "😢"].map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => onReaction(message.id, emoji)}
                  className="text-lg hover:scale-125 active:scale-95 transition-transform p-1"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

function DateSeparator({ date }: { date: string }) {
  return (
    <div className="flex items-center justify-center my-4 px-4">
      <Chip size="sm" variant="flat" className="text-[11px] text-default-400 bg-default-100">
        {date}
      </Chip>
    </div>
  );
}

function ContactItem({
  contact,
  isActive,
  onClick,
}: {
  contact: Contact;
  isActive: boolean;
  onClick: () => void;
}) {
  const statusColorMap: Record<string, "success" | "warning" | "danger" | "default"> = {
    online: "success",
    away: "warning",
    busy: "danger",
    offline: "default",
  };

  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 text-left
        ${isActive
          ? "bg-primary/10 border border-primary/20"
          : "hover:bg-default-100 border border-transparent"
        }
      `}
    >
      <Badge
        content=""
        color={statusColorMap[contact.status]}
        shape="circle"
        placement="bottom-right"
        size="sm"
        isInvisible={contact.status === "offline"}
        classNames={{
          badge: contact.status === "online" ? "online-pulse" : "",
        }}
      >
        <Avatar
          src={contact.avatar}
          size="md"
          isBordered={isActive}
          color={isActive ? "primary" : "default"}
          showFallback
          name={contact.name}
        />
      </Badge>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-0.5">
          <div className="flex items-center gap-1.5">
            <span className={`text-sm font-semibold truncate ${isActive ? "text-primary" : "text-foreground"}`}>
              {contact.name}
            </span>
            {contact.pinned && (
              <PinIcon size={12} className="text-default-400 flex-shrink-0" />
            )}
          </div>
          <span className={`text-[11px] flex-shrink-0 ${contact.unread > 0 ? "text-primary font-medium" : "text-default-400"}`}>
            {contact.lastTime}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs text-default-400 truncate pr-2">
            {contact.typing ? (
              <span className="text-primary font-medium italic">typing...</span>
            ) : (
              contact.lastMessage
            )}
          </p>
          {contact.unread > 0 && (
            <Badge content={contact.unread > 9 ? "9+" : contact.unread} color="primary" size="sm">
              <span />
            </Badge>
          )}
        </div>
      </div>
    </button>
  );
}

export default function ChatPage() {
  const [activeChat, setActiveChat] = useState<string>("1");
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [showTyping, setShowTyping] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [sidebarTab, setSidebarTab] = useState("all");
  const [isDark, setIsDark] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const settingsModal = useDisclosure();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const activeContact = contacts.find((c) => c.id === activeChat);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, showTyping, scrollToBottom]);

  useEffect(() => {
    document.documentElement.className = isDark ? "dark" : "light";
  }, [isDark]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: "me",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      status: "sent",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    inputRef.current?.focus();

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((m) => (m.id === newMessage.id ? { ...m, status: "delivered" } : m))
      );
    }, 800);

    setTimeout(() => setShowTyping(true), 1200);

    setTimeout(() => {
      setShowTyping(false);
      const replies = [
        "That's really interesting! Tell me more 😊",
        "I completely agree with you on that!",
        "Great point! Let me think about it.",
        "Absolutely! We should definitely move forward with this approach.",
        "Haha, love it! 😄",
        "I'll get back to you on that shortly 👍",
      ];
      const reply: Message = {
        id: (Date.now() + 1).toString(),
        text: replies[Math.floor(Math.random() * replies.length)],
        sender: "other",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, reply]);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) => (m.id === newMessage.id ? { ...m, status: "read" } : m))
        );
      }, 500);
    }, 3000);
  };

  const handleReaction = (messageId: string, emoji: string) => {
    setMessages((prev) =>
      prev.map((m) =>
        m.id === messageId
          ? { ...m, reactions: [...(m.reactions || []), emoji] }
          : m
      )
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const filteredContacts = contacts
    .filter((c) => {
      if (searchValue) return c.name.toLowerCase().includes(searchValue.toLowerCase());
      if (sidebarTab === "groups") return c.isGroup;
      if (sidebarTab === "personal") return !c.isGroup;
      return true;
    })
    .sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return 0;
    });

  return (
    <div className="flex h-screen w-screen bg-background overflow-hidden">
      <aside
        className={`
          ${showSidebar ? "w-[380px]" : "w-0 overflow-hidden"}
          flex-shrink-0 border-r border-default-200/50 flex flex-col
          bg-background transition-all duration-300 ease-in-out
          max-md:absolute max-md:z-50 max-md:h-full
          ${showSidebar ? "max-md:w-full" : ""}
        `}
      >
        <div className="p-4 flex-shrink-0">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Badge content="" color="success" shape="circle" placement="bottom-right" size="sm">
                <Avatar
                  src="https://i.pravatar.cc/150?u=me"
                  size="md"
                  isBordered
                  color="primary"
                />
              </Badge>
              <div>
                <h2 className="text-base font-bold text-foreground">Messages</h2>
                <p className="text-[11px] text-default-400">12 unread conversations</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Tooltip content="New Chat">
                <Button isIconOnly size="sm" variant="light" radius="full">
                  <PlusIcon size={18} />
                </Button>
              </Tooltip>
              <Tooltip content="Settings">
                <Button isIconOnly size="sm" variant="light" radius="full" onPress={settingsModal.onOpen}>
                  <SettingsIcon size={18} />
                </Button>
              </Tooltip>
            </div>
          </div>

          <Input
            placeholder="Search conversations..."
            size="sm"
            radius="lg"
            variant="flat"
            value={searchValue}
            onValueChange={setSearchValue}
            startContent={<SearchIcon size={16} className="text-default-400" />}
            classNames={{
              inputWrapper: "bg-default-100 group-data-[focus=true]:bg-default-100",
            }}
          />

          <Tabs
            selectedKey={sidebarTab}
            onSelectionChange={(k) => setSidebarTab(k as string)}
            variant="underlined"
            color="primary"
            size="sm"
            classNames={{
              tabList: "gap-4 w-full mt-3",
              tab: "px-1 h-9",
              cursor: "w-full",
            }}
          >
            <Tab
              key="all"
              title={
                <div className="flex items-center gap-1.5">
                  <span>All</span>
                  <Chip size="sm" variant="flat" className="h-5 text-[10px]">16</Chip>
                </div>
              }
            />
            <Tab
              key="personal"
              title={
                <div className="flex items-center gap-1.5">
                  <span>Personal</span>
                  <Chip size="sm" variant="flat" className="h-5 text-[10px]">9</Chip>
                </div>
              }
            />
            <Tab
              key="groups"
              title={
                <div className="flex items-center gap-1.5">
                  <span>Groups</span>
                  <Chip size="sm" variant="flat" className="h-5 text-[10px]">3</Chip>
                </div>
              }
            />
          </Tabs>
        </div>

        <Divider className="opacity-50" />

        <ScrollShadow className="flex-1 overflow-y-auto p-2">
          <div className="flex flex-col gap-0.5">
            {filteredContacts.map((contact) => (
              <ContactItem
                key={contact.id}
                contact={contact}
                isActive={activeChat === contact.id}
                onClick={() => {
                  setActiveChat(contact.id);
                  if (window.innerWidth < 768) setShowSidebar(false);
                }}
              />
            ))}

            {filteredContacts.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 text-default-400">
                <SearchIcon size={40} className="mb-3 opacity-30" />
                <p className="text-sm">No conversations found</p>
              </div>
            )}
          </div>
        </ScrollShadow>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 bg-background relative">
        {activeContact ? (
          <>
            <header className="flex items-center justify-between px-4 py-3 border-b border-default-200/50 flex-shrink-0 bg-background/80 backdrop-blur-xl z-20">
              <div className="flex items-center gap-3">
                <Button
                  isIconOnly
                  size="sm"
                  variant="light"
                  radius="full"
                  className="md:hidden"
                  onPress={() => setShowSidebar(true)}
                >
                  <ArrowLeftIcon size={18} />
                </Button>
                <Badge
                  content=""
                  color={activeContact.status === "online" ? "success" : "default"}
                  shape="circle"
                  placement="bottom-right"
                  size="sm"
                  isInvisible={activeContact.status !== "online"}
                >
                  <Avatar
                    src={activeContact.avatar}
                    size="sm"
                    isBordered
                    color="primary"
                  />
                </Badge>
                <div>
                  <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                    {activeContact.name}
                    {activeContact.isGroup && (
                      <Chip size="sm" variant="flat" color="secondary" className="h-4 text-[9px]">
                        {activeContact.members} members
                      </Chip>
                    )}
                  </h3>
                  <p className="text-[11px] text-default-400">
                    {activeContact.typing ? (
                      <span className="text-primary">typing...</span>
                    ) : activeContact.status === "online" ? (
                      <span className="text-success">Active now</span>
                    ) : (
                      `Last seen ${activeContact.lastTime} ago`
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <Tooltip content="Voice Call">
                  <Button isIconOnly size="sm" variant="light" radius="full">
                    <PhoneIcon size={17} />
                  </Button>
                </Tooltip>
                <Tooltip content="Video Call">
                  <Button isIconOnly size="sm" variant="light" radius="full">
                    <VideoIcon size={17} />
                  </Button>
                </Tooltip>
                <Tooltip content="Search in chat">
                  <Button isIconOnly size="sm" variant="light" radius="full">
                    <SearchIcon size={17} />
                  </Button>
                </Tooltip>
                <Dropdown>
                  <DropdownTrigger>
                    <Button isIconOnly size="sm" variant="light" radius="full">
                      <MoreVertIcon size={17} />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Chat options" variant="faded">
                    <DropdownItem key="profile">Contact Info</DropdownItem>
                    <DropdownItem key="media">Media & Files</DropdownItem>
                    <DropdownItem key="star">Starred Messages</DropdownItem>
                    <DropdownItem key="mute">Mute Notifications</DropdownItem>
                    <DropdownItem key="clear" className="text-danger" color="danger">
                      Clear Chat
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </header>

            <ScrollShadow
              className="flex-1 overflow-y-auto py-4"
              style={{
                backgroundImage: isDark
                  ? "radial-gradient(circle at 20% 80%, rgba(124, 58, 237, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)"
                  : "radial-gradient(circle at 20% 80%, rgba(124, 58, 237, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
              }}
            >
              <DateSeparator date="Today" />

              {messages.map((message) => (
                <MessageBubble key={message.id} message={message} onReaction={handleReaction} />
              ))}

              {showTyping && <TypingIndicator />}

              <div ref={messagesEndRef} />
            </ScrollShadow>

            <footer className="p-3 border-t border-default-200/50 flex-shrink-0 bg-background/80 backdrop-blur-xl">
              <div className="flex items-end gap-2 max-w-5xl mx-auto">
                <Popover placement="top-start">
                  <PopoverTrigger>
                    <Button isIconOnly size="md" variant="flat" radius="full" className="flex-shrink-0 mb-0.5">
                      <AttachIcon size={18} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="p-2 flex flex-col gap-1">
                      <Button variant="light" startContent={<ImageIcon size={16} />} size="sm" className="justify-start">
                        Photo & Video
                      </Button>
                      <Button variant="light" startContent={<AttachIcon size={16} />} size="sm" className="justify-start">
                        Document
                      </Button>
                      <Button variant="light" startContent={<HashIcon size={16} />} size="sm" className="justify-start">
                        Contact
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>

                <div className="flex-1 relative">
                  <Textarea
                    ref={inputRef}
                    placeholder="Type a message..."
                    value={inputValue}
                    onValueChange={setInputValue}
                    onKeyDown={handleKeyPress}
                    minRows={1}
                    maxRows={5}
                    radius="lg"
                    variant="flat"
                    classNames={{
                      inputWrapper: "bg-default-100 group-data-[focus=true]:bg-default-100 pr-10",
                      input: "text-sm",
                    }}
                  />
                  <Popover placement="top-end">
                    <PopoverTrigger>
                      <button className="absolute right-3 bottom-2.5 text-default-400 hover:text-default-600 transition-colors">
                        <EmojiIcon size={20} />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="p-3 grid grid-cols-8 gap-1 max-w-[280px]">
                        {emojiList.map((emoji) => (
                          <button
                            key={emoji}
                            onClick={() => setInputValue((prev) => prev + emoji)}
                            className="text-xl hover:scale-125 active:scale-95 transition-transform p-1 rounded-lg hover:bg-default-100"
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>

                {inputValue.trim() ? (
                  <Button
                    isIconOnly
                    size="md"
                    color="primary"
                    radius="full"
                    className="flex-shrink-0 mb-0.5"
                    onPress={handleSend}
                  >
                    <SendIcon size={18} />
                  </Button>
                ) : (
                  <Button
                    isIconOnly
                    size="md"
                    variant={isRecording ? "solid" : "flat"}
                    color={isRecording ? "danger" : "default"}
                    radius="full"
                    className={`flex-shrink-0 mb-0.5 ${isRecording ? "animate-pulse" : ""}`}
                    onPress={() => setIsRecording(!isRecording)}
                  >
                    <MicIcon size={18} />
                  </Button>
                )}
              </div>
            </footer>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-default-400 gap-4">
            <div className="w-24 h-24 rounded-full bg-default-100 flex items-center justify-center">
              <SendIcon size={36} className="opacity-30" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-1">Welcome to Chat</h3>
              <p className="text-sm">Select a conversation to start messaging</p>
            </div>
          </div>
        )}
      </main>

      <Modal
        isOpen={settingsModal.isOpen}
        onOpenChange={settingsModal.onOpenChange}
        size="md"
        backdrop="blur"
        classNames={{
          base: "bg-background",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h3 className="text-lg">Settings</h3>
                <p className="text-sm text-default-400 font-normal">Customize your chat experience</p>
              </ModalHeader>
              <ModalBody>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Avatar src="https://i.pravatar.cc/150?u=me" size="lg" isBordered color="primary" />
                    <div className="flex-1">
                      <p className="font-semibold">Your Name</p>
                      <p className="text-sm text-default-400">yourname@email.com</p>
                    </div>
                    <Button size="sm" variant="flat" color="primary">Edit</Button>
                  </div>

                  <Divider />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {isDark ? <MoonIcon /> : <SunIcon />}
                      <div>
                        <p className="text-sm font-medium">Dark Mode</p>
                        <p className="text-xs text-default-400">Toggle dark/light theme</p>
                      </div>
                    </div>
                    <Switch
                      isSelected={isDark}
                      onValueChange={setIsDark}
                      size="sm"
                      color="primary"
                      thumbIcon={isDark ? <MoonIcon size={12} /> : <SunIcon size={12} />}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">🔔</span>
                      <div>
                        <p className="text-sm font-medium">Notifications</p>
                        <p className="text-xs text-default-400">Push & sound notifications</p>
                      </div>
                    </div>
                    <Switch defaultSelected size="sm" color="primary" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">✅</span>
                      <div>
                        <p className="text-sm font-medium">Read Receipts</p>
                        <p className="text-xs text-default-400">Show when you read messages</p>
                      </div>
                    </div>
                    <Switch defaultSelected size="sm" color="primary" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">🟢</span>
                      <div>
                        <p className="text-sm font-medium">Online Status</p>
                        <p className="text-xs text-default-400">Show when you&apos;re active</p>
                      </div>
                    </div>
                    <Switch defaultSelected size="sm" color="primary" />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Save Changes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {!showSidebar && (
        <Button
          isIconOnly
          size="sm"
          variant="flat"
          radius="full"
          className="fixed top-3 left-3 z-50 md:hidden"
          onPress={() => setShowSidebar(true)}
        >
          <MenuIcon size={18} />
        </Button>
      )}
    </div>
  );
}
