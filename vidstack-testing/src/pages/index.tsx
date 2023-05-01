/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @next/next/no-typos */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/require-await */

import { type NextPage } from "next";
import axios from "axios";
import { MediaFullscreenButton, MediaMuteButton, MediaPlayButton, MediaPlayer, MediaSliderValue, MediaTime, MediaTimeSlider, MediaVolumeSlider } from "@vidstack/react";
import 'vidstack/styles/defaults.css';
import styles from "~/styles/watch.module.css"
import { type MediaPlayerElement } from "vidstack";
import { SettingsPanel } from "~/components/settings_panel";
import { ChaptersPanel } from "~/components/chapters_panel";
import { useEffect, useRef, useState } from "react";

const Test: NextPage<any, any> = (props:any) => {
    const player:any = useRef<MediaPlayerElement>(null);
    const [src, setSrc] = useState(props.sources.sources[props.sources.sources.length - 1] ? props.sources.sources[props.sources.sources.length - 1].url : "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    
    const [open, setOpen] = useState(false);
    const [showChapters, setShowChapters] = useState(false);

    const [fetchedLocal, setFetchedLocal] = useState(false);

    const [autoSkip, setAutoSkip] = useState(false);
    const [autoNext, setAutoNext] = useState(false);
    const [autoFullscreen, setAutoFullscreen] = useState(false);
    const [bgColor, setBgColor] = useState("rgba(0, 0, 0, 0.7)");
    const [fontColor, setFontColor] = useState("#ffffff");
    const [cueMb, setCueMb] = useState("15");

    function back() {
        window.location.replace(`/info/${props.data.id}`);
    }
    
    useEffect(() => {
        const acc = localStorage.getItem("account");
        setFetchedLocal(true);
    }, []);

    return (
        <>
        <main className={`${styles.main} flex w-[100vw] h-[100vh] flex-col justify-center items-center bg-gradient-to-b from-[#191A1C] to-[#191A1C]`}>
            <MediaPlayer ref={player} className={`${styles.mediaPlayer} transition-all duration-200 flex flex-col w-full h-full justify-center items-center`} preload="metadata" aspectRatio={16/9}
                src={{
                    src: src,
                    type: "application/x-mpegurl"
                }}
                textTracks={props.sources.subtitles.map((sub:any) => {
                    return {
                        id: sub.lang,
                        label: sub.lang,
                        kind: "subtitles",
                        src: sub.url,
                        language: sub.lang,
                        default: sub.lang.toLowerCase() === "english" || sub.lang.toLowerCase() === "en-us",
                    }
                })}
            >
                <div className={styles.mediaBufferingContainer}>
                    <svg className={styles.mediaBufferingIcon} fill="none" viewBox="0 0 120 120" aria-hidden="true">
                        <circle className="opacity-25" cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="8" />
                        <circle className="opacity-75" cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="10" pathLength="100" style={{
                            strokeDasharray: 100,
                            strokeDashoffset: 50,
                        }}/>
                    </svg>
                </div>
                <div className={"absolute flex flex-col justify-between items-center top-0 left-0 w-full h-full z-30 transition-all duration-300 ease-in-out " + styles.ui} role="group" aria-label="Media Controls" style={{
                    background: "linear-gradient(180deg,rgba(0,0,0,.7),transparent 49.48%,rgba(0,0,0,.7))"
                }}>
                    <div className={`${styles.mediaControlsGroup} flex flex-col justify-center items-center text-2xl w-full`}>
                        <div className="flex flex-row justify-between items-center text-white w-full">
                            <div className={`flex flex-row justify-start items-center ${styles.ui}`}>
                                <div className="w-[40px] h-[40px] mt-[5px] ml-[10px] cursor-pointer stroke-white" onClick={back}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className="transition-all decoration-neutral-150 ease-linear"><path stroke="inherit" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"></path></svg>
                                </div>
                            </div>
                            <div className={`${styles.ui} text-xl md:text-2xl leading-0 line-clamp-3 sm:line-clamp-2 overflow-hidden`}>{props.data.title.english ?? props.data.title.romaji}</div>
                            <div className={`${styles.ui} flex flex-row justify-center items-center gap-1`}>
                                <div className="p-[4px] rounded-sm pb-0 mb-1 transition-all duration-200 cursor-pointer ease-in-out hover:bg-[hsla(0,0%,76%,.2)]" onClick={() => {
                                    setOpen(!open);
                                    setShowChapters(false);
                                }}>
                                    <svg className="material-symbols-outlined media-settings-icon" style={{
                                        transform: open ? "rotate(35deg)" : "rotate(0deg)", transition: "0.3s all ease",
                                    }} width="20" height="20" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.87568 0.666664C7.58751 0.666664 7.34252 0.87709 7.29903 1.16196L6.85555 4.06677C6.85001 4.10301 6.82774 4.13448 6.79561 4.15213C6.70884 4.19979 6.62325 4.24932 6.53889 4.30067C6.50752 4.31977 6.46906 4.32337 6.43485 4.31003L3.69626 3.24231C3.42784 3.13766 3.12323 3.24463 2.97918 3.49413L0.85547 7.17251C0.711385 7.42207 0.771125 7.73945 0.996083 7.91955L3.29145 9.75719C3.32008 9.78011 3.3362 9.81515 3.3354 9.85181C3.33433 9.90086 3.3338 9.95004 3.3338 9.99935C3.3338 10.0488 3.33434 10.0981 3.33541 10.1473C3.33621 10.184 3.3201 10.219 3.29149 10.2419L0.996515 12.0805C0.771678 12.2607 0.712012 12.578 0.856059 12.8275L2.97977 16.5058C3.12386 16.7554 3.42859 16.8624 3.69704 16.7576L6.43522 15.6889C6.46944 15.6756 6.50792 15.6792 6.5393 15.6983C6.62352 15.7495 6.70896 15.799 6.79558 15.8465C6.82771 15.8642 6.84999 15.8957 6.85552 15.9319L7.29903 18.8369C7.34252 19.1218 7.58751 19.3322 7.87568 19.3322H12.1231C12.4112 19.3322 12.6561 19.1219 12.6997 18.8371L13.1442 15.9325C13.1497 15.8963 13.172 15.8649 13.2041 15.8472C13.2912 15.7994 13.3772 15.7497 13.4619 15.6981C13.4932 15.679 13.5317 15.6754 13.5659 15.6888L16.303 16.757C16.5715 16.8618 16.8762 16.7548 17.0203 16.5053L19.144 12.8269C19.2881 12.5774 19.2284 12.2601 19.0035 12.08L16.7094 10.242C16.6808 10.2191 16.6647 10.1841 16.6655 10.1474C16.6666 10.0982 16.6671 10.0488 16.6671 9.99935C16.6671 9.95 16.6666 9.90078 16.6655 9.85169C16.6647 9.81503 16.6809 9.77998 16.7095 9.75707L19.004 7.92012C19.2289 7.74002 19.2887 7.42264 19.1446 7.17307L17.0209 3.4947C16.8768 3.2452 16.5722 3.13823 16.3038 3.24288L13.5663 4.31017C13.5321 4.32351 13.4936 4.31991 13.4623 4.30081C13.3774 4.24917 13.2914 4.19937 13.2041 4.15146C13.172 4.13383 13.1497 4.10236 13.1442 4.06613L12.6997 1.16176C12.6561 0.876982 12.4112 0.666664 12.1231 0.666664H7.87568ZM10.0001 13.7497C12.0713 13.7497 13.7504 12.0706 13.7504 9.99939C13.7504 7.92814 12.0713 6.24906 10.0001 6.24906C7.92881 6.24906 6.24974 7.92814 6.24974 9.99939C6.24974 12.0706 7.92881 13.7497 10.0001 13.7497Z"/>
                                    </svg>
                                </div>
                                <div onClick={() => {
                                        setShowChapters(!showChapters);
                                        setOpen(false);
                                    }} className="bg-[hsla(0,0%,76%,0)] rounded-sm p-[5px] w-[32px] h-[32px] flex justify-center items-center ml-auto mr-[12px] cursor-pointer hover:bg-[hsla(0,0%,76%,.2)] transition-all duration-200">
                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="white" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6061 17.1678C10.284 17.1678 10.0228 16.9066 10.0228 16.5844L10.0228 1.41778C10.0228 1.09561 10.284 0.834442 10.6061 0.834442L12.3561 0.834442C12.6783 0.834442 12.9395 1.09561 12.9395 1.41778L12.9395 16.5844C12.9395 16.9066 12.6783 17.1678 12.3561 17.1678H10.6061Z" />
                                        <path d="M17.0228 17.1678C16.7006 17.1678 16.4395 16.9066 16.4395 16.5844L16.4395 1.41778C16.4395 1.09561 16.7006 0.834442 17.0228 0.834442L18.7728 0.834442C19.095 0.834442 19.3561 1.09561 19.3561 1.41778V16.5844C19.3561 16.9066 19.095 17.1678 18.7728 17.1678H17.0228Z" />
                                        <path d="M0.796022 15.9481C0.71264 16.2593 0.897313 16.5791 1.2085 16.6625L2.89887 17.1154C3.21006 17.1988 3.52992 17.0141 3.61331 16.703L7.53873 2.05308C7.62211 1.74189 7.43744 1.42203 7.12625 1.33865L5.43588 0.885715C5.12469 0.802332 4.80483 0.987005 4.72144 1.29819L0.796022 15.9481Z" />
                                    </svg>
                                </div>
                                {fetchedLocal ? (
                                  <SettingsPanel
                                    setIsOpen={setOpen}
                                    isOpen={open}
                                    menuCon={
                                        [
                                            {
                                                id: "initial",
                                                items: [
                                                    {
                                                        html: "<div style='color: white'>Speed</div>",
                                                        iconID: "speedIcon",
                                                        open: "speed",
                                                    },
                                                    {
                                                        html: "<div style='color: white'>Quality</div>",
                                                        iconID: "qualIcon",
                                                        open: "quality",
                                                    },
                                                    {
                                                        html: "<div style='color: white'>Subtitles</div>",
                                                        iconID: "sourceIcon",
                                                        open: "subtitle",
                                                    },
                                                    {
                                                        html: "<div style='color: white'>Settings</div>",
                                                        iconID: "configIcon",
                                                        open: "config",
                                                    },
                                                ],
                                            },
                                            {
                                                id: "speed",
                                                selectableScene: true,
                                                heading: {
                                                    html: "<div style='color: white'>Speed</div>",
                                                    open: "speed",
                                                    hideSubArrow: true,
                                                },
                                                items: [
                                                    {
                                                        html: `<div class="radioItemWrapper"><div class="radioButtonOutside"><div class="radioButtonInside"></div></div> 0.5x</div>`,
                                                        callback: () => {},
                                                        highlightable: true,
                                                        selected: false,
                                                    },
                                                    {
                                                        html: `<div class="radioItemWrapper"><div class="radioButtonOutside"><div class="radioButtonInside"></div></div> 1x</div>`,
                                                        callback: () => {},
                                                        highlightable: true,
                                                        selected: true,
                                                    },
                                                    {
                                                        html: `<div class="radioItemWrapper"><div class="radioButtonOutside"><div class="radioButtonInside"></div></div> 1.5x</div>`,
                                                        callback: () => {},
                                                        highlightable: true,
                                                        selected: false,
                                                    },
                                                ],
                                            },
                                            {
                                                id: "quality",
                                                selectableScene: true,
                                                heading: {
                                                    html: "<div style='color: white'>Quality</div>",
                                                    open: "quality",
                                                    hideSubArrow: true,
                                                },
                                                items: props.sources && props.sources.sources[0] ? props.sources.sources.map((ep: any) => {
                                                    return {
                                                        html: `<div class="qualityItem"><div class="radioItemWrapper"><div class="radioButtonOutside"><div class="radioButtonInside"></div></div>${
                                                            ep.quality
                                                        }</div><h4 class="hdText">${
                                                            ep.quality == "1080p"
                                                                ? "HD"
                                                                : ep.quality == "720p"
                                                                ? "SD"
                                                                : ""
                                                        }</h4></div>`,
                                                        altText: ep.quality,
                                                        callback: () => console.log(ep.url),
                                                        highlightable: true,
                                                        selected: ep.quality == "1080p" ? true : false,
                                                    };
                                                }) : [],
                                            },
                                            {
                                                id: "subtitle",
                                                selectableScene: true,
                                                heading: {
                                                    text: "<div style='color: white'>Subtitles</div>",
                                                },
                                                items: props.menuSubs.map((sub: any, index:number) => {
                                                    if (!sub.open) {
                                                        return {
                                                            text: sub.text,
                                                            callback: () => console.log(sub.url),
                                                            highlightable: true,
                                                            selected: sub.text == "English" ? true : false,
                                                        };
                                                    } else {
                                                        return {
                                                            text: "Styling",
                                                            iconID: "fillIcon",
                                                            open: "subStyle",
                                                        }
                                                    }
                                                }),
                                            },
                                            {
                                                id: "subStyle",
                                                selectableScene: true,
                                                heading: {
                                                    text: "<div style='color: white'>Subtitle Styling</div>",
                                                },
                                                items: [
                                                    {
                                                        text: "Disable Subs",
                                                        toggle: true,
                                                        toggleOn: () => console.log("toggle on"),
                                                        toggleOff: () => console.log("toggle off"),
                                                    },
                                                    {
                                                        text: "Font Color",
                                                        textBox: true,
                                                        value: fontColor,
                                                        customId: "fontColor",
                                                        onInput: function (value:any) {
                                                            console.log(value.target.value);
                                                        },
                                                    },
                                                    {
                                                        text: "Bg. Color",
                                                        textBox: true,
                                                        value: bgColor,
                                                        customId: "bgColor",
                                                        onInput: function (value:any) {
                                                            console.log(value.target.value);
                                                        },
                                                    },
                                                    {
                                                        text: "Font Size",
                                                        textBox: true,
                                                        value: "3.5",
                                                        customId: "fontSize",
                                                        onInput: function (value:any) {
                                                            console.log(value.target.value);
                                                        },
                                                    },
                                                    {
                                                        text: "Margin Bottom",
                                                        textBox: true,
                                                        value: cueMb,
                                                        customId: "marginBottom",
                                                        onInput: function (value:any) {
                                                            console.log(value.target.value);
                                                        },
                                                    },
                                                ],
                                            },
                                            {
                                                id: "fillmode",
                                                heading: {
                                                    text: "<div style='color: white'>Fill Mode</div>",
                                                },
                                                items: [
                                                    {
                                                        text: "Normal",
                                                        highlightable: true,
                                                        selected: true,
                                                    },
                                                    {
                                                        text: "Stretch",
                                                        highlightable: true,
                                                    },
                                                    {
                                                        text: "Subtitles",
                                                        highlightable: true,
                                                    },
                                                    {
                                                        text: "Fill",
                                                        open: "quality",
                                                        // "highlightable": true
                                                    },
                                                ],
                                            },
                            
                                            {
                                                id: "config",
                                                heading: {
                                                    text: "<div style='color: white'>Settings</div>",
                                                    back: true,
                                                },
                                                items: [
                                                    {
                                                        html: '<h3 class="qualityText" id="auto-next">Auto-Next</h3>',
                                                        customId: "autoNext",
                                                        toggle: true,
                                                        toggleOn: () => console.log(true),
                                                        toggleOff: () => console.log(false),
                                                        on: autoNext
                                                    },
                                                    {
                                                        html: '<h3 class="qualityText" id="auto-fullscreen">Auto-Fullscreen</h3>',
                                                        customId: "autoFullscreen",
                                                        toggle: true,
                                                        toggleOn: () => console.log(true),
                                                        toggleOff: () => console.log(false),
                                                        on: autoFullscreen
                                                    },
                                                    {
                                                        html: '<h3 class="qualityText" id="auto-skip">Auto-Skip</h3>',
                                                        customId: "autoSkip",
                                                        toggle: true,
                                                        toggleOn: () => console.log(true),
                                                        toggleOff: () => console.log(false),
                                                        on: autoSkip
                                                    },
                                                ],
                                            },
                                        ]
                                    }
                                />  
                                ) : null}
                                <ChaptersPanel
                                    chapters={props.chaptersData}
                                    showChapters={showChapters}
                                />
                            </div>
                        </div>
                        <div className={`${styles.mediaControlsGroup}`}></div>
                        <div className={`${styles.mediaControlsGroup} flex flex-row w-full md:w-[95%] gap-3 justify-between items-center justify-self-center z-30 opacity-100 transition-all duration-300 ease-in-out`} style={{
                            gridArea: "1/1/1/1"
                        }}>
                            <div className={`${styles.ui} flex flex-row justify-center items-center gap-[15px] z-30 z-100 font-bold`}>
                                <div className="flex center justify-center items-center h-[35px] transition-all duration-200 hover:bg-[hsla(0,0%,76%,.2)] rounded-md">
                                    <MediaPlayButton aria-keyshortcuts="Space">
                                        <svg slot="play" height="32" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...({} as any)}>
                                            <path d="M405.2,232.9L126.8,67.2c-3.4-2-6.9-3.2-10.9-3.2c-10.9,0-19.8,9-19.8,20H96v344h0.1c0,11,8.9,20,19.8,20  c4.1,0,7.5-1.4,11.2-3.4l278.1-165.5c6.6-5.5,10.8-13.8,10.8-23.1C416,246.7,411.8,238.5,405.2,232.9z" fill="#fff" />
                                        </svg>
                                        <svg slot="pause" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" className="transition-all decoration-neutral-150 ease-linear" {...({} as any)}>
                                            <path d="M10.65 19.11V4.89c0-1.35-.57-1.89-2.01-1.89H5.01C3.57 3 3 3.54 3 4.89v14.22C3 20.46 3.57 21 5.01 21h3.63c1.44 0 2.01-.54 2.01-1.89ZM21.002 19.11V4.89c0-1.35-.57-1.89-2.01-1.89h-3.63c-1.43 0-2.01.54-2.01 1.89v14.22c0 1.35.57 1.89 2.01 1.89h3.63c1.44 0 2.01-.54 2.01-1.89Z" fill="#ffffff"></path>
                                        </svg>
                                    </MediaPlayButton>
                                </div>
                                <div className="flex center justify-center items-center h-[35px] transition-all duration-200 hover:bg-[hsla(0,0%,76%,.2)] rounded-md">
                                    <MediaMuteButton aria-keyshortcuts="m" />
                                    <MediaVolumeSlider className="group mx-[calc(var(--thumb-size)/2)] h-12 flex items-center transition-all duration-200 ease-in-out min-w-[5vw]" style={{ '--thumb-size': '14px', '--track-height': '4px' }}>
                                        <div className="absolute top-1/2 left-0 z-0 h-[var(--track-height)] w-full -translate-y-1/2 transform bg-[#5a595a] outline-none group-data-[focus]:ring-4 group-data-[focus]:ring-blue-400"></div>
                                        <div className="absolute top-1/2 left-0 z-20 h-[var(--track-height)] w-full -translate-y-1/2 scale-x-[var(--slider-fill-rate)] transform bg-white will-change-transform" style={{ transformOrigin: 'left center' }} />
                                        <div className="absolute top-0 left-[var(--slider-fill-percent)] z-20 h-full w-[var(--thumb-size)] -translate-x-1/2 transform group-data-[dragging]:left-[var(--slider-pointer-percent)]">
                                            <div className="absolute top-1/2 left-0 h-[var(--thumb-size)] w-[var(--thumb-size)] -translate-y-1/2 transform rounded-full bg-white opacity-0 transition-opacity duration-150 ease-in group-data-[interactive]:opacity-100"></div>
                                        </div>
                                        <div className="absolute top-[var(--preview-top)] left-[var(--preview-left)] flex -translate-x-1/2 transform items-center justify-center rounded-sm bg-black px-2.5 py-1 text-white/80 opacity-0 transition-opacity duration-200 ease-out group-data-[interactive]:opacity-100 group-data-[interactive]:ease-in" slot="preview">
                                            <MediaSliderValue type="pointer" format="percent" />
                                        </div>
                                    </MediaVolumeSlider>
                                </div>
                            </div>
                            <div className={`${styles.ui} flex flex-row justify-center items-center m-0 z-30 w-[95%]`}>
                                <MediaTimeSlider className="flex items-center w-full"></MediaTimeSlider>
                            </div>
                            <div className={`${styles.ui} flex flex-row justify-center items-center`}>
                            <div className="flex flex-row justify-center items-center text-white font-bold">
                                <MediaTime type="current"></MediaTime>/<MediaTime type="duration"></MediaTime>
                            </div>
                                <div className="flex center justify-center items-center h-[35px] transition-all duration-200 hover:bg-[hsla(0,0%,76%,.2)] rounded-md">
                                    <MediaFullscreenButton aria-keyshortcuts="f"></MediaFullscreenButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MediaPlayer>
        </main>
        </>
    );
};

