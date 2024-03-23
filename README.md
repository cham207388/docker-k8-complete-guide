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


### Multiple containers 

## volumes in docker compose
    volumes:
      - /app/node_modules # don't override
      - ./server:/app # point to the server folder

### Changes
    change ports listening on 5000 to 5001
    
### nginx images
- default.conf helps with routing

## .travis.yaml at 
    https://raw.githubusercontent.com/StephenGrider/multi-docker/master/.travis.yml
    I'll be using Github Actions instead

### multi-deploy.yaml
1. I need to create an application and environment
    multi-gh, multi-gh-env