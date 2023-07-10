export interface Seasonal {
    trending: Anime[],
    popular: Anime[],
    top: Anime[],
    seasonal: Anime[]
}

export interface Stats {
    anime: number;
    manga: number;
    novels: number;
    apiKeys: number;
    skipTimes: number;
}

export const enum ProviderType {
    ANIME = "ANIME",
    MANGA = "MANGA",
    META = "META",
    INFORMATION = "INFORMATION",
}

export interface Anime {
    id: string;
    slug: string;
    coverImage: string | null;
    bannerImage: string | null;
    trailer: string | null;
    status: MediaStatus | null;
    season: Season;
    title: {
        romaji: string | null;
        english: string | null;
        native: string | null;
    };
    currentEpisode: number | null;
    mappings: { id: string; providerId: string; similarity: number; providerType: ProviderType | null }[];
    synonyms: string[];
    countryOfOrigin: string | null;
    description: string | null;
    duration: number | null;
    color: string | null;
    year: number | null;
    rating: {
        anilist: number;
        mal: number;
        kitsu: number;
        simkl: number;
    };
    popularity: {
        anilist: number;
        mal: number;
        kitsu: number;
        simkl: number;
    };
    averageRating: number;
    averagePopularity: number;
    type: Type;
    genres: Genres[];
    format: Format;
    relations: Relations[];
    totalEpisodes?: number;
    episodes: {
        latest: {
            updatedAt: number;
            latestEpisode: number;
            latestTitle: string;
        };
        data: EpisodeData[];
    };
    tags: string[];
    artwork: Artwork[];
    characters: Character[];
}

export type Manga = {
    id: string;
    slug: string;
    coverImage: string | null;
    bannerImage: string | null;
    status: MediaStatus | null;
    title: {
        romaji: string | null;
        english: string | null;
        native: string | null;
    };
    mappings: { id: string; providerId: string; similarity: number; providerType: ProviderType | null }[];
    synonyms: string[];
    countryOfOrigin: string | null;
    description: string | null;
    totalVolumes: number | null;
    color: string | null;
    year: number | null;
    rating: {
        anilist: number;
        mal: number;
        kitsu: number;
        simkl: number;
    };
    popularity: {
        anilist: number;
        mal: number;
        kitsu: number;
        simkl: number;
    };
    averageRating: number;
    averagePopularity: number;
    genres: Genres[];
    type: Type;
    format: Format;
    relations: Relations[];
    totalChapters: number | null;
    chapters: {
        latest: {
            updatedAt: number;
            latestChapter: number;
            latestTitle: string;
        };
        data: ChapterData[];
    };
    tags: string[];
    artwork: Artwork[];
    characters: Character[];
};

export const enum Type {
    ANIME = "ANIME",
    MANGA = "MANGA",
}

export const enum Format {
    TV = "TV",
    TV_SHORT = "TV_SHORT",
    MOVIE = "MOVIE",
    SPECIAL = "SPECIAL",
    OVA = "OVA",
    ONA = "ONA",
    MUSIC = "MUSIC",
    MANGA = "MANGA",
    NOVEL = "NOVEL",
    ONE_SHOT = "ONE_SHOT",
    UNKNOWN = "UNKNOWN",
}

export const enum Season {
    WINTER = "WINTER",
    SPRING = "SPRING",
    SUMMER = "SUMMER",
    FALL = "FALL",
    UNKNOWN = "UNKNOWN",
}

export const enum MediaStatus {
    FINISHED = "FINISHED",
    RELEASING = "RELEASING",
    NOT_YET_RELEASED = "NOT_YET_RELEASED",
    CANCELLED = "CANCELLED",
    HIATUS = "HIATUS",
}

