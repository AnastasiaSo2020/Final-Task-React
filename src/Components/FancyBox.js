import '../Components/main.css'

function FancyBox(props) {
    return (
        <div className="row">

            <div className="col-5">
                <div className="row">
                    <div className="col-6">
                        <a href={props.imagefolder + "1.png"} data-fancybox="gallery">
                            <img src={props.imagefolder + "1.png"} className="pasta-fancybox" />
                        </a>
                    </div>
                    <div className="col-6">
                        <a href={props.imagefolder + "2.png"} data-fancybox="gallery">
                            <img src={props.imagefolder + "2.png"} className="pasta-fancybox" />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <a href={props.imagefolder + "3.png"} data-fancybox="gallery">
                            <img src={props.imagefolder + "3.png"} className="pasta-fancybox" />
                        </a>
                    </div>
                    <div className="col-6">
                        <a href={props.imagefolder + "4.png"} data-fancybox="gallery">
                            <img src={props.imagefolder + "4.png"} className="pasta-fancybox" />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <a href={props.imagefolder + "5.png"} data-fancybox="gallery">
                            <img src={props.imagefolder + "5.png"} className="pasta-fancybox" />
                        </a>
                    </div>
                    <div className="col-6">
                        <a href={props.imagefolder + "6.png"} data-fancybox="gallery">
                            <img src={props.imagefolder + "6.png"} className="pasta-fancybox" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-7">
                <a href={props.imagefolder + "main.png"} data-fancybox="gallery">
                    <img src={props.imagefolder + "main.png"} className="fancyboxPastaImage" />
                </a>
            </div>

        </div>
    )
}

export default FancyBox