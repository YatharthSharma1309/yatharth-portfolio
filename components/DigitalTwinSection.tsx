"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { SectionIntro } from "@/components/SectionIntro";
import { TwinAnimatedAvatar } from "@/components/TwinAnimatedAvatar";
import { alertError, cardHeading, labelMono } from "@/lib/ui-classes";
import { sectionCopy, site, twinStarterQuestions, twinWelcome } from "@/lib/content";
import { isStaticExport } from "@/lib/contact-submit";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
  sentAt: number;
};

const WELCOME_CONTENT = `${twinWelcome} ${site.availability}.`;

function formatMessageTime(sentAt: number): string {
  return new Date(sentAt).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}

function TypingIndicator() {
  return (
    <div className="flex items-start gap-3">
      <TwinAnimatedAvatar active size="sm" className="mt-0.5" />
      <div className="border-border-subtle bg-bg-card rounded-2xl rounded-tl-md border px-4 py-3">
        <div className="flex items-center gap-1.5" aria-label="Career twin is thinking">
          <span className="chat-typing-dot bg-accent/80 h-1.5 w-1.5 rounded-full" />
          <span className="chat-typing-dot bg-accent/80 h-1.5 w-1.5 rounded-full" />
          <span className="chat-typing-dot bg-accent/80 h-1.5 w-1.5 rounded-full" />
        </div>
      </div>
    </div>
  );
}

function MessageBubble({
  message,
  showTimes,
}: {
  message: ChatMessage;
  showTimes: boolean;
}) {
  const isUser = message.role === "user";
  const time =
    showTimes && message.sentAt > 0 ? formatMessageTime(message.sentAt) : null;

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="max-w-[min(90%,32rem)] min-w-0">
          <div className="text-text-muted mb-1.5 flex items-center justify-end gap-2 pr-1 text-[11px] font-semibold tracking-[0.14em] uppercase">
            {time ? <span>{time}</span> : null}
            <span>You</span>
          </div>
          <div className="bg-accent text-on-accent break-words rounded-2xl rounded-tr-md px-4 py-3 text-sm leading-relaxed font-medium shadow-[0_8px_24px_-12px_rgba(79,70,229,0.35)] [overflow-wrap:anywhere]">
            {message.content}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3">
      <TwinAnimatedAvatar size="sm" className="mt-0.5" />
      <div className="max-w-[min(90%,32rem)] min-w-0 flex-1">
        <div className="text-accent/90 mb-1.5 flex flex-wrap items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase">
          <span>Career Twin</span>
          {time ? (
            <span className="text-text-muted/70 font-normal normal-case tracking-normal">
              {time}
            </span>
          ) : null}
        </div>
        <div className="border-border-subtle bg-bg-card text-text-primary break-words rounded-2xl rounded-tl-md border px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap shadow-[inset_3px_0_0_rgba(79,70,229,0.4)] [overflow-wrap:anywhere]">
          {message.content}
        </div>
      </div>
    </div>
  );
}

