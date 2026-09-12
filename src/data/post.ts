import { siteConfig } from "@/site-config";
import type { ImageMetadata, MarkdownHeading } from "astro";
import { getCollection } from "astro:content";

/**
 * Explicit shape of a blog post entry.
 *
 * Astro normally derives `CollectionEntry<"post">` from the files in
 * `src/content/post`. With an empty collection that generated type collapses,
 * so the shape is declared here to match the schema in `src/content/config.ts`.
 */
export interface Post {
	body: string;
	collection: "post";
	data: {
		coverImage?: { alt: string; src: ImageMetadata };
		description: string;
		draft: boolean;
		ogImage?: string;
		publishDate: Date;
		tags: string[];
		title: string;
		updatedDate?: Date;
	};
	id: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	render: () => Promise<{
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		Content: any;
		headings: MarkdownHeading[];
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		remarkPluginFrontmatter: Record<string, any>;
	}>;
	slug: string;
}

/** filter out draft posts based on the environment */
export async function getAllPosts(): Promise<Post[]> {
	return (await getCollection("post", (entry) => {
		return import.meta.env.PROD ? !(entry as Post).data.draft : true;
	})) as Post[];
}

/** returns the date of the post based on option in siteConfig.sortPostsByUpdatedDate */
export function getPostSortDate(post: Post) {
	return siteConfig.sortPostsByUpdatedDate && post.data.updatedDate !== undefined
		? new Date(post.data.updatedDate)
		: new Date(post.data.publishDate);
}

/** sort post by date (by siteConfig.sortPostsByUpdatedDate), desc.*/
export function sortMDByDate(posts: Post[]) {
	return posts.sort((a, b) => {
		const aDate = getPostSortDate(a).valueOf();
		const bDate = getPostSortDate(b).valueOf();
		return bDate - aDate;
	});
}

/** groups posts by year (based on option in siteConfig.sortPostsByUpdatedDate), using the year as the key
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 */
export function groupPostsByYear(posts: Post[]) {
	return posts.reduce<Record<string, Post[]>>((acc, post) => {
		const year = getPostSortDate(post).getFullYear();
		if (!acc[year]) {
			acc[year] = [];
		}
		acc[year]?.push(post);
		return acc;
	}, {});
}

/** returns all tags created from posts (inc duplicate tags)
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 *  */
export function getAllTags(posts: Post[]) {
	return posts.flatMap((post) => [...post.data.tags]);
}

/** returns all unique tags created from posts
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 *  */
export function getUniqueTags(posts: Post[]) {
	return [...new Set(getAllTags(posts))];
}

/** returns a count of each unique tag - [[tagName, count], ...]
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 *  */
export function getUniqueTagsWithCount(posts: Post[]): [string, number][] {
	return [
		...getAllTags(posts).reduce(
			(acc, t) => acc.set(t, (acc.get(t) ?? 0) + 1),
			new Map<string, number>(),
		),
	].sort((a, b) => b[1] - a[1]);
}
