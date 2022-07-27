import { Box } from 'components/Box';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink } from './SharedLayout.styled';

export const SharedLayout = () => {
    return (
        <Box as="div">
            <Box as="header"
                bg="background"
                p="4"
                mb="4">
                <Box as="nav"
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    >
                    <StyledLink to='/'>Home</StyledLink>
                    <StyledLink to='/movies'>Movies</StyledLink>
                </Box>
            </Box>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </Suspense>
        </Box>
    )
}
