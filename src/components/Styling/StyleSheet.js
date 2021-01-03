import React from 'react'
// Using CSS stylesheets
import './myStyles.css'

// using CSS modules
import styles from './moreStyle.module.css'
import ChildStyleSheet from './ChildStyleSheet';

function StyleSheet(props) {
    // class based on props
    let className = props.primary ? "primary" : "";
    console.log(className);

    return (
        <div>
            {/* Using CSS stylesheets */}
            {/* <h1 className={className}>Stylesheets</h1> */}

            {/* for multiple classes: template literals */}
            {/* <h1 className={ `${className} font-xl` } > My StyleSheet </h1> */}

            {/* using CSS modules */}
            {/* good thing about CSS modules is that their scope is local ==> cannot be used in children components ==> avoids CSS conflict  */}
            <h1 className={styles.success}>CSS Module success</h1>
            <h1 className={styles.error}>CSS Module error</h1>
            {/* The scope of CSS sylsheets extends to child components ==> out of scope, and could result in CSS conflicts */}
            <ChildStyleSheet/>
        </div>
    )
}

export default StyleSheet
