import React from 'react';
import Grid from '@mui/material/Grid';
import CommonButton from '../../components/Navbar/common/CommonButton/CommonButton';
import { Container } from '@mui/material';

function Home() {
    const buttonStyles = {
        fontSize: 20,
        fontWeight: 700,
        backgroundColor: '#FFA500',
        '&:hover': {
            backgroundColor: 'red',
        },
    }
    return (
        <Container fixed>
            <Grid styles={{backgroundColor:'#FFA500'}}>
                <h1>This is the home page.</h1>
                {/* <CommonButton
                    size={'large'}
                    variant='contained'
                    sx={buttonStyles}
                >Test</CommonButton>
                <CommonButton
                    size={'large'}
                    variant='outlined'
                    sx={buttonStyles}
                >Test</CommonButton> */}
            </Grid>
        </Container>
    )
}

export default Home;
