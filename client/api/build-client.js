import axios from "axios";

const buildClient = ({ req }) => {
  try {
    if (typeof window === "undefined") {
      // We are on the server
      console.log("here in undefined ============",req.headers)
      return axios.create({
        baseURL:
          "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
        headers: req.headers,
      });
    } else {
      // We must be on the browser
      return axios.create({
        baseUrl: "/",
      });
    }
  } catch (error) {
    console.log({ error })
  }

};

export default buildClient;
