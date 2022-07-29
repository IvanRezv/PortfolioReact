SHELL = /bin/sh

.DEFAULT_GOAL := help

include .env

# This will output the help for each task.
help: ## Show this help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
	@echo "\n  Allowed for overriding next properties:\n\n\
		Usage example:\n\
	    	make up"

# --- [ Main ] --------------------------------------------------------------------------------------------------

init: npm-i npm-build  ## init project
dev: npm-i npm-train

# --- [ Front ] -------------------------------------------------------------------------------------------------
npm-train: ## install husky
	npm start

npm-i: ## install client deps
	npm i -P

npm-build: ## run build client
	npm run build
