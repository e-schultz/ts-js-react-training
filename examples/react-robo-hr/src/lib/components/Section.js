import React from "react";

const Section = ({children, ...props}) => ( <section className="section">{children}</section>)

Section.displayName = "Section";

export default Section;