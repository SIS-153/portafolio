import React from 'react';
import './ServicesPage.css'

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Accordion from './Accordion'


/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Services = () => {
  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main className="service-page">
      <section className="servicios" id="servicios">
        <h2 className="heading">
            <FormattedMessage
                id='services'
                defaultMessage='Services'
            />
        </h2>
        <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-cloud"></i>
                <h3>
                    <FormattedMessage
                        id='design'
                        defaultMessage='Cloud and DevOps Architecture'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='design-info'
                        defaultMessage='Design of scalable, secure, and high-availability solutions on platforms like AWS and GCP. Strategic DevOps planning to optimize your development and operations workflows.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-cogs"></i>
                <h3>
                    <FormattedMessage
                        id='development'
                        defaultMessage='CI/CD Automation'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='development-info'
                        defaultMessage='Implementation of Continuous Integration and Continuous Deployment (CI/CD) pipelines with tools like Jenkins and GitHub Actions to accelerate quality software delivery in an automated way.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
                <i className="fab fa-docker"></i>
                <h3>
                    <FormattedMessage
                        id='marketing'
                        defaultMessage='Container Orchestration'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='marketing-info'
                        defaultMessage='Deployment and management of modern applications using Docker and Kubernetes (K8s). We simplify scalability, portability, and the lifecycle management of your services.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="500">
                <i className="fas fa-tasks"></i>
                <h3>
                    <FormattedMessage
                        id='maintenance'
                        defaultMessage='Configuration Management with Ansible'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='maintenance-info'
                        defaultMessage='Automation of server and application provisioning and configuration using Ansible. We guarantee consistent, reproducible, and manually error-free environments.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="600">
                <i className="fas fa-server"></i>
                <h3>
                    <FormattedMessage
                        id='seo'
                        defaultMessage='Web positioning (SEO)'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='seo-info'
                        defaultMessage='Comprehensive management of Linux servers and code repositories (Git). We ensure security, performance, and best practices in version control.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="700">
                <i className="fas fa-chart-area"></i>
                <h3>
                    <FormattedMessage
                        id='optimization'
                        defaultMessage='Monitoring and Optimization (SRE)'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='optimization-info'
                        defaultMessage='Application of SRE principles. Implementation of proactive monitoring and logging to ensure maximum reliability and performance, while optimizing infrastructure costs.'
                    />
                </p>
            </div>
        </div>
    </section>

        <section className="site-services">
          <h2 className="heading">
            <FormattedMessage
              id='services-price'
              defaultMessage='Service Plans'
            />
          </h2>
          <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
              <h3>
                <FormattedMessage
                  id='services-info-title-1'
                  defaultMessage='Consulting & Design'
                />
              </h3>
              <h4 className="sub-title">
                <FormattedMessage
                  id='services-info-sub-title-1'
                  defaultMessage='Ideal for starting in the cloud'
                />
              </h4>
              <p className="numero"><span>Bs.</span>-</p>
              <ul className="ul-cards-services">
                <li>
                  <i className="fas fa-check"></i>
                  <span >
                    <FormattedMessage
                      id='services-info-1-p1'
                      defaultMessage='Current infrastructure analysis'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p2'
                      defaultMessage='Cloud architecture design (AWS/GCP)'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p3'
                      defaultMessage='CI/CD pipeline planning'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p4'
                      defaultMessage='Security recommendations'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p5'
                      defaultMessage='Cost estimation'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-1-p6'
                      defaultMessage='Strategic plan delivery'
                    />
                  </span>
                </li>
              </ul>
              {/* <div className='portafolio-btn'>
                <a href="#" className="custom-btn btn-codigo">
                  <FormattedMessage
                    id='services-buy'
                    defaultMessage='buy now'
                /></a>
              </div> */}
            </div>
            <div className="columns recomendado" data-aos="fade-up" data-aos-delay="300">
              <h3>
                <FormattedMessage
                  id='services-info-title-2'
                  defaultMessage='Implementation & Deployment'
                />
              </h3>
              <h4 className="sub-title">
                <FormattedMessage
                  id='services-info-sub-title-2'
                  defaultMessage='For projects that need to take off'
                />
              </h4>
              <p className="numero"><span>Bs.</span>--</p>
              <ul className="ul-cards-services">
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-2-p1'
                      defaultMessage='Everything from the Consulting plan'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p6'
                      defaultMessage='Infrastructure as Code (Terraform)'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-p7'
                      defaultMessage='Functional CI/CD pipeline (Jenkins/GitHub Actions)'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-2-p6'
                      defaultMessage='Containerization of 1 App (Docker)'
                    />
                  </span>
                </li>
              </ul>
              
              {/* <div className='portafolio-btn'>
                <a href="#" className="custom-btn btn-codigo">
                  <FormattedMessage
                    id='services-buy'
                    defaultMessage='Request a Quote'
                  />
                </a> 
              </div> */}
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
              <h3>
                <FormattedMessage
                  id='services-info-title-3'
                  defaultMessage='Premium'
                />
              </h3>
              <h4 className="sub-title">
                <FormattedMessage
                  id='services-info-sub-title-3'
                  defaultMessage='Ongoing Support & Optimization'
                />
              </h4>
              <p className="numero"><span>Bs.</span>---</p>
              <ul className="ul-cards-services">
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-3-p1'
                      defaultMessage='Everything from the Implementation plan'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-3-p7'
                      defaultMessage='Monitoring, logging, and alerts'
                    />
                  </span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                    <FormattedMessage
                      id='services-info-3-p6'
                      defaultMessage='SRE support and maintenance'
                    />
                  </span>
                </li>
              </ul>
              
              {/* <div className='portafolio-btn'>
                <a href="#" className="custom-btn btn-codigo">
                  <FormattedMessage
                    id='services-buy'
                    defaultMessage='Request a Quote'
                  />
                </a>
              </div> */}
            </div>
          </div>
        </section>

        <section className="preguntas">
          <h2 className="heading">
            <FormattedMessage
              id='services-questions'
              defaultMessage='Frequently Asked Questions about DevOps & Cloud'
            />
          </h2>
          <div className="accordion-container">
            <Accordion
              title={<FormattedMessage
                id='services-questions-1'
                defaultMessage='What is DevOps and why do I need it?'
              />}
              content={<FormattedMessage
                id='services-questions-p1'
                defaultMessage='DevOps is a culture that unites software development (Dev) and operations (Ops) to shorten development lifecycles and deliver high-quality software continuously. You need it to accelerate innovation, improve reliability, and scale your operations efficiently.'
              />}
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title={<FormattedMessage
                id='services-questions-2'
                defaultMessage='What is Infrastructure as Code (IaC)?'
              />}
              content={<FormattedMessage
                id='services-questions-p2'
                defaultMessage="It's the practice of managing and provisioning your infrastructure (servers, networks, databases) using code and automation tools like Terraform. This ensures your environments in AWS or GCP are consistent, reproducible, and easy to modify, reducing manual errors."
              />}
              dataAos="fade-left"
              dataAosDelay="300"
            />

            <Accordion
              title={<FormattedMessage
                id='services-questions-3'
                defaultMessage='When should I use Kubernetes (K8s)?'
              />}
              content={<FormattedMessage
                id='services-questions-p3'
                defaultMessage='You should use Kubernetes when you need to manage containerized applications (Docker) at scale. K8s automates the deployment, scaling, and management of your services, ensuring high availability and efficient resource use, which is crucial for deploying complex systems to production.'
              />}
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title={<FormattedMessage
                id='services-questions-4'
                defaultMessage='How does a CI/CD pipeline speed up deployment to production?'
              />}
              content={<FormattedMessage
                id='services-questions-p4'
                defaultMessage='A Continuous Integration and Continuous Deployment (CI/CD) pipeline automates the steps to take your code from the repository to production (compilation, testing, deployment). This eliminates slow, error-prone manual processes, allowing you to release new features quickly, safely, and frequently.'
              />}
              dataAos="fade-left"
              dataAosDelay="300"
            />

          </div>
        </section>
      </main>


      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default Services;