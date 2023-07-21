import { ExceptionCardLabels } from '../../domain/enums/exception.enum';
import { ExpeptionContainer } from './Exception.style';
import { ReactElement } from 'react';

interface ExceptionProps {
    message: string;
    backGroundColor?: string
}

export function Exception({
    message,
    backGroundColor =  'black'
}: ExceptionProps): ReactElement {
    return (
        <ExpeptionContainer color={backGroundColor} data-testid='exception-component'> 
            <div className="card-header">{ExceptionCardLabels.TITLE}</div>
            <div className="card-content">
                <p>
                    {message}
                </p>
            </div>
        </ExpeptionContainer>
    );
}

export default Exception;
