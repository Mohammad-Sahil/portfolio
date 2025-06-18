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
    };

    const cardStyle = {
        background: "linear-gradient(to bottom right, #1e293b, #0f172a)",
        borderRadius: '0.75rem',
        overflow: 'hidden',
        maxWidth: '68rem',
        filter: "drop-shadow(0 0 4px rgba(0, 0, 0, .15))",
    };

    const titleStyle = {
        color: '#ffffffe3',
        fontWeight: 'bold',
        letterSpacing: '0.5px'
    };

    const textStyle = {
        color: '#94A3B8',
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
        background: "linear-gradient(45deg, #ec4899, #8b5cf6, #ec4899, #8b5cf6)",
        backgroundSize: "400% 400%",
        color: 'white',
        fontWeight: '600',
        padding: '0.75rem 1.5rem',
        borderRadius: '8px',
        border: 'none',
        fontSize: '0.875rem',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.5px'
    };

    const primaryButtonStyleBorder = {
        background: "linear-gradient(45deg, #ec4899, #8b5cf6, #ec4899, #8b5cf6)",
        backgroundSize: "400% 400%",
        color: 'white',
        fontWeight: '600',
        padding: "4px",
        borderRadius: '8px',
        border: 'none',
        fontSize: '0.875rem',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.5px',
        position: 'relative' as const,
    }

    const secondaryButtonStyle = {
        backgroundColor: '#151f31',
        cursor: 'pointer',
        color: 'white',
        fontWeight: '600',
        padding: '8px 20px',
        width: "100%",
        borderRadius: '6px',
        border: 'none',
        fontSize: '0.875rem',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 12px rgba(71, 85, 105, 0.3)',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.5px'
    };

    return (
        <div className="d-flex align-items-center justify-content-center py-4" style={containerStyle}>
            <div className="w-100 row g-0" style={cardStyle}>
                <div className="col-md-5 position-relative overflow-hidden">
                    <div
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{
                            backgroundImage: `url(${props.projectImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'blur(4px)',
                            transform: 'scale(1.1)',
                            zIndex: 1
                        }}
                    />
                    <div className="position-relative d-flex align-items-center justify-content-center h-100 p-0" style={{ zIndex: 2, minHeight: '300px' }}>
                        <img
                            alt={`${props.title} preview`}
                            className="img-fluid rounded shadow-lg"
                            src={props.projectImg}
                            style={{
                                maxHeight: '80%',
                                maxWidth: '90%',
                                objectFit: 'contain',
                                border: '2px solid rgba(167, 139, 250, 0.3)'
                            }}
                        />
                    </div>
                </div>
                <div className="col-md-7 p-3 p-sm-4 d-flex flex-column">
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
                            TECH USED
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
                                    className="w-100 d-flex align-items-center justify-content-center btn-animation"
                                    style={primaryButtonStyleBorder}
                                >
                                    <div style={secondaryButtonStyle} className="d-flex align-items-center justify-content-center mk-transparent">
                                        <span className="material-icons me-2 fs-5">code</span>
                                        VIEW SOURCE
                                    </div>
                                </button>
                            </div>
                            <div className="col-12 col-sm-6">
                                <button
                                    onClick={() => Router.push(props.liveLink)}
                                    className="w-100 d-flex align-items-center justify-content-center btn-animation"
                                    style={primaryButtonStyle}
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