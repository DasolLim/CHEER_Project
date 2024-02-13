import {React, useState} from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem';
import temp from '../../Assets/SE3350.jpg';
import '../../index.css';

const Newsletter = () => {
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Item>
                        <a href='jan_news'>
                            <div class='newsletter-container'>
                                <img src={temp} class='standard' alt='Newsletter Object'></img>
                                <div class='newsletter-description'>
                                    <p class='newsletter-title'>January Newsletter</p>
                                </div>
                            </div>
                        </a>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <a>
                            <div class='newsletter-container'>
                                <img src={temp} class='standard' alt='Newsletter Object'></img>
                                <div class='newsletter-description'>
                                    <p class='newsletter-title'>February Newsletter</p>
                                </div>
                            </div>
                        </a>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <a>
                            <div class='newsletter-container'>
                                <img src={temp} class='standard' alt='Newsletter Object'></img>
                                <div class='newsletter-description'>
                                    <p class='newsletter-title'>March Newsletter</p>
                                </div>
                            </div>
                        </a>
                    </Item>
                </Grid>
            </Grid>
        </div>
    )
}

export default Newsletter;
