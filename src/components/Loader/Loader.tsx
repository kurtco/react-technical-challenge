import { LoaderCardLabels } from '../../domain/enums/loading.enum';
import { ReactElement } from 'react';
import { LoadingIcon, LoadingMessage, LoadingMessageContainer } from './Loader.style';


export function Loader(): ReactElement {
    return (
        <LoadingMessageContainer>
            <LoadingIcon/>
            <LoadingMessage>{LoaderCardLabels.DEFAULT}</LoadingMessage>
        </LoadingMessageContainer>
    );
}

export default Loader;
