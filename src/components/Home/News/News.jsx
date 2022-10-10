import React from 'react'
import TopNewsCard from "../../UsableComponents/Cards/TopNewsCard/TopNewsCard";
import NewsCard from "../../UsableComponents/Cards/NewsCard/NewsCard";
import {useTranslation} from "react-i18next";
import Container from "../../UsableComponents/Container/Container";
import Title from "../../UsableComponents/Title/Title";
import './News.scss'
import {useGetDataQuery} from "../../../redux";

function News() {
    const {t} = useTranslation()
    const {data = [], isError, isLoading} = useGetDataQuery('news')

    if (isError) return <div>Error</div>
    if (isLoading) return <div>Loading..</div>

    return (<section className='news'>
        <Container>
            {data.result.map(info => (<>
                <Title url={'/news'} children={t('news')}/>
                <div className='wrapper'>
                    {info.news_infos.filter(item => item.popularity === '1').slice(0, 1).map(single => <TopNewsCard
                        data={single}/>)}
                    <div className='morenews'>
                        {info.news_infos.filter(item => (item.popularity === '0')).slice(0, 4).map(single => <NewsCard
                            key={single.id} data={single}/>)}
                    </div>
                </div>
            </>))}
        </Container>
    </section>)
}

export default News;