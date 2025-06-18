import React from 'react';
import Router from 'next/router';

interface ProjectProps {
    projectImg: string;
    title: string;
    para: string;
    githubLink: string;
    liveLink: string;
    tag1: string;
    tag2: string;
    tag3: string;
    tag4: string;
    tag5: string;
    tag6: string;
}

const Project: React.FC<ProjectProps> = (props) => {
    const containerStyle = {
        minHeight: '100vh',
        backgroundColor: '#0F172A',
        fontFamily: "'Inter', sans-serif"
    };

    const cardStyle = {
        backgroundColor: '#1E293B',
        borderRadius: '8px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        overflow: 'hidden',
        maxWidth: '64rem'
    };

    const titleStyle = {
        color: '#A78BFA',
        textShadow: '0 0 8px rgba(167, 139, 250, 0.4)',
        fontWeight: 'bold'
    };

    const textStyle = {
        color: '#E2E8F0',
        lineHeight: '1.625'
    };

    const sectionTitleStyle = {
        color: '#A78BFA',
        fontWeight: '600',
        fontSize: '1rem'
    };

    const tagStyle = {
        backgroundColor: 'rgba(139, 92, 246, 0.2)',
        color: '#A78BFA',
        fontSize: '0.75rem',
        fontWeight: '500',
        padding: '0.375rem 0.75rem',
        borderRadius: '9999px',
        display: 'inline-block',
        margin: '0.125rem'
    };

    const primaryButtonStyle = {
        backgroundColor: '#8B5CF6',
        color: 'white',
        fontWeight: '500',
        padding: '0.625rem 1.25rem',
        borderRadius: '0.375rem',
        border: 'none',
        fontSize: '0.875rem',
        transition: 'background-color 0.3s ease',
        cursor: 'pointer'
    };

    const secondaryButtonStyle = {
        backgroundColor: '#475569',
        color: 'white',
        fontWeight: '500',
        padding: '0.625rem 1.25rem',
        borderRadius: '0.375rem',
        border: 'none',
        fontSize: '0.875rem',
        transition: 'background-color 0.3s ease',
        cursor: 'pointer'
    };

    return (
        <div className="d-flex align-items-center justify-content-center p-4" style={containerStyle}>
            <div className="w-100 row g-0" style={cardStyle}>
                <div className="col-md-4">
                    <img
                        alt={`${props.title} preview`}
                        className="h-100 w-100 object-fit-cover"
                        src={props.projectImg}
                        style={{ minHeight: '300px' }}
                    />
                </div>
                <div className="col-md-8 p-4 p-sm-5 d-flex flex-column">
                    <header className="mb-4">
                        <h1 className="fs-2 fs-sm-1 mb-0" style={titleStyle}>
                            {props.title}
                        </h1>
                    </header>

                    <section className="mb-4">
                        <p className="fs-6 fs-sm-5 mb-0" style={textStyle}>
                            {props.para}
                        </p>
                    </section>

                    <section className="mb-5">
                        <h3 className="mb-3 d-flex align-items-center" style={sectionTitleStyle}>
                            <span className="material-icons me-2 fs-5">settings_input_component</span>
                            TECHNOLOGIES USED
                        </h3>
                        <div className="d-flex flex-wrap">
                            {[props.tag1, props.tag2, props.tag3, props.tag4, props.tag5, props.tag6].map((tag, index) => (
                                tag && (
                                    <span
                                        key={index}
                                        style={tagStyle}
                                    >
                                        {tag}
                                    </span>
                                )
                            ))}
                        </div>
                    </section>

                    <footer className="mt-auto">
                        <div className="row g-3 g-sm-4">
                            <div className="col-12 col-sm-6">
                                <button
                                    onClick={() => Router.push(props.githubLink)}
                                    className="w-100 d-flex align-items-center justify-content-center"
                                    style={primaryButtonStyle}
                                // onMouseEnter={(e) => e.target.style.backgroundColor = '#7C3AED'}
                                // onMouseLeave={(e) => e.target.style.backgroundColor = '#8B5CF6'}
                                >
                                    <span className="material-icons me-2 fs-5">code</span>
                                    VIEW SOURCE
                                </button>
                            </div>
                            <div className="col-12 col-sm-6">
                                <button
                                    onClick={() => Router.push(props.liveLink)}
                                    className="w-100 d-flex align-items-center justify-content-center"
                                    style={secondaryButtonStyle}
                                // onMouseEnter={(e) => e.target.style.backgroundColor = '#374151'}
                                // onMouseLeave={(e) => e.target.style.backgroundColor = '#475569'}
                                >
                                    VISIT LIVE SITE
                                    <span className="material-icons ms-2 fs-5">open_in_new</span>
                                </button>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Project;