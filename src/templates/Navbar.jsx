import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

const Navbar = () => {
  const classes = useStyles();

  return (
    <Wrapper>
      <Link to="/" className={classes.link}>
        <Button variant="contained" className={classes.button}>Top</Button>
      </Link>

      <Link to="/usestate" className={classes.link}>
        <Button variant="contained" className={classes.button}>useState</Button>
      </Link>

      <Link to="/useeffect" className={classes.link}>
        <Button variant="contained" className={classes.button}>useEffect</Button>
      </Link>

      <Link to="useref" className={classes.link}>
        <Button variant="contained" className={classes.button}>useRef</Button>
      </Link>

      <Link to="reactmemo" className={classes.link}>
        <Button variant="contained" className={classes.button}>React.memo</Button>
      </Link>

      <Link to="" className={classes.link}>
        <Button variant="contained" className={classes.button}>useCallback</Button>
      </Link>

      <Link to="" className={classes.link}>
        <Button variant="contained" className={classes.button}>useMemo</Button>
      </Link>

      <Link to="" className={classes.link}>
        <Button variant="contained" className={classes.button}>useReducer</Button>
      </Link>

      <Link to="" className={classes.link}>
        <Button variant="contained" className={classes.button}>Context / useContext</Button>
      </Link>

    </Wrapper>
  )
}

export default Navbar
const Wrapper = styled.div({
  borderBottom: "1px solid gray",
  padding: 16
})

const useStyles = makeStyles({
  button: {
    
    textTransform: "none"
  },
  link: {
    textDecoration: 'none',
    margin: 8
  }

})