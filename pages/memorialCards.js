import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';

export default function MemorialCards({ memorials }) {
  const [currentMemorials, setMemorials] = useState(memorials);

  let inputHandler = () => {
    const newFilter = animals.filter((animal) => {
      
    });
    setAnimals(newFilter);
  };
  return (
    <>
      <div className="memorials">
        {currentMemorials?.map((memorial) => (
          <div
            key={memorial._id}
            className="container"
            style={{ maxWidth: "70%", maxHeight: "", marginTop: "20px" }}
          >
            <div className="shadow-lg animal-card card text-center">
              <Image
                alt="gravestone"
                className="card-img-top w-100 d-block animalcardimg"
                src={memorial.imgUrl}
              ></Image>
              {/* <div className="card-body">
                <h4 className="card-title">{animal.name}</h4>
                <Link className="btn btn-primary" to={`/animal/${animal._id}`}>
                  Adopt Me
                </Link>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