export const enum Genres {
    ACTION = "Action",
    ADVENTURE = "Adventure",
    ANIME_INFLUENCED = "Anime Influenced",
    AVANT_GARDE = "Avant Garde",
    AWARD_WINNING = "Award Winning",
    BOYS_LOVE = "Boys Love",
    CARS = "Cards",
    COMEDY = "Comedy",
    DEMENTIA = "Dementia",
    DEMONS = "Demons",
    DOUJINSHI = "Doujinshi",
    DRAMA = "Drama",
    ECCHI = "Ecchi",
    EROTICA = "Erotica",
    FAMILY = "Family",
    FANTASY = "Fantasy",
    FOOD = "Food",
    FRIENDSHIP = "Friendship",
    GAME = "Game",
    GENDER_BENDER = "Gender Bender",
    GIRLS_LOVE = "Girls Love",
    GORE = "Gore",
    GOURMET = "Gourmet",
    HAREM = "Harem",
    HENTAI = "Hentai",
    HISTORICAL = "Historical",
    HORROR = "Horror",
    ISEKAI = "Isekai",
    KIDS = "Kids",
    MAGIC = "Magic",
    MAHOU_SHOUJO = "Mahou Shoujo",
    MARTIAL_ARTS = "Martial Arts",
    MECHA = "Mecha",
    MEDICAL = "Medical",
    MILITARY = "Military",
    MUSIC = "Music",
    MYSTERY = "Mystery",
    PARODY = "Parody",
    POLICE = "Police",
    POLITICAL = "Political",
    PSYCHOLOGICAL = "Psychological",
    RACING = "Racing",
    ROMANCE = "Romance",
    SAMURAI = "Samurai",
    SCHOOL = "School",
    SCI_FI = "Sci-Fi",
    SHOUJO_AI = "Shoujo Ai",
    SHOUNEN_AI = "Shounen Ai",
    SLICE_OF_LIFE = "Slice of Life",
    SPACE = "Space",
    SPORTS = "Sports",
    SUPER_POWER = "Super Power",
    SUPERNATURAL = "Supernatural",
    SUSPENCE = "Suspence",
    THRILLER = "Thriller",
    VAMPIRE = "Vampire",
    WORKPLACE = "Workplace",
    YAOI = "Yaoi",
    YURI = "Yuri",
    ZOMBIES = "Zombies",
}

export interface Character {
    name: string;
    image: string;
    voiceActor: {
        name: string;
        image: string;
    };
}

export type Relations = {
    id: string;
    type: Type;
    title: {
        english: string | null;
        romaji: string | null;
        native: string | null;
    };
    format: Format;
    relationType: string;
};

export type Artwork = {
    type: "banner" | "poster" | "clear_logo" | "top_banner" | "icon" | "clear_art";
    img: string;
    providerId: string;
};

export type Episode = {
    id: string;
    title: string;
    number: number;
    isFiller: boolean;
    img: string | null;
    hasDub: boolean;
    updatedAt?: number;
};

export type EpisodeData = {
    providerId: string;
    episodes: Episode[];
};

export type Source = {
    sources: { url: string; quality: string }[];
    subtitles: { url: string; lang: string; label: string }[];
    intro: {
        start: number;
        end: number;
    };
    outro: {
        start: number;
        end: number;
    };
    headers: Record<string, string>;
};

export const enum SubType {
    DUB = "dub",
    SUB = "sub",
}

export type Server = {
    name: string;
    url: string;
};

export const enum StreamingServers {
    AsianLoad = "asianload",
    GogoCDN = "gogocdn",
    StreamSB = "streamsb",
    MixDrop = "mixdrop",
    UpCloud = "upcloud",
    VidCloud = "vidcloud",
    StreamTape = "streamtape",
    VizCloud = "vizcloud",
    MyCloud = "mycloud",
    Filemoon = "filemoon",
    VidStreaming = "vidstreaming",
    AllAnime = "allanime",
    FPlayer = "fplayer",
    Kwik = "kwik",
}

export type Chapter = {
    id: string;
    title: string;
    number: number;
    updatedAt?: number;
};

export type ChapterData = {
    providerId: string;
    chapters: Chapter[];
};

export type Page = {
    url: string;
    index: number;
    headers: { [key: string]: string };
};