import { useCallback, useEffect, useState } from "react";
import type { SectionKey } from "./site";

export const WATCHLIST_KEY = "kt_watchlist_v1";

export type WatchItem = {
  id: string;
  section: SectionKey;
  title: string;
  subtitle: string;
  url: string;
  deadlineLabel: string;
};

function read(): WatchItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(WATCHLIST_KEY);
    return raw ? (JSON.parse(raw) as WatchItem[]) : [];
  } catch {
    return [];
  }
}

const EVENT = "kt-watchlist-change";

export function useWatchlist() {
  const [items, setItems] = useState<WatchItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setItems(read());
    setHydrated(true);
    const sync = () => setItems(read());
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const toggle = useCallback((item: WatchItem) => {
    const current = read();
    const next = current.some((i) => i.id === item.id)
      ? current.filter((i) => i.id !== item.id)
      : [...current, item];
    window.localStorage.setItem(WATCHLIST_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(EVENT));
  }, []);

  const remove = useCallback((id: string) => {
    const next = read().filter((i) => i.id !== id);
    window.localStorage.setItem(WATCHLIST_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(EVENT));
  }, []);

  const has = useCallback((id: string) => items.some((i) => i.id === id), [items]);

  return { items, hydrated, toggle, remove, has };
}