export async function getServerSideProps() {
    const id = "148098";
    const provider = "9anime";
    const watchId = "HTWfDc0l";

    const { data } = await axios.get(String(process.env.BACKEND_URL) + `/info/${id}`, { method: "GET", headers: { "Content-Type": "application/json" } });
    
    const { data: episodes } = await axios.post(String(process.env.BACKEND_URL) + "/episodes", {
        id: id
    }, { method: "POST", headers: { "Content-Type": "application/json" } });


    let episodeNumber = -1;
    const chapters = [];

    for (let i = 0; i < episodes.length; i++) {
        const providerEp = episodes[i];

        // Temp
        providerEp.providerId = providerEp.provider;

        for (let j = 0; j < providerEp.episodes.length; j++) {
            const episode = providerEp.episodes[j];
            if (episode?.id === watchId || episode?.url === watchId) {
                episodeNumber = episode.number ?? i;
            }

            if (providerEp.providerId.toLowerCase() === provider.toLowerCase()) {
                let title = episode.title ?? "";
                if (title.length > 30) {
                    title = episode.title.substring(0, 30) + "...";
                }
                chapters.push({
                    title: title ?? "Episode " + (i + 1),
                    length: providerEp.providerId,
                    url: `/watch/${id}/${provider}/${encodeURIComponent(episode.id)}`,
                    selected: episode?.id === watchId || episode?.url === watchId
                })
            }
        }
    }
    
    const { data: watchData } = await axios.post(String(process.env.BACKEND_URL) + `/sources`, {
        id: id,
        //providerId: provider,
        provider: provider,
        watchId: watchId
    }, { method: "POST", headers: { "Content-Type": "application/json" } });

    for (let i = 0; i < watchData.sources.length; i++) {
        if (provider === "9anime") {
            watchData.sources[i].url = `${String(process.env.M3U8_PROXY)}/cors?url=${encodeURIComponent(String(watchData.sources[i].url))}&headers=${encodeURIComponent(JSON.stringify({ Referer: "https://9anime.pl" }))}`;
        } else if (provider === "enime") {
            watchData.sources[i].url = `${String(process.env.M3U8_PROXY)}/cors?url=${encodeURIComponent(String(watchData.sources[i].url))}&headers=${encodeURIComponent(JSON.stringify({ Referer: "https://9anime.pl" }))}`;
        } else if (provider === "gogoanime") {
            watchData.sources[i].url = `${String(process.env.M3U8_PROXY)}/cors?url=${encodeURIComponent(String(watchData.sources[i].url))}&headers=${encodeURIComponent(JSON.stringify({ Referer: "https://9anime.pl" }))}`;
        } else if (provider === "animepahe") {
            watchData.sources[i].url = `${String(process.env.M3U8_PROXY)}/cors?url=${encodeURIComponent(String(watchData.sources[i].url))}&headers=${encodeURIComponent(JSON.stringify({ Referer: "https://kwik.cx" }))}`;
        }
    }

    const subs = [];

    subs.push({
        text: "Styling",
        iconID: "fillIcon",
        open: "subStyle",
    });

    const languageNames = new Intl.DisplayNames(["en"], {
        type: "language",
    });

    function capitalize(s:string) {
        s = s.toLowerCase();
        return s && s[0]?.toUpperCase() + s.slice(1);
    }

    watchData.subtitles.map((ep: any, index: number) => {
        const langCode = ep.lang.split("-")[0];
        let language:any = "Unknown";

        try {
            language = languageNames.of(langCode);
            subs.push({
                text: capitalize(language),
                highlightable: true,
                url: ep.url,
                selected: ep.lang == "en-US" ? true : false,
            });
        } catch (e) {
            // console.log(e);
        }
    });

    return {
        props: {
            data,
            sources: watchData,
            menuSubs: subs,
            chaptersData: chapters,
            watchId: watchId
        },
    };
}

export default Test;