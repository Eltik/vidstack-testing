/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import Select from "react-select";
import { env } from "~/env.mjs";

import { type Anime, type Manga } from "~/types";

const MediaItem = ({ media }: { media: Anime | Manga }) => {
    const [showModel, setShowModel] = useState(false);

    const status = [
        {
            value: "CURRENT",
            label: media.type === "ANIME" ? "Currently Watching" : "Currently Reading"
        },
        {
            value: "PLANNING",
            label: media.type === "ANIME" ? "Plan to Watch" : "Plan to Read"
        },
        {
            value: "COMPLETED",
            label: "Completed"
        },
        {
            value: "PAUSED",
            label: "Paused"
        },
        {
            value: "DROPPED",
            label: "Dropped"
        },
        {
            value: "REPEATING",
            label: "Repeating"
        }
    ];

    return (
        <>
            <div className="flex group flex-col gap-2 w-[calc(34vh/1.5)] h-full min-w-[120px] text-white">
                <div className="rounded-md border border-slate-600/40 bg-main-primary/5 h-[40vh] md:h-[40vh] min-h-[220px]">
                    <section className="p-4 relative group">
                        <Link href={`/info/${media.id}`}>
                            <img src={`${env.NEXT_PUBLIC_IMAGE_PROXY}?url=${(media.coverImage ?? "")}&headers={}`} alt={(media.title.english ?? media.title.romaji ?? media.title.native ?? "") + " Cover"} className="shadow-md group-hover:scale-[1.09] transition-transform duration-300 opacity-100 group-hover:opacity-70 relative shadow-background rounded-md" />
                        </Link>
                        <span className="font-semibold border-t border-primary-400/10 shadow-md shadow-[rgb(49,58,80)] gap-1 flex items-center px-2 py-1 leading-4 text-xs rounded-md bg-background-token/70 absolute top-1.5 left-2.5 z-10 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-[-50%] transition-all duration-300" style={{
                            backdropFilter: "blur(2px)",
                            WebkitBackdropFilter: "blur(2px)"
                        }}>
                            <span className="">{media.averageRating}</span>
                            <svg width="24" height="24" stroke="currentColor" strokeWidth="2" className="fill-yellow-400 w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                            </svg>
                        </span>
                        <div className="absolute border-t border-main-dark/10 shadow-md shadow-main-dark bottom-[-5%] opacity-0 group-hover:opacity-100 group-hover:bottom-1 flex flex-col p-[1rem] transition-all duration-300 bg-main/70 left-2.5 rounded-b-md px-2 py-1 w-[89%] z-50" style={{
                            backdropFilter: "blur(2px)",
                            WebkitBackdropFilter: "blur(2px)"
                        }}>
                            <section className="flex items-center justify-between z-50">
                                <button type="button" className="rounded-md hover:bg-main-primary/30 transition-all duration-200">
                                    <svg width="24" height="24" stroke="currentColor" strokeWidth="2" className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
                                    </svg>
                                </button>
                                <Link href={`/info/${media.id}`} className="rounded-md hover:bg-main-primary/30 transition-all duration-200">
                                    <svg width="24" height="24" stroke="currentColor" strokeWidth="2" className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"/>
                                        <path d="M12 16v-4"/>
                                        <path d="M12 8h.01"/>
                                    </svg>
                                </Link>
                                <button type="button" className="rounded-md hover:bg-main-primary/30 transition-all duration-200">
                                    <svg width="24" height="24" stroke="currentColor" strokeWidth="2" className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="5 3 19 12 5 21 5 3"/>
                                    </svg>
                                </button>
                                <button type="button" className="rounded-md hover:bg-main-primary/30 transition-all duration-200" onClick={() => {
                                    setShowModel(!showModel)
                                }}>
                                    <svg width="24" height="24" stroke="currentColor" strokeWidth="2" className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"/>
                                    </svg>
                                </button>
                            </section>
                        </div>
                    </section>
                    <footer className="flex flex-col p-[1rem] pt-[0px]">
                        <ul className="">
                            <li className="text-lg font-semibold text-slate-300 line-clamp-1 w-full">{media.title.english ?? media.title.romaji ?? media.title.native}</li>
                            <li className="flex items-center gap-1">
                                <span className="text-main-primary font-medium">{media.format}</span>
                                <svg className="bi fill-main bi-diamond-fill inline-block w-2 h-2" xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 16 16" aria-hidden="true">
                                    <path fillRule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435z" className=""/>
                                </svg>
                                <span className="">{media.year}</span>
                            </li>
                        </ul>
                    </footer>
                </div>
            </div>
            {showModel ? (
                <div className="fixed top-0 left-0 right-0 bottom-0 mx-0 z-50">
                    <div className="mt-[15vh] bg-[0_0] rounded-md w-full max-w-[1000px] relative m-[0_auto_50px]" style={{
                        boxShadow: "0 2px 33px rgba(0,0,0,.48)",
                    }}>
                        <div className="p-0 z-20 relative bg-background rounded-[3px_3px_0_0]">
                            <span className=""></span>
                            <button type="button" className="z-10 absolute top-[20px] right-[20px] p-0 bg-[0_0] cursor-pointer outline-none text-slate-200 font-bold transition-all duration-200 ease-in-out hover:text-slate-400" onClick={() => {
                                setShowModel(!showModel)
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="">
                                    <path d="M18 6 6 18"/>
                                    <path d="m6 6 12 12"/>
                                </svg>
                            </button>
                        </div>
                        <div className="p-0 bg-[0_0]">
                            <div className="bg-cover bg-no-repeat h-[180px] relative" style={{
                                boxShadow: "inset 0 0 250px #2f3133",
                                backgroundPosition: "50%",
                                backgroundImage: `url(${media.bannerImage ?? ""})`
                            }}>
                                <div className="flex items-end justify-end h-full relative z-10 p-[30px] lg:p-[50px] pb-0">
                                    <div className="rounded-sm mb-[-30px] overflow-hidden max-w-[100px]">
                                        <img src={media.coverImage ?? ""} className="w-full" alt={`${media.title.english ?? media.title.romaji ?? media.title.native ?? ""} Cover`} loading="lazy" />
                                    </div>
                                    <span className="p-[20px] text-xl text-white font-medium drop-shadow-lg line-clamp-3">{(media.title.english ?? media.title.romaji ?? media.title.native)}</span>
                                    <div className="ml-auto mb-[13px] mr-[10px] opacity-90 bg-[0_0] flex items-center rounded-md h-[35px] cursor-pointer p-[0_14px] justify-center">
                                        <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-[1rem] h-[1rem] inline-block">
                                            <path fill="#fff" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" className=""></path>
                                        </svg>
                                    </div>
                                    <button className="p-[8px_14px] cursor-pointer rounded-md mb-[15px] bg-main text-white">Save</button>
                                </div>
                            </div>
                            <div className="grid grid-cols-[auto_16px] p-[50px] pt-[70px] bg-background z-50">
                                <div className="block lg:grid grid-areas-listEditor justify-around" style={{
                                    gridGap: "40px"
                                }}>
                                    <div className="grid-in-status lg:mb-0 mb-[25px]">
                                        <span className="pb-[8px] pl-[1px] text-gray-200">
                                            Status
                                        </span>
                                        <div className="w-full bg-background-dark rounded-md relative z-10">
                                            <Select options={status} classNames={{
                                                control: (state) => state.isFocused ? "border-main-300" : "border-none"
                                            }} className="z-50" styles={{
                                                container: (baseStyles) => ({
                                                    ...baseStyles,
                                                    color: "white",
                                                    backgroundColor: "#141414",
                                                    border: "none",
                                                    borderRadius: "0.25rem",
                                                    zIndex: "50",
                                                }),
                                                control: (baseStyles) => ({
                                                    ...baseStyles,
                                                    color: "white",
                                                    backgroundColor: "#141414",
                                                    border: "none",
                                                }),
                                                input: (baseStyles) => ({
                                                    ...baseStyles,
                                                    color: "white",
                                                    backgroundColor: "#141414",
                                                    border: "none"
                                                }),
                                                menu: (baseStyles) => ({
                                                    ...baseStyles,
                                                    color: "white",
                                                    backgroundColor: "#333333",
                                                    border: "none",
                                                    zIndex: "50",
                                                }),
                                                menuList: (baseStyles) => ({
                                                    ...baseStyles,
                                                    width: "100%",
                                                    height: "100%",
                                                    zIndex: "50",
                                                }),
                                                noOptionsMessage: (baseStyles) => ({
                                                    ...baseStyles,
                                                    color: "white",
                                                }),
                                                placeholder: (baseStyles) => ({
                                                    ...baseStyles,
                                                    color: "white",
                                                }),
                                                singleValue: (baseStyles) => ({
                                                    ...baseStyles,
                                                    color: "white",
                                                    height: "100%",
                                                    position: "relative",
                                                    top: "10%",
                                                    overflow: "initial",
                                                    zIndex: "50",
                                                }),
                                                valueContainer: (baseStyles) => ({
                                                    ...baseStyles,
                                                    color: "white"
                                                }),
                                                option: (baseStyles) => ({
                                                    ...baseStyles,
                                                    backgroundColor: "#333333",
                                                    color: "white",
                                                    zIndex: "50",
                                                    transition: "0.1s all",
                                                    cursor: "pointer",
                                                    ":hover": {
                                                        backgroundColor: "#1f1f1f"
                                                    },
                                                    ":active": {
                                                        color: "white",
                                                        backgroundColor: "#1f1f1f"
                                                    },
                                                    lineHeight: "1.25rem",
                                                    height: "100%"
                                                }),
                                                indicatorSeparator: (baseStyles) => ({
                                                    ...baseStyles,
                                                    display: "none"
                                                }),
                                                dropdownIndicator: (baseStyles) => ({
                                                    ...baseStyles,
                                                    backgroundColor: "none",
                                                    color: "white",
                                                    transition: "0.1s all",
                                                    ":hover": {
                                                        color: "rgba(255, 255, 255, 0.7)"
                                                    },
                                                    ":active": {
                                                        color: "rgba(255, 255, 255, 0.5)",
                                                    }
                                                }),
                                            }} isSearchable={false} />
                                        </div>
                                    </div>
                                    <div className="grid-in-score lg:mb-0 mb-[25px] z-0">
                                        <span className="pb-[8px] pl-[1px] text-gray-200">
                                            Score
                                        </span>
                                        <div className="w-full relative inline-block z-0">
                                            <span className="border-0 right-[-10px] bottom-[1px] top-auto left-auto border-r-0 border-l-[1px_solid_#dcdfe6] rounded-[0_0_4px_0] h-auto absolute w-[40px] z-20 text-center text-white" style={{
                                                background: "0_0"
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="">
                                                    <polyline points="6 9 12 15 18 9"/>
                                                </svg>
                                            </span>
                                            <span className="border-0 right-[-10px] top-[1px] border-r-0 border-l-[1px_solid_#dcdfe6] rounded-[0_0_4px_0] h-auto absolute w-[40px] z-20 text-center text-white" style={{
                                                background: "0_0"
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="">
                                                    <polyline points="18 15 12 9 6 15"/>
                                                </svg>
                                            </span>
                                            <div className="w-full bg-background-dark rounded-md relative z-10">
                                                <input type="text" id="score" className="pl-[15px] pr-[50px] text-left w-full bg-background-dark border-0 outline-none inline-block h-[40px] p-[0_15px] text-white rounded-md" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-in-progress lg:mb-0 mb-[25px] z-0">
                                        <span className="pb-[8px] pl-[1px] text-gray-200">
                                            Progress
                                        </span>
                                        <div className="w-full relative inline-block z-0">
                                            <span className="border-0 right-[-10px] bottom-[1px] top-auto left-auto border-r-0 border-l-[1px_solid_#dcdfe6] rounded-[0_0_4px_0] h-auto absolute w-[40px] z-20 text-center text-white" style={{
                                                background: "0_0"
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="">
                                                    <polyline points="6 9 12 15 18 9"/>
                                                </svg>
                                            </span>
                                            <span className="border-0 right-[-10px] top-[1px] border-r-0 border-l-[1px_solid_#dcdfe6] rounded-[0_0_4px_0] h-auto absolute w-[40px] z-20 text-center text-white" style={{
                                                background: "0_0"
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="">
                                                    <polyline points="18 15 12 9 6 15"/>
                                                </svg>
                                            </span>
                                            <div className="w-full bg-background-dark rounded-md relative z-10">
                                                <input type="text" id="progress" className="pl-[15px] pr-[50px] text-left w-full bg-background-dark border-0 outline-none inline-block h-[40px] p-[0_15px] text-white rounded-md" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-in-start lg:mb-0 mb-[25px] z-0">
                                        <span className="pb-[8px] pl-[1px] text-gray-200">
                                            Start Date
                                        </span>
                                        <div className="w-full relative inline-block z-0">
                                            <div className="w-full bg-background-dark rounded-md relative z-10">
                                                <input type="text" id="start_date" className="pl-[15px] pr-[50px] text-left w-full bg-background-dark border-0 outline-none inline-block h-[40px] p-[0_15px] text-white rounded-md" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-in-finish lg:mb-0 mb-[25px] z-0">
                                        <span className="pb-[8px] pl-[1px] text-gray-200">
                                            Finish Date
                                        </span>
                                        <div className="w-full relative inline-block z-0">
                                            <div className="w-full bg-background-dark rounded-md relative z-10">
                                                <input type="text" id="finish_date" className="pl-[15px] pr-[50px] text-left w-full bg-background-dark border-0 outline-none inline-block h-[40px] p-[0_15px] text-white rounded-md" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-in-repeat lg:mb-0 mb-[25px] z-0">
                                        <span className="pb-[8px] pl-[1px] text-gray-200">
                                            Repeats
                                        </span>
                                        <div className="w-full relative inline-block z-0">
                                            <span className="border-0 right-[-10px] bottom-[1px] top-auto left-auto border-r-0 border-l-[1px_solid_#dcdfe6] rounded-[0_0_4px_0] h-auto absolute w-[40px] z-20 text-center text-white" style={{
                                                background: "0_0"
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="">
                                                    <polyline points="6 9 12 15 18 9"/>
                                                </svg>
                                            </span>
                                            <span className="border-0 right-[-10px] top-[1px] border-r-0 border-l-[1px_solid_#dcdfe6] rounded-[0_0_4px_0] h-auto absolute w-[40px] z-20 text-center text-white" style={{
                                                background: "0_0"
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="">
                                                    <polyline points="18 15 12 9 6 15"/>
                                                </svg>
                                            </span>
                                            <div className="w-full bg-background-dark rounded-md relative z-10">
                                                <input type="text" id="repeats" className="pl-[15px] pr-[50px] text-left w-full bg-background-dark border-0 outline-none inline-block h-[40px] p-[0_15px] text-white rounded-md" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-in-notes z-0">
                                        <span className="pb-[8px] pl-[1px] text-gray-200">
                                            Notes
                                        </span>
                                        <div className="w-full bg-background-dark rounded-md inline-block text-gray-400 z-0">
                                            <textarea autoComplete="off" id="notes" className="border-none outline-none pt-[10px] px-2 w-full bg-background-dark"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
};

export default MediaItem;