import { ReactElement } from 'react';
import { MediaCard, MediaCardContent, MediaCardDescription, MediaCardThumbnail, MediaCardTitle, ThumbailImage } from './Character.style';

interface CharacterProps {
  id: number
  name: string,
  species: string,
  image: string,
}
export function Character({ id, name, image, species }: CharacterProps): ReactElement {
  return (
    <MediaCard key={id}>
      <MediaCardThumbnail>
        <ThumbailImage
          src={image} alt={name}
        />
      </MediaCardThumbnail>
      <MediaCardContent>
        <MediaCardTitle> {name}</MediaCardTitle>
        <MediaCardDescription>
          {species}
        </MediaCardDescription>
      </MediaCardContent>
    </MediaCard>

  );
}
export default Character;
