

import React, { useEffect, useRef } from 'react';
import './ParallaxStyles.css';
import { Link } from 'react-router-dom';
function HomePage() {
    const textRef = useRef(null);
    const leafRef = useRef(null);
    const hill1Ref = useRef(null);
    const hill4Ref = useRef(null);
    const hill5Ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            let value = window.scrollY;
            textRef.current.style.marginTop = value * 2.5 + 'px';
            leafRef.current.style.top = value * -1.5 + 'px';
            leafRef.current.style.left = value * 1.5 + 'px';
            hill5Ref.current.style.left = value * 1.5 + 'px';
            hill4Ref.current.style.left = value * -1.5 + 'px';
            hill1Ref.current.style.top = value * 1 + "px";
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="container">
            <header>
                <h2 className="logo">Logo</h2>
            </header>
            <section className="parallax">
                <img src={require('./png/hill1.png')} ref={hill1Ref} alt="Hill 1" />
                <img src={require('./png/hill2.png')} id="hill2" />
                <img src={require('./png/hill3.png')} id="hill3" />
                <img src={require('./png/hill4.png')} ref={hill4Ref} id="hill4" />
                <img src={require('./png/hill5.png')} ref={hill5Ref} id="hill5" />
                <img src={require('./png/tree.png')} id="tree" />
                <h2 ref={textRef} id="text">Welcome to AutoJob</h2>

                <img src={require('./png/leaf.png')} ref={leafRef} id="leaf" />
                <img src={require('./png/plant.png')} alt="Plant" />
            </section>
            <section  className='sec'>

                <h1>Introduction to AutoJob</h1>
                    <p>
                    Auto Job (The Project) is a non-profit initiative that thrives to use simple technology to make a big impact. 
                    </p><br />
                    <p>
                         Statistics show that public servants change positions every 18 months, and sample surveys confirm public servants undertake manual position searches on a weekly basis. Starting with serving public servants, the Project aims to replace such manual searches with a customized weekly report on the most recent job market. 
                    </p><br />
                     <p>
                         Unlike Seek/Indeed, the Project will provide much more specific customization including position classification, department, security clearance requirement, and more. Apart from directly serving individuals, the Project seeks to collaborate with jurisdictions and universities to establish a smart connection between university students and the government job market.
                     </p><br />
                     <p>
                         Although the initial scope is mostly on public servant positions, the Project will scale to the general job market and bring benefits to the entire Australian labor force.
                     </p>
                     <Link to="https://www.youtube.com/"  style={styles.link}>
                        <button style={styles.button}>Visit YouTube</button>
                     </Link>
                     <br />

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1>Guidelines for using the AUTOJOB Website</h1>

                  <p>1. Open your preferred browser, e.g., Google Chrome or Safari, and enter the URL <a href="https://www.autojob.one">https://www.autojob.one.</a></p>
                  <p>2. On the introduction page, you'll find detailed information about Auto Job and its objectives.</p>
                  <p>3. View the Auto Job team members and their roles.</p>
                  <p>4. Click on the “NEXT” button to proceed to the Registration Page.</p>
                  <p>5. Fill out the 'Your Job Preferences' form with details like job role, work type, job type, and more.</p>
                  <p>6. After filling out the form, click on the “NEXT” button. Ensure you've selected options for “Work Type” and “Job Type” to avoid errors.</p>
                  <p>7. On the “Email” page, enter your preferred name, email address, and the verification code sent to your email.</p>
                  <p>8. Agree to the terms and conditions and click on the “SUBMIT” button. If needed, use the “BACK” button to make changes.</p>
                  <Link to="./subscribe" style={styles.link}>
                    <button style={styles.button}>Subscribe Now</button>
                  </Link>



            </section>



        </div>

        
    );
}


const styles = {
        button: {
        display: 'block',
        margin: '40px auto 0',
        padding: '10px 30px',
        fontSize: '1.2em',
        backgroundColor: '#EC645F',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none'
    },
    link: {
        textDecoration: 'none'
    }
};
export default HomePage;
