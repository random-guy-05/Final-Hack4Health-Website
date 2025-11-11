import React from 'react';
import { Prize, Judge, Sponsor, JudgingCriterion, ImpactStat, Tutorial } from './types';

export const impactStats: ImpactStat[] = [
  { value: "40+", label: "Innovators" },
  { value: "8+", label: "Partners" },
  { value: "525", label: "Participants" },
  { value: "50+", label: "Projects" },
  { value: "20+", label: "Awards" },
];

export const tutorials: Tutorial[] = [
  {
    title: "PyTorch",
    description: "You only need a minimal subset of PyTorch. Focus on: torch.tensor, nn.Linear, and optimizer.step()",
    links: [
      { name: "PyTorch.io", url: "#" },
      { name: "CrashCourse", url: "#" },
    ]
  },
  {
    title: "Pandas",
    description: "Pandas lets you explore biomedical data quickly, covering 80% of what you will do in early experiments.",
    links: [
      { name: "W3Schools Pandas", url: "#" },
    ]
  },
  {
    title: "Notebooks",
    description: "We recommend VS Code with the official Jupyter extension for exploration and reproducibility.",
    links: [
      { name: "VS Code", url: "#" },
      { name: "Jupyter", url: "#" },
    ]
  }
];

export const prizes: Prize[] = [
  {
    category: "First Place",
    division: "Upper Division (18+)",
    value: "$6,555 in cash",
    winners: "1 winner",
    details: [
      "$300 CASH PRIZE!",
      "2-year VIP CodeCrafters Membership for ALL Team Members ($720 Per Person)",
      "9-month access to MetaCTF OnDemand Labs for ALL Team Members ($450 Per Person)",
      "3-month access to Nexos.ai with $250 Credit for ALL Team Members ($250 Per Person)",
      "8x Interview Cake License for ALL Team Members ($200 Per Person)",
      "5x Gen.xyz Free Domain for ALL Team Members ($80 Per Person)",
      "Interview Buddy AI Mock Interview Credits with Unlimited Attempts for ALL Team Members ($70 Per Person)",
      "UniBee 4 month subscription for ALL Team Members ($40 Per Person)",
      "$25 AoPS Giftcard",
    ]
  },
  {
    category: "First Place",
    division: "Lower Division (13-18)",
    value: "$4,455 in cash",
    winners: "1 winner",
    details: [
      "FULL Mentorship for Research Publication, ISEF, JSHS etc.",
      "$100 CASH PRIZE!",
      "1-year VIP CodeCrafters Membership for ALL Team Members ($360 Per Person)",
      "9-month access to MetaCTF OnDemand Labs for ALL Team Members ($450 Per Person)",
      "3-month access to Nexos.ai with $250 Credit for ALL Team Members ($250 Per Person)",
      "4x Interview Cake License for ALL Team Members ($200 Per Person)",
      "5x Gen.xyz Free Domain for ALL Team Members ($80 Per Person)",
      "Interview Buddy AI Mock Interview Credits with Unlimited Attempts for ALL Team Members ($70 Per Person)",
      "UniBee 4 month subscription for ALL Team Members ($40 Per Person)",
      "$25 AoPS Giftcard",
    ]
  },
  {
    category: "Second Place",
    division: "Upper Division (18+)",
    value: "$3,685 in cash",
    winners: "1 winner",
    details: [
      "9-month access to MetaCTF OnDemand Labs for ALL Team Members ($450 Per Person)",
      "4x Interview Cake License for ALL Team Members ($200 Per Person)",
      "5x Gen.xyz Free Domain for ALL Team Members ($80 Per Person)",
      "Interview Buddy AI Mock Interview Credits with Unlimited Attempts for ALL Team Members ($70 Per Person)",
      "$25 AoPS Giftcard",
    ]
  },
  {
    category: "Second Place",
    division: "Lower Division (13-18)",
    value: "$3,685 in cash",
    winners: "1 winner",
    details: [
      "FULL Mentorship for Research Publication, ISEF, JSHS etc.",
      "9-month access to MetaCTF OnDemand Labs for ALL Team Members ($450 Per Person)",
      "4x Interview Cake License for ALL Team Members ($200 Per Person)",
      "5x Gen.xyz Free Domain for ALL Team Members ($80 Per Person)",
      "Interview Buddy AI Mock Interview Credits with Unlimited Attempts for ALL Team Members ($70 Per Person)",
      "$25 AoPS Giftcard",
    ]
  },
  {
    category: "Third Place",
    division: "Upper Division (18+)",
    value: "$1,050 in cash",
    winners: "1 winner",
    details: [
      "4x Interview Cake License for ALL Team Members ($200 Per Person)",
      "5x Gen.xyz Free Domain for ALL Team Members ($80 Per Person)",
      "Interview Buddy AI Mock Interview Credits with Unlimited Attempts for ALL Team Members ($70 Per Person)",
    ]
  },
  {
    category: "Third Place",
    division: "Lower Division (13-18)",
    value: "$1,050 in cash",
    winners: "1 winner",
    details: [
      "FULL Mentorship for Research Publication, ISEF, JSHS etc.",
      "4x Interview Cake License for ALL Team Members ($200 Per Person)",
      "5x Gen.xyz Free Domain for ALL Team Members ($80 Per Person)",
      "Interview Buddy AI Mock Interview Credits with Unlimited Attempts for ALL Team Members ($70 Per Person)",
    ]
  },
  {
    category: "Best Solo Project",
    value: "$1,080 in cash",
    winners: "1 winner",
    details: [
      "$100 CASH PRIZE",
      "9-month access to MetaCTF OnDemand Labs ($450)",
      "6-month VIP CodeCrafters Membership ($180)",
      "4x Interview Cake License ($200)",
      "5x Gen.xyz Free Domain ($80)",
      "Interview Buddy AI Mock Interview Credits with Unlimited Attempts ($70)",
    ]
  },
  {
    category: "Top Voted Project",
    value: "$1,170 in cash",
    winners: "1 winner",
    details: [
      "4x Interview Cake License for ALL Team Members ($200 Per Person)",
      "5x Gen.xyz Free Domain for ALL Team Members ($80 Per Person)",
      "Interview Buddy AI Mock Interview Credits with Unlimited Attempts for ALL Team Members ($70)",
      "UniBee 4 month subscription for ALL Team Members ($40 Per Person)",
    ]
  },
  {
    category: "Participant Prize",
    value: "$270 in cash",
    winners: "600 winners",
    details: [
      "One-month Wolfram One subscription ($100)",
      "OnePassword One Year Subscription ($60)",
      "MetaCTF Cybersecurity Platform 1 month subscription ($50)",
      "UniBee 3 month subscription ($30)",
      "GenXYZ Personal Domain ($15)",
      "One-month access to BalsamIQ ($12)",
      "Interview Buddy Exclusive Discount Coupon (95% Off)",
      "50 Interview Cake Licenses First-Come-First-Serve ($50 Each)",
      "*Contingent on Submission of Project and One Invite",
    ]
  },
];

