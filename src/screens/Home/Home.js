import React from "react";
import './Home.css'; // Import your CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Decentralized Resume Wallet Project</h1>
      </header>
      
      <section className="project-overview">
        <h2>Project Overview</h2>
        <p>
          Our project aims to provide a decentralized resume wallet using blockchain technology. Users can convert their resumes into NFTs, own them, and easily share and verify them using a QR code when needed. This builds a more secure and trustworthy resume management system.
        </p>
      </section>

      <section className="project-problems">
        <h2>Project Problems</h2>
        <ul>
          <li>Centralized Resume Management Systems: Existing resume platforms manage data on centralized servers, posing risks of data leaks and tampering.</li>
          <li>Difficulty in Verification: Employers find it challenging to verify the authenticity of resumes, which can be time-consuming and costly.</li>
          <li>Complex Onboarding Process: The process of writing and managing resumes is complicated and inconvenient.</li>
          <li>High Fees: Blockchain-based services often incur high gas fees, which can be a burden on users.</li>
        </ul>
      </section>

      <section className="project-solutions">
        <h2>Project Solutions</h2>
        <ol>
          <li>
            <strong>Convenient Onboarding and Enhanced Security with Magic:</strong>
            <ul>
              <li>Social Login: Utilizing Magic to enable easy signup and login through social login.</li>
              <li>Authentication and Key Management: Using Magic to authenticate GitHub, LinkedIn, Telegram IDs, etc., and manage user login keys securely.</li>
            </ul>
          </li>
          <li>
            <strong>Fee Reduction with SAFE and ERC-4337:</strong>
            <ul>
              <li>Gas-Free Resume Creation: Utilizing SAFE with ERC-4337 to ensure that creating resume NFT ID cards incurs no gas fees.</li>
              <li>Gas-Free Sharing: Ensuring that sharing resumes also incurs no gas fees, reducing user burden.</li>
            </ul>
          </li>
          <li>
            <strong>Integration with Web3 Events:</strong>
            <ul>
              <li>Event Badge Provision: Partnering with hackathons and web3 events to allow users to add badges to their resume NFTs. For example, if a user wins a hackathon, the event organizers award a badge that adds credibility to the resume.</li>
            </ul>
          </li>
          <li>
            <strong>Decentralized Data Management:</strong>
            <ul>
              <li>Issuing resumes as NFTs stored on the blockchain to enhance data reliability and security.</li>
              <li>Enabling easy sharing and instant verification of resumes via QR codes.</li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="project-advantages">
        <h2>Project Advantages</h2>
        <ul>
          <li>High Security: Protecting resume data using blockchain technology.</li>
          <li>Reliability: NFTs are immutable, making it easy to verify the authenticity of resumes.</li>
          <li>Convenient Onboarding: Supporting easy social login and wallet creation with Magic.</li>
          <li>Fee Reduction: Using SAFE and ERC-4337 to eliminate gas fees for resume creation and sharing.</li>
          <li>Diverse Integration Services: Providing additional authentication through partnerships with web3 events and hackathons.</li>
        </ul>
      </section>

      <section className="project-key-points">
        <h2>Project Key Points</h2>
        <ul>
          <li>User Authentication and Key Management with Magic: Easy social login and enhanced security.</li>
          <li>SAFE and ERC-4337: Reducing fees to minimize user burden.</li>
          <li>Event Badge Integration: Providing additional authentication through partnerships with hackathons and web3 events.</li>
          <li>Decentralized Data Management: Ensuring data security and reliability by storing resumes on the blockchain.</li>
          <li>QR Code-Based Verification: Facilitating easy sharing and verification of resumes.</li>
        </ul>
      </section>

      <section className="project-detailed-explanation">
        <h2>Detailed Explanation</h2>
        <p>
          Our project integrates Magic and SAFE technologies to allow users to easily create resumes, store them on the blockchain as NFTs, and share them via QR codes. Additionally, we partner with hackathons and web3 events to provide users with badges that can be added to their resumes, enhancing credibility. These resume NFTs are securely stored and can be verified at any time.
        </p>
        <p>
          This project addresses resume management issues in the web3 ecosystem, offering a better onboarding experience, enhanced security, and a decentralized method for managing resumes.
        </p>
      </section>
    </div>
  );
};

export default Home;
