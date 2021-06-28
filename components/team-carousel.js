import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Grid } from '@material-ui/core';
import SectionTitle from '@/components/section-title';
import { TeamOneData } from '@/data';

import TeamCard from '@/components/team-card';
import 'swiper/swiper-bundle.min.css';

import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination]);

const TeamCarousel = () => {
    const { sectionContent, posts } = TeamOneData;

    return (
        <section className='commonSection team'>
            <Container>
                <Row>
                    <Col lg={12} className='text-center'>
                        <SectionTitle data={sectionContent} />
                    </Col>
                </Row>
            </Container>
            <Grid
                container
                direction='row'
                justify='space-around'
                alignItems='center'
            >
                {posts.map((post, index) => (
                    <TeamCard data={post} />
                ))}
            </Grid>
        </section>
    );
};

export default TeamCarousel;
