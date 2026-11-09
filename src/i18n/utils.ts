import { defaultLang, languages, ui, type Dict, type Lang } from "./ui";

export { defaultLang, languages };
export type { Dict, Lang };

/** Translations for the given language. */
export function useTranslations(lang: Lang): Dict {
	return ui[lang];
}

/**
 * Build a locale-aware href. English (the default) lives at the root, Chinese
 * lives under `/zh`. Input is always the locale-less path, e.g. `/sundial/`.
 */
export function localizePath(path: string, lang: Lang): string {
	const clean = `/${path.replace(/^\/+/, "").replace(/\/+$/, "")}`.replace(/\/{2,}/g, "/");
	if (lang === defaultLang) return clean === "/" ? "/" : `${clean}/`;
	return clean === "/" ? `/${lang}/` : `/${lang}${clean}/`;
}

/**
 * The home page has no Japanese route (only the Sundial product page is
 * localized there), so a Japanese page's home links point at the English site.
 */
export function localizeHome(lang: Lang): string {
	return lang === "ja" ? "/" : localizePath("/", lang);
}

/** Remove the leading locale segment from a pathname, if present. */
export function stripLocale(pathname: string): string {
	const segments = pathname.split("/").filter(Boolean);
	if (segments[0] && segments[0] in languages && segments[0] !== defaultLang) {
		segments.shift();
	}
	return `/${segments.join("/")}`;
}
