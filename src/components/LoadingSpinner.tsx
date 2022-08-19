import { Spinner } from "./styles"

export const LoadingSpinner = () => {
  return (
    <Spinner>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Spinner>
  );
}