export function DigitalTwinSection() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: WELCOME_CONTENT, sentAt: 0 },
  ]);
  const [showTimes, setShowTimes] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [apiReady, setApiReady] = useState<boolean | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const messagesRef = useRef(messages);
  const isLoadingRef = useRef(isLoading);
  const fetchAbortRef = useRef<AbortController | null>(null);

  messagesRef.current = messages;
  isLoadingRef.current = isLoading;

  const hasUserMessages = useMemo(
    () => messages.some((message) => message.role === "user"),
    [messages],
  );

  const canSend = useMemo(
    () => input.trim().length > 0 && !isLoading && apiReady !== false,
    [input, isLoading, apiReady],
  );

  const statusLabel =
    apiReady === false ? "Offline" : apiReady === null ? "Checking" : "Online";

  useEffect(() => {
    return () => {
      fetchAbortRef.current?.abort();
    };
  }, []);

  useEffect(() => {
    setShowTimes(true);
  }, []);

  useEffect(() => {
    if (isStaticExport) {
      setApiReady(false);
      return;
    }

    let cancelled = false;

    async function checkStatus() {
      try {
        const response = await fetch("/api/digital-twin");
        const data = (await response.json()) as { ready?: boolean };
        if (!cancelled) setApiReady(Boolean(data.ready));
      } catch {
        if (!cancelled) setApiReady(false);
      }
    }

    void checkStatus();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!messagesContainerRef.current) return;
    messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
  }, [messages, isLoading]);

  function clearChat() {
    setMessages([{ role: "assistant", content: WELCOME_CONTENT, sentAt: Date.now() }]);
    setInput("");
    setError(null);
  }

  async function sendMessage(text: string) {
    const userText = text.trim();
    if (!userText || isLoadingRef.current || apiReady === false) return;

    setIsLoading(true);
    setError(null);

    const nextMessages: ChatMessage[] = [
      ...messagesRef.current,
      { role: "user", content: userText, sentAt: Date.now() },
    ];
    setMessages(nextMessages);
    setInput("");

    try {
      fetchAbortRef.current?.abort();
      const controller = new AbortController();
      fetchAbortRef.current = controller;

      const response = await fetch("/api/digital-twin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content }) => ({ role, content })),
        }),
        signal: controller.signal,
      });
      const data = (await response.json()) as { reply?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Could not get a response right now.");
      }

      if (!data.reply) {
        throw new Error("Empty response received from the model.");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply!, sentAt: Date.now() },
      ]);
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return;

      const message =
        err instanceof Error ? err.message : "Something went wrong. Please retry.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  return (
    <section
      id="digital-twin"
      className="border-border-subtle scroll-mt-[4.25rem] relative border-t py-16 sm:py-24 lg:py-28"
    >
      <div className="section-glow-twin pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <div className="page-gutter relative mx-auto max-w-6xl">
        <SectionIntro
          eyebrow="Career Twin"
          title="Ask my career twin"
          description={`${sectionCopy.digitalTwin.description} ${site.availability}.`}
        />

        <div className="surface-card border-border-highlight relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border sm:mt-12">
          <div className="section-glow-twin pointer-events-none absolute inset-0 opacity-60" aria-hidden />

          {/* Header */}
          <div className="border-border-subtle relative border-b px-4 py-4 sm:px-6 sm:py-5">
            <div className="flex items-center gap-3 sm:gap-4">
              <TwinAnimatedAvatar active={isLoading} />
              <div className="min-w-0 flex-1">
                <p className={`${cardHeading} truncate text-base sm:text-lg`}>
                  {sectionCopy.digitalTwin.chatTitle}
                </p>
                <p className="text-text-muted mt-0.5 text-xs leading-relaxed break-words">
                  Portfolio-aware ·{" "}
                  <a
                    href="https://openrouter.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    OpenRouter
                  </a>
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                {hasUserMessages ? (
                  <button
                    type="button"
                    onClick={clearChat}
                    disabled={isLoading}
                    className="border-border-highlight text-text-muted hover:border-accent/35 hover:text-text-primary disabled:opacity-55 hidden rounded-full border px-3 py-1.5 text-[11px] font-semibold tracking-wide transition-colors sm:inline-flex"
                  >
                    Clear
                  </button>
                ) : null}
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-wide sm:px-3 sm:py-1.5 sm:text-[11px] ${
                    apiReady === false
                      ? "border-accent-warm/30 bg-accent-warm/[0.06] text-accent-warm/95"
                      : "border-accent/25 bg-accent/[0.06] text-accent"
                  }`}
                >
                  <span className="relative flex h-2 w-2" aria-hidden>
                    {apiReady !== false ? (
                      <span className="bg-accent absolute inline-flex h-full w-full animate-ping rounded-full opacity-40" />
                    ) : null}
                    <span
                      className={`relative inline-flex h-2 w-2 rounded-full ${
                        apiReady === false ? "bg-accent-warm/90" : "bg-accent"
                      }`}
                    />
                  </span>
                  {statusLabel}
                </span>
              </div>
            </div>
            {hasUserMessages ? (
              <button
                type="button"
                onClick={clearChat}
                disabled={isLoading}
                className="border-border-highlight text-text-muted hover:border-accent/35 hover:text-text-primary disabled:opacity-55 mt-3 w-full rounded-full border px-3 py-1.5 text-[11px] font-semibold tracking-wide transition-colors sm:hidden"
              >
                Clear chat
              </button>
            ) : null}
          </div>

          {apiReady === false ? (
            <div className="border-accent-warm/20 bg-accent-warm/[0.06] text-accent-warm/95 border-b px-4 py-3 text-sm leading-relaxed sm:px-6">
              {isStaticExport ? (
                <>
                  Chat unavailable on static deploy. Email{" "}
                  <a href={`mailto:${site.email}`} className="text-accent hover:underline">
                    {site.email}
                  </a>
                  .
                </>
              ) : (
                <>
                  Add <code className="font-mono text-xs">OPENROUTER_API_KEY</code> to enable chat,
                  or email{" "}
                  <a href={`mailto:${site.email}`} className="text-accent hover:underline">
                    {site.email}
                  </a>
                  .
                </>
              )}
            </div>
          ) : null}

          {/* Conversation */}
          <div
            ref={messagesContainerRef}
            className="chat-panel max-h-[min(52dvh,440px)] min-h-[220px] space-y-4 overflow-y-auto overscroll-contain px-4 py-4 sm:max-h-[min(58vh,480px)] sm:min-h-[300px] sm:space-y-5 sm:px-6 sm:py-5"
            aria-live="polite"
            aria-relevant="additions"
            role="log"
            aria-label="Career twin conversation"
          >
            {messages.map((message, idx) => (
              <MessageBubble
                key={`${message.role}-${message.sentAt}-${idx}`}
                message={message}
                showTimes={showTimes}
              />
            ))}
            {isLoading ? <TypingIndicator /> : null}

            {!hasUserMessages ? (
              <div className="pt-1">
                <p className={`${labelMono} mb-2.5 text-text-muted`}>
                  Try asking
                </p>
                <div className="flex flex-wrap gap-2">
                  {twinStarterQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => void sendMessage(question)}
                      disabled={isLoading || apiReady === false}
                      className="border-border-highlight text-text-muted hover:border-accent/35 hover:bg-accent/[0.05] hover:text-text-primary disabled:opacity-55 rounded-full border bg-white/75 px-3 py-1.5 text-left text-xs leading-snug transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {error ? (
            <p className={`${alertError} mx-4 mb-0 sm:mx-6`} role="alert">
              {error}
            </p>
          ) : null}

          <form
            onSubmit={onSubmit}
            className="border-border-subtle border-t px-4 py-4 sm:px-6 sm:py-5"
          >
            <div className="border-border-highlight focus-within:border-accent/45 focus-within:shadow-[0_0_0_1px_rgba(79,70,229,0.14)] flex items-end gap-2 rounded-2xl border bg-white/75 p-2 sm:gap-3">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={sectionCopy.digitalTwin.inputPlaceholder}
                rows={2}
                disabled={apiReady === false}
                className="text-text-primary placeholder:text-text-muted/75 max-h-28 min-h-11 min-w-0 flex-1 resize-none bg-transparent px-2.5 py-2 text-sm leading-relaxed outline-none disabled:cursor-not-allowed disabled:opacity-60 sm:px-3 sm:py-2.5"
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    if (canSend) void sendMessage(input);
                  }
                }}
              />
              <button
                type="submit"
                disabled={!canSend}
                className="bg-accent text-on-accent hover:shadow-[0_8px_18px_-10px_rgba(15,23,42,0.28)] mb-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-[box-shadow,opacity] disabled:cursor-not-allowed disabled:opacity-45"
                aria-label="Send message"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M5 12h12M13 7l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <p className="text-text-muted/75 mt-3 text-center text-[11px] leading-relaxed">
              Enter to send · Shift+Enter for new line
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
