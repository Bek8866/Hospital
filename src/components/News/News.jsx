import React from 'react'
import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";
import Container from "../UsableComponents/Container/Container";
import FullWidth from "../UsableComponents/Cards/NewsFullWidthCard/FullWidthCard";
import './News.scss'
import SmallCard from "../UsableComponents/Cards/SmallNewsCard/SmallCard";
import {useGetDataQuery} from "../../redux";


function News() {
    const {data = [], isError, isLoading} = useGetDataQuery('news')
    if (isError) return <div>Error</div>
    if (isLoading) return <div>Loading..</div>
    return (<div className='news'>
        {data.result.map(info => (<>
            <SectionHeaders data={info}/>
            <Container>
                <div className='news__top'>
                    {info.news_infos.filter(item => item.popularity === "1").slice(0, 1).map(zero => (
                        <FullWidth data={zero}/>))}
                </div>
                <div className='news__middle'>
                    <h1 className='news__middle-title'>Top News</h1>
                    <div className='news__middle-news'>
                        {info.news_infos.filter(item => item.popularity === "0").slice(0, 8).map(zero => (
                            <SmallCard data={zero}/>))}
                    </div>
                </div>
                <div className='news__bottom'>
                    {info.news_infos.filter(item => item.popularity === "1").slice(1, 3).map(zero => (
                        <FullWidth data={zero}/>))}
                </div>
                <div className='news__footer'>
                    <h1 className='news__middle-title'>Top News</h1>
                    <div className='news__middle-news'>
                        {info.news_infos.filter(item => item.popularity === "0").slice(8, 16).map(zero => (
                            <SmallCard data={zero}/>))}
                    </div>
                </div>
            </Container>
        </>))}
    </div>)
}

export default News