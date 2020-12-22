import React from 'react';

const NewLetter = () => {
    return (

        <div className="newsletter d-flex align-items-baseline">
                <div className="w3agile_newsletter_left">
                    <h3>sign up for our newsletter</h3>
                </div>
                <div className="w3agile_newsletter_right">
                    <form action="#" method="post">
                        <input type="email" name="Email" value="Email" onFocus="this.value = '';"
                               onBlur="if (this.value == '') {this.value = 'Email';}" required=""/>
                        <input type="submit" value="subscribe now"/>
                    </form>
                </div>
                <div className="clearfix"/>
        </div>

    );
};


export default NewLetter;
