import { styled } from 'styled-components';

export const Nav = styled('nav')(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& div': {
      padding: '15px',
      '& a': {
        fontWeight: 600,
        fontSize: 20,
        marginLeft: 40,
        textDecoration: 'none',
        color: '#677bd6',
        '&.active': {
          color: '#353fd0',
        },
      },
    },
  };
});
