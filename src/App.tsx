import styled from 'styled-components'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import CardContainer from './Card'
import ResponsiveContainer from './Responsive'

const AppContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${({ theme }) => theme.spacing(4)} 0;

  ${({ theme }) => theme.spaceBetweenX(2)}
`

const StyledLink = styled(Link)`
  flex: 0;
`

export const App = () => (
  <AppContainer>
    <Router>
      <LinkContainer>
        <StyledLink to="/card">Card</StyledLink>
        <StyledLink to="/responsive">Responsive</StyledLink>
      </LinkContainer>
      <Switch>
        <Route exact path="/card">
          <CardContainer />
        </Route>
        <Route exact path="/responsive">
          <ResponsiveContainer />
        </Route>
      </Switch>
    </Router>
  </AppContainer>
)

export default App
