import Button from "@mui/material/Button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import OutletWrapper from "../../../components/common/OutletWrapper/OutletWrapper";
import { useErrorBoundary } from "react-error-boundary";

const ErrorBoundaryExample = () => {
  const { showBoundary } = useErrorBoundary();
  const queryErrorData = async () => {
    try {
      await axios.get("https://jsonplaceholder.typicode.com/posts/erye");
    } catch (error) {
      showBoundary(error);
    }
  };
  const { mutate } = useMutation(queryErrorData);

  const handleAsyncErrorBoundry = () => {
    mutate();
  };
  return (
    <OutletWrapper>
      Test ErrorBoundary event (onClick):
      <Button
        variant="outlined"
        color="error"
        onClick={() => {
          try {
            throw new Error("Test Boundry Error");
          } catch (e) {
            console.log(e)
            showBoundary(e);
          }
        }}
      >
        Test
      </Button>
      Test ErrorBoundary async (axios get):
      <Button
        variant="outlined"
        color="error"
        onClick={handleAsyncErrorBoundry}
      >
        Test
      </Button>
    </OutletWrapper>
  );
};

export default ErrorBoundaryExample;
