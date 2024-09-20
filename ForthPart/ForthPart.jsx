import React from 'react';
import './ForthPart.css';

export default function H_imgPart() {
    return (
        <div>
            <div className="container">
                <div className="row mb-5">
                    <div className="col">
                        <h2 className="recent-title" style={{ color: "#2f2f2f",textAlign:"center",marginTop:"20px" }}>Team Members</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 H_img">
                        <div className="overlay-container2">
                            <img
                                src="https://victorthemes.com/themes/seese/wp-content/uploads/2016/11/team_1.jpg"
                                alt="Blog Post"
                                className="img-fluid"

                            />
                            <div className="overlay-text2">
                            <h5>Hello People</h5>
                                <p>Berlin is a Bacon ipsum dolor amet cupim beef ribs short ribs ham hock beef drumstick elits bacone short loin ribeye.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 H_img">
                        <div className="overlay-container2">
                            <img
                                src="https://victorthemes.com/themes/seese/wp-content/uploads/2016/11/team_2.jpg"
                                alt="Blog Post"
                                className="img-fluid"

                            />
                            <div className="overlay-text2">
                                <h5>Hello People</h5>
                                <p>Berlin is a Bacon ipsum dolor amet cupim beef ribs short ribs ham hock beef drumstick elits bacone short loin ribeye.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="overlay-container2">
                            <img
                                src="https://victorthemes.com/themes/seese/wp-content/uploads/2016/11/team_3.jpg"
                                alt="Blog Post"
                                className="img-fluid"

                            />
                            <div className="overlay-text2">
                            <h5>Hello People</h5>
                                <p>Berlin is a Bacon ipsum dolor amet cupim beef ribs short ribs ham hock beef drumstick elits bacone short loin ribeye.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
