import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="services" />
      <div className="section-center services-center">
        {services.map(service => {
          const { id, icon, title, text, lists } = service
          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
              {lists.map((list, id) => {
                return (
                  <>
                    <ul key={id}>{list.title}:</ul>
                    {list.items.map((item, id) => {
                      return <li key={id}>{item}</li>
                    })}
                  </>
                )
              })}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
