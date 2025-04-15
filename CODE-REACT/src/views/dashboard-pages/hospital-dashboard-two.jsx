import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Alert,
  Spinner,
  Tab,
  Tabs,
  ProgressBar,
  Badge
} from "react-bootstrap";
import { anonymizeFile, downloadAnonymizedFile } from "../../services/anonymizerApi";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { 
  FaUpload, 
  FaFileAlt, 
  FaFileExcel, 
  FaFileWord, 
  FaShieldAlt, 
  FaDownload, 
  FaExchangeAlt, 
  FaLock, 
  FaEye, 
  FaEyeSlash 
} from 'react-icons/fa';

const HospitalDashboardTwo = () => {
  const { t } = useLanguage();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [activeTab, setActiveTab] = useState('upload');
  const [processingStage, setProcessingStage] = useState(0);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError(null);
    }
  };

  const getFileIcon = () => {
    if (!file) return <FaFileAlt size={30} className="text-secondary" />;
    
    const fileType = file.name.split('.').pop().toLowerCase();
    
    if (fileType === 'xlsx' || fileType === 'xls') {
      return <FaFileExcel size={30} className="text-success" />;
    } else if (fileType === 'docx' || fileType === 'doc') {
      return <FaFileWord size={30} className="text-primary" />;
    } else {
      return <FaFileAlt size={30} className="text-info" />;
    }
  };

  const handleAnonymize = async () => {
    if (!file) {
      setError(t('pleaseSelectFile'));
      return;
    }

    setLoading(true);
    setError(null);
    setProcessingStage(1);
    
    try {
      // Simulate processing stages for visual feedback
      setTimeout(() => setProcessingStage(2), 1000);
      setTimeout(() => setProcessingStage(3), 2000);
      
      const response = await anonymizeFile(file);
      setResult(response);
      setActiveTab('result');
      setProcessingStage(4);
    } catch (err) {
      setError(err.response?.data?.detail || t('errorProcessingFile'));
      setProcessingStage(0);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!result) return;
    
    setLoading(true);
    try {
      let anonymizedData = result.anonymized_data;
      
      // If it's an array (from Excel), convert it to a string
      if (Array.isArray(anonymizedData)) {
        anonymizedData = JSON.stringify(anonymizedData);
      }
      
      await downloadAnonymizedFile(anonymizedData, result.file_format);
    } catch (err) {
      setError(t('errorDownloadingFile'));
    } finally {
      setLoading(false);
    }
  };

  const renderFileContent = (data) => {
    if (!data) return null;
    
    if (Array.isArray(data)) {
      // Render table for Excel data
      return (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="bg-light">
              <tr>
                {Object.keys(data[0] || {}).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, i) => (
                    <td key={i}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      // Render pre-formatted text for text data
      return (
        <pre className="bg-light p-3 rounded" style={{ whiteSpace: 'pre-wrap', maxHeight: '400px', overflow: 'auto' }}>
          {data}
        </pre>
      );
    }
  };

  const renderProcessingStages = () => {
    return (
      <div className="mb-4">
        <ProgressBar animated={loading} now={processingStage * 25} className="mb-3" />
        <div className="d-flex justify-content-between">
          <div className="text-center">
            <div className={`rounded-circle p-2 d-inline-block ${processingStage >= 1 ? 'bg-primary' : 'bg-light'}`}>
              <FaUpload color={processingStage >= 1 ? 'white' : 'gray'} />
            </div>
            <p className="small mt-1">Upload</p>
          </div>
          <div className="text-center">
            <div className={`rounded-circle p-2 d-inline-block ${processingStage >= 2 ? 'bg-primary' : 'bg-light'}`}>
              <FaEye color={processingStage >= 2 ? 'white' : 'gray'} />
            </div>
            <p className="small mt-1">Analyze</p>
          </div>
          <div className="text-center">
            <div className={`rounded-circle p-2 d-inline-block ${processingStage >= 3 ? 'bg-primary' : 'bg-light'}`}>
              <FaShieldAlt color={processingStage >= 3 ? 'white' : 'gray'} />
            </div>
            <p className="small mt-1">Anonymize</p>
          </div>
          <div className="text-center">
            <div className={`rounded-circle p-2 d-inline-block ${processingStage >= 4 ? 'bg-success' : 'bg-light'}`}>
              <FaDownload color={processingStage >= 4 ? 'white' : 'gray'} />
            </div>
            <p className="small mt-1">Complete</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Container fluid>
      <Row className="mb-4">
        <Col md={12}>
          <Card>
            <Card.Header className="bg-gradient-primary text-white">
              <div className="d-flex align-items-center">
                <FaShieldAlt size={24} className="me-2" />
                <div>
                  <Card.Title as="h4">{t('anonymizer')}</Card.Title>
                  <p className="card-category mb-0">{t('anonymizerDescription')}</p>
                </div>
              </div>
            </Card.Header>
            <Card.Body>
              <Tabs
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k)}
                className="mb-4"
              >
                <Tab eventKey="upload" title={
                  <div className="d-flex align-items-center">
                    <FaUpload className="me-2" />
                    {t('uploadFile')}
                  </div>
                }>
                  <Row>
                    <Col md={7}>
                      <Form>
                        <div className="text-center mb-4">
                          <div className="mb-3 d-flex justify-content-center">
                            <div className="file-icon-container p-4 rounded-circle bg-light" style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              {getFileIcon()}
                            </div>
                          </div>
                          {file && (
                            <div className="mb-2">
                              <Badge bg="info" className="p-2">
                                {file.name} ({Math.round(file.size / 1024)} KB)
                              </Badge>
                            </div>
                          )}
                        </div>
                        
                        <Form.Group className="mb-3">
                          <Form.Label>
                            <div className="d-flex align-items-center">
                              <FaFileAlt className="me-2" />
                              {t('selectFile')}
                            </div>
                          </Form.Label>
                          <Form.Control
                            type="file"
                            onChange={handleFileChange}
                            accept=".txt,.docx,.xlsx,.xls"
                            className="form-control-lg"
                          />
                          <Form.Text className="text-muted">
                            {t('supportedFormats')}
                          </Form.Text>
                        </Form.Group>
                        
                        <Button
                          variant="primary"
                          size="lg"
                          onClick={handleAnonymize}
                          disabled={loading || !file}
                          className="w-100 mt-3"
                        >
                          {loading ? (
                            <>
                              <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                className="me-2"
                              />
                              {t('anonymizing')}
                            </>
                          ) : (
                            <>
                              <FaShieldAlt className="me-2" />
                              {t('anonymizeFile')}
                            </>
                          )}
                        </Button>
                      </Form>
                      
                      {error && (
                        <Alert variant="danger" className="mt-3">
                          {error}
                        </Alert>
                      )}
                    </Col>
                    <Col md={5} className="d-flex align-items-center justify-content-center">
                      <div className="text-center p-4">
                        <div className="mb-4">
                          <FaLock size={80} className="text-primary mb-3" />
                          <h4>Data Privacy Protection</h4>
                          <p className="text-muted">
                            Our anonymization tool removes sensitive information such as:
                          </p>
                          <ul className="list-unstyled">
                            <li><Badge bg="secondary" className="m-1 p-2">Patient Names</Badge></li>
                            <li><Badge bg="secondary" className="m-1 p-2">Doctor Names</Badge></li>
                            <li><Badge bg="secondary" className="m-1 p-2">Dates of Birth</Badge></li>
                            <li><Badge bg="secondary" className="m-1 p-2">Contact Information</Badge></li>
                            <li><Badge bg="secondary" className="m-1 p-2">Medical IDs</Badge></li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  
                  {loading && renderProcessingStages()}
                </Tab>
                
                <Tab eventKey="result" title={
                  <div className="d-flex align-items-center">
                    <FaExchangeAlt className="me-2" />
                    {t('results')}
                  </div>
                } disabled={!result}>
                  {result && (
                    <Row>
                      <Col md={12} className="mb-4">
                        <div className="d-flex justify-content-center align-items-center flex-column mb-4">
                          <div className="bg-success text-white p-3 rounded-circle mb-3">
                            <FaShieldAlt size={40} />
                          </div>
                          <div className="text-center">
                            <h3 className="mb-2">Anonymization Complete</h3>
                            <p className="text-muted mb-4">Your data has been successfully anonymized and is ready for download</p>
                            <Button
                              variant="success"
                              onClick={handleDownload}
                              disabled={loading}
                              size="lg"
                              className="px-5"
                            >
                              {loading ? (
                                <>
                                  <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    className="me-2"
                                  />
                                  {t('downloading')}
                                </>
                              ) : (
                                <>
                                  <FaDownload className="me-2" />
                                  {t('downloadAnonymizedFile')}
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                        
                        <div className="text-center mt-4">
                          <Alert variant="info">
                            <FaLock className="me-2" />
                            All personally identifiable information has been removed from your document.
                          </Alert>
                          
                          <div className="mt-4">
                            <h5>What was anonymized:</h5>
                            <div className="d-flex flex-wrap justify-content-center mt-3">
                              <Badge bg="secondary" className="m-1 p-2">Patient Names</Badge>
                              <Badge bg="secondary" className="m-1 p-2">Doctor Names</Badge>
                              <Badge bg="secondary" className="m-1 p-2">Dates of Birth</Badge>
                              <Badge bg="secondary" className="m-1 p-2">Contact Information</Badge>
                              <Badge bg="secondary" className="m-1 p-2">Medical IDs</Badge>
                              <Badge bg="secondary" className="m-1 p-2">Hospital Information</Badge>
                              <Badge bg="secondary" className="m-1 p-2">NHS Numbers</Badge>
                              <Badge bg="secondary" className="m-1 p-2">Electronic Signatures</Badge>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  )}
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HospitalDashboardTwo;
