import React from 'react';
import Grid from '@mui/material/Grid';
// import CommonButton from '../../components/Navbar/common/CommonButton/CommonButton';
import { Container } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

function Home() {
    const location = useLocation()

    const buttonStyles = {
        fontSize: 20,
        fontWeight: 700,
        backgroundColor: '#FFA500',
        '&:hover': {
            backgroundColor: 'red',
        },
    }
    return (
        <Container>
            <Grid styles={{ backgroundColor: '#FFA500' }}>
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
                <div className="homepage">

                    {/* <h1>Hello {location.state.id} and welcome to the home</h1> */}

                </div>
            </Grid>
        </Container>
    )
}

export default Home;