export const judges: Judge[] = [
  { name: "Hack4Health Inc.", affiliation: "Hack4Health", description: "The organizing committee dedicated to fostering innovation in health-tech among students." },
  { name: "Parth Jain", affiliation: "Netflix & Amazon", description: "Senior AI/ML engineer with extensive experience in building scalable recommendation systems and cloud infrastructure." },
  { name: "Ashwini Joshi", affiliation: "IEEE", description: "A distinguished IEEE fellow specializing in biomedical signal processing and wearable health technology." },
  { name: "Karthik Jayaprakash", affiliation: "Qualcomm", description: "Expert in embedded systems and on-device AI, focusing on low-power machine learning solutions for mobile health." },
  { name: "Praneetha Kotla", affiliation: "ERP Smart Labs", description: "Cloud solutions architect with a focus on secure, HIPAA-compliant data pipelines for healthcare applications." },
  { name: "Violetta Pidvolotska", affiliation: "Netflix", description: "Data scientist specializing in causal inference and experimentation to drive product innovation and user engagement." },
  { name: "Misba Khair", affiliation: "Oracle HCM Cloud", description: "Consultant focused on implementing large-scale cloud solutions, with an interest in health data management systems." },
  { name: "Luka Zrnic", affiliation: "Bain & Company", description: "Management consultant advising leading healthcare and life sciences companies on digital transformation strategies." },
  { name: "Rishab Bansal", affiliation: "Tesla", description: "Senior software engineer working on autonomous systems and deep learning models for real-world decision making." },
  { name: "Alan Xiao", affiliation: "Boston Consulting Group", description: "Consultant at BCG, focusing on data-driven strategies for pharmaceutical and biotech clients." },
  { name: "Prashanthi Matam", affiliation: "10x Hackathon Judge", description: "Seasoned hackathon judge and mentor with a keen eye for innovative, practical, and impactful projects." },
  { name: "Tejas Nayak", affiliation: "Google", description: "Software Engineer at Google Health, working on applying large-scale AI models to diagnostic challenges." },
  { name: "Vamsidhar Kamanuru", affiliation: "SambaNova AI", description: "Principal ML Engineer developing next-generation AI hardware and software systems for complex data." },
  { name: "Shubham Gade", affiliation: "EnerSys", description: "AI/ML Engineer applying predictive analytics and machine learning to optimize energy systems and battery technology." },
  { name: "Vennela Subramanyam", affiliation: "Google", description: "Product Manager for Google Cloud's AI platform, helping developers build and deploy cutting-edge ML models." },
];

