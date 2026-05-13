// AboutWorkSection.jsx

import "./AboutWorkSection.css";

import work1 from "../../../../assets/codefy.png";
import work2 from "../../../../assets/mrtek.png";
import work3 from "../../../../assets/harmain.png";
import work4 from "../../../../assets/ramstainless.png";

const works = [
    {
        id: 1,
        title: "Codefy",
        image: work1,
    },
    {
        id: 2,
        title: "MR.Teknik",
        image: work2,
    },
    {
        id: 3,
        title: "Noorharamain",
        image: work3,
    },
    {
        id: 4,
        title: "Ram Stainless",
        image: work4,
    },
];

export default function AboutWorkSection() {
    return (
        <section className="aboutworksec">
            <div className="aboutworksec-container">

                {/* HEADER */}
                <div className="aboutworksec-header">
                    <span>OUR</span>
                    <h2>WORKS</h2>
                </div>

                {/* GRID */}
                <div className="aboutworksec-grid">
                    {works.map((work) => (
                        <div className="aboutworksec-card" key={work.id}>

                            <div className="aboutworksec-image-wrapper">
                                <img src={work.image} alt={work.title} />
                            </div>

                            <div className="aboutworksec-title">
                                <h3>{work.title}</h3>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}