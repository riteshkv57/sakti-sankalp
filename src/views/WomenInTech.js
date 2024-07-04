import React from "react";
import { Container } from "react-bootstrap";
import TechInfo from "./TechInfo";
import Route from "../Routing/Route";

const WomenInTech = (props) => {
  return (
    <div>
      <Route path="/womenintech">

      <Container>
        <h2 className="text-center my-5">Women In Technology</h2>
        <hr />
        <TechInfo
          imgurl="https://images.unsplash.com/photo-1573164574472-797cdf4a583a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwaW4lMjB0ZWNofGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          title="AnitaB.org"
          content="At AnitaB.org, we envision a future where the people who imagine and build technology mirror the people and societies for whom they build it. We connect, inspire, and guide women in computing, 
        and organizations that view technology innovation as a strategic imperative. Our social enterprise supports women in technical fields, as well as the organizations that employ them and the academic 
        institutions training the next generation. A full roster of programs help women grow, learn, and develop their highest potential."
          link="https://anitab.org/"
        />

        <TechInfo
          imgurl="https://images.unsplash.com/photo-1531493731235-b5c309dca387?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBpbiUyMHRlY2h8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          title="Girls who Code"
          content="Girls Who Code is on a mission to close the gender gap in technology and to change the image of what a programmer looks like and does.
          We're reaching girls around the world and are on track to close the gender gap in new entry-level tech jobs by 2030. 
          We believe being brave is about being resilient, persistent, and ambitious. We believe that diverse ability, culture, identity, and opinion makes our organization stronger. 
          We’re not just preparing our girls to enter the workforce - we’re preparing them to lead it, to improve it, to completely and totally transform it."
          link="https://girlswhocode.com/"
          reverse="flex-row-reverse"
        />

        <TechInfo
          imgurl="https://images.unsplash.com/photo-1573165067541-4cd6d9837902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBpbiUyMHRlY2h8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          title="Django Girls"
          content="Django Girls is a non-profit organization and a community that empowers and helps women to organize free, 
        one-day programming workshops by providing tools, resources and support. 
        We are a volunteer run organization with hundreds of people contributing to bring more amazing women into the world of technology. 
        We are making technology more approachable by creating resources designed with empathy.
        During each of our events, 30-60 women build their first web application using HTML, CSS, Python and Django."
          link="https://djangogirls.org/en/"
        />

        <TechInfo
          imgurl="https://images.unsplash.com/photo-1573167243872-43c6433b9d40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVuJTIwaW4lMjB0ZWNofGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          title="Women Who Code"
          content="Our mission is to inspire women to excel in technology careers. 
          We envision a world where women are proportionally represented as technical leaders, executives, founders, VCs, board members, and software engineers. 
          When you become a part of Women Who Code you gain access to programs and services that are designed to help you step up your tech career. We have over 290,000 members who are career-aged tech 
          professionals operating at each level of the industry."
          link="https://www.womenwhocode.com/"
          reverse="flex-row-reverse"
        />

        <TechInfo
          imgurl="https://images.unsplash.com/photo-1573165265437-f5e267bb3db6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW4lMjBpbiUyMHRlY2h8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          title="PyLadies"
          content="We are an international mentorship group with a focus on helping more women become active participants and leaders in the Python open-source community. Our mission is to promote, 
        educate and advance a diverse Python community through outreach, education, conferences, events and social gatherings. PyLadies also aims to provide a friendly support network for women and 
        a bridge to the larger Python world. Anyone with an interest in Python is encouraged to participate!"
          link="https://pyladies.com/"
        />

        <TechInfo
          imgurl="https://images.unsplash.com/photo-1573165662973-4ab3cf3d3508?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBpbiUyMHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          title="Women In Tech"
          content="Welcome to the public landing page for the Women in Technology
          Slack group. Our group is a safe, confidential space for women who
          work in technology to chat and support each other. Please consider
          joining us whether you are new to the tech industry or you are a
          long-time practitioner. Not a programmer? That’s fine! Our group
          does not exclude people who work in technical writing, software
          testing and QA, graphic design, user experience, project
          management, customer support, or other areas that are sometimes
          invisible in the discourse on women in tech."
          link="https://witchat.github.io/"
          reverse="flex-row-reverse"
        />
      </Container>
      </Route>
    </div>
  );
};

export default WomenInTech;
