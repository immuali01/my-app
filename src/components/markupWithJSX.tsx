// Learnt usage of Fragment

import { Fragment } from "react";
// Fragment [Key]
// <> </> [Without Key]
function AboutPage() {
    return (
    <Fragment>
        <h1>About</h1>
        <p>Hello there.<br />How do you do?</p>
        </Fragment>
    );
  }

  export default AboutPage;