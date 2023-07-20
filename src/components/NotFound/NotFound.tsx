import { ReactElement } from 'react';
import { NotFoundCardContainer, NotFoundCardMss } from './NotFound.style';
import { NotFoundCardLabels } from '../../domain/enums/notFound.enum';


export function NotFound(): ReactElement {
    return (
        <NotFoundCardContainer>
            <NotFoundCardMss>{NotFoundCardLabels.DEFAULT}</NotFoundCardMss>
        </NotFoundCardContainer>
    );
}

export default NotFound;
