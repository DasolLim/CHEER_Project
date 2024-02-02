import {React, useState} from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem';
import temp from '../../Assets/SE3350.jpg';
import '../../index.css';
import { Container } from '@mui/material';

const Newsletter = () => {
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={3}><Item></Item></Grid>
                <Grid item xs={4}>
                    <Item>
                        <a href='jan_news'>
                            <div class='container'>
                                <img src={temp} class='standard' alt='Newsletter Object'></img>
                                <div class='description'>
                                    <p class='title'>January Newsletter</p>
                                </div>
                            </div>
                        </a>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <a>
                            <div class='container'>
                                <img src={temp} class='standard' alt='Newsletter Object'></img>
                                <div class='description'>
                                    <p class='title'>February Newsletter</p>
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
