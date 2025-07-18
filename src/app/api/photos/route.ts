import { NextResponse } from "next/server"

export async function GET() {
    try {
        const response = await fetch("https://api.pexels.com/v1/search?query=nature&per_page=10", {
            headers: {
                Authorization: "Mz0iC21IFLz9HuN8ypIbJ54l8OuGnpW2IsVoQrYBEyagQXt1YeBEA7H0",
            },
        })

        if (!response.ok) {
            throw new Error("Failed to fetch photos from Pexels API")
        }

        const data = await response.json()
        return NextResponse.json(data)
    } catch (error) {
        console.error("Error fetching photos:", error)
        return NextResponse.json({ error: "Failed to fetch photos" }, { status: 500 })
    }
}