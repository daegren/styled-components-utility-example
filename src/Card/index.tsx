import styled from 'styled-components'
import Card from './Card'

const Container = styled.section``

const StyledCard = styled(Card)`
  flex: 1;
  margin: ${({ theme }) => theme.spacing(2)} 0;
  max-width: 600px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: ${({ theme }) => theme.sizing(4)};
`

export const CardContainer = () => (
  <Container>
    <StyledCard />
    <hr />
    <h2>Example</h2>
    <p>
      This is a conversion of the styles found under the "Build Anything" header
      on the Tailwindcss homepage to use plain CSS and styled-component helpers.
    </p>
    <p>
      The page expects a reset, using Normalize leaves paddings that shouldn't
      be there, so just using a plain reset, check <code>index.html</code> to
      change the CSS resets. Tailwind is also included even though this example
      doesn't use any
    </p>
    <img src="/assets/card-example.png" alt="example" />
  </Container>
)

export default CardContainer
