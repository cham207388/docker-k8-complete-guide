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


### EB cli
aws configure --profile gha-course
access_key
secret_key

## execute

1. Execute ```eb init --profile gha-course``` \
follow the prompts and complete, this will create a .elasticbeanstalk folder with config file
2. Create a Procfile with the following info \
   web: npm run start -- -p $PORT
3. For this project, the .next folder contains build files \
    so make sure to add a .ebignore file to override the .ignore file from eb perspective

