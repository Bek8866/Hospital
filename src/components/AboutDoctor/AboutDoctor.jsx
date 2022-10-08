import React from 'react'
import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";
import Photo from "../../assets/images/docsHeader.png";
import Container from "../UsableComponents/Container/Container";
import Founder from "../About/Founder/Founder";
import photo from '../../assets/images/founder.png'
import photo2 from '../../assets/images/sign 1.svg'
import photo3 from '../../assets/images/Frame 250.png'
import './AboutDoctor.scss'
import {NavLink, useParams} from "react-router-dom";
import {useGetSingleQuery} from "../../redux";

function AboutDoctor() {
    const id = useParams()
    const {data = [], isLoading, isError} = useGetSingleQuery(`/doctors/single/${id.id}`)
    if (isError) return <div><h1>Error</h1></div>
    if (isLoading) return <div><h1>Loading...</h1></div>

    const ali = [{
        id: 1, title: 'Our Doctors', descr: 'Detail about our Doctors', header_image: Photo,
    }]

    return (<section className='about__single'>
        {ali.map(serv => (<SectionHeaders data={serv}/>))}
        <Container>
            {data.data.map(doctor => (
                <>
                    <Founder data={doctor}/>
                    <div className='about__single-bio'>
                        <h1 data-aos="zoom-in" data-aos-duration="4000" className='title'>Biography</h1>
                        <p data-aos="zoom-in" data-aos-duration="4000" className='descr'>{doctor.biography_uz}</p>
                        <div className='infos'>
                            <div className='infos__edu'>
                                <p data-aos="zoom-in" data-aos-duration="4000" className='infos__edu-title'>Education</p>
                                {doctor.gethered_awards.map(aw => (
                                    <div data-aos="zoom-in" data-aos-duration="4000" className='edu'>
                                        <p className='edu__award'>{aw.title}</p>
                                        <hr className='divider'/>
                                    </div>
                                ))}
                            </div>
                            <div className='infos__award'>
                                <p data-aos="zoom-in" data-aos-duration="4000" className='infos__award-title'>Awards and honours</p>
                                {doctor.gethered_awards.map(aw => (
                                    <div data-aos="zoom-in" data-aos-duration="4000" className='award'>
                                        <p className='edu__award'>{aw.title}</p>
                                        <hr className='divider'/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='about__single-operations'>
                        <h1 data-aos="zoom-in" data-aos-duration="4000" className='title'>Operations Attented</h1>
                        {doctor.attended_operations.map(operat => (<NavLink to={`/operation/${operat.operation_id}`} className='operation__item'>
                            <img data-aos="zoom-in" data-aos-duration="4000" src={operat.detail_image[1].detail_image} alt="" className='operation__item-image'/>
                            <div className='operation__item-info'>
                                <p data-aos="zoom-in" data-aos-duration="4000" className='operation__date'>{operat.date}</p>
                                <p data-aos="zoom-in" data-aos-duration="4000" className='operation__title'>{operat.title_ru}</p>
                                <p data-aos="zoom-in" data-aos-duration="4000" className='operation__descr'>{operat.detail_description_ru}</p>
                                <p data-aos="zoom-in" data-aos-duration="4000" className='operation__descr'>{operat.lastdescr}</p>
                            </div>
                        </NavLink>))}
                    </div>
                </>
            ))}
        </Container>
    </section>)
}

export default AboutDoctor