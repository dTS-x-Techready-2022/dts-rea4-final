import { useContext, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import { signingIn } from "../../utils/firebase/signin";
import ProfilePicture from "../../assets/img/ProfilePicture.png";
// import "../../assets/css/mdb.min.css";
import "../../assets/css/mdb.dark.min.css";

export const SignIn = () => {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await signingIn(email, password);
    setLoading(false);
    if (!response.message) {
      setUser(response.accessToken);
    } else {
      const { message } = response;
      switch (true) {
        case message.includes("auth/user-not-found"):
          toast.error("User not found.");
          break;
        case message.includes("auth/wrong-password"):
          toast.error("Wrong Password");
          break;
        default:
          toast.error("Something went wrong.");
      }
    }
  };

  return (
    <section className="vh-100">
      <MDBContainer
        fluid
        className="h-custom"
        style={{
          paddingRight: "calc(var(--bs-gutter-x) * .5)",
          paddingLeft: "calc(var(--bs-gutter-x) * .5)",
        }}
      >
        <MDBRow>
          <MDBCol
            lg="6"
            xl="6"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0) 75.00%, rgba(48, 48, 48, 1) 100%), url("${ProfilePicture}")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></MDBCol>
          <MDBCol md="12" lg="6" xl="6" className="vh-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <form onSubmit={signIn}>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">LOGIN</p>
                </div>

                <MDBInput
                  type="email"
                  id="email"
                  label="EMAIL"
                  placeholder="ENTER A VALID EMAIL"
                  size="lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-4"
                  required={true}
                />

                <MDBInput
                  type="password"
                  id="email"
                  label="PASSWORD"
                  placeholder="ENTER PASSWORD"
                  size="lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mb-3"
                  required={true}
                />

                {/* <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div> */}

                <div className="text-center text-lg-start mt-4 pt-2 d-grid gap-2">
                  <MDBBtn
                    type="submit"
                    color="danger"
                    size="lg"
                    style={{
                      paddingLeft: "2.5rem",
                      paddingRight: "2.5rem",
                    }}
                    disabled={loading}
                  >
                    <MDBSpinner
                      size="sm"
                      role="status"
                      tag="span"
                      className={`me-2 ${loading ? "" : "d-none"}`}
                    />
                    LOGIN
                  </MDBBtn>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?&nbsp;
                    <a href="/sign-up" className="link-danger">
                      REGISTER
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <ToastContainer position="bottom-right" theme="dark" />
    </section>
  );
};
