export interface Problem {
  id: number;
  title: string;
  description: string;
  details?: string;
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
    title: "Track 1: Build for Failure & Reliability",
    subtitle: "Systems that detect early warning signs, handle degradation, and prevent catastrophic failure.",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/30",
    hoverGlow: "hover:shadow-blue-500/20",
    problems: [
      {
        id: 1,
        title: "Healthcare AI Symptom Checker with Confidence Indication",
        description: "Develop an AI-powered symptom checker that assesses user-reported symptoms and provides preliminary health insights with clear confidence scores.",
        details: "The system should ask clarifying questions, handle ambiguous inputs, provide a ranked list of possible conditions with confidence levels, suggest when professional consultation is necessary, and maintain patient privacy. It should work with incomplete information and avoid overconfident diagnoses."
      },
      {
        id: 2,
        title: "AI-Powered Live Classroom Captioning for Students with Hearing Impairment",
        description: "Build a real-time speech-to-text system that transcribes classroom lectures with high accuracy, even in noisy environments.",
        details: "The solution should handle multiple speakers, background noise, technical jargon, support Indian accents and code-mixing (English + Hindi/regional languages), provide real-time captions with minimal latency, and allow manual corrections by teaching assistants. Optional features include subject-specific vocabulary learning and integration with presentation slides."
      },
      {
        id: 3,
        title: "Agritech Crop Health Monitoring with Early Anomaly Detection",
        description: "Create an AI-driven system to monitor crop health using drone or satellite imagery and detect early signs of disease, pest infestation, or nutrient deficiency.",
        details: "The system should analyze multispectral or RGB imagery, detect subtle changes in crop appearance before visible symptoms, generate alerts with recommended interventions, work with low-resolution or partial imagery, and be adaptable to different crops and regions. It should provide confidence scores and avoid false alarms that could waste resources."
      },
      {
        id: 4,
        title: "Vision-Only Drone Intelligence for Obstacle Avoidance & Real-Time Video Analytics",
        description: "Create an AI-powered drone intelligence system that operates exclusively on monocular RGB video feeds, without relying on depth sensors or additional hardware.",
        details: "The system should enable a drone to perceive its environment visually and autonomously avoid obstacles in real time, while simultaneously processing live video streams to detect, track, and count objects of interest. Key challenges include monocular depth estimation from video frames, real-time object detection and tracking, autonomous navigation in dynamic environments, and efficient processing on embedded hardware."
      },
      {
        id: 5,
        title: "Intelligent Drone Perception, Tracking & Autonomous Navigation",
        description: "Build an intelligent drone system capable of real-time video analytics, vision-based target tracking, and autonomous path planning in dynamic environments.",
        details: "The system should process live drone video feeds to detect, track, and count objects of interest, while simultaneously maintaining a robust visual lock on moving targets, even in the presence of occlusion, motion blur, and rapid motion. In parallel, an autonomous navigation component should be developed where a reinforcement learning-based agent learns to plan optimal flight paths within a simulated environment containing dynamic obstacles."
      }
    ]
  },
  {
    id: 2,
    title: "Track 2: Human + Machine Decision Systems",
    subtitle: "Solutions where automation assists humans under uncertainty, without replacing judgment.",
    color: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500/30",
    hoverGlow: "hover:shadow-purple-500/20",
    problems: [
      {
        id: 1,
        title: "Healthcare AI-Powered Peer Support Matching for Mental Health Communities",
        description: "Build a system that intelligently matches individuals in online mental health communities with peers who have similar experiences, backgrounds, or challenges.",
        details: "The system should analyze user profiles, forum activity, and shared experiences to suggest meaningful connections. It should maintain privacy, handle sensitive topics ethically, avoid harmful matches, provide optional matching filters (age, gender, language, topic), and support both text-based and anonymous interactions. The goal is to foster supportive peer relationships while ensuring user safety."
      },
      {
        id: 2,
        title: "Education Adaptive AI Learning Agent for Competitive Exam Preparation",
        description: "Develop an intelligent tutoring system that acts as a personalized AI learning agent for students preparing for competitive exams.",
        details: "The agent should analyze student performance across practice tests, identify weak topics and question patterns, generate personalized study plans with recommended resources, adapt difficulty and pacing based on progress, simulate exam conditions with mock tests, and provide motivational feedback. It should handle multiple subjects and exam formats (JEE, NEET, UPSC, CAT, etc.)."
      },
      {
        id: 3,
        title: "Education AI-Driven Competitive Exam System with Proctoring & Analytics",
        description: "Create an AI-powered online examination platform designed for conducting competitive exams with intelligent proctoring and post-exam analytics.",
        details: "The system should include automated proctoring using webcam monitoring for suspicious behavior detection, browser lockdown to prevent tab switching or external resources, question randomization and adaptive difficulty, real-time alerts for exam administrators, and detailed post-exam analytics including performance distribution, question-level insights, and potential anomaly detection. It should balance security with user experience and privacy."
      },
      {
        id: 4,
        title: "Agritech AI Agent for Government Scheme Discovery & Application Assistance",
        description: "Build an intelligent agent that helps farmers and rural communities discover relevant government schemes, subsidies, and welfare programs based on their profile and needs.",
        details: "The agent should understand natural language queries in regional languages, analyze farmer profiles (crop type, land size, income, location) to recommend applicable schemes, guide users through application processes with step-by-step assistance, track application status, send reminders for deadlines, and provide information on required documents. It should work with low-bandwidth scenarios and support voice-based interactions."
      },
      {
        id: 5,
        title: "AI-Driven Project Intelligence for Engineering Teams",
        description: "Build an intelligent project management system that continuously analyzes tasks and team communication to generate real-time insights, summaries, and alerts.",
        details: "The system should integrate with tools like Jira, Slack, GitHub, and email to monitor project progress, detect blockers and delays, summarize daily/weekly progress, identify overloaded team members, suggest task prioritization, and predict project timeline risks. It should provide actionable insights without overwhelming teams with notifications, and learn from past projects to improve recommendations."
      },
      {
        id: 6,
        title: "AI-Powered Competitive Exam Performance Analytics Platform",
        description: "Build an intelligent analytics platform that transforms raw competitive exam and mock-test data into personalized, question-level insights and adaptive study recommendations.",
        details: "The platform should analyze student performance across multiple mock tests, identify weak topics and question types, track progress over time, compare performance with peers, predict exam readiness scores, generate customized study plans, and provide question-level explanations and resources. It should support multiple exam formats and subjects, and present data through intuitive dashboards and reports."
      }
    ]
  },
  {
    id: 3,
    title: "Track 3: Less Data, Better Results & Early Detection",
    subtitle: "Systems that detect early warning signs, handle degradation, and prevent catastrophic failure.",
    color: "from-orange-500 to-red-500",
    borderColor: "border-orange-500/30",
    hoverGlow: "hover:shadow-orange-500/20",
    problems: [
      {
        id: 1,
        title: "Healthcare AI-Based Early Disease Surveillance System",
        description: "Develop an AI-powered system to detect early signals of disease outbreaks by analyzing diverse data sources such as hospital records, social media, search trends, and pharmacy sales.",
        details: "The system should identify unusual patterns that may indicate emerging health threats, provide early warnings to public health authorities, work with incomplete or noisy data, handle regional language variations and local health contexts, generate geospatial visualizations of potential outbreaks, and minimize false positives. It should support decision-making during critical early response windows."
      },
      {
        id: 2,
        title: "Intelligent DevOps Automation & Incident Response System",
        description: "Build an AI-driven system that monitors application logs, metrics, and infrastructure health to detect anomalies and automate incident response.",
        details: "The system should analyze real-time logs and performance metrics to identify unusual behavior, predict potential failures before they occur, automatically trigger remediation actions (restart services, scale resources, rollback deployments), generate incident reports with root cause analysis, and learn from past incidents to improve future responses. It should integrate with popular DevOps tools (Kubernetes, Prometheus, Grafana, PagerDuty) and reduce mean time to resolution (MTTR)."
      },
      {
        id: 3,
        title: "AI-Powered Cloud Resource Monitoring & Cost Optimization",
        description: "Create an intelligent system to monitor cloud resource usage (AWS, Azure, GCP) and provide automated recommendations for cost optimization and performance improvement.",
        details: "The system should analyze usage patterns across compute, storage, and network resources, identify underutilized or idle resources, suggest rightsizing and reserved instance opportunities, detect cost anomalies and budget overruns, automate resource scheduling (start/stop based on usage patterns), and provide forecasting for future costs. It should generate actionable reports for engineering and finance teams."
      },
      {
        id: 4,
        title: "Structural Health Monitoring with Early Damage Detection",
        description: "Develop a system to monitor the structural health of bridges, buildings, or infrastructure using sensor data (vibration, strain, temperature) and detect early signs of damage or degradation.",
        details: "The system should analyze sensor time-series data to identify abnormal vibrations or stress patterns, predict maintenance needs before critical failures, provide confidence scores for detected anomalies, work with missing or noisy sensor data, and generate alerts for inspection teams. Optional features include integration with IoT sensor networks and visualization of structural health on digital twin models."
      }
    ]
  },
  {
    id: 4,
    title: "Track 4: Trust, Safety & Verification and Cybersecurity",
    subtitle: "Systems that establish authenticity, detect risk, or ensure long-term trust in digital or physical environments.",
    color: "from-green-500 to-emerald-500",
    borderColor: "border-green-500/30",
    hoverGlow: "hover:shadow-green-500/20",
    problems: [
      {
        id: 1,
        title: "Blockchain-Based Carbon Credit Marketplace with Trust & Transparency",
        description: "Build a decentralized marketplace for carbon credits using blockchain technology to ensure transparency, prevent double-counting, and verify carbon offset claims.",
        details: "The platform should allow organizations to buy, sell, and retire carbon credits with full transaction traceability, integrate with IoT sensors or satellite imagery for real-time verification of carbon sequestration activities (reforestation, renewable energy projects), use smart contracts for automated transactions and compliance, and provide a public ledger for audit and regulatory purposes. It should address challenges of trust and greenwashing in carbon markets."
      },
      {
        id: 2,
        title: "Secure Cloud Storage with Automatic Compliance & Data Integrity Verification",
        description: "Create a cloud storage solution that ensures data integrity, encryption, and automatic compliance with data protection regulations (GDPR, HIPAA, etc.).",
        details: "The system should provide end-to-end encryption for files at rest and in transit, verify data integrity using cryptographic hashing or blockchain-based audit trails, automatically classify data based on sensitivity and apply appropriate access controls, generate compliance reports for audits, detect and alert on unauthorized access or data breaches, and support versioning and tamper-evident storage. It should be easy to use while maintaining high security standards."
      },
      {
        id: 3,
        title: "Intelligent Deepfake Detection and Trust Verification System",
        description: "Build an AI-based system to detect deepfake content in images, videos, and audio by identifying visual, audio, and temporal inconsistencies and generating a clear authenticity or trust score.",
        details: "The solution should work on low-quality or compressed media, handle unseen deepfake techniques, provide fast (near real-time) results, minimize false positives on genuine content, and offer basic explainability for its decisions. It should be deployable as a web service, browser extension, or API for media platforms and newsrooms to verify content authenticity."
      }
    ]
  }
];
