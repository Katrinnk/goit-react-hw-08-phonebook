import { styled } from 'styled-components';

export const UserWrap = styled('div')(() => {
  return {
    color: '#677bd6',
    fontSize: '20px',
    '& p': {
      marginRight: '20px',
    },
  };
});
