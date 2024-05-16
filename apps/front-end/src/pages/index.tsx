import styled from 'styled-components';
import Cities from '../components/Cities';

const StyledPage = styled.div`
    .page {
    }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <Cities />
    </StyledPage>
  );
}

export default Index;
