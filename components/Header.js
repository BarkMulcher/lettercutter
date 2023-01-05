import React from 'react';
import Image from 'next/image';

export default function Header() {
    return (
        <div>
    <Image
                className="header-icon"
                src={require("../public/images/headerImg.webp")}
                alt="coffinanddaughter"
              ></Image>
        </div>
    )
}