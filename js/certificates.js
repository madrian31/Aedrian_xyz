const certificatesData = {
  certificates: [
    {
      id: 1,
      title: "Oracle Database Foundations",
      issuer: "Oracle",
      date: "2022-06-25",
      description: "Comprehensive course covering SQL basics and database fundamentals",
      skills: ["SQL", "Database Design", "Oracle"],
      image: "img/certificates/database certificate_page-0001.jpg", 
      credentialUrl: "#",
    },
    {
      id: 2,
      title: "Create High-Fidelity Designs and Prototypes in Figma",
      issuer: "Google via Coursera",
      date: "2025-04-07",
      description: "Online non-credit course authorized by Google covering high-fidelity design and prototyping in Figma",
      skills: ["Figma", "UI/UX Design", "Prototyping", "High-Fidelity Design"],
      image: "img/certificates/Coursera E3ZSIVK12EUA_page-0001.jpg", 
      credentialUrl: "https://coursera.org/share/bf9e060ae45e31bfbefd7748fd81f21e",
    },
    {
      id: 3,
      title: "Google AI Essentials",
      issuer: "Google via Coursera",
      date: "2024-11-10",
      description: "Online non-credit course authorized by Google covering AI fundamentals and essentials",
      skills: ["Artificial Intelligence", "AI Fundamentals", "Machine Learning Basics", "Google AI Tools"],
      image: "img/certificates/Coursera 5FZU5WRJ9C57_page-0001.jpg",
      credentialUrl: "https://coursera.org/share/8fd17b66ae0e4b27a14688527cd89bdc"
    },
    {
      id: 4,
      title: "HTML, CSS, and Javascript for Web Developers",
      issuer: "Johns Hopkins University via Coursera",
      date: "2020-11-13",
      description: "Online non-credit course covering front-end web development fundamentals, including HTML, CSS, and JavaScript.",
      skills: ["HTML5", "CSS3", "JavaScript", "Front-End Development", "Web Design"],
      image: "img/certificates/Coursera D7MQ72JUG7YT.jpg",
      credentialUrl: "https://coursera.org/share/8ec311b4fd5afc2846c32cbdf178a232"
    },
    {
      id: 5,
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "University of Michigan via Coursera",
      date: "2020-10-31",
      description: "Online non-credit course covering Python programming fundamentals for beginners, part of the 'Programming for Everybody' series.",
      skills: ["Python", "Programming Fundamentals", "Problem Solving"],
      image: "img/certificates/Coursera NV7X8DY5BGWK_page-0001.jpg",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/KWL78SRYAV2F?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    },
      {
      id: 6,
      title: "Software Development Life Cycle (SDLC) (2019)",
      issuer: "LinkedIn Learning",
      date: "2025-04-23",
      description:"Online course covering the fundamentals of the Software Development Life Cycle (SDLC), including methodologies, phases, and best practices.",
      skills: ["SDLC", "Software Development", "Project Lifecycle", "Agile Methodologies", "Waterfall Model"],
      image: "img/certificates/CertificateOfCompletion_Software Development Life Cycle SDLC 2019_page-0001.jpg",
      credentialUrl: "https://www.linkedin.com/learning/certificates/70ac3a56c2448f857df1016586f78b0393cca27258fe56b60d1cb1ede92014df?trk=share_certificate"
    },
  ]
};


// DOM Elements
const certificatesGrid = document.getElementById('certificatesGrid');
const certificateModal = document.getElementById('certificateModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

// Initialize certificates section
function initializeCertificates() {
  createCertificatesGrid();
  setupEventListeners();
  
  // Add small delay for animations
  setTimeout(() => {
    animateCertificateCards();
  }, 100);
}

// Create certificates grid
function createCertificatesGrid() {
  // Sort certificates by date (newest first)
  const sortedCertificates = [...certificatesData.certificates].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  const certificatesHTML = sortedCertificates.map(cert => createCertificateCard(cert)).join('');
  certificatesGrid.innerHTML = certificatesHTML;
}

// Create certificate card
function createCertificateCard(certificate) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return `
    <div class="certificate-card" data-certificate-id="${certificate.id}">
      <img 
        src="${certificate.image}" 
        alt="${certificate.title}" 
        class="certificate-image"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
      >
      <div class="certificate-placeholder" style="display: none; height: 200px; background: var(--bg-higher); border-radius: 16px 16px 0 0; align-items: center; justify-content: center; color: var(--text-muted);">
        <div style="text-align: center;">
          <i class="bi bi-award" style="font-size: 3rem; margin-bottom: 0.5rem; color: var(--primary-color);"></i>
          <div style="font-size: 0.9rem;">Certificate Image</div>
        </div>
      </div>
      <div class="certificate-content">
        <div class="certificate-header">
          <span class="certificate-date">${formatDate(certificate.date)}</span>
        </div>
        <h3 class="certificate-title">${certificate.title}</h3>
        <h4 class="certificate-issuer">
          ${certificate.issuer}
          ${certificate.verified ? '<i class="bi bi-patch-check-fill" style="color: var(--primary-color); margin-left: 0.5rem;" title="Verified Certificate"></i>' : ''}
        </h4>
        <p class="certificate-description">${certificate.description}</p>
        <div class="certificate-skills">
          ${certificate.skills.map(skill => `<span class="certificate-skill">${skill}</span>`).join('')}
        </div>
        <div class="certificate-actions">
          <button class="certificate-btn btn-primary" onclick="openCertificateModal(${certificate.id})">
            <i class="bi bi-eye"></i>
            View Certificate
          </button>
          ${certificate.credentialUrl && certificate.credentialUrl !== '#' ? `
            <a href="${certificate.credentialUrl}" class="certificate-btn btn-secondary" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-link-45deg"></i>
              Verify
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}

