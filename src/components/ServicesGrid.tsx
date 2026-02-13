import React, { useState } from 'react';
import Image from 'next/image';
import ConsultationModal from './ConsultationModal';
import styles from './ServicesGrid.module.css';

interface Service {
    id: number;
    title: string;
    price: string;
    description: string;
    imageSrc: string;
    alt: string;
}

const services: Service[] = [
    {
        id: 1,
        title: 'Solar',
        price: 'Starting at $15,000',
        description: 'Professional installation of high-efficiency solar panels tailored to your property\'s unique requirements and energy needs.',
        imageSrc: '/services1.png',
        alt: 'Solar Panels on Roof'
    },
    {
        id: 2,
        title: 'Battery',
        price: 'Starting at $15,000',
        description: 'Professional installation of high-efficiency solar panels tailored to your property\'s unique requirements and energy needs.',
        imageSrc: '/services2.png',
        alt: 'Solar Battery'
    },
    {
        id: 3,
        title: 'Hot water systems',
        price: 'Starting at $15,000',
        description: 'Professional installation of high-efficiency solar panels tailored to your property\'s unique requirements and energy needs.',
        imageSrc: '/services3.png',
        alt: 'Hot Water System'
    },
    {
        id: 4,
        title: 'Energy Plans',
        price: 'Starting at $15,000',
        description: 'Professional installation of high-efficiency solar panels tailored to your property\'s unique requirements and energy needs.',
        imageSrc: '/services4.png',
        alt: 'Energy Chart'
    },
    {
        id: 5,
        title: 'Heating & Cooling Airconditioning',
        price: 'Starting at $15,000',
        description: 'Professional installation of high-efficiency solar panels tailored to your property\'s unique requirements and energy needs.',
        imageSrc: '/solar.png',
        alt: 'Air Conditioning'
    },
    {
        id: 6,
        title: 'Heating & Cooling Airconditioning',
        price: 'Starting at $15,000',
        description: 'Professional installation of high-efficiency solar panels tailored to your property\'s unique requirements and energy needs.',
        imageSrc: '/solar2.png',
        alt: 'Air Conditioning'
    }
];

const ServicesGrid = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {services.map((service) => (
                            <div key={service.id} className={styles.card}>
                                <div className={styles.imageContainer}>
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={service.imageSrc}
                                            alt={service.alt}
                                            width={400}
                                            height={250}
                                            className={styles.image}
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                </div>
                                <h3 className={styles.title}>{service.title}</h3>
                                <span className={styles.price}>{service.price}</span>
                                <p className={styles.description}>{service.description}</p>
                                <button className={styles.button} onClick={() => setIsModalOpen(true)}>Get Started</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default ServicesGrid;
