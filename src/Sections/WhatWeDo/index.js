import React from "react"
import styled from "styled-components";
// import Title from "./Title"
import data from "./data"
import main from "./main.css"





const WhatWeDo = () => {
  return (
    <section className="section bg-grey">
      {/* <Title title="services" /> */}
      <div className="section-center services-center">
        {data.map(service => {
          const { id, icon, title, text } = service
          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default WhatWeDo


