(function ($) {
  "use strict";

  var nav = $('nav');
  var navHeight = nav.outerHeight();

  $('.navbar-toggler').on('click', function () {
    if (!$('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  });

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1000, 'easeInOutExpo');
    return false;
  });

  /*--/ Star Scrolling nav /--*/
  $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - navHeight + 5)
        }, 800, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll').on("click", function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: navHeight + 10
  });

  /*--/ Navbar Menu Reduce /--*/
  $(window).trigger('scroll');
  $(window).on('scroll', function () {
    var pixels = 50;
    if ($(window).scrollTop() > pixels) {
      $('.navbar-expand-md').addClass('navbar-reduce');
      $('.navbar-expand-md').removeClass('navbar-trans');
    } else {
      $('.navbar-expand-md').addClass('navbar-trans');
      $('.navbar-expand-md').removeClass('navbar-reduce');
    }
  });

  /*--/ Typed /--*/
  if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
    var typed = new Typed('.text-slider', {
      strings: typed_strings.split(','),
      typeSpeed: 60,
      loop: true,
      backDelay: 1400,
      backSpeed: 30
    });
  }

  /*--/ Portfolio Filters /--*/
  $('.filter-btn').on('click', function () {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    var filterValue = $(this).attr('data-filter');
    if (filterValue === 'all') {
      $('.portfolio-item-col').fadeIn(300);
    } else {
      $('.portfolio-item-col').hide();
      $('.portfolio-item-col[data-category*="' + filterValue + '"]').fadeIn(300);
    }
  });

})(jQuery);

/* =======================================================
   Structured Project Data (from CV)
   ======================================================= */
