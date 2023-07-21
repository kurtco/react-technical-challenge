import { NotFoundCardContainer, NotFoundCardMss } from './NotFound.style';
import { NotFoundCardLabels } from '../../domain/enums/notFound.enum';
import { ReactElement } from 'react';


export function NotFound(): ReactElement {
    return (
        <NotFoundCardContainer data-testid='not-found-component'>
            <NotFoundCardMss>{NotFoundCardLabels.DEFAULT}</NotFoundCardMss>
        </NotFoundCardContainer>
    );
}

export default NotFound;
