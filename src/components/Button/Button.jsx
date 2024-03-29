import { LoadButton } from "./Button.Styled";

const LoadMoreBtn = ({ onClick }) => {
    return (
      <LoadButton type="button" onClick={onClick}>
        Load more
      </LoadButton>
    );
  }

  export default LoadMoreBtn