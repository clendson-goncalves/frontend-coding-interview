"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion";
import PhotoCard from "@/components/PhotoCard"
import { PexelsPhoto, PexelsResponse } from "@/types/photo"
import Image from "next/image"

export default function Photos() {
    const [photos, setPhotos] = useState<PexelsPhoto[]>([])
    const [loading, setLoading] = useState(true)
    const [likedPhotos, setLikedPhotos] = useState<Set<number>>(new Set())
    const router = useRouter()

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("isAuthenticated")
        if (!isAuthenticated) {
            router.push("/signin")
            return
        }

        const savedLikes = localStorage.getItem("likedPhotos")
        if (savedLikes) {
            setLikedPhotos(new Set(JSON.parse(savedLikes)))
        }

        fetchPhotos()
    }, [router])

    const fetchPhotos = async () => {
        try {
            const response = await fetch("/api/photos")
            const data: PexelsResponse = await response.json()
            setPhotos(data.photos)
        } catch (error) {
            console.error("Error fetching photos:", error)
        } finally {
            setLoading(false)
        }
    }

    const toggleLike = (photoId: number) => {
        const newLikedPhotos = new Set(likedPhotos)
        if (newLikedPhotos.has(photoId)) {
            newLikedPhotos.delete(photoId)
        } else {
            newLikedPhotos.add(photoId)
        }
        setLikedPhotos(newLikedPhotos)
        localStorage.setItem("likedPhotos", JSON.stringify(Array.from(newLikedPhotos)))
    }

    const handleSignOut = () => {
        localStorage.removeItem("isAuthenticated")
        router.push("/signin")
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center">
            <div className="space-y-6 p-6 w-full max-w-xl">
                <div className="flex items-center justify-between px-4">
                    <div className="flex flex-col gap-y-4 items-start">
                        <Image src="/logo.svg" alt="Logo" width={75} height={75} />
                        <h1 className="text-center text-xl font-semibold">All photos</h1>
                    </div>

                    {/*SIGN OUT BUTTON INCLUDED, JUST TO AUTENTICATION TESTING.*/}

                    <button onClick={handleSignOut} className="cursor-pointer text-xs text-gray-300">
                        Sign out
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-2 mt-8">
                    {photos.map((photo, idcount) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idcount * 0.05, duration: 0.5 }}
                        >
                            <PhotoCard
                                key={photo.id}
                                photo={photo}
                                isLiked={likedPhotos.has(photo.id)}
                                onToggleLike={() => toggleLike(photo.id)}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
