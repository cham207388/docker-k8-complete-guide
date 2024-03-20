# Getting Started with Create React App

### Override CMD
```
docker run -it container-id npm run test
```
## attach to the running container that has live updates
## for this command to also have live updates. In this case, test
```
docker exec -it container-id npm run test
```

    docker run baicham/test npm run test -- --coverage
    shows test coverage

    docker run -e CI=true baicham/test npm run test
    runs and exits. Good for CI pipelines

## Elastic Beanstalk
Works well when running one container at a time