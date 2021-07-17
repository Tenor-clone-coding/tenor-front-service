import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  return (
    <Container>
      <Span>tenor</Span>
      <Form>
        <Input></Input>
        <Button>
          <SearchIcon fontSize="large" />
        </Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  background-color: #2e93e6;
  display: flex;
  box-sizing: border-box;
  padding: 10px 5%;
  position: sticky;
  top: 0;
  & * {
    box-sizing: border-box;
  }
  justify-content: flex-end;
`;

const Input = styled.input`
  width: 100%;
  padding: 1em 1.5em;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 3px;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  position: relative;
`;

const Span = styled.span`
  font-size: 3rem;
  color: white;
  margin-right: 1em;
`;

export default SearchBar;
