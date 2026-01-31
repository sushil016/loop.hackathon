export interface Problem {
  id: number;
  title: string;
  description: string;
  details: string;
}

export interface Track {
  id: number;
  title: string;
  subtitle: string;
  color: string;
  borderColor: string;
  hoverGlow: string;
  problems: Problem[];
}

export const problemTracks: Track[] = [
  {
    id: 1,
    title: "Build for Failure & Reliability",
    subtitle: "Intelligent systems that learn, adapt, or predict with limited, noisy, or incomplete data",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/30",
    hoverGlow: "hover:shadow-blue-500/20",
    problems: [
      {
        id: 1,
        title: "Healthcare: Symptom Checker & Triage System",
        description: "Design a clinically reliable, real-time symptom checker and triage system that combines conversational AI, medical imaging analysis, and patient context modeling to make high-stakes care recommendations under uncertainty, with accuracy and safety guarantees comparable to trained clinicians.",
        details: "The system must reason over incomplete, ambiguous, and sometimes misleading patient inputs; analyze user-submitted images (e.g., skin lesions, wounds, swelling) with calibrated confidence; detect red-flag conditions and escalation risks; adapt triage decisions based on patient history, comorbidities, and medication use without full records; operate within strict medical safety constraints; provide transparent explanations and confidence scores for every recommendation; support multilingual and low-health-literacy users; and be robust against hallucinations, bias, and over- or under-triage, while demonstrably reducing unnecessary ER visits without increasing adverse outcomes."
      },
      {
        id: 2,
        title: "AI/ML: Real-time Classroom Captioning System",
        description: "Design and build a real-time classroom and meeting captioning system that operates under adversarial acoustic conditions and strict latency limits, using distributed multi-microphone fusion, unsupervised speaker identification, and context-aware language understanding.",
        details: "The system must handle overlapping speakers, code-switching, accents, and technical jargon without prior speaker enrollment, run fully on-device for privacy, and provide word-level timestamps, confidence scores, and speaker attribution, with accuracy and responsiveness exceeding human stenography within 300ms end-to-end delay."
      },
      {
        id: 3,
        title: "Agritech: Crop Monitoring & Disease Detection Platform",
        description: "Build a farmer-centric mobile application that allows farmers to select and register the crops they have planted, and continuously monitor and plan crop growth throughout the entire farming season.",
        details: "The system should use AI-driven insights instead of generic farming tips by combining crop growth stages, local soil conditions, weather patterns, and farmer inputs to provide daily and stage-wise recommendations. The platform must allow farmers to capture images of their crops using a mobile phone camera for disease detection. To be practical in real farming environments, the application should work reliably under rural constraints such as poor internet connectivity, low-end smartphones, and limited digital literacy with voice-based interaction support."
      },
      {
        id: 4,
        title: "Vision-Only Drone Intelligence for Obstacle Avoidance & Real-Time Video Analytics",
        description: "Create an AI-powered drone intelligence system that operates exclusively on monocular RGB video feeds, without relying on depth sensors or additional hardware.",
        details: "The system should enable a drone to perceive its environment visually and autonomously avoid obstacles in real time, while simultaneously processing live video streams to detect, track, and count objects of interest."
      },
      {
        id: 5,
        title: "Intelligent Drone Perception, Tracking & Autonomous Navigation",
        description: "Build an intelligent drone system capable of real-time video analytics, vision-based target tracking, and autonomous path planning in dynamic environments.",
        details: "The system should process live drone video feeds to detect, track, and count objects of interest, while simultaneously maintaining a robust visual lock on moving targets, even in the presence of occlusion, motion blur, and rapid motion. In parallel, an autonomous navigation component should be developed where a reinforcement learning–based agent learns to plan optimal flight paths within a simulated environment containing dynamic obstacles."
      }
    ]
  },
  {
    id: 2,
    title: "Human + Machine Decision Systems",
    subtitle: "Solutions where automation assists humans under uncertainty, without replacing judgment",
    color: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500/30",
    hoverGlow: "hover:shadow-purple-500/20",
    problems: [
      {
        id: 1,
        title: "Healthcare: Peer Support Matching Platform",
        description: "Build a peer support matching platform that uses NLP to connect people experiencing similar mental health challenges based on their journal entries.",
        details: "Creating safe spaces for shared experiences and mutual support through intelligent matching algorithms that understand emotional context and ensure privacy."
      },
      {
        id: 2,
        title: "Education: AI Academic Agent for Universities",
        description: "Build a mission-critical, closed-loop AI academic agent for universities that replaces ad-hoc search and generic tutoring by acting as a governed learning companion tied directly to institutional curriculum.",
        details: "The system must reason exclusively over faculty-approved knowledge bases and course artifacts, dynamically track each student's conceptual mastery, misconceptions, and accessibility needs, and adapt explanations, examples, and pacing in real time through multimodal interaction (speech-first, text, visual summaries). It must support high-stakes use cases—exam preparation, assignment clarification, prerequisite gap detection, and assistive learning for students with disabilities—while enforcing academic integrity, preventing answer leakage, and providing teachers with explainable insight into student understanding."
      },
      {
        id: 3,
        title: "AI/ML: Comprehensive Examination AI System",
        description: "Manual exam paper setting takes 200+ hours per subject with inconsistent difficulty levels. Paper leaks and cheating rampant with 30% exams compromised annually.",
        details: "Develop comprehensive examination AI that auto-generates question papers using NLP ensuring curriculum coverage, difficulty distribution, and bloom's taxonomy levels, creates infinite question variations making paper leaks irrelevant, implements adaptive testing adjusting question difficulty based on student responses, provides AI proctoring using facial recognition, gaze tracking, audio monitoring, and browser lockdown, enables automated evaluation of subjective answers using NLU, offers accessibility features including text-to-speech, speech-to-text, extended time for disabled students. Must detect 95% of cheating attempts with <2% false positives for 1M concurrent test-takers."
      },
      {
        id: 4,
        title: "Agritech: AI-Powered Government Scheme Discovery Platform",
        description: "India has 700+ government schemes for farmers, yet 60% of eligible farmers are unaware of schemes they qualify for. Only 30% of aware farmers actually apply due to complex eligibility criteria.",
        details: "Build an AI-powered, multilingual platform that helps farmers discover relevant schemes, understand eligibility, submit applications, and track status through an intelligent conversational interface. The system must analyze profiles (land type, acreage, crops, family structure, income, location) to recommend schemes with highest potential benefit. Build an AI assistant supporting 15+ Indian languages with voice input/output for low-literacy users. Implement OCR-based document verification, cross-validate inputs against government databases. Must work offline and sync when online, support 10M+ concurrent users with >95% scheme recommendation accuracy."
      },
      {
        id: 5,
        title: "AI-Driven Project Intelligence for Engineering Teams",
        description: "Build an intelligent project management system that continuously analyzes tasks and team communication to generate real-time insights, summaries, and alerts.",
        details: "Reducing manual reporting and coordination overhead. The system should feel proactive and 'always aware,' not just a passive task tracker."
      },
      {
        id: 6,
        title: "AI-Powered Competitive Exam Performance Analytics Platform",
        description: "Build an intelligent analytics platform that transforms raw competitive exam and mock-test data into personalized, question-level insights and adaptive study recommendations.",
        details: "The system should continuously learn from new test data and clearly show how preparation guidance improves over time."
      }
    ]
  },
  {
    id: 3,
    title: "Early Detection & Failure Prevention",
    subtitle: "Systems that detect early warning signs, handle degradation, and prevent catastrophic failure",
    color: "from-orange-500 to-red-500",
    borderColor: "border-orange-500/30",
    hoverGlow: "hover:shadow-orange-500/20",
    problems: [
      {
        id: 1,
        title: "Healthcare: Smart Healthcare History & Disease Surveillance System",
        description: "A digital healthcare platform designed to centralize patient medical records, streamline prescription handling, and enable data-driven disease monitoring for early prevention and control.",
        details: "Every patient is provided with a Smart Health Card (QR code or NFC-based) that acts as a secure digital reference to their medical history. Health administrators can access anonymized, aggregated data through a centralized dashboard. The system analyzes patient data on the basis of location, time, and disease type to identify patterns and trends, enabling authorities to determine which areas are experiencing higher cases for specific diseases, helping them take preventive measures before the disease spreads widely. Patient data is encrypted with role-based access and individual identities are never exposed in analytical reports."
      },
      {
        id: 2,
        title: "Automation: Autonomous DevOps & System Reliability Platform",
        description: "Production systems face 200+ incidents monthly with 4-hour average resolution time. 60% of outages are predictable from monitoring data but detected only after customer impact.",
        details: "Create autonomous DevOps automation that predicts system failures 30-60 minutes in advance using anomaly detection across logs, metrics, and traces, automatically implements corrective actions including service restarts, traffic rerouting, and resource scaling without human intervention, performs intelligent root cause analysis across distributed systems, auto-optimizes database queries and indexes, manages cloud resources with AI-driven cost optimization, implements chaos engineering continuously testing system resilience. Predict failures with 85% accuracy and 45-minute lead time, reduce MTTR from 4 hours to 15 minutes, false positive rate under 5%, auto-remediation success rate >80%, handle 10 million events per second."
      },
      {
        id: 3,
        title: "Automation: Cloud Monitoring & Observability Platform",
        description: "Build a cloud monitoring and observability platform with an intuitive web dashboard that allows developers to easily add and manage servers, Docker containers, and Kubernetes clusters.",
        details: "The system must provide 24×7 monitoring of uptime, performance, resource usage, crashes, and failures, securely collecting logs, metrics, and traces through a custom SDK using API keys. It should present real-time and historical data through interactive dashboards, graphs, alerts, and service maps, while using AI to analyze logs and incidents, explain problems in simple language, suggest possible root causes and fixes, and generate clear uptime, health, cost-impact, and SLA reports. The platform must support distributed tracing, service dependency visualization, incident timeline replay, offline log capture with later sync, role-based access control, and scalable ingestion with minimal overhead."
      },
      {
        id: 4,
        title: "Intelligent Structural Health Monitoring System",
        description: "Build an intelligent monitoring system that continuously analyzes structural stress/strain data to detect early signs of fatigue and predict failure risks in critical infrastructure like bridges.",
        details: "The system should convert raw sensor signals into clear, actionable health insights and alerts for proactive maintenance."
      }
    ]
  },
  {
    id: 4,
    title: "Trust, Safety & Verification / CyberSecurity",
    subtitle: "Systems that establish authenticity, detect risk, or ensure long-term trust in digital or physical environments",
    color: "from-green-500 to-emerald-500",
    borderColor: "border-green-500/30",
    hoverGlow: "hover:shadow-green-500/20",
    problems: [
      {
        id: 1,
        title: "Blockchain: Carbon Credit Trading Platform",
        description: "Create a blockchain-based platform for transparent carbon credit trading that allows individuals and small businesses to buy, sell, and verify carbon offsets.",
        details: "Ensuring the authenticity of environmental projects through satellite data integration."
      },
      {
        id: 2,
        title: "Automation: Secure Cloud Storage Platform with Regulatory Compliance",
        description: "Design and implement a cost-efficient, cloud-based secure storage platform that replaces third-party services by providing end-to-end encrypted data storage compliant with strict European regulatory standards (GDPR, ISO/IEC 27001, and data residency requirements).",
        details: "The system must enforce zero-trust access control, fine-grained user permissions, immutable audit logs, and cryptographic key management with customer-controlled keys. It must support large-file uploads via resumable, chunked transfer with deduplication, integrity verification, versioning, and safe retry mechanisms that prevent data corruption or overwrite on failure. Users must be able to modify, pause, resume, and retry uploads seamlessly, with strong consistency guarantees, encryption at rest and in transit, verifiable compliance reporting, and predictable low-cost storage economics without sacrificing performance or durability."
      },
      {
        id: 3,
        title: "Intelligent Deepfake Detection and Trust Verification System",
        description: "Build an intelligent deepfake detection and trust verification system that can identify AI-generated or manipulated media content across images, videos, and audio in real-time.",
        details: "The system must analyze digital content for authenticity markers, detecting sophisticated deepfakes, face-swaps, voice cloning, and synthetic media created by advanced generative AI models. It should employ multi-modal analysis combining visual artifacts, audio inconsistencies, temporal anomalies, and metadata forensics to establish content provenance and authenticity. The platform must handle high-resolution media, provide confidence scores and explainable detection results, operate under time constraints for real-time verification, and maintain high accuracy even as deepfake generation techniques evolve. The system should support forensic-grade evidence trails, integrate blockchain-based content certification, detect partial manipulations, and provide APIs for integration with social media platforms, news organizations, and legal institutions."
      }
    ]
  }
];
