import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useCrypto } from "../CryptoContext"; // Importar useCrypto

const Alert = () => {
  const { alert, setAlert } = useCrypto(); // Usar useCrypto

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ open: false });
  };

  return (
    <Snackbar
      open={alert.open}
      autoHideDuration={3000}
      onClose={handleCloseAlert}
    >
      <MuiAlert
        onClose={handleCloseAlert}
        elevation={10}
        variant="filled"
        severity={alert.type}
      >
        {alert.message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;
