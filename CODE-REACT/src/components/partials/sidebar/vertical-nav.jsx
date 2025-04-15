import React, { useState, useContext, useEffect } from "react"
import { Accordion, AccordionContext, Nav, OverlayTrigger, Tooltip, useAccordionButton } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"
import { getUserHistory, viewReport, deleteHistory } from '../../../services/api'
import { useLanguage } from '../../../context/LanguageContext.jsx'

const VerticalNav = () => {
    const location = useLocation()
    const [activeMenu, setActiveMenu] = useState(false)
    const [active, setActive] = useState('')
    const [history, setHistory] = useState(null);  
    const [selectedReport, setSelectedReport] = useState(null);
    const { t } = useLanguage();

    const dashboardItems = [
        { path: "/dashboard-pages/main-dashboard", name: t('home'), icon: "ri-dashboard-line" },
        { path: "/dashboard-pages/hospital-dashboard-one", name: t('reportCorrection'), icon: "ri-hospital-fill" },
        { path: "/dashboard-pages/hospital-dashboard-two", name: t('anonymizer'), icon: "ri-hospital-line" },
    ];

    const authItems = [
        { path: "/auth/sign-in", name: t('login'), icon: "ri-login-box-fill" }
    ];

    const handleViewReport = async (fileKey) => {
        try {
            const response = await viewReport(fileKey);
            setSelectedReport(response.report_text);
        } catch (err) {
            console.error("Failed to load report");
        }
    };

    const handleClearHistory = async () => {
        try {
            await deleteHistory();
            setHistory([]);
        } catch (err) {
            console.error("Failed to clear history");
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchHistory();
        } else {
            setHistory([]); 
        }
    }, []);

    const fetchHistory = async () => {
        try {
            const response = await getUserHistory();
            setHistory(response.history || []);  
        } catch (err) {
            console.error("Failed to fetch history");
            setHistory([]); 
        }
    };

    function CustomToggle({ children, eventKey, onClick, activeClass }) {
        const { activeEventKey } = useContext(AccordionContext);
        const decoratedOnClick = useAccordionButton(eventKey, (active) => onClick({ state: !active, eventKey: eventKey }));
        const isCurrentEventKey = activeEventKey === eventKey;

        return (
            <Link to="#" aria-expanded={isCurrentEventKey ? 'true' : 'false'} className={`nav-link ${isCurrentEventKey ? 'active' : ''} ${activeClass ? 'active' : ''}`} role="button" onClick={decoratedOnClick}>
                {children}
            </Link>
        );
    }

    return (
        <ul className="navbar-nav iq-main-menu" id="sidebar-menu">
            <Nav.Item as="li" className="static-item ms-2">
                <Nav.Link className="static-item disabled text-start" tabIndex="-1">
                    <span className="default-icon">{t('pages')}</span>
                    <span className="mini-icon">-</span>
                </Nav.Link>
            </Nav.Item>
            <Accordion as="li" className={`nav-item ${active === "Radiology" ? "active" : ""}`}>
                <CustomToggle
                    eventKey="dashboard"
                    activeClass={dashboardItems.some(item => location.pathname === item.path)}
                    onClick={(activeKey) => {
                        setActive("Radiology");
                        setActiveMenu(activeKey);
                    }}
                >
                    <OverlayTrigger
                        placement="right"
                        overlay={<Tooltip>{t('radiology')}</Tooltip>}
                    >
                        <i className="ri-dashboard-fill"></i>
                    </OverlayTrigger>
                    <span className="item-name">{t('radiology')}</span>
                    <i className="right-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </i>
                </CustomToggle>

                <Accordion.Collapse eventKey="dashboard">
                    <Nav className="sub-nav">
                        {dashboardItems.map((item, idx) => (
                            <Nav.Item as="li" key={idx}>
                                <Link
                                    className={`${location.pathname === item.path ? 'active' : ''} nav-link`}
                                    to={item.path}
                                >
                                    <i className={item.icon}></i>
                                    <span className="item-name">{item.name}</span>
                                </Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Accordion.Collapse>
            </Accordion>

            {/* Only show history section if we have history data (null means loading) */}
            {history !== null && (
                <>
                    <Nav.Item as="li" className="nav-item static-item mt-3 mb-2">
                        <Nav.Link className="nav-link static-item disabled" to="#" tabIndex="-1">
                            <span className="default-icon">{t('reportHistory')}</span>
                            <span className="mini-icon">-</span>
                        </Nav.Link>
                    </Nav.Item>
                    <div className="history-section px-3">
                        {history.length === 0 ? (
                            <div className="text-center text-muted py-4">
                                <i className="fas fa-history mb-2 d-block" style={{ fontSize: '2rem' }}></i>
                                <p className="small">{t('noHistoryAvailable')}</p>
                            </div>
                        ) : (
                            <>
                                <div className="d-flex justify-content-end mb-2">
                                    <button 
                                        className="btn btn-link btn-sm text-danger p-0"
                                        onClick={handleClearHistory}
                                    >
                                        <i className="fas fa-trash-alt"></i> {t('clear')}
                                    </button>
                                </div>
                                <div className="history-list">
                                    {history.map((report) => (
                                        <div
                                            key={report.id}
                                            className="history-item p-3 mb-2 rounded"
                                            onClick={() => report.report_text && setSelectedReport(report.report_text)}
                                            style={{
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                backgroundColor: 'rgba(255,255,255,0.9)',
                                                color: 'var(--bs-dark)',
                                                border: '1px solid rgba(0,0,0,0.1)',
                                                borderRadius: 'var(--bs-border-radius)'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,1)';
                                                e.currentTarget.style.boxShadow = '0 0 0 1px var(--bs-primary)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.9)';
                                                e.currentTarget.style.boxShadow = 'none';
                                            }}
                                        >
                                            <div className="d-flex align-items-center">
                                                <div className="bg-primary bg-opacity-10 p-2 rounded me-3">
                                                    <i className="fas fa-file-medical" style={{color: 'var(--bs-primary)'}}></i>
                                                </div>
                                                <div>
                                                    <div className="fw-medium mb-1" style={{color: 'var(--bs-dark)'}}>
                                                        {report.version ? `Version ${report.version}` : 'Report'}
                                                    </div>
                                                    <div className="small" style={{color: 'var(--bs-secondary)'}}>
                                                        {new Date(report.timestamp).toLocaleString()}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {selectedReport && (
                            <div className="selected-report mt-3 p-3 rounded" 
                                 style={{
                                     backgroundColor: 'rgba(255,255,255,0.9)',
                                     color: 'var(--bs-dark)',
                                     border: '1px solid rgba(0,0,0,0.1)'
                                 }}>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <small className="fw-bold">{t('selectedReport')}</small>
                                    <button 
                                        className="btn btn-link btn-sm p-0 text-dark"
                                        onClick={() => setSelectedReport(null)}
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                                <div className="report-content" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                                    <pre className="small mb-0" style={{ whiteSpace: 'pre-wrap', color: 'black' }}>
                                        {selectedReport}
                                    </pre>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}
        </ul>
    )
}

export default VerticalNav
