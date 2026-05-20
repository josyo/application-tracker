'use client';
import { useState } from "react"
import { Button } from "./button"
import Image from "next/image"

export default function TabsWithImage() {
    const [activeTab, setActiveTab] = useState("organize")
    
    return (
        <div className="w-full">
            {/* Hero Images Section with Tabs */}
            {/* REMOVED nested containers that were compounding margins */}
            <section className="w-full max-w-6xl mx-auto px-4 py-16">
                
                {/* Tabs Wrapper */}
                {/* FIXED: Changed to flex-nowrap with overflow-x-auto so they safely swipe horizontally on mobile instead of forcing the page wider */}
                <div className="grid grid-cols-3 gap-1 bg-gray-100 p-1 rounded-xl mb-8 w-full max-w-md mx-auto">
                    <Button
                        onClick={() => setActiveTab("organize")}
                            className={`rounded-lg py-2.5 text-xs sm:text-sm font-medium transition-all text-center
                            ${activeTab === "organize" ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-black bg-transparent"}`}
                >
                        Organize
                    </Button>

                <Button
                    onClick={() => setActiveTab("get-hired")}
                    className={`rounded-lg py-2.5 text-xs sm:text-sm font-medium transition-all text-center
                    ${activeTab === "get-hired" ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-black bg-transparent"}`}
                >
                    Get Hired
                </Button>

                <Button
                    onClick={() => setActiveTab("manage-boards")}
                    className={`rounded-lg py-2.5 text-xs sm:text-sm font-medium transition-all text-center
                    ${activeTab === "manage-boards" ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-black bg-transparent"}`}
                >
                    Boards
                </Button>
                </div>

                {/* Images Container */}
                <div className="relative max-w-5xl mx-auto overflow-hidden rounded-lg border border-gray-200 shadow-xl w-full bg-gray-50">
                    {/* FIXED: Added w-full h-auto so the image scales fluids inside its fluid card parent wrapper */}
                    {activeTab === "organize" && (
                        <Image 
                            src="/hero-image/hero1.png"
                            alt="Organize Applications"
                            width={1200} 
                            height={800}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    )}

                    {activeTab === "get-hired" && (
                        <Image 
                            src="/hero-image/hero2.png"
                            alt="Get Hired"
                            width={1200} 
                            height={800} 
                            className="w-full h-auto object-cover"
                        />
                    )}

                    {activeTab === "manage-boards" && (
                        <Image 
                            src="/hero-image/hero3.png"
                            alt="Manage Boards"
                            width={1200} 
                            height={800} 
                            className="w-full h-auto object-cover"
                        />
                    )}
                </div>
            </section>
        </div>
    )
}