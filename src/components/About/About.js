import React from 'react';
import Footer from '../Footer/Footer';
import './About.css';

const About = () => {
    return (
        <>
        <div>
            <section className='about-container'>
                <div className='about'>
                    <div>
                        <h1 className='about-header'>
                        BUGATTI ETHICS AND CULTURE
                        </h1>
                        <p className='about-title'>
                        INTEGRITY AND COMPLIANCE
                        </p>
                        <p>
                        The success of the BUGATTI brand is underpinned by honesty and integrity on the part of all our employees. By acting in accordance with national and international laws and regulations, internal guidelines and voluntary commitments, we always repay the considerable trust shown in the BUGATTI brand by our customers, business partners and stakeholders on a daily basis. An ethos of integrity, irreproachable conduct and fair dealings with each other are not merely something we take for granted - these values are deeply rooted in our brand identity. Upholding and further strengthening our system of values is one of the main duties of our company.
                        </p>
                        <p className='about-title'>
                        DIVERSITY
                        </p>
                        <p>
                        The BUGATTI brand has valued customers, passionate enthusiasts and outstanding employees across the globe. In order to do justice to cultural differences in international markets and keep pace with increasing economic growth, BUGATTI is proud of the impressive array of experiences, world views, ideas and problem-solving strategies that can be applied on account of the diversity of its workforce. As such, diversity management is a crucial element of our brand's HR strategy.
                        </p>
                    </div>
                    <div>
                        <h1 className='about-header'>
                        BUGATTI CAREERS
                        </h1>
                        <p className='about-title'>
                        UPHOLD HISTORY
                        </p>
                        <p>
                        An inimitable vision, the powerful tradition of legendary sportscars as well as the precise craftsmanship in development, construction and manufacturing, shape the brand since being founded by Ettore Bugatti in 1909. Until today, the brand embodies the pursuit of sublime perfection. A tradition to which we feel committed and that we want to carry forward with you.
                        </p>
                        <p className='about-title'>
                        CREATE THE ULTIMATE
                        </p>
                        <p>
                        At the very core of what we are doing, you will find the creation of automotive milestones of timeless excellence. With the Chiron family we produce the most powerful and exclusive hyper sports car in the world, exploring different facets of performance. The Divo, the Centodieci and the legendary La Voiture Noire further broaden the understanding of what's possible, reflecting the modern interpretation of Bugatti's coachbuilding tradition. Become part of these masterpieces.
                        </p>
                    </div>
                </div>
            </section>
        </div>
        <Footer></Footer>
        </>
    );
};

export default About;