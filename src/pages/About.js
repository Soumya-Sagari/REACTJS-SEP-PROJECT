import React from "react";

function About() {
  return (
    <div>
    <div className="abt">
    <div className="about">
    <h1 style={{textalign:"left", color:"black", paddingTop:"20px"}}>About</h1>
       <div className="abthead"><h1 >Delivering Innovative Solutions for our Global Clients</h1></div> <br/>
      <br/><br/>
      <p > Established in 2015, United Communication Services has quickly grown 
      to become a leading Network and Electrical Services provider in the United States. 
      Our staff of expert technicians utilizes the latest technology to efficiently deliver 
      the quality service and workmanship our clients expect and deserve. 
      At United, we’re largely focused on customer success and delivering rapid 
      solutions to help businesses move the needle, create value and drive business outcomes.
      <br/><br/>
​       We are a family business that prides ourselves on investing in the right people, 
      technology, and processes so we can add the most value to our clients. Our dedication 
      to exceeding expectations, building trust and developing long-lasting relationships has 
      allowed us to be the go-to service provider for top Fortune 500 companies and Contractors
       across the nation.</p><br/>
       <div className="abtvalues">
         <h3 style={{color:"purple"}}>Our Values</h3>
         <h4 style={{color:"blue"}}>Integrity</h4>
         <p>We exercise the highest levels of integrity in all our actions. Our aim is to build long term partnerships based on trust.</p> 
     
        <h4 style={{color:"blue"}}>Quality</h4>
        <p>We are passionate about excellence and exceeding the expectations of our clients on all projects. Our reputation is solely based on the quality and value we deliver as a team.

​</p>
    
        <h4 style={{color:"blue"}}>Teamwork</h4>
        <p>We believe in a culture of cooperation where all views are welcomed, openness is encouraged and teamwork is the core of everything we do.</p>
     
        <h4 style={{color:"blue"}}>Safety</h4>
        <p>We are relentless in keeping people safe from harm and creating a healthy and safe environment for our team.</p>
     
        <h4 style={{color:"blue"}}>Relationships</h4>
        <p>We are committed to having long-term relationships with our clients, partners, contractors, suppliers, and employees built on trust, collaboration, and respect.</p>
      </div>
    </div>
    </div>
    <div style={{backgroundColor:"grey",color:"black",textAlign:"center"}}> 
    <p> © 2021 TectWorld - All Rights Reserved</p>
    </div>

    </div>
  );
}

export default About;