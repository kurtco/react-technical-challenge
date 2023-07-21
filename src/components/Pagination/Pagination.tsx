import { PaginationContainer, PaginationPrimarybtn } from './Pagination.style';
import { ReactElement } from 'react';


interface PaginationProps {
    setPage: (page: number) => void;
    page: number;
}

export function Pagination({
    setPage,
    page = 1,
}: PaginationProps): ReactElement {
    return (
        <PaginationContainer data-testid='pagination-component'>
            <PaginationPrimarybtn
                onClick={() => setPage(page - 1)}
            >
                Page {page}
            </PaginationPrimarybtn>

            <PaginationPrimarybtn
                onClick={() => setPage(page + 1)}
            >
                Page {page + 1}
            </PaginationPrimarybtn>
        </PaginationContainer>
    );
}

export default Pagination;