export const sponsors: Sponsor[] = [
  { 
    name: "MetaCTF", 
    tier: 'Platinum' 
  },
  { 
    name: "Coder", 
    tier: 'Platinum' 
  },
  { 
    name: "CodeCrafters", 
    tier: 'Gold' 
  },
  { 
    name: "Generation XYZ", 
    tier: 'Gold' 
  },
  { 
    name: "InterviewBuddy", 
    tier: 'Gold' 
  },
  { 
    name: "UniBee", 
    tier: 'Gold' 
  },
  { 
    name: "Interview Cake", 
    tier: 'Gold' 
  },
  { 
    name: "BalsamIQ", 
    tier: 'Silver' 
  },
  { 
    name: "Art of Problem Solving", 
    tier: 'Silver' 
  },
];

export const judgingCriteria: JudgingCriterion[] = [
    {
      title: "Creativity",
      description: "Is the project a new idea? Does the project provide a new experience or simplify an existing workflow?",
    },
    {
      title: "Practicality",
      description: "Could this idea actually be implemented in real life? Would people be motivated to use it? Is it a functioning solution that can scale in the real world?",
    },
    {
      title: "Presentation",
      description: "Is the project pitched in a convincing and engaging manner? Is the idea presented clearly and in a way that's easy to approach? Does the team include a working demonstration of the project?",
    },
    {
      title: "Technical Complexity",
      description: "Does the project involve complex technologies or intricate systems? How relevant are the solutions your project presents?",
    },
];

export const CHATBOT_CONTEXT = `
You are a friendly and helpful chatbot for Hack4Health. Your goal is to answer questions about the organization and its hackathons. Be concise and encouraging. Use a slightly techy, futuristic tone.

Hack4Health's mission is to empower youth to code innovative solutions that improve health and save lives.

Our inaugural hackathon is 'AI 4 Alzheimer's'.
- Goal: Build AI models for early Alzheimer’s detection.
- Participants: 525 registered.
- Who can participate: Ages 13+. All countries/territories, excluding standard exceptions.
- Total Prize Pool: $184,730.
- Deadline: December 31, 2025 @ 2:00pm PST.
- Requirements: 1 PDF report (2–3 pages) and 1 reproducible notebook (Google Colab / Jupyter).
- Links:
  - Discord: https://discord.com/invite/SZhaZcNh4D
  - Registration: https://forms.gle/bTinPfsdc36DhqLA8
  - Dataset: https://drive.google.com/drive/folders/1jGfWOHuA3kSbOQ4y26TI_ogBtDetw1SW
`;