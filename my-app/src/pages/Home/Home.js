import React from 'react';
import Grid from '@mui/material/Grid';
// import CommonButton from '../../components/Navbar/common/CommonButton/CommonButton';
import { Container } from '@mui/material';
// import { useLocation, useNavigate } from 'react-router-dom'
import joyfulBackground from '../../Assets/JoyfulBackground.jpg'

function Home() {
    // const location = useLocation()

    // const buttonStyles = {
    //     fontSize: 20,
    //     fontWeight: 700,
    //     backgroundColor: '#FFA500',
    //     '&:hover': {
    //         backgroundColor: 'red',
    //     },
    // }
    return (
        <Container>
            <Grid styles={{ backgroundColor: '#FFA500' }}>
                <h1>WELCOME</h1>
                <img src={joyfulBackground} alt="Joyful Background" />
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                     dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                      mollit anim id est laborum.
                </div>
                
                {/* <div className="homepage"> */}

                    {/* <h1>Hello {location.state.id} and welcome to the home</h1> */}

                {/* </div> */}
            </Grid>
        </Container>
    )
}

export default Home;