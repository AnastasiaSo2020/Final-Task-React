import { useNavigate } from 'react-router-dom';
import '../Components/main.css'

function CardHome(props) {

    const { title, description, image, button } = props

    let navigate = useNavigate();
    const routeChange = () => {
        let path = props.path;
        navigate(path);
    }

    return (

        <div className="col">
            <div className="card">
                <span className='item-location'>
                <img className='image-size' src={image}/>
                </span>
                <div className="card-body">
                    <h3 className="card-title cardHomeSubTitleAppearance">{title}</h3>
                    <p className="card-text cardHomeDescriptionAppearance">{description}</p>
                    <a href="#" className="btn btn-warning item-location" onClick={routeChange}><strong>{button}</strong></a>
                </div>
            </div>
        </div>
    )
}

export default CardHome