import { Alert, Snackbar, Stack } from "@mui/material";

type WarningSnackbarProps = {
  open: boolean;
  handleClose: () => void;
};

const WarningSnackbar: React.FC<WarningSnackbarProps> = ({
  open,
  handleClose,
}) => {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          You have reached GitHub API's limit of 10 hits per minute. An
          extension of this web app would allow you to log in using your own
          credentials and have unlimited access.
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default WarningSnackbar;
