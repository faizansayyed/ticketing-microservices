
# Microservices with Node JS and React

## Build, deploy, and scale an E-Commerce app using Microservices built with Node, React, Docker and Kubernetes

<br/>

### [My Updatable Version of the final project from this course](https://github.com/webmakaka/Microservices-with-Node-JS-and-React-Improved)

<hr/>

<br/>
## How to run apps

I am working in ubuntu linux 18.04.

Minikube, Kubectl, Docker, Skaffold should be installed.

<br/>

### Skaffold installation

    $ curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-linux-amd64

    $ chmod +x skaffold
    $ sudo mv skaffold /usr/local/bin

<br/>

## How to run the final app

<br/>

    $ kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf

    // <STRIPE_SECRET_KEY> from stripe.com
    $ kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=<STRIPE_SECRET_KEY>

<br/>

    $ cd 22_Back_to_the_Client
    $ cd skaffold

    $ docker login

Need to update my docker image name webmakaka/grider-ms-app2\*\*\* to your in scripts from skaffold and k8s folders.

    $ skaffold dev

<br/>

    $ kubectl get pods
    NAME                                           READY   STATUS    RESTARTS   AGE
    auth-deployment-57d779fd9-48s9v                1/1     Running   0          24s
    auth-mongo-deployment-579c6dbd8f-69jbv         1/1     Running   0          23s
    client-deployment-f5cfc5b8d-k2lxp              1/1     Running   0          23s
    expiration-deployment-6bb67856b4-jkkbl         1/1     Running   0          23s
    expiration-redis-deployment-5b58b869fd-hmq5f   1/1     Running   0          23s
    nats-deployment-76479997ff-lpss8               1/1     Running   0          23s
    orders-deployment-5c68dff5c9-dq6hl             1/1     Running   0          23s
    orders-mongo-deployment-6896c8b9-42vpd         1/1     Running   0          23s
    payments-deployment-68d4c7f4ff-nfsxb           1/1     Running   0          23s
    payments-mongo-deployment-c89cb4fc7-4ggn7      1/1     Running   0          23s
    tickets-deployment-7b746fff9-tvhzw             1/1     Running   0          23s
    tickets-mongo-deployment-54f456bd95-hv9fb      1/1     Running   0          22s

<br/>

chrome browser --> https://ticketing.dev/

<br/>

type: **thisisunsafe** in the browser window with security warning.
<br/>

//also integrated to mac
