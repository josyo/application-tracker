'use client';
import { useState } from "react"
import { Button } from "./button"
import Image from "next/image"



export default function TabsWithImage() {
    const [activeTab, setActiveTab] = useState("organize")
    return (
        <div>
            {/* Hero Images Section with Tabs */}
            <section className="container mx-auto px-4 py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-6xl">
                        {/* Tabs */}
                        <div className="flex gap-2 justify-center mb-8">
                            <Button
                                onClick={() => setActiveTab("organize")}
                                className={`rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 boorder shadow-sm 
                                ${
                                activeTab === "organize" 
                                ? "bg-black text-white border-black shadow-md scale[1.05]" 
                                : "bg-white text-black border-gray-200 hover:bg-gray-100 hover:border-gray-300 hover:shadow"}`}>Organize Applications
                            </Button>

                            <Button
                                onClick={() => setActiveTab("get-hired")}
                                className={`rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 boorder shadow-sm 
                                ${
                                activeTab === "get-hired" 
                                ? "bg-black text-white border-black shadow-md scale[1.05]" 
                                : "bg-white text-black border-gray-200 hover:bg-gray-100 hover:border-gray-300 hover:shadow"}`}>
                                Get Hired
                            </Button>
                            
                            <Button
                                onClick={() => setActiveTab("manage-boards")}
                                className={`rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 boorder shadow-sm 
                                ${
                                activeTab === "manage-boards" 
                                ? "bg-black text-white border-black shadow-md scale[1.05]" 
                                : "bg-white text-black border-gray-200 hover:bg-gray-100 hover:border-gray-300 hover:shadow"}`}>
                                Manage Boards
                            </Button>
                        </div>
                        {/* Images */}
                        <div className="relative max-w-5xl mx-auto gap-8 overflow-hidden rounded-lg border border-gray-200 shadow-xl">
                        {activeTab === "organize" && (<Image 
                        src="/hero-image/hero1.png"
                        alt="Organize Applications"
                        width={1200} 
                        height={800}
                        loading="eager" />)}

                        {activeTab === "get-hired" && (<Image 
                        src="/hero-image/hero2.png"
                        alt="Get Hired"
                        width={1200} 
                        height={800} />)}

                        {activeTab === "manage-boards" && (<Image 
                        src="/hero-image/hero3.png"
                        alt="Manage Boards"
                        width={1200} 
                        height={800} />)}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}