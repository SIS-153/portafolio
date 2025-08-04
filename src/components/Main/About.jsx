import React from 'react';
import '../../pages/About/AboutPage.css'
import { Link } from 'react-router-dom';
import cv from '../../cv/cv.pdf';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const About = () => (
    <section className="sobre-mi" id="sobre-mi">
        <h2 className="heading">
            <FormattedMessage
                id='about'
                defaultMessage='About me'
            />
        </h2>

        <div className="row container">
            <div className="columns" data-aos="fade-right" data-aos-delay="300">
                <h3>
                    <FormattedMessage
                        id='im'
                        defaultMessage='who I am'
                    />
                </h3>
                <h4>
                    <FormattedMessage
                        id='description'
                        defaultMessage='My name is Alvaro Flores and I am a DevOps Engineer.'
                    />
                </h4>
                <p>
                    <FormattedMessage
                        id='my-description'
                        defaultMessage='I have been dedicated to software development and operations for 5 years, always seeking to improve the efficiency and quality of the processes. I am passionate about technology and enjoy working in a team to achieve exceptional results.'
                    />
                </p>
                <ul>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='years'
                                    defaultMessage='Age:'
                                />
                            </span>
                            29
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='hobbies-title'
                                    defaultMessage='Hobbies: '
                                />
                            </span>
                            <FormattedMessage
                                id='hobbies-text'
                                defaultMessage='Video Games, Football and Programming'
                            />
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='email-title'
                                    defaultMessage='Email:'
                                />
                            </span>
                            {' '}alvarto1296@gmail.com
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='from'
                                    defaultMessage='From:'
                                />
                            </span>
                            La Paz, Bolivia
                        </p>
                    </li>
                </ul>
                <div className="mas-info">
                    <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo buttonDownload">
                        <FormattedMessage
                            id='btn-cv'
                            defaultMessage='Download CV'
                        />
                    </a>
                    <div className='mas-info-btn'>
                    <Link to="/about">
                        <ButtomGet/>
                    </Link>
                    </div>
                </div>
            </div>
            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
                <h3>
                    <FormattedMessage
                        id='tools'
                        defaultMessage='Tools'
                    />
                </h3>
                <div className="skill">
                    <div>
                        <img alt="Java" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" title="Java" />
                        <h5>Java</h5>
                    </div>
                    <div>
                        <img alt="Spring" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" title="Spring" />
                        <h5>Spring</h5>
                    </div>
                    <div>
                        <img alt="Docker" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" title="Docker" />
                        <h5>Docker</h5>
                    </div>
                    <div>
                        <img alt="Kubernetes" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" title="Kubernetes" />
                        <h5>Kubernetes</h5>
                    </div>
                    <div>
                        <img alt="Jenkins" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" title="Jenkins" />
                        <h5>Jenkins</h5>
                    </div>
                    <div>
                        <img alt="Git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="Git" />
                        <h5>Git</h5>
                    </div>
                    <div>
                        <img alt="SonarQube" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg" title="SonarQube" />
                        <h5>SonarQube</h5>
                    </div>
                    <div>
                        <img alt="Terraform" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" title="Terraform" />
                        <h5>Terraform</h5>
                    </div>
                    <div>
                        <img alt="Ansible" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" title="Ansible" />
                        <h5>Ansible</h5>
                    </div>
                    <div>
                        <img alt="AWS" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" title="AWS" />
                        <h5>AWS</h5>
                    </div>
                    <div>
                        <img alt="Linux" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" title="Linux" />
                        <h5>Linux</h5>
                    </div>
                    <div>
                        <img alt="GCP" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" title="GCP" />
                        <h5>GCP</h5>
                    </div>
                    <div>
                        <img alt="GitHub Actions" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" title="GitHub Actions" />
                        <h5>GitHub Actions</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default React.memo(About);