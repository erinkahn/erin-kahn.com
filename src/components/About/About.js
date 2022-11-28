import React, {lazy, Suspense} from 'react';
import SectionWrapper from '../Global/SectionWrapper';
import { aboutData } from '../../constants/data';
const AboutImage = lazy(() => import('./AboutImage'));

export default function About() {
    return (
        <SectionWrapper>
            <div className="about-container">
                <div className="col text">
                    <h2 className="section-title">{aboutData.sectionTitle}</h2>
                    <p>{aboutData.content}</p>
                </div>
                <div className="col right">
                    <div className="image-container">
                        <Suspense fallback={<div>Loading images...</div>}>
                            <AboutImage aboutProp={aboutData.img} />
                        </Suspense>    
                    </div> 
                </div>        
            </div>
        </SectionWrapper>
    )
}