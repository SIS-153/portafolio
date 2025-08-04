import React from 'react';
import '../../pages/Service/ServicesPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Service = () => (
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
                        defaultMessage='Server and Repository Administration'
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
        <div className='portafolio-btn'>
            <Link to="/service">
                <ButtomGet/>
            </Link>
        </div>
    </section>
);

export default React.memo(Service);