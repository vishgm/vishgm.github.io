---
title: "Part 1: Banking Institutions and Lending"
date: 2025-06-14T01:00:00
description: Introduction to banking domain - concepts and terminology
draft: false
section: posts
tags:
  - banking
  - introduction
---

Welcome to the new series of - exploring the banking domain!

## Agenda

What we'll be covering in this post:

* What are the different types of banking institutions in India?
* What are the different types of loans offered?
* What are the different systems involved in a typical banking architecture?
* A real-world example of an end-to-end banking journey


## Q) What are the different types of banking institutions in India?

<div class="theme-aware-image">
    <object data="/assets/banking-domain-getting-started-light.svg" type="image/svg+xml" class="light-mode-svg"></object>
    <object data="/assets/banking-domain-getting-started-dark.svg" type="image/svg+xml" class="dark-mode-svg"></object>
</div>

> Above figure shows different lending institutions and their offerings to customers / consumers

| Type                           | Description                                                                       |
| ------------------------------ | --------------------------------------------------------------------------------- |
| **Commercial Banks**           | Large PSU (SBI, BoB) and Private Banks (HDFC, ICICI)                              |
| **NBFCs**                      | Non-Bank Financial Cos (Bajaj Finserv, Tata Capital) – more agile, less regulated |
| **Small Finance Banks (SFBs)** | Focused on underserved + low-ticket customers (Ujjivan, AU, Jana)                 |
| **Co-operative Banks**         | Community-based, rural-focused lending                                            |
| **Digital Lenders / Fintechs** | Razorpay, ZestMoney, MoneyTap - app-based, partnered with NBFCs                   |

---

## Q) What are the different types of loans offered?

Below are a few examples of the different offerings available by banks and NBFCs:

| **Category**                    | **Loan Types**                                               |
| ------------------------------- | ------------------------------------------------------------ |
| **Secured Loans**               | Home Loan, Auto Loan, Loan Against Property, Gold Loan       |
| **Unsecured Loans**             | Personal Loan, Consumer Durable Loan, Credit Card Loan       |
| **Short-term / Digital Credit** | BNPL, Salary Advance, Line of Credit, Micro-loans            |
| **Education Loans**             | Domestic or international, often with guarantor/co-applicant |

----
## Q) What are the different systems involved in a typical banking architecture?

| System                               | Function                                                                |
| ------------------------------------ | ----------------------------------------------------------------------- |
| **LOS (Loan Origination System)**    | Captures loan application, documents, performs eligibility checks, KYC  |
| **Credit Engine / Decision Engine**  | Rule-based + ML scoring system for automated underwriting               |
| **Bureau Gateway**                   | Connects to CIBIL, CRIF, Experian to fetch credit reports               |
| **Fraud Detection Module**           | Performs deduplication, device fingerprinting, fraud scoring            |
| **LMS (Loan Management System)**     | Manages sanctioned loans, EMI schedules, repayments, closures           |
| **Document Management System (DMS)** | Stores PAN, Aadhaar, income proof, bank statements, signed docs         |
| **Collection System**                | Tracks delinquent loans, recovery actions, field visits, legal          |
| **CBS (Core Banking System)**        | Reflects disbursement, repayments, account-level balances               |
| **Analytics Layer**                  | Tracks performance (default rates, vintage curves, early delinquencies) |
| **Mobile App / Customer Portal**     | Enables users to apply, view EMIs, make payments, raise requests        |

---
## Example Scenario
#####  Scenario: A salaried individual applies for a ₹5L personal loan via mobile app.

1. **Application Submitted via App (Front-end)**
	- Triggers request to **LOS**
    - Captures user KYC, income, purpose, PAN, Aadhaar

2. **LOS Integrates with:**
	- **Bureau Gateway** → Pulls CIBIL report (summary, DPD, account info)  
    - **Document Parser/OCR** → Converts payslips, bank PDFs to structured data
    - **Fraud Engine** → Checks device ID, IP mismatch, duplicate PAN

3. **Credit Engine Fires Rules + ML Models**
	- For underwriting - Uses Application Scorecard + Fraud detection models  
    - Outcome: Approve / Decline / Refer-to-credit-manager
    
4. **If Approved → LMS is Triggered**
    - EMI plan created, disbursement initiated 
    - Bank account validated via penny drop / VKYC

5. **CBS Updates Loan Account**
    - Loan account created in core system
    - EMI schedule reflected
    
6. **Post-Disbursement Tracking**
    - Monthly EMI auto-debited or manually paid
    - LMS tracks delinquencies; escalates to Collection system
        
7. **In Case of DPD > 30**
    - Collection System activated (auto reminder → human call → legal escalation)

---

Great! So now you have a brief overview of what are the different lending institutions in India, and their product offerings to consumers. 


In the next post we will cover more on ML use-cases in retail banking. Stay tuned! 





