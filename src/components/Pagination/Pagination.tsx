import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-react';

import {
  PaginationContainer,
  PaginationButton,
  PageButton,
  EllipsisButton,
} from './Pagination.styles';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const maxVisiblePages = 5;
  const halfVisible = Math.floor(maxVisiblePages / 2);

  let startPage = Math.max(1, currentPage - halfVisible);
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <PaginationContainer>
      <PaginationButton onClick={() => onPageChange(currentPage - 1)} disabled={currentPage <= 1}>
        <ChevronLeft size={16} />
        Previous
      </PaginationButton>

      {startPage > 1 && (
        <>
          <PageButton onClick={() => onPageChange(1)}>1</PageButton>
          {startPage > 2 && (
            <EllipsisButton disabled>
              <Ellipsis size={16} />
            </EllipsisButton>
          )}
        </>
      )}

      {pages.map((page) => (
        <PageButton key={page} $active={page === currentPage} onClick={() => onPageChange(page)}>
          {page}
        </PageButton>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <EllipsisButton disabled>
              <Ellipsis size={16} />
            </EllipsisButton>
          )}
          <PageButton onClick={() => onPageChange(totalPages)}>{totalPages}</PageButton>
        </>
      )}

      <PaginationButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Next
        <ChevronRight size={16} />
      </PaginationButton>
    </PaginationContainer>
  );
};
