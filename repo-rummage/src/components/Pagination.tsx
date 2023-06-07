import { IconButton, ButtonGroup, Select, MenuItem } from "@mui/material";
import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";

type PaginationProps = {
  currentPage: number;
  setCurrentPage: (value: number) => void;
  pageSize: number;
  setPageSize: (value: number) => void;
  totalCount: number;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  pageSize,
  setPageSize,
  totalCount,
}) => {
  const totalPages: number = Math.floor(
    totalCount < 1000 ? totalCount : 1000 / pageSize
  );
  const handlePageNav = (pageNav: string) => {
    if (pageNav === "first") {
      setCurrentPage(1);
    }
    if (pageNav === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    if (pageNav === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
    if (pageNav === "last") {
      setCurrentPage(totalPages);
    }
  };

  return (
    <div className="flex justify-left items-center gap-4">
      <ButtonGroup>
        <IconButton onClick={() => handlePageNav("first")}>
          <CaretDoubleLeft />
        </IconButton>
        <IconButton onClick={() => handlePageNav("prev")}>
          <CaretLeft />
        </IconButton>
        <IconButton onClick={() => handlePageNav("next")}>
          <CaretRight />
        </IconButton>
        <IconButton onClick={() => handlePageNav("last")}>
          <CaretDoubleRight />
        </IconButton>
      </ButtonGroup>
      <div>Page: {currentPage}</div>
      <div>
        Items per page:
        <Select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 20, 50, 100].map((count) => (
            <MenuItem key={count} value={count}>
              {count}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default Pagination;
