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
    type: string
    image: string
}
