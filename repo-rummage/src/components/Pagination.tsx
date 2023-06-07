import { IconButton, ButtonGroup } from "@mui/material";
import {
  FirstPage,
  LastPage,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";

type PaginationProps = {
  linkHeader: string | null;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  linkHeader,
  onPageChange,
}) => {
  const getLink = (rel: string) => {
    const links = linkHeader?.split(",") || [];
    const linkInfo = links.find((link) => link.includes(`rel="${rel}"`));
    const match = linkInfo?.match(/<([^>]+)>; rel="([^"]+)"/);
    return match?.[1] || ""; // Return an empty string instead of null if no match is found
  };

  const handlePageChange = (rel: string) => {
    const link = getLink(rel);
    if (link) {
      // Only try to create a new URL if link is not an empty string
      const url = new URL(link);
      const page = url.searchParams.get("page");
      onPageChange(Number(page));
    }
  };

  return (
    <ButtonGroup>
      <IconButton onClick={() => handlePageChange("first")}>
        <FirstPage />
      </IconButton>
      <IconButton onClick={() => handlePageChange("prev")}>
        <ChevronLeft />
      </IconButton>
      <IconButton onClick={() => handlePageChange("next")}>
        <ChevronRight />
      </IconButton>
      <IconButton onClick={() => handlePageChange("last")}>
        <LastPage />
      </IconButton>
    </ButtonGroup>
  );
};

export default Pagination;
