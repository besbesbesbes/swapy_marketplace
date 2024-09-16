
# Software Requirements Specification (SRS) for Swapy Marketplace

## 1. Introduction

### 1.1 Purpose
The purpose of this document is to specify the functional and non-functional requirements for the Swapy Marketplace. Swapy is a web-based platform that allows users to trade or swap items (referred to as "assets") with other users. The system will facilitate user registration, asset management, offer creation, and direct messaging, as well as shipping (only status) and rating user functionalities.

### 1.2 Scope
Swapy Marketplace will provide users with the ability to create and manage offers for swapping assets, communicate directly within offers, handle shipping (only status), and rate other users based on transactions. This document outlines the required features, functionality, and behavior of the system.

### 1.3 Definitions
- **Swaper**: The user receiving an offer.
- **Offeror**: The user initiating an offer to trade assets.
- **Assets**: Items owned by users that can be traded.

## 2. Overall Description

### 2.1 Product Perspective
Swapy is an eCommerce-like platform but focuses on the concept of swapping assets between users. The web app will operate independently, with no need for third-party services other than basic infrastructure such as cloud hosting, storage, and messaging systems.

### 2.2 User Needs
- Users need to register an account to create offers, trade assets, and manage shipping.
- Users need to manage their assets and create, edit, or delete assets in the system.
- Users need to initiate, revise, or cancel offers and be able to communicate directly with other users involved in a transaction.

### 2.3 Assumptions and Dependencies
- The platform will run on standard web browsers (Chrome (mainly), Firefox, etc.).
- The platform will use a database for managing users, assets, and offers.
- Messaging within offers will be stored securely and available for reference.

## 3. Functional Requirements

### 3.1 User Management
- **FR1**: Users must be able to register an account, log in, and edit their profile.
- **FR2**: The system will provide secure authentication and authorization.
  
### 3.2 Asset Management
- **FR3**: Users can create, edit, and delete assets.
- **FR4**: Each asset should have a title, description, condition (new, used, mint, etc.), and optional images.

### 3.3 Offer Creation and Management
- **FR5**: Users can create new offers by selecting assets from their own list and from another user’s list of assets.
- **FR6**: Users can add or remove selected assets from both their own and the other user’s list of assets.
- **FR7**: Users can revise or cancel an offer. Both Swaper and Offeror must have the ability to revise the offer.
- **FR8**: Users can accept offers from either party, finalizing the transaction.
  
### 3.4 Messaging System
- **FR9**: Direct messaging between Swaper and Offeror must be available for each offer.
- **FR10**: The app will auto-generate messages when an offer is revised or when an asset involved in the offer is changed.
  
### 3.5 Shipping Management
- **FR11**: Users can view the list of items to ship and items they are expected to receive.
- **FR12**: Users can mark items as shipped and confirm the receipt of items.
  
### 3.6 Ratings and Reviews
- **FR13**: After a transaction is complete, users must be able to rate the other party.
- **FR14**: Users should leave a rating (1–5 stars) and optionally provide written feedback.

## 4. Non-Functional Requirements

### 4.1 Performance
- **NFR1**: The system must handle up to 1000 simultaneous users without noticeable performance degradation.
- **NFR2**: Page load time should not exceed 3 seconds under normal load.

### 4.2 Security
- **NFR3**: All sensitive data (passwords, personal info) must be encrypted.
- **NFR4**: The system must implement secure authentication protocols.
  
### 4.3 Usability
- **NFR5**: The user interface should be intuitive and responsive, with support for both desktop and mobile devices.
  
### 4.4 Reliability
- **NFR6**: The system should have 99.9% uptime.
- **NFR7**: In the event of a failure, the system should recover all user data without data loss.

## 5. System Architecture

### 5.1 Frontend
- The frontend will be developed using React and Tailwind CSS for a responsive and modern UI.
  
### 5.2 Backend
- The backend will use Node.js and Express to manage APIs and database interactions.
  
### 5.3 Database
- The system will store data in a relational database (MySQL), including users, assets, offers, messages, and shipping details.

## 6. Acceptance Criteria

- **AC1**: Users must be able to register, log in, and manage their profiles.
- **AC2**: Users must be able to create, revise, and delete assets and offers.
- **AC3**: The messaging system should automatically generate messages based on revisions to offers or assets.
- **AC4**: Users must be able to mark items as shipped, receive items, and rate the other user after the transaction.
