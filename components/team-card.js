import React from 'react';
import { makeStyles, Card, Typography, Grid } from '@material-ui/core';

const styles = makeStyles((theme) => ({
    images: {
        width: '270px !important',
        height: '270px !important',
        objectFit: 'cover !important',
        filter: 'grayscale(100%)',
    },

    cardSize: {
        [theme.breakpoints.down(810)]: {
            marginTop: '1rem',
        },
    },
}));

const TeamCard = ({ data }) => {
    const { image, name, designation, url, socials } = data;
    const classes = styles();

    return (
        <>
            <Card classes={{ root: classes.cardSize }}>
                <img className={classes.images} src={image} alt={name} />
                <div className='detail_TM'>
                    <h5>{name}</h5>
                    <h6>{designation}</h6>
                </div>
            </Card>
        </>
    );
};

export default TeamCard;
