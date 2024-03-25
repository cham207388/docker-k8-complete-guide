## Kubernetes
A system that deploy containerized applications

- Master
    Works constantly works to make sure that our desired state is met
- Nodes
    Work for the master. The machines the applications are deployed
- Pods
    The smallest unit where containers are run. Nodes contain pod(s)
- Deployments
    Makes our lives easier with pods
- Service
    Responsible for networking
- ReplicaSets

### In service object
    NodePort type:
      - ports
        - port needed by other pods to connect to the container running inside this pod
        - targetPort: application running inside the container's port
        - nodePort: the one we care about the most (30000 - 32767) 31515
        access localhost:31515 if using docker deskstop k83
        access minikube-ip:31515 if using minikube k83
    ClusterIP
    Ingress
    LoadBalance

### Deployments
    - Imperative
    Do exactly these steps to arrive at this container setup
    - Declarative
    Our container setup should look like this, make it happen
