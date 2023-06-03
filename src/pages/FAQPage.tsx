import React from "react";
/*import "./FAQPage.css";*/

const FAQPage: React.FC =() => {
    return(
        <div className="faq-container">
            <h1>Frequently Asked Questions</h1>
            <section>
            <h2>General Questions</h2>
            <div className="faq-item">
                <h3>What is the purpose of this app?</h3>
                <p>Answer</p>
            </div>
            <div className="faq-item">
                <h3>How can I download and install the app?</h3>
                <p>Answer</p>
            </div>
            <div className="faq-item">
                <h3>How does the personalized learning path work?</h3>
                <p>Answer</p>
            </div>
            </section>
            <section>
                <h2>Account and Subscription</h2>
                <div className="faq-item">
                    <h3>What payment methods are accepted?</h3>
                    <p>Answer</p>
                </div>
                <div className="faq-item">
                    <h3>Can I cancel my subscription?</h3>
                    <p>Answer</p>
                </div>

            </section>
            
            <section>
                <h2>Privacy and Data Security</h2>
                <div className="faq-item">
                    <h3>What data is collected and how is it used?</h3>
                    <p>Answer</p>
                </div>
                <div className="faq-item">
                    <h3>Is my personal information secure?</h3>
                    <p>Answer</p>
                </div>

            </section>





        </div>
    )
}
export default FAQPage;



