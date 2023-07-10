/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { capitalize, truncate } from "~/helper";
import { type Anime, type Manga, type Episode, type Chapter } from "~/types";

const Chapter = ({ chapter, media, provider, index, subDub }: { chapter: Episode | Chapter; media: Anime | Manga, provider: string, index: number, subDub: string }) => {
    if (media.type === "ANIME") {
        return (
            <Link href={media.type === "ANIME" ? `/watch/${media.id}/${provider}/${encodeURIComponent(chapter.id)}/${subDub}` : `/read/${media.id}/${provider}/${encodeURIComponent(chapter.id)}`} className="bg-zinc-800 rounded-xl p-4 hover:bg-background-light hover:scale-105 active:scale-100 cursor-pointer transition duration-300 ease-in-out">
                <div className="relative w-full h-48 mb-4">
                    <img src={(chapter as Episode).img ?? media.coverImage ?? ""} alt={`${media.title.english ?? media.title.romaji ?? media.title.native ?? ""} chapter ${chapter.number} cover`} className="rounded-xl object-cover w-full h-full" loading="lazy" />
                </div>
                <h3 className="font-bold text-lg mb-2">{truncate(chapter.title ?? "Episode " + (String(chapter.number ?? index)), 100)}</h3>
                <p className="text-gray-500 text-sm mb-2">
                    Episode {chapter.number ?? index} &middot; {capitalize(provider)}
                </p>
            </Link>
        )
    } else {
        return (
            <Link href={`/read/${media.id}/${provider}/${encodeURIComponent(chapter.id)}`} className="flex items-center justify-between py-2 px-4 bg-zinc-800 shadow-sm hover:shadow-md hover:bg-zinc-700 hover:scale-105 cursor-pointer rounded-md transition-all duration-150 ease-in-out active:scale-95">
                <div className="flex flex-col">
                    <div className="text-white text-sm font-medium">{truncate(chapter.title ?? "Chapter " + (String(chapter.number ?? index)), 100)}</div>
                    <div className="text-gray-400 text-xs">{capitalize(provider)}</div>
                </div>
                <div className="text-gray-500 text-sm font-medium">{chapter.number ?? index}</div>
            </Link>
        )
    }
};

export default Chapter;