build:
	$(eval NODE_VERSION=$(shell cat .node-version))
	docker-compose build --no-cache --build-arg NODE_VERSION=${NODE_VERSION}