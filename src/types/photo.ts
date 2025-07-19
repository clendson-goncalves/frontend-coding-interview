export type PexelsPhoto = {
    id: number
    photographer: string
    photographer_url: string
    avg_color: string
    src: {
        medium: string
    }
    alt: string
};

export type PexelsResponse = {
    photos: PexelsPhoto[]
};

export type PhotoCardProps = {
    photo: PexelsPhoto
    isLiked: boolean
    onToggleLike: () => void
};
