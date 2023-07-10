import Link from "next/link";
import Logo from "./logo";

function Sidebar({ active }: { active: "home" | "anime" | "manga" | "novel" }) {
    return (
        <>
        <aside className="flex-none overflow-x-hidden overflow-y-auto fixed inset-x-0 bottom-0 md:top-0 md:left-0 md:w-fit md:!h-full bg-[rgba(99,118,163,0.05)] transition-all md:flex !z-50">
            <aside className="flex w-full md:w-fit h-full overflow-hidden md:flex-col">
                <div className="flex w-full h-full md:w-auto md:flex-col md:items-center bg-main-primary/10" style={{
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)"
                }}>
                    <Link href="/" className="flex md:block items-center justify-center mt-0 ml-2 md:mt-5 md:ml-0">
                        {/*<Image src={"/icon_logo.png"} className="w-10" width={10} height={10} alt="Icon" />*/}
                        <Logo className="w-10" />
                    </Link>
                    <div className="justify-center my-auto flex flex-row md:flex-col w-full ml-2 md:w-auto md:ml-0">
                        <div className="flex flex-row md:flex-col items-center md:p-0 md:mt-0 w-full md:w-auto justify-between md:justify-center h-full md:h-auto">
                            <Link href="/" className={`flex h-14 items-center justify-center w-[75%] md:w-12 md:h-12 md:mt-0 rounded group hover:bg-main-primary/10 hover:text-main-primary transition-all duration-200 text-white border-t-4 md:border-l-4 md:border-t-0 ${active === "home" ? "border-main-primary bg-main-primary/20" : "border-transparent"}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="">
                                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                    <polyline points="9 22 9 12 15 12 15 22"/>
                                </svg>
                            </Link>
                            <Link href="/anime" className={`flex h-14 items-center justify-center w-[75%] md:w-12 md:h-12 md:mt-0 rounded group hover:bg-main-primary/10 hover:text-main-primary transition-all duration-200 text-white border-t-4 md:border-l-4 md:border-t-0 ${active === "anime" ? "border-main-primary bg-main-primary/20" : "border-transparent"}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="">
                                    <path d="m10 7 5 3-5 3Z"/>
                                    <rect width="20" height="14" x="2" y="3" rx="2"/>
                                    <path d="M12 17v4"/><path d="M8 21h8"/>
                                </svg>
                            </Link>
                            <Link href="/manga" className={`flex h-14 items-center justify-center w-[75%] md:w-12 md:h-12 md:mt-0 rounded group hover:bg-main-primary/10 hover:text-main-primary transition-all duration-200 text-white border-t-4 md:border-l-4 md:border-t-0 ${active === "manga" ? "border-main-primary bg-main-primary/20" : "border-transparent"}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                                </svg>
                            </Link>
                            <Link href="/novels" className={`flex h-14 items-center justify-center w-[75%] md:w-12 md:h-12 md:mt-0 rounded group hover:bg-main-primary/10 hover:text-main-primary transition-all duration-200 text-white border-t-4 md:border-l-4 md:border-t-0 ${active === "novel" ? "border-main-primary bg-main-primary/20" : "border-transparent"}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="">
                                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <Link className="hidden md:flex items-center justify-center w-16 h-16 mt-auto md:mt-0 variant-soft-primary hover:bg-main-primary/20 hover:text-main-primary transition-all duration-200 text-white" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                            <polyline points="16 17 21 12 16 7"/>
                            <line x1="21" x2="9" y1="12" y2="12"/>
                        </svg>
                    </Link>
                </div>
            </aside>
        </aside>
        </>
    )
}

export default Sidebar;