import React, {useState, useEffect} from 'react'
import axios from 'axios'
const News = () => {
    const [articles, setArticles] = useState([])

    const nytimesAPI = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Lcj5CFAzXyVo8w11aDVBuDnlOvFWnOHi'

    const nytimes = async () => {
        const response = await axios.get(`${nytimesAPI}`)
        console.log(response.data.results)
        setArticles(response.data.results)
    }

    useEffect(() => {
        nytimes()
    }, []);

    return (
        <div className='container' style={{marginTop : '150px'}}>
             <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Latest News</h2>
			 <h3 className="text-center mb-0">News API from https://api.nytimes.com/svc/topstories/v2</h3>
            <div className='row row-cols-1 row-cols-md-3 g-4' style={{marginTop : '30px'}}>
            {articles.map((articlesList) => {
                return (
                    <div>
                    <a href={articlesList.url} target="_blank">
                    <img src={articlesList.multimedia[0].url} className='card-img-top'/>
                    <div>
                        <h5>{articlesList.title}</h5>
                    </div>
                    </a>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default News
