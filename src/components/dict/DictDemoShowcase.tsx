"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import {
  dictDemoQuickWords,
  lookupDemo,
  suggestDemo,
  type DictDemoEntry,
} from "@/data/dict-demo-samples";
import { useI18n } from "@/i18n/LocaleProvider";

const GITHUB = "https://github.com/Xudage6688/mydict";
export const MYDICT_DEMO_GIF = "/demos/mydict-demo.gif";

function ResultCard({ entry }: { entry: DictDemoEntry }) {
  return (
    <article
      className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/25"
    >
      <div className="mb-3 flex flex-wrap items-baseline gap-2 border-b border-white/10 pb-3">
        <h3 className="text-lg font-medium text-cyan-200">{entry.dictName}</h3>
        {entry.phonetic ? (
          <span className="font-mono text-sm text-zinc-500">{entry.phonetic}</span>
        ) : null}
      </div>
      <div
        className="dict-demo-entry prose prose-invert prose-sm max-w-none text-zinc-300 [&_.muted]:text-zinc-500 [&_code]:rounded [&_code]:bg-white/10 [&_code]:px-1"
        dangerouslySetInnerHTML={{ __html: entry.html }}
      />
    </article>
  );
}

export default function DictDemoShowcase() {
  const { t } = useI18n();
  const d = t.dictDemo;
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<DictDemoEntry[]>([]);
  const [lastWord, setLastWord] = useState("");
  const [showMiss, setShowMiss] = useState(false);

  const suggestions = useMemo(() => suggestDemo(query), [query]);

  const runLookup = useCallback((word: string) => {
    const w = word.trim();
    setQuery(w);
    setLastWord(w);
    const hits = lookupDemo(w);
    setResults(hits);
    setShowMiss(Boolean(w) && hits.length === 0);
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-8 rounded-2xl border border-amber-400/20 bg-amber-400/5 px-5 py-4 text-sm leading-7 text-amber-100/90">
        <p className="font-medium text-amber-200">{d.whyPreviewTitle}</p>
        <p className="mt-2 text-amber-100/80">
          {d.whyPreviewBody}{" "}
          <Link href={GITHUB} className="text-cyan-300 underline-offset-2 hover:underline">
            {d.cloneLocal}
          </Link>{" "}
          {d.dictDirs}
        </p>
      </div>

      <figure className="mb-10 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={MYDICT_DEMO_GIF}
          alt={d.gifAlt}
          className="w-full object-contain"
          loading="lazy"
        />
        <figcaption className="border-t border-white/10 px-4 py-3 text-center text-xs text-zinc-500">
          {d.gifCaption}
        </figcaption>
      </figure>

      <label className="block text-xs font-medium uppercase tracking-wider text-zinc-500">
        {d.searchLabel}
      </label>
      <div className="relative mt-2">
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowMiss(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") runLookup(query);
          }}
          placeholder={d.searchPlaceholder}
          className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white outline-none ring-cyan-400/30 placeholder:text-zinc-600 focus:border-cyan-400/40 focus:ring-2"
          autoComplete="off"
        />
        {suggestions.length > 0 ? (
          <ul className="absolute z-10 mt-1 w-full overflow-hidden rounded-xl border border-white/10 bg-[#0b1020] shadow-xl">
            {suggestions.map((s) => (
              <li key={s}>
                <button
                  type="button"
                  className="w-full px-4 py-2 text-left text-sm text-zinc-200 hover:bg-white/5"
                  onClick={() => runLookup(s)}
                >
                  {s}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {dictDemoQuickWords.map((w) => (
          <button
            key={w}
            type="button"
            onClick={() => runLookup(w)}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400 transition hover:border-cyan-400/30 hover:text-cyan-200"
          >
            {w}
          </button>
        ))}
      </div>

      {showMiss && lastWord ? (
        <p className="mt-6 text-sm text-zinc-500">
          {d.miss.replace("{word}", lastWord)}
        </p>
      ) : null}

      {results.length > 0 ? (
        <div className="mt-8 space-y-4">
          <p className="text-xs uppercase tracking-wider text-zinc-500">
            {results.length} {d.resultsCount}
          </p>
          {results.map((entry, i) => (
            <ResultCard key={`${entry.dictName}-${i}`} entry={entry} />
          ))}
        </div>
      ) : null}

      <section className="mt-14 grid gap-6 border-t border-white/10 pt-10 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
            {d.techTitle}
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-400">
            <li>{d.tech1}</li>
            <li>{d.tech2}</li>
            <li>{d.tech3}</li>
            <li>{d.tech4}</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
            {d.localTitle}
          </h2>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-black/40 p-4 font-mono text-xs leading-6 text-zinc-300">
            {d.localCode}
          </pre>
          <Link
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-cyan-300 hover:underline"
          >
            {d.openGithub}
          </Link>
        </div>
      </section>
    </div>
  );
}
