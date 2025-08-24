import React from "react";
import "../assets/css/terms-privacy.css";

const Icon = ({ iconClass, size = "fs-2" }) => (
  <i
    className={`${iconClass} ${size}`}
    style={{
      fontFamily: '"bootstrap-icons" !important',
      display: 'inline-block',
      verticalAlign: 'middle'
    }}
    title={iconClass.replace('bi bi-', '')}
  />
);

function TermsOfService() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>
            <span className="badge text-bg-secondary mt-4">
              <Icon iconClass="bi bi-file-earmark-text-fill" />
            </span> Terms of Service
          </h2>
          <p className="section-subtitle" style={{ color: 'var(--text-secondary)' }}>
            <a href="/">Home</a> / Terms of Service
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card rounded-5 shadow mb-4" style={{ background: 'var(--bg-primary)' }}>
              <div className="card-body">
                <h5 className="card-title mb-4" style={{ color: 'var(--text-primary)' }}>Legal Terms</h5>
                <div className="mb-4">
                  <h6 style={{ color: '#eee' }}>Acceptance of Terms</h6>
                  <p style={{ color: '#ccc' }}>By accessing or using our website, you agree to be bound by these terms.</p>
                </div>
                <div className="mb-4">
                  <h6 style={{ color: '#eee' }}>Use of Site</h6>
                  <p style={{ color: '#ccc' }}>You agree to use the site for lawful purposes only and not to violate any laws or regulations.</p>
                </div>
                <div className="mb-4">
                  <h6 style={{ color: '#eee' }}>Intellectual Property</h6>
                  <p style={{ color: '#ccc' }}>All content on this site is owned by us or our licensors and is protected by copyright laws.</p>
                </div>
                <div className="mb-4">
                  <h6 style={{ color: '#eee' }}>Limitation of Liability</h6>
                  <p style={{ color: '#ccc' }}>We are not liable for any damages arising from your use of the site.</p>
                </div>
                <div className="mb-4">
                  <h6 style={{ color: '#eee' }}>Changes to Terms</h6>
                  <p style={{ color: '#ccc' }}>We may update these terms at any time. Continued use of the site means you accept the changes.</p>
                </div>
                <div className="mb-4">
                  <h6 style={{ color: '#eee' }}>Contact Information</h6>
                  <p style={{ color: '#ccc' }}>If you have any questions, please contact us using the information provided on our contact page.</p>
                </div>
                <div className="text-center mt-4">
                  <button className="btn btn-primary me-2">
                    <Icon iconClass="bi bi-file-earmark-arrow-down" size="fs-5" /> Download Full Terms
                  </button>
                  <a href="/" className="btn btn-secondary">
                    <Icon iconClass="bi bi-arrow-left" size="fs-5" /> Back to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsOfService;
