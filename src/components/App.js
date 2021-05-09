import styled from "styled-components"
import bgImg from '../assets/bg.png'
import Main from "./Main"
import Sidebar from "./Sidebar"

const App = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Sidebar/>
          <Main/>
        </Wrapper>
      </Container>
    </div>
  );
};

const Container = styled.div`
  background: #EEFCFF;
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
`;

const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-size:cover;
  width: 100%;
  height : 100%;
  background-position : center;
  background-repeat:no-repeat;
  display:flex;
`;

export default App

