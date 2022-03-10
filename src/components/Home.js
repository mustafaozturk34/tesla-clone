import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section 
        tittle = "Model 3"
        description = "Order Online for Touchless Delivery"
        backgroundImg = "model-3.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory" 
      />
      <Section 
        tittle = "Model Y"
        description = "Order Online for Touchless Delivery"
        backgroundImg = "model-y.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory" 
      />
      <Section 
        tittle = "Model S"
        description = "Order Online for Touchless Delivery"
        backgroundImg = "model-s.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory" 
      />
      <Section 
        tittle = "Model X"
        description = "Order Online for Touchless Delivery"
        backgroundImg = "model-x.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory" 
      />
      <Section 
        tittle = "Lowest Cost Solar Panels in America"
        description = "Money-back quarantee"
        backgroundImg = "solar-panel.jpg"
        leftBtnText = "Order Order"
        rightBtnText = "Learn More" 
      />
      <Section 
        tittle = "Solar for New Roofs"
        description = "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg = "solar-roof.jpg"
        leftBtnText = "Order Order"
        rightBtnText = "Learn More" 
      />
      <Section 
        tittle = "Accessories"
        description = ""
        backgroundImg = "accessories.jpg"
        leftBtnText = "Shop Now"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`