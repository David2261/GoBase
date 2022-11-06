import React from 'react';
import Resume from '../../assets/Resume-eng.pdf'


const CTA = () => {
    return (
        <div>
        	<a href="{Resume} download" className="btn">Download CV</a>
        	<a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
    );
};
export default CTA;