var projectsData = {
  dealer: {
    title: "Dealer Management Application",
    client: "PT. Berlian Sistem Informasi (Subsidiary of Mitsubishi Corporation)",
    company: "PT Abishaar Technologies",
    period: "Dec 2025 – Present",
    role: "Software Engineer",
    category: "microservices",
    liveUrl: "",
    stack: [".NET Core", "Microservices", "Domain-Driven Design (DDD)", "CQRS", "Clean Architecture", "Redis", "RabbitMQ", "SQL Server", "Azure", "Kendo UI", "Tailwind CSS"],
    description: "High-performance enterprise dealer management application utilizing Microservices architecture, Domain-Driven Design (DDD), CQRS, and Clean Architecture patterns to optimize sales operations and support automotive digital transformation.",
    accomplishments: [
      "Designed and developed a high-performance dealer management application utilizing Microservices architecture, Domain-Driven Design (DDD), CQRS, and Clean Architecture patterns to optimize sales operations and support digital transformation.",
      "Implemented robust backend services using .NET Framework / .NET Core, integrated with SQL Server managed via DBeaver.",
      "Maximized performance using Redis for distributed caching and RabbitMQ for asynchronous message queuing.",
      "Built dynamic, responsive, and user-friendly user interfaces using JavaScript, Kendo UI, and Tailwind CSS.",
      "Leveraged cloud infrastructure by deploying and managing application services on Microsoft Azure, while utilizing Git for version control and modern IDEs (Visual Studio & VS Code).",
      "Applied AI and Codex tools to accelerate the development lifecycle, automate code generation, and improve code efficiency.",
      "Collaborated closely within a cross-functional Agile Scrum team (Product Owners, Quality Assurance, Scrum Masters, System Analysts) to deliver high-quality features in aligned sprint cycles."
    ],
    images: ["img/dealer-management.jpg"]
  },
  portalasuradur: {
    title: "E-Polis Portal Asuradur",
    client: "PT. Bank Negara Indonesia (Persero) Tbk",
    company: "PT Mitra Integrasi Informatika",
    period: "Feb 2022 – Nov 2025",
    role: "Application Developer",
    category: "banking",
    liveUrl: "https://asuradur.bni.co.id",
    stack: [".NET Framework", ".NET Core", "JavaScript", "jQuery", "Ajax", "Bootstrap", "SQL Server"],
    description: "External-facing insurance partner portal for Bank Negara Indonesia (BNI), used by insurance partner companies to perform policy closure, renewals, endorsements, premiums, and official policy claims.",
    accomplishments: [
      "Designed, developed, and maintained the external insurance portal connecting BNI with third-party insurance providers.",
      "Streamlined policy closure and endorsement workflows, substantially reducing UI processing time and request overhead.",
      "Implemented secure authentication and role-based permissions to safeguard sensitive customer insurance records.",
      "Collaborated closely with the QA team to resolve system vulnerabilities and defect reports to meet rigorous banking standards.",
      "Facilitated User Acceptance Testing (UAT) in alignment with Product Owners to validate business features.",
      "Authored technical and deployment documentation, including installation guides and testing protocols."
    ],
    images: [
      "img/E-POLIS PORTAL ASURADUR.jpg",
      "img/Portofolio/Epolis Portal Asuradur/Login page.png",
      "img/Portofolio/Epolis Portal Asuradur/Home page.png"
    ]
  },
  epolis: {
    title: "E-Polis Core Intranet",
    client: "PT. Bank Negara Indonesia (Persero) Tbk",
    company: "PT Mitra Integrasi Informatika",
    period: "Feb 2022 – Nov 2025",
    role: "Application Developer",
    category: "banking",
    liveUrl: "",
    stack: [".NET Framework", "C#", "JavaScript", "jQuery", "Ajax", "Bootstrap", "SQL Server"],
    description: "Core internal banking system supporting comprehensive insurance policy lifecycle management for BNI credit and loan operations, including endorsements, premiums, policy generation, and claims.",
    accomplishments: [
      "Engineered core web application modules in .NET and JavaScript to ensure scalable and secure banking operations.",
      "Debugged, analyzed, and resolved complex programming bugs and system issues to optimize application performance and reliability.",
      "Streamlined policy closing and endorsement pipelines, integrating data with credit delivery systems.",
      "Executed comprehensive functional and regression testing strictly aligned with banking quality standards."
    ],
    images: [
      "img/E-POLIS.jpg",
      "img/Portofolio/Epolis Portal Intranet/Home page epolis.png"
    ]
  },
  etaksasikjpp: {
    title: "ETaksasi KJPP Portal",
    client: "PT. Bank Negara Indonesia (Persero) Tbk",
    company: "PT Mitra Integrasi Informatika",
    period: "Feb 2022 – Nov 2025",
    role: "Application Developer",
    category: "banking",
    liveUrl: "http://kjpp-etaksasi.bni.co.id/login",
    stack: [".NET Framework", "JavaScript", "jQuery", "Ajax", "Bootstrap", "Kendo UI", "SQL Server"],
    description: "Dedicated appraisal portal for certified independent appraisal bureaus (KJPP - Kantor Jasa Penilai Publik) to submit property valuations, appraisal adjustments, and assessment reports for BNI credit underwriting.",
    accomplishments: [
      "Built and maintained appraisal submission and adjustment modules on the official KJPP internet portal.",
      "Implemented dynamic data entry grids and document download features using Kendo UI for appraisal calculations.",
      "Built secure multi-tenant access controls for accredited external valuation partners.",
      "Reduced report processing turnaround time through asynchronous validation and automated workflow updates."
    ],
    images: [
      "img/E-Taksasi KJPP.jpg",
      "img/Portofolio/Etaksasi KJPP/Loginpage.png",
      "img/Portofolio/Etaksasi KJPP/Home page.png"
    ]
  },
  etaksasi: {
    title: "ETaksasi Internal Portal",
    client: "PT. Bank Negara Indonesia (Persero) Tbk",
    company: "PT Mitra Integrasi Informatika",
    period: "Feb 2022 – Nov 2025",
    role: "Application Developer",
    category: "banking",
    liveUrl: "",
    stack: [".NET Framework", "JavaScript", "jQuery", "Ajax", "Bootstrap", "Kendo UI", "SQL Server"],
    description: "Internal banking platform used by credit officers to handle customer appraisal requests, collateral asset registration, appraisal approvals, physical handover (Serah Terima), and collateral inquiries.",
    accomplishments: [
      "Developed features including Pembuatan Nasabah, Agunan, Pengajuan Taksasi, Serah Terima, and Inquiry.",
      "Enhanced appraisal submission & adjustment modules on intranet portals with Kendo UI grids.",
      "Optimized query performance in SQL Server to ensure fast loading of high-volume collateral records.",
      "Authored deployment manuals and operational guides for internal bank IT teams."
    ],
    images: [
      "img/E-Taksasi.jpg",
      "img/Portofolio/Etaksasi/Login page etaksasi.png",
      "img/Portofolio/Etaksasi/Home page etaksasi.png"
    ]
  },
  bnilelang: {
    title: "BNI Lelang Revamp",
    client: "PT. Bank Negara Indonesia (Persero) Tbk",
    company: "PT Mitra Integrasi Informatika",
    period: "Feb 2022 – Nov 2025",
    role: "Application Developer",
    category: "banking",
    liveUrl: "",
    stack: [".NET", "C#", "HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "SQL Server"],
    description: "Comprehensive overhaul and modernization of the BNI Auction System (BNI Lelang) focusing on auction security, user bidding simulations, and profile management.",
    accomplishments: [
      "Contributed to the revamp of BNI Auction System (BNI Lelang) focusing on critical modules.",
      "Implemented authentication feature to enhance system security and user access management.",
      "Developed auction simulation feature, allowing users to practice bidding before live sessions.",
      "Enhanced user profile update functionality, improving user experience and data accuracy."
    ],
    images: ["img/bni-lelang.jpg"]
  },
  lmscms: {
    title: "LMS – Collateral Management System (CMS)",
    client: "PT. Bank Negara Indonesia (Persero) Tbk",
    company: "PT Mitra Integrasi Informatika",
    period: "Feb 2022 – Nov 2025",
    role: "Application Developer",
    category: "banking",
    liveUrl: "",
    stack: ["Spring Boot (Java)", "JavaScript", "Bootstrap", "Oracle Database", "Kendo UI", "Newgen BPM"],
    description: "Enterprise Collateral Management System modernizing loan security tracking and appraisal workflows using Spring Boot, Oracle Database, Kendo UI, and Newgen low-code BPM.",
    accomplishments: [
      "Utilized Newgen's low-code and BPM technologies to modernize and optimize the CMS application.",
      "Developed the application using Spring Boot as the technology to consume APIs for the Report Generation menu, which includes features like Export CSV and Export XLSX.",
      "Developed the Inquiry Collateral menu, which dynamically displays important data such as detailed collateral information, appraisal results, and debtor data involved in the appraisal.",
      "Implemented the KJPP feature for entering the appraisal value, which includes a download feature and a load grid using Kendo UI."
    ],
    images: [
      "img/lms-cms.jpg",
      "img/Portofolio/Home page adkhome.png",
      "img/Portofolio/Login page adkhome.png"
    ]
  },
  esettlement: {
    title: "E-Settlement, E-Notaris & E-Rekanan",
    client: "PT. Bank Negara Indonesia (Persero) Tbk",
    company: "PT Mitra Integrasi Informatika",
    period: "Feb 2022 – Nov 2025",
    role: "Application Developer",
    category: "banking",
    liveUrl: "",
    stack: [".NET Framework", "JavaScript", "jQuery", "Ajax", "Bootstrap", "SQL Server", "Kendo UI"],
    description: "Enterprise credit operations suite automating settlement reconciliation, notary order tracking, and third-party legal partner assignments for retail credit delivery.",
    accomplishments: [
      "Improved UI/UX and optimized upload & workflow features for consumer and business banking.",
      "Automated document distribution, notary status tracking, and fee reconciliation.",
      "Strengthened system security and data validation across distributed banking branches.",
      "Conducted UAT and defect management in close partnership with BNI credit operations managers."
    ],
    images: [
      "img/E-Settlement.jpg",
      "img/Portofolio/E-Settlement/Home page.png"
    ]
  },
  dashboardopk: {
    title: "Dashboard OPK & CPR",
    client: "PT. Bank Negara Indonesia (Persero) Tbk",
    company: "PT Mitra Integrasi Informatika",
    period: "Feb 2022 – Nov 2025",
    role: "Application Developer",
    category: "banking",
    liveUrl: "",
    stack: [".NET", "C#", "Rotativa (PDF)", "SQL Server", "JavaScript", "jQuery", "Bootstrap"],
    description: "Operational control and credit performance review dashboard integrating enterprise customer master data with high-speed automated PDF generation.",
    accomplishments: [
      "Built Master Data Nasabah integration with high-throughput .NET APIs.",
      "Automated PDF generation with Rotativa for official credit reviews and compliance reports.",
      "Designed real-time status dashboards displaying customer credit health and operational KPIs.",
      "Optimized query execution plans and database indexing in SQL Server."
    ],
    images: ["img/dashboard-opk-cpr.jpg"]
  },
  webnews: {
    title: "News Portal Application",
    client: "Digital Talent Scholarship Project",
    company: "Independent Project (React JS)",
    period: "November 2022",
    role: "Frontend Developer",
    category: "frontend",
    liveUrl: "",
    stack: ["React JS", "CSS3", "RapidAPI (Bing News Search API)", "JavaScript"],
    description: "Dynamic responsive news web application developed in React JS consuming RapidAPI's Bing News Search API for live categorized news discovery.",
    accomplishments: [
      "Developed a News Portal application that generates data dynamically from Rapid API (Bing News Search API).",
      "Features implemented: Displaying Hot Topics, Showing Latest News, and Topic Detail View.",
      "User Authentication module featuring Login, Register, and Logout capabilities.",
      "Unique features implemented: Filtering news by category and searching articles based on title in real-time."
    ],
    images: [
      "img/webnews.jpg",
      "img/Portofolio/News React DTS/Done.gif"
    ]
  },
  resource: {
    title: "Resource Placement System",
    client: "PT Mitra Integrasi Informatika (Bootcamp)",
    company: "PT Mitra Integrasi Informatika",
    period: "Dec 2021 – Feb 2022",
    role: "Application Developer",
    category: "fullstack",
    liveUrl: "",
    stack: [".NET Core 3.1", "C#", "SQL Server", "Bootstrap", "DataTables", "jQuery", "HTML/CSS"],
    description: "Web application developed during the MII Fullstack .NET Bootcamp for managing IT resource placement, consultant allocation, and client request matching.",
    accomplishments: [
      "Developed Resource Placement System with .NET Core 3.1 as an API and Web application.",
      "Designed relational schema in Microsoft SQL Server for employees, clients, projects, and contracts.",
      "Implemented User Authentication (Login, Register) and Password Management (Change, Forgot Password).",
      "Engineered comprehensive Approval/Reject workflow for managing resource allocation requests."
    ],
    images: [
      "img/resource placement.jpg",
      "img/Portofolio/Final Project Bootcamp/Login page.png",
      "img/Portofolio/Final Project Bootcamp/client page.png",
      "img/Portofolio/Final Project Bootcamp/participant client page.png",
      "img/Portofolio/Final Project Bootcamp/Participant page.png"
    ]
  },
  ocrsystem: {
    title: "Letter Recognition System Using OCR & HOG",
    client: "Telkom University (Undergraduate Thesis)",
    company: "Telkom University",
    period: "2020 – 2021",
    role: "Electrical Engineering Researcher",
    category: "fullstack",
    liveUrl: "",
    stack: ["Python", "Computer Vision", "HOG Feature Extraction", "OCR", "Pattern Recognition"],
    description: "Undergraduate final engineering research project designing an Optical Character Recognition (OCR) system with Histogram of Oriented Gradients (HOG) characteristic extraction.",
    accomplishments: [
      "Researched, designed, and evaluated a character recognition pipeline using Python and image processing algorithms.",
      "Implemented Histogram of Oriented Gradients (HOG) extraction to capture character contours and gradient orientations.",
      "Benchmarked recognition accuracy across various font styles and noisy background conditions.",
      "Graduated with Bachelor of Engineering in Electrical Engineering (Cumulative GPA: 3.62 / 4.0)."
    ],
    images: ["img/ocr-recognition.jpg"]
  }
};

/* =======================================================
   Dynamic Modal Renderer
   ======================================================= */
function openView(key) {
  var p = projectsData[key];
  if (!p) return;

  // Title
  $("#exampleModalLongTitle").text(p.title);

  // Carousel
  var carouselId = "carousel-" + key;
  var carouselHtml = '';

  if (p.images && p.images.length > 0) {
    carouselHtml += '<div id="' + carouselId + '" class="carousel slide modal-carousel-wrap" data-ride="carousel" data-interval="false">';

    // Indicators if more than 1
    if (p.images.length > 1) {
      carouselHtml += '<ol class="carousel-indicators">';
      p.images.forEach(function (img, idx) {
        carouselHtml += '<li data-target="#' + carouselId + '" data-slide-to="' + idx + '" class="' + (idx === 0 ? 'active' : '') + '"></li>';
      });
      carouselHtml += '</ol>';
    }

    // Inner slides
    carouselHtml += '<div class="carousel-inner">';
    p.images.forEach(function (img, idx) {
      carouselHtml += '<div class="carousel-item ' + (idx === 0 ? 'active' : '') + '">';
      carouselHtml += '<img class="d-block w-100 portfolio-modal-img" src="' + img + '" alt="' + p.title + ' slide ' + (idx + 1) + '">';
      carouselHtml += '</div>';
    });
    carouselHtml += '</div>';

    // Controls if more than 1
    if (p.images.length > 1) {
      carouselHtml += '<a class="carousel-control-prev" href="#' + carouselId + '" role="button" data-slide="prev">';
      carouselHtml += '<span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a>';
      carouselHtml += '<a class="carousel-control-next" href="#' + carouselId + '" role="button" data-slide="next">';
      carouselHtml += '<span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a>';
    }

    carouselHtml += '</div>';
  }

  $("#content-carousel").html(carouselHtml);

  // Modal Body Content
  var bodyHtml = '';

  // Meta Grid
  bodyHtml += '<div class="modal-meta-grid">';
  bodyHtml += '<div class="modal-meta-item"><div class="meta-label">Client / Organization</div><div class="meta-value">' + p.client + '</div></div>';
  bodyHtml += '<div class="modal-meta-item"><div class="meta-label">Role</div><div class="meta-value">' + p.role + '</div></div>';
  bodyHtml += '<div class="modal-meta-item"><div class="meta-label">Timeline</div><div class="meta-value">' + p.period + '</div></div>';
  if (p.liveUrl) {
    bodyHtml += '<div class="modal-meta-item"><div class="meta-label">Live System</div><div class="meta-value"><a href="' + p.liveUrl + '" target="_blank" class="text-primary font-weight-bold"><i class="fa fa-external-link"></i> Open Portal</a></div></div>';
  }
  bodyHtml += '</div>';

  // Description
  bodyHtml += '<div class="modal-body-section-title"><i class="fa fa-info-circle text-primary"></i> Project Overview</div>';
  bodyHtml += '<p class="lead" style="font-size: 0.95rem; line-height: 1.6; color: #475569;">' + p.description + '</p>';

  // Key Accomplishments
  if (p.accomplishments && p.accomplishments.length > 0) {
    bodyHtml += '<div class="modal-body-section-title mt-4"><i class="fa fa-check-square-o text-primary"></i> Key Contributions & Architecture</div>';
    bodyHtml += '<ul class="modal-bullet-list">';
    p.accomplishments.forEach(function (acc) {
      bodyHtml += '<li>' + acc + '</li>';
    });
    bodyHtml += '</ul>';
  }

  // Tech Stack Badges
  if (p.stack && p.stack.length > 0) {
    bodyHtml += '<div class="modal-body-section-title mt-3"><i class="fa fa-code text-primary"></i> Technologies & Tools</div>';
    bodyHtml += '<div class="tech-tags mb-3">';
    p.stack.forEach(function (t) {
      bodyHtml += '<span class="tech-tag">' + t + '</span>';
    });
    bodyHtml += '</div>';
  }

  $("#modal-content").html(bodyHtml);

  // Activate Carousel
  if (p.images && p.images.length > 1) {
    $('#' + carouselId).carousel({ interval: false });
  }
}
