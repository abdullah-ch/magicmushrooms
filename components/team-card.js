import React from 'react';
import { makeStyles, Card, Typography, Grid } from '@material-ui/core';

const styles = makeStyles(() => ({
    images: {
        width: '270px !important',
        height: '270px !important',
        objectFit: 'cover !important',
        filter: 'grayscale(100%)',
    },
}));

const TeamCard = ({ data }) => {
    const { image, name, designation, url, socials } = data;
    const classes = styles();

    return (
        <>
            <Card>
                <img className={classes.images} src={image} alt={name} />
                <div className='detail_TM'>
                    <h5>{name}</h5>
                    <h6>{designation}</h6>
                </div>
            </Card>
            {/*
             <div className='singleTM'>
                <div className='tm_img'>
                    <img src={image} alt={name} />
                    <div className='tm_overlay'>
                        <div className='team_social'>
                            {socials.map(({ name, url }, index) => (
                                <a key={index} href={url}>
                                    <span>{name}</span>
                                </a>
                            ))}
                        </div>
                        <a href={url} className='common_btn'>
                            <span>learn more</span>
                        </a>
                    </div>
                </div>
                <div className='detail_TM'>
                    <h5>{name}</h5>
                    <h6>{designation}</h6>
                </div>
            </div> 
            */}
        </>
    );
};

export default TeamCard;
