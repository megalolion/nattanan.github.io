import React from 'react'
import "./Banner.css"

let bannerData = {
    title: "React landing page ",
    desc: "Lorem ex irure Lorem commodo aliquip labore in. Reprehenderit aliquip id ullamco ut exercitation exercitation aliqua ipsum sunt reprehenderit sunt. Deserunt ipsum tempor qui cillum. Id id do elit ad irure elit mollit laboris enim commodo. Sit voluptate nulla velit fugiat irure officia elit. Ea ut ad nisi sunt adipisicing aute dolor exercitation esse dolore occaecat.Elit nostrud nulla laborum qui ullamco fugiat elit.Cupidatat laborum voluptate sint est cillum id velit minim dolor eu irure reprehenderit mollit do   Reprehenderit reprehenderit laborum in laboris minim enim officia cupidatat cillum laborum ut.Nulla adipisicing minim aliquip pariatur dolor sunt irure.Reprehenderit sint voluptate ullamco eiusmod cillum proident enim sint consequat.Pariatur ad qui aute esse proident in deserunt deserunt in sint officia aliquip.Voluptate eu pariatur laboris amet reprehenderit in nisi.Laborum laboris eu nostrud tempor elit incididunt amet pariatur ea commodo.Labore dolore officia eiusmod et labore.Sint ullamco et laborum dolor laborum eu.Minim enim esse ex voluptate do duis occaecat non consequat consectetur amet do est.Dolore voluptate nostrud occaecat veniam duis.Minim ut aliqua sunt dolore sint elit cupidatat cupidatat dolor nostrud veniam laboris ut in"
}

function Banner() {
    return (
        <div className="banner-bg">
            <div className="container">
                <div className="banner-con">
                    <div className="banner-text">
                        <h1>{bannerData.title}</h1>
                        <p>
                            {bannerData.desc}

                        </p>
                        <a href="https://www.google.com/?hl=th" className="banner-btn">Learn More</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner
