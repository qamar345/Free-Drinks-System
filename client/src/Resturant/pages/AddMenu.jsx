import React, { useEffect, useState } from "react";
import "../assets/style/resturantStyle.css";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../config/firebaseConfig";
import Aos from "aos";

export const AddMenu = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [files, setFiles] = useState([]);
  const [menu, setMenu] = useState({
    menuId: Math.floor(Math.random() * 9999),
  });
  const [percent, setPercent] = useState(0);
  const [urls, setUrls] = useState([]);

  const handleImageSubmit = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setFiles((prev) => [...prev, newImage]);
    }
  };

  const handleUpload = () => {
    const promises = [];
    files.map((image) => {
      const storageRef = ref(storage, `/files/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          // upload progress
          setPercent(percent);
        },
        (err) => {
          console.log(err);
        },

        async () => {
          // download url
          await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setUrls((prev) => [...prev, url]);
          });
        }
      );
    });

    Promise.all(promises)
      .then(() => {
        alert("Images Uploaded Successfuly");
        console.log(urls);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInput = (e) => {
    setMenu({ ...menu, [e.target.name]: e.target.value });
  };

  const SubmitMenu = () => {
    setMenu({ ...menu, image: urls });

    if (menu.title === undefined || menu.image === undefined) {
      alert("Please fill empty fields firts!!!");
    } else {
      console.log(menu);
    }
  };

  return (
    <>
      <section className="restu-bg">
        <div className="container">
          <div className="container-fluid  menu-form">
            <div className="row">
              <h3
                data-aos="fade-down"
                data-aos-duration="3000"
                className="text-center"
                style={{ color: "white" }}
              >
                Add Menu
              </h3>
              <br />
              <br />
              <div className="col-sm-2"></div>
              <div className="col-sm-8">
                <div className="shadow rounded p-">
                  <input
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    type="file"
                    className="form-control rounded-0"
                    multiple
                    accept="image/*"
                    onChange={handleImageSubmit}
                  />
                  <br />
                  <div className="text-center">
                    {urls.map((img) => (
                      <>
                        <img
                          src={
                            img ||
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Square_200x200.svg/768px-Square_200x200.svg.png"
                          }
                          alt=""
                          width={100}
                          height={100}
                          className="p-3"
                        />
                      </>
                    ))}
                  </div>

                  <br />
                  {percent !== 0 ? (
                    <div className="progress rounded-0">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        aria-valuenow={percent}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: percent + "%" }}
                      >
                        {percent}%
                      </div>
                    </div>
                  ) : (
                    " "
                  )}
                  <br />
                  <div
                    className="text-center"
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                  >
                    <button
                      className="btn btn-warning rounded-0 border-0"
                      onClick={handleUpload}
                    >
                      Upload
                    </button>
                  </div>
                  <br />
                  <input
                    data-aos="fade-left"
                    data-aos-duration="3000"
                    name="title"
                    type="text"
                    className="form-control rounded-0"
                    placeholder="Menu Name"
                    onChange={handleInput}
                  />

                  <br />
                  <br />

                  <div
                    className="text-center"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                  >
                    <button
                      className="btn btn-primary rounded-0 border-0 menu-submit"
                      onClick={SubmitMenu}
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-2"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
