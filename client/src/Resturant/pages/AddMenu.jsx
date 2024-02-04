import React, { useState } from "react";
import "../assets/style/resturantStyle.css";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../config/firebaseConfig";

export const AddMenu = () => {
  const [files, setFiles] = useState([]);
  const [menu, setMenu] = useState({});
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

  return (
    <>
      <section className="restu-bg">
        <div className="container">
          <div className="container-fluid  menu-form">
            <div className="row">
              <h3 className="text-center" style={{ color: "white" }}>
                Add Menu
              </h3>
              <br />
              <br />
              <div className="col-sm-2"></div>
              <div className="col-sm-8">
                <div className="shadow rounded p-">
                  <input
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
                  <div className="text-center">
                    <button
                      className="btn btn-warning rounded-0 border-0"
                      onClick={handleUpload}
                    >
                      Upload
                    </button>
                  </div>
                  <br />
                  <input
                    type="text"
                    className="form-control rounded-0"
                    placeholder="Menu Name"
                  />

                  <br />
                  <br />

                  <div className="text-center">
                    <button className="btn btn-primary rounded-0 border-0 menu-submit">
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
