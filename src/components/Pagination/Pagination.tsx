import { ReactElement } from "react";
import { PaginationContainer, PaginationPrimarybtn } from "./Pagination.style";


interface PaginationProps {
    setPage: (page: number) => void;
    page: number;
}

export function Pagination({
    setPage,
    page = 1,
}: PaginationProps): ReactElement {
    return (
        <PaginationContainer>
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