// Open certificate modal
function openCertificateModal(certificateId) {
  const certificate = certificatesData.certificates.find(cert => cert.id === certificateId);
  if (!certificate) return;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  modalBody.innerHTML = `
    <div class="modal-certificate-info">
      <img 
        src="${certificate.image}" 
        alt="${certificate.title}" 
        class="modal-certificate-image"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
      >
      <div class="modal-certificate-placeholder" style="display: none; height: 300px; background: var(--bg-higher); border-radius: 12px; align-items: center; justify-content: center; color: var(--text-muted); margin-bottom: 1.5rem;">
        <div style="text-align: center;">
          <i class="bi bi-award" style="font-size: 4rem; margin-bottom: 1rem; color: var(--primary-color);"></i>
          <div style="font-size: 1.1rem;">Certificate Image</div>
        </div>
      </div>
      <h2 class="modal-certificate-title">${certificate.title}</h2>
      <h3 class="modal-certificate-issuer">
        ${certificate.issuer}
        ${certificate.verified ? '<i class="bi bi-patch-check-fill" style="color: var(--primary-color); margin-left: 0.5rem;" title="Verified Certificate"></i>' : ''}
      </h3>
      <p class="modal-certificate-date">Completed on ${formatDate(certificate.date)}</p>
      <div class="modal-certificate-description">
        <p>${certificate.description}</p>
      </div>
      <div class="certificate-skills">
        ${certificate.skills.map(skill => `<span class="certificate-skill">${skill}</span>`).join('')}
      </div>
      ${certificate.credentialUrl && certificate.credentialUrl !== '#' ? `
        <div class="certificate-actions" style="margin-top: 2rem;">
          <a href="${certificate.credentialUrl}" class="certificate-btn btn-primary" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-link-45deg"></i>
            View Credential
          </a>
        </div>
      ` : ''}
    </div>
  `;

  certificateModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close certificate modal
function closeCertificateModal() {
  certificateModal.classList.remove('active');
  document.body.style.overflow = '';
}

// Setup event listeners
function setupEventListeners() {
  // Modal close events
  modalClose.addEventListener('click', closeCertificateModal);
  
  certificateModal.addEventListener('click', (e) => {
    if (e.target === certificateModal || e.target.classList.contains('modal-overlay')) {
      closeCertificateModal();
    }
  });

  // Escape key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && certificateModal.classList.contains('active')) {
      closeCertificateModal();
    }
  });

  // Certificate card click to open modal
  certificatesGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.certificate-card');
    if (card && !e.target.closest('.certificate-actions')) {
      const certificateId = parseInt(card.dataset.certificateId);
      openCertificateModal(certificateId);
    }
  });
}

// Animate certificate cards
function animateCertificateCards() {
  const cards = document.querySelectorAll('.certificate-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.animation = 'none';
    
    setTimeout(() => {
      card.style.animation = `slideInUp 0.6s ease forwards`;
    }, index * 100);
  });
}

// Initialize animations on scroll
function initializeCertificatesAnimations() {
  const certificatesSection = document.querySelector('.certificates-section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const title = entry.target.querySelector('.certificates-title');
        const subtitle = entry.target.querySelector('.certificates-subtitle');
        
        // Animate elements
        if (title) {
          title.style.animation = 'slideInUp 0.8s ease forwards';
        }
        
        if (subtitle) {
          subtitle.style.animation = 'slideInUp 0.8s ease forwards 0.2s';
          subtitle.style.opacity = '0';
        }
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });
  
  if (certificatesSection) {
    observer.observe(certificatesSection);
  }
}

// Add certificate (for dynamic addition)
function addCertificate(certificate) {
  certificate.id = Math.max(...certificatesData.certificates.map(c => c.id)) + 1;
  certificatesData.certificates.push(certificate);
  createCertificatesGrid();
  animateCertificateCards();
}

// Remove certificate
function removeCertificate(certificateId) {
  const index = certificatesData.certificates.findIndex(cert => cert.id === certificateId);
  if (index > -1) {
    certificatesData.certificates.splice(index, 1);
    createCertificatesGrid();
    animateCertificateCards();
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeCertificates();
  initializeCertificatesAnimations();
});

// Also initialize if script loads after DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initializeCertificates();
    initializeCertificatesAnimations();
  });
} else {
  initializeCertificates();
  initializeCertificatesAnimations();
}

// Make openCertificateModal globally accessible
window.openCertificateModal = openCertificateModal;

// Expose functions for external use
window.CertificatesSection = {
  add: addCertificate,
  remove: removeCertificate,
  refresh: initializeCertificates,
  data: certificatesData
};