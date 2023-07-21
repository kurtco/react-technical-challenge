export interface CharactersApiResponse {
    data: CharactersData
}

export interface CharactersApiData {
    characters: CharactersData
}

export interface CharactersData {
    results: CharacterData[]
}

export interface CharacterData {
    id: number
    name: string
    species: string
    image: string
    type?: string
    status?: string
    gender?: string
}
