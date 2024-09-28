"use client";
import { X } from "lucide-react";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Teachers({ searchQuery, param }) {
  const teachers = [
    {
      name: "Jayapradeep",
      course: "Machine Learning",
      language: "Python Programming",
      img: "https://i.pinimg.com/550x/f5/3e/c6/f53ec61db2e49c82b057554cb4a0cb91.jpg",
      description:
        "Dr. Jayapradeep is a renowned professor in the field of Artificial Intelligence, particularly specializing in Machine Learning. With a strong foundation in Python, he has been instrumental in developing AI-driven solutions and guiding students through complex machine learning algorithms. His research work often involves leveraging Python's powerful libraries to solve real-world problems, making him a highly sought-after mentor in the CSE AI department.",
      interest: [1, 1],
    },
    {
      name: "Anita Desai",
      course: "Machine Learning",
      language: "Java Development",
      img: "https://i.pinimg.com/originals/8c/6a/78/8c6a785483ee3e92d8163f2fac2cc567.jpg",
      description:
        "Dr. Anita Desai, a specialist in Electronics and Communication Engineering, has a keen interest in applying Machine Learning techniques to signal processing. Her expertise in Java programming enables her to implement efficient and scalable machine learning models, especially in systems that require real-time processing. Dr. Desai's interdisciplinary approach bridges the gap between hardware and software, making her an invaluable asset to the ECE department.",
      interest: [1, 2],
    },
    {
      name: "Raghav Kumar",
      course: "DSA",
      language: "Python Programming",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCd2w0KauaYDeNTgVprggcdDuk2sYvSuiZt8tf8qEATUyft7xl1VCdLqnKqSTvaS6cQhk&usqp=CAU",
      description:
        "Dr. Raghav Kumar is a seasoned expert in Mechanical Engineering with a deep understanding of Data Structures and Algorithms (DSA). His proficiency in Python allows him to design and optimize algorithms that are critical for solving complex mechanical engineering problems. Dr. Kumar's research focuses on applying DSA principles to improve the efficiency of mechanical systems, making him a prominent figure in the Mechanical Engineering department.",
      interest: [2, 1],
    },
    {
      name: "Priya Sharma",
      course: "DSA",
      language: "Java Development",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZGtVptuCIfsx1_j3luFEHezym4GRwxsn3Q&s",
      description:
        "Dr. Priya Sharma is a data science expert with a robust background in Data Structures and Algorithms (DSA) and Java programming. She has a deep understanding of machine learning algorithms and big data analytics, with a particular focus on optimizing data processing using efficient DSA techniques in Java. Dr. Sharma's work is highly regarded in the Data Science department, where she mentors students in developing scalable data-driven applications.",
      interest: [2, 2],
    },
  ];

  const interestParam = param.get("interest");
  const fieldParam = param.get("field");

  const showRecommendations = interestParam && fieldParam;

  const recommendationfilteredTeachers = showRecommendations
    ? teachers.filter((teacher) => {
        const matchesInterest = teacher.interest[0] == interestParam;
        const matchesField = teacher.interest[1] == fieldParam;
        return matchesInterest && matchesField;
      })
    : [];

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex gap-5 flex-wrap justify-evenly mt-10">
      {showRecommendations && recommendationfilteredTeachers.length > 0 && (
        <div className="w-full">
          <h1 className="text-center w-full">Recommended Teachers</h1>
          <div className="flex gap-5 flex-wrap justify-evenly mt-10">
            {recommendationfilteredTeachers.map((items, idx) => (
              <Popup
                key={idx}
                trigger={
                  <div className="w-max border rounded-lg border-gray-400 cursor-pointer hover:scale-[1.10] hover:transition-all hover:duration-500 hover:ease-in-out hover:shadow-2xl shadow-grey-500/150">
                    <main className="overflow-hidden">
                      <img
                        className="rounded-lg border m-2"
                        src={items.img}
                        width={200}
                        alt={`Image of ${items.name}`}
                      />
                    </main>
                    <div>
                      <span className="flex justify-center my-2 font-bold">
                        <span>DR.</span>
                        <span className="text-center">{items.name}</span>
                      </span>
                      <h3 className="text-center pb-2">{items.course}</h3>
                      <h3 className="text-center pb-2">({items.language})</h3>
                    </div>
                  </div>
                }
                nested
                modal
              >
                {(close) => (
                  <div className="modal px-5">
                    <button className="close float-right" onClick={close}>
                      <X />
                    </button>
                    <div className="header">Details of {items.name}</div>
                    <div className="content">
                      <p className="">{items.description}</p>
                    </div>
                  </div>
                )}
              </Popup>
            ))}
          </div>
        </div>
      )}
      {filteredTeachers.length === 0 ? (
        <h1 className="text-center w-full">No Faculty found</h1>
      ) : (
        <div className="w-full mb-20">
          <h1 className="text-center w-full">All Faculty</h1>
          <div className="flex gap-5 flex-wrap justify-evenly mt-10">
            {filteredTeachers.map((items, idx) => (
              <Popup
                key={idx}
                trigger={
                  <div className="w-max border rounded-lg border-gray-400 cursor-pointer hover:scale-[1.10] hover:transition-all hover:duration-500 hover:ease-in-out hover:shadow-2xl shadow-grey-500/150">
                    <main className="overflow-hidden">
                      <img
                        className="rounded-lg border m-2"
                        src={items.img}
                        width={200}
                        alt={`Image of ${items.name}`}
                      />
                    </main>
                    <div>
                      <span className="flex justify-center my-2 font-bold">
                        <span>DR.</span>
                        <span className="text-center">{items.name}</span>
                      </span>
                      <h3 className="text-center pb-2">{items.course}</h3>
                      <h3 className="text-center pb-2">({items.language})</h3>
                    </div>
                  </div>
                }
                nested
                modal
              >
                {(close) => (
                  <div className="modal px-5">
                    <button className="close float-right" onClick={close}>
                      <X />
                    </button>
                    <div className="header">Details of {items.name}</div>
                    <div className="content">
                      <p className="">{items.description}</p>
                    </div>
                  </div>
                )}
              </Popup>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Teachers;
