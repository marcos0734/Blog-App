let server = require("../index");
// let chaiHttp = require("chai-http");
var chai = require("chai");
var task = require('../validation')
//const res = require("express/lib/response");

chai.should();
// chai.use(chaiHttp);

describe("Task API", () => {
  //Test The Get resourceLimits
  describe("User Login API", () => {
    it("If invalid or empty fields provided return validation error", (done) => {
      const data = {
        email: "",
        password: "123456789",
      };
      chai
        // .request(server)
        .post("/user/login")
        .send(data)
        .end((err, res) => {
          res.should.have.status(400);
          res.should.be.a("object");
          res.body.should.have.property("status").eq(400);
          res.body.should.have
            .property("message")
            .eq("All fields are required");
          done();
        });
    });

    // it("If not a registered user provided return invalid message ", (done) => {
    //   const data = {
    //     email: "seven7@gmail.com",
    //     password: "seven7",
    //   };
    //   chai
    //     .request(server)
    //     .post("/user/login")
    //     .send(data)
    //     .end((err, res) => {
    //       res.should.have.status(401);
    //       res.should.be.a("object");
    //       res.body.should.have.property("status").eq(401);
    //       res.body.should.have
    //         .property("message")
    //         .eq("You are not registered user");
    //       done();
    //     });
    // });

    // it("If invalid user password provided return invalid message ", (done) => {
    //   const data = {
    //     email: "seven123@gmail.com",
    //     password: "000777",
    //   };
    //   chai
    //     .request(server)
    //     .post("/user/login")
    //     .send(data)
    //     .end((err, res) => {
    //       res.should.have.status(401);
    //       res.should.be.a("object");
    //       res.body.should.have.property("status").eq(401);
    //       res.body.should.have.property("message").eq("Invalid Password");
    //       done();
    //     });
    // });

    // it("if valid data provided return success login message :", (done) => {
    //   const data = {
    //     email: "seven7@gmail.com",
    //     password: "123456789",
    //   };
    //   chai
    //     .request(server)
    //     .post("/user/login")
    //     .send(data)
    //     .end((err, res) => {
    //       res.should.have.status(200);
    //       res.should.be.a("object");
    //       res.body.should.have.property("status").eq("Success");
    //       res.body.should.have.property("message").eq("Login Success");
    //       res.body.should.have.property("token");
    //       done();
    //     });
    // });
  });
});

