"use client"

import { Star } from "lucide-react"
import Image from "next/image"
import { PhotoCardProps } from "@/types/photo"

export default function PhotoCard({ photo, isLiked, onToggleLike }: PhotoCardProps) {
    return (
        <div className="flex items-start gap-3 max-w-xs md:max-w-lg">

            <button onClick={onToggleLike} className="cursor-pointer">
                <Star className={`w-5 h-5 ${isLiked ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`} />
            </button>

            <div className="relative w-[75px] h-[75px] rounded-md overflow-hidden flex-shrink-0">
                <Image src={photo.src.medium} alt={photo.alt} fill className="object-cover" />
            </div>

            <div className="flex flex-col gap-0.5 md:w-[60%]">
                <p className="text-sm font-bold text-[#111827]">{photo.photographer}</p>
                <p className="text-sm font-normal text-[#111827] line-clamp-1">{photo.alt}</p>
                <div className="flex items-center gap-2">
                    <div className="text-sm" style={{ color: photo.avg_color }} >#{photo.id}</div>
                    <div className="w-3 h-3" style={{ backgroundColor: photo.avg_color }} />
                </div>
            </div>

            <div className="flex gap-1 ml-auto">
                <Image src="/links.svg" width={3} height={3} alt="Portfolio" />
                <a
                    href={photo.photographer_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#0075EB] hover:text-blue-500"
                >Portfolio</a>
            </div>
        </div>
    )
}
