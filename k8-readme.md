# Kubernetes
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

## Service
    Services are like elastic ip in EC2 world
    
    Each pod is assigned a unique ip address.
    When a pod is destroyed and a new pod is created,
    the newly created pod might have a different IP address
    A service will handle directing traffic to the available pods.

    In service object
        1. NodePort type:
            - ports
                - port needed by other pods to connect to the container running inside this pod
                - targetPort: application running inside the container's port
                - nodePort: the one we care about the most (30000 - 32767) 31515
                access localhost:31515 if using docker deskstop k83
                access minikube-ip:31515 if using minikube k8
        2. ClusterIP
        3. Ingress
        4. LoadBalance

## Deployments
    Maintains a set of identical pods, ensuring that they have the correct configuration and that the right number exist
    - good all environments
    - Imperative
    Do exactly these steps to arrive at this container setup
    - Declarative
    Our container setup should look like this, make it happen

    We are going to use Declarative style
        - update a configuration file leaving the name intact
    # Getting our deployment to update or recreate the pods with the updated image in configuration
    - 
[challenging to convince deployment to recreate pods with updated image in conf](https://github.com/kubernetes/kubernetes/issues/33664)

    use an imperative command to update deployment
    