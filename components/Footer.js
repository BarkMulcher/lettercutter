import React from "react";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      className="page-footer font-small blue pt-4"
    >
      <div id="icons" className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-4 mt-md-0 mt-3"></div>
          {/* <div className="col-md-1 mb-md-0 mb-2">
            <a
              href="https://github.com/BarkMulcher"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="footer-icon"
                // src={require("../img/github.png")}
                alt="github icon"
              ></Image>
            </a>
          </div> */}
          {/* <div className="col-md-1 mb-md-0 mb-2">
            <a
              href="https://nhspca.org/adoptable-animals/?gclid=CjwKCAiA-dCcBhBQEiwAeWidtfZ4rYcSFtCt4QluuhXX4oZZDgLMSluQxVEtrTtXcjrcBHaXKL2cBBoCFssQAvD_BwE"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="footer-icon"
                // src={require("../img/dog-seating.png")}
                alt="nhpca logo"
              ></Image>
            </a>
          </div> */}
          <div className="col align-self-center">
            <a
              href="https://barkmulcher.github.io/lettercutter"
            ><Image
              className="footer-icon"
              src={require("../public/images/headerImg.webp")}
              alt="coffinanddaughter"
            ></Image>
            </a>
            <div className="italic footer-copyright">© 2022 Copyright</div>
          </div>
        </div>
      </div>

    </footer>
  );
}
