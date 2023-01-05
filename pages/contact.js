import React from "react";
import { Button } from "react-bootstrap";
import Image from 'next/image';
import contactImg from '../public/images/contactImg.webp';

export default function Contact() {
  return (
    <div>
      <title>Contact</title>
      <meta name="keywords" content="memorial, memorials, headstone" />
      <div className="shadow-lg card bg-light mb-3">
        <h1 className="card-header">Contact Us</h1>
        <Image
        alt='douglas and sigrid'
        className="card-img fluid"
        src={contactImg}
        width={150}
        height={150}
        style={{
          maxWidth: '20%',
          height: 'auto',
        }}
        priority
        />
        <div className="card-body">
          <p>We would be happy to meet or speak to you about your personal headstone,
            memorial, plaque, architectural wall, or building inscription project.</p>
        </div>
        <div className="card-footer">
          <Button
            className="shadow-lg rounded-0"
            style={{ marginLeft: "20px" }}
            href='mailto:douglas.coffin@lettercutter.com'
            variant='outline-secondary'
          >Contact Us</Button>
        </div>
      </div>
    </div>
  );
}