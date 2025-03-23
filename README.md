# GigNation - IIT Roorkee

## 🚀 Overview

**GigNation** is a web-based freelancing platform designed to revolutionize how freelancers and employers collaborate by addressing critical challenges in the payment process. Built as part of the **Cognizance 2025 Hackathon**, GigNation ensures **transparent, secure, and milestone-based payments** while simplifying work verification and dispute resolution.

Freelancers often face trust issues, delayed payments, and disputes due to inefficient systems, while employers struggle with verifying work quality and ensuring fair transactions. GigNation bridges this gap by providing a **secure and user-friendly platform** that fosters trust and efficiency between both parties.o gain work experience, earn income, and develop skills while providing organizations with access to talented individuals.

## 🌟 Features

- **Gig Posting:** Users can post gigs with descriptions, required skills, payment details, and deadlines.
- **Gig Discovery:** Students can search for gigs based on their skills and interests.
- **Application System:** A simple process for students to apply for gigs.
- **User Profiles:** Profiles showcasing skills, experience, and ratings.
- **Communication:** Built-in messaging for easy interaction between gig posters and applicants.
- **Review System:** Allows users to rate and review completed gigs.

- 
### Key Objectives

1. **Transparent Payments:** Milestone-based payment system ensures funds are securely held (e.g., escrow) until deliverables are verified.
2. **Work Verification:** Streamlined submission and approval processes for freelancers and employers to track progress efficiently.
3. **Dispute Resolution:** A simple mechanism to resolve conflicts fairly with admin intervention when necessary.
4. **Security & Reliability:** Ensures encrypted transactions, data privacy, and fraud prevention for all users.

## ⚙️ Technologies Used

- **Frontend:** Next.js
- **Backend:** Next.js API and Convex 
- **Database:** Convex
- **Payment Processing:** Stripe
- **Authentication:** JWT (JSON Web Tokens)
- **Version Control:** Git, GitHub

## 📦 Setup and Installation

1. Clone the repository:
  ```
  git clone https://github.com/jyotirjoshi/GigNation_IIT_roorkee
  ```
2. Navigate to the project directory:
   ```
   cd GigNation_IIT_roorkee
   ```
3. Install dependencies:
  ```
  cd GigNation_IIT_roorkee && npm install
  ```

4. Configure environment variables:
- Create `.env` files 
  ```
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_aGFwcHktZ3VwcHktMTUuY2xlcmsuYWNjb3VudHMuZGV2JA
  CLERK_SECRET_KEY=sk_test_M1f5uEGIJtQuVeBOEyKGFwtmqZ3BDOpzGDrisQegOf
  DOMAIN = https://happy-guppy-15.clerk.accounts.dev
  
  NEXT_PUBLIC_HOSTING_URL=https://enduring-crane-631.convex.cloud
  ```

5. Run the app
  ```
  npm run dev
  ```



## 📄 License

This project is licensed under the MIT License.
