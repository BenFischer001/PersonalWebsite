import './CSS/InfoCard.css'

const InfoCard = ({title, points}) => {
    const subPoints = points.map(point => <li className='point'>{point}</li>)
    return (        
        <div className='infoCard'>
            <h2>{title}</h2>
            <ul className='pointsList'>{subPoints}</ul>
        </div>
    )
}

export default InfoCard