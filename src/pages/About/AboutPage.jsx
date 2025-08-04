import React, { useState } from 'react';
import './AboutPage.css'

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import cv from '../../cv/cv.pdf';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
import imgabout from '../../img/inicio.png';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={imgabout} alt="" className="sobre-mi-img" />
              
              <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo cv buttonDownload">
                  <FormattedMessage
                      id='btn-cv'
                      defaultMessage='Download CV'
                  />
              </a>
            </div>
            <div className="sobre-mi-info">
              <p>
                <FormattedMessage
                  id='about-info-1'
                  defaultMessage="Hello, I'm Alvaro Flores, a graduate of the Universidad Mayor de San Andres. I consider myself a person passionate about programming and software development. With a focus on Software Architecture and DevOps, and experience in managing LAN - WAN networks. I have evolved from full-stack web development to more strategic and infrastructure-oriented roles, focused on improving the efficiency of development and deployment processes. My goal is to continue perfecting my skills in systems architecture and automation, always looking for new opportunities to learn and grow professionally."
                />
              </p>

              <div className={`hide parrafo-active ${isExpanded ? 'show' : ''}`}>
                <p>
                  <FormattedMessage
                    id='about-info-2'
                    defaultMessage='I consider myself a self-taught person since I like to be constantly learning day by day, both new technologies and new development methods that help me polish and raise my level of learning.'
                  />
                </p>
                <p>
                  <FormattedMessage
                    id='about-info-3'
                    defaultMessage="I have experience working as a security analyst, which gave me the opportunity to work with and understand network architectures and devices (firewalls) alongside stages in software development. Additionally, I have had the opportunity to teach at the university level, which allowed me to share my knowledge with others and learn from them. I have evolved from an application manager and sysadmin for legacy applications to migrating to new container architectures, with Container Orchestration using tools like K8s and Docker. My current focus is on implementing Infrastructure as Code (IaC) solutions and automating development and deployment processes, using tools like Terraform and Ansible."
                  />
                </p>
              </div>

              <div className="btn-info">
                <div className="custom-btn btn-codigo" onClick={toggleReadMore}>
                  <span>
                    {isExpanded ? (
                      <FormattedMessage id="btn-show-less" defaultMessage="Show less" />
                    ) : (
                      <FormattedMessage id="btn-read-more-about" defaultMessage="Read more" />
                    )}
                  </span>
                </div>
              </div>
            </div>

          </div>

          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            <div className="skill-container">
              {/* Java */}
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="Java" className="skills-img icon-li" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" title="Java" />
                <h2 className="skill-name">Java</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-java'
                    defaultMessage='Experience in developing robust and scalable applications with Java, a fundamental pillar in the backend ecosystem.'
                  />
                </p>
              </div>
              {/* Spring */}
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="Spring" className="skills-img icon-li" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" title="Spring" />
                <h2 className="skill-name">Spring</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-spring'
                    defaultMessage='Using the Spring Framework to build efficient and secure RESTful services and enterprise applications.'
                  />
                </p>
              </div>
              {/* Docker */}
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="Docker" className="skills-img icon-li" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" title="Docker" />
                <h2 className="skill-name">Docker</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-docker'
                    defaultMessage='Creating and managing containers to package applications and their dependencies, ensuring consistency across environments.'
                  />
                </p>
              </div>
              {/* Kubernetes */}
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="Kubernetes" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" title="Kubernetes" />
                <h2 className="skill-name">Kubernetes</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-kubernetes'
                    defaultMessage='Large-scale container orchestration with Kubernetes to automate application deployment, scaling, and management.'
                  />
                </p>
              </div>
              {/* Jenkins */}
              <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
                <img alt="Jenkins" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" title="Jenkins" />
                <h2 className="skill-name">Jenkins</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-jenkins'
                    defaultMessage='Implementing CI/CD pipelines with Jenkins to automate the build, test, and deployment phases of software.'
                  />
                </p>
              </div>
              {/* Git */}
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="Git" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="Git" />
                <h2 className="skill-name">Git</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-git'
                    defaultMessage='Distributed version control with Git, managing source code collaboratively and efficiently with workflows like GitFlow.'
                  />
                </p>
              </div>
              {/* SonarQube */}
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="SonarQube" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg" title="SonarQube" />
                <h2 className="skill-name">SonarQube</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-sonarqube'
                    defaultMessage='Static code analysis with SonarQube to ensure quality, detect bugs, and identify security vulnerabilities early.'
                  />
                </p>
              </div>
              {/* Terraform */}
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="Terraform" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" title="Terraform" />
                <h2 className="skill-name">Terraform</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-terraform'
                    defaultMessage='Infrastructure as Code (IaC) management with Terraform to provision and manage cloud resources declaratively.'
                  />
                </p>
              </div>
              {/* Ansible */}
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="Ansible" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" title="Ansible" />
                <h2 className="skill-name">Ansible</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-ansible'
                    defaultMessage='Automating configuration management and application deployment with Ansible, using playbooks to define tasks.'
                  />
                </p>
              </div>
              {/* AWS */}
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="AWS" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" title="AWS" />
                <h2 className="skill-name">AWS</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-aws'
                    defaultMessage='Designing and implementing architectures on Amazon Web Services, using services like EC2, S3, RDS, and EKS.'
                  />
                </p>
              </div>
              {/* Linux */}
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="Linux" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" title="Linux" />
                <h2 className="skill-name">Linux</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-linux'
                    defaultMessage='Advanced administration of Linux operating systems, the foundation for most server and cloud infrastructures.'
                  />
                </p>
              </div>
              {/* GCP */}
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="GCP" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" title="GCP" />
                <h2 className="skill-name">GCP</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-gcp'
                    defaultMessage='Experience with Google Cloud Platform, leveraging services like GKE, Compute Engine, and Cloud Storage for cloud solutions.'
                  />
                </p>
              </div>
              {/* GitHub Actions */}
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="GitHub Actions" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" title="GitHub Actions" />
                <h2 className="skill-name">GitHub Actions</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-githubactions'
                    defaultMessage='Creating automated workflows directly in GitHub for CI/CD, integrating the development lifecycle.'
                  />
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default